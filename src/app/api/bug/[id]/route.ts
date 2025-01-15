import { ResponseHandler } from "@/lib/responseHandler";
import { calculateScore } from "../route";
import { prisma } from "@/constants/variables";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const bug = await prisma.bug.findFirstOrThrow({
      where: { id },
    });
    return ResponseHandler.get(bug);
  } catch (error) {
    return ResponseHandler.serverError((error as Error)?.message);
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();
    const { ...updateData } = body;
    const id = (await params).id;

    const bugId = await prisma.bug.findFirstOrThrow({
      where: { id },
    });

    if (!bugId) {
      return ResponseHandler.InvalidData("Bug not found");
    }

    // Hitung ulang skor jika data yang relevan diupdate
    if (
      updateData.severity !== undefined ||
      updateData.waktu_perbaikan !== undefined ||
      updateData.risiko_perbaikan !== undefined ||
      updateData.prioritas_stakeholder !== undefined ||
      updateData.usia_bug !== undefined ||
      updateData.ketersediaan_sdm !== undefined
    ) {
      updateData.skor = calculateScore({
        severity: updateData.severity ?? bugId.severity,
        waktu_perbaikan: updateData.waktu_perbaikan ?? bugId.waktu_perbaikan,
        risiko_perbaikan: updateData.risiko_perbaikan ?? bugId.risiko_perbaikan,
        prioritas_stakeholder:
          updateData.prioritas_stakeholder ?? bugId.prioritas_stakeholder,
        usia_bug: updateData.usia_bug ?? bugId.usia_bug,
        ketersediaan_sdm: updateData.ketersediaan_sdm ?? bugId.ketersediaan_sdm,
      });
    }

    // Update data bug di database
    const updatedBug = await prisma.bug.update({
      where: { id },
      data: updateData,
    });

    return ResponseHandler.updated(updatedBug);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;

    const bugId = await prisma.bug.findUnique({
      where: { id },
    });

    if (!bugId) {
      return ResponseHandler.notFound("Bug not found");
    }

    // Hapus data bug dari database
    const deletedBug = await prisma.bug.delete({
      where: { id },
    });

    return ResponseHandler.deleted(deletedBug);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

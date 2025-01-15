import { prisma } from "@/constants/variables";
import { calculateScore } from "@/lib/calculate-score";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET() {
  try {
    const bugs = await prisma.bug.findMany({
      include: {
        project: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        skor: "desc",
      },
    });
    return ResponseHandler.get(bugs);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

async function generateBugId(): Promise<string> {
  const lastBug = await prisma.bug.findFirst({
    orderBy: {
      id: "desc",
    },
  });

  const nextId = lastBug ? parseInt(lastBug.id.split("-")[1]) + 1 : 1;

  return `BUG-${nextId.toString().padStart(3, "0")}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const skor = calculateScore({
      severity: body.severity,
      waktu_perbaikan: body.waktu_perbaikan,
      risiko_perbaikan: body.risiko_perbaikan,
      prioritas_stakeholder: body.prioritas_stakeholder,
      usia_bug: body.usia_bug,
      ketersediaan_sdm: body.ketersediaan_sdm,
    });

    const id = await generateBugId();

    // Buat data bug baru
    const newBug = await prisma.bug.create({
      data: {
        id, // ID custom
        skor,
        ...body,
      },
    });

    return ResponseHandler.created(newBug);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const service = await prisma.project.findFirstOrThrow({
      where: { id },
      include: { bugs: true },
    });
    return ResponseHandler.get(service);
  } catch (error) {
    return ResponseHandler.serverError((error as Error)?.message);
  }
}

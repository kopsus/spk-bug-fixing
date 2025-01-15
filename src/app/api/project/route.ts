import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        bugs: {
          orderBy: {
            skor: "desc",
          },
        },
      },
    });
    return ResponseHandler.get(projects);
  } catch (error) {
    return ResponseHandler.serverError();
  }
}

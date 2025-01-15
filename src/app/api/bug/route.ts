import { TypeBug } from "@/api/bug/types";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";

export async function GET() {
  try {
    const bugs = await prisma.bug.findMany();
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
    const body: Omit<TypeBug, "id"> = await req.json();

    const id = await generateBugId();

    // Buat data bug baru
    const newBug = await prisma.bug.create({
      data: {
        id, // ID custom
        ...body,
      },
    });

    return ResponseHandler.created(newBug);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

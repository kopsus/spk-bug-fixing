import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailRegex.test(email)) {
      return ResponseHandler.InvalidData("Format email tidak valid");
    }

    if (!body) {
      ResponseHandler.InvalidData();
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return ResponseHandler.InvalidData(
        `email ${existingUser.email} sudah terdaftar`
      );
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        ...body,
        password: hashedPassword,
      },
      select: {
        email: true,
        fullName: true,
      },
    });

    return ResponseHandler.created(newUser);
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

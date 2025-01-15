import bcrypt from "bcrypt";
import { prisma } from "@/constants/variables";
import { ResponseHandler } from "@/lib/responseHandler";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) return ResponseHandler.InvalidData("Email Tidak Ditemukan!");

    const passwordValidate = await bcrypt.compare(password, user.password);

    if (!passwordValidate)
      return ResponseHandler.InvalidData("Kata Sandi yang anda masukan salah!");

    const payload = {
      id: user.id,
      email: user.email,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET!);

    (await cookies()).set("accessToken", token, {
      path: "/",
    });

    return ResponseHandler.get("Berhasil Login");
  } catch (error) {
    console.error(error);
    return ResponseHandler.serverError();
  }
}

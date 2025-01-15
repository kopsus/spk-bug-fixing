import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  return NextResponse.json({ message: "anda berhasil logout!!" });
}

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const privateRoute = ["/bug", "/dashboard", "/project"];

export async function middleware(req: NextRequest) {
  const cookie = (await cookies()).get("accessToken"); // Ambil token dari cookies
  const token = cookie ? cookie.value : null;

  const { pathname } = req.nextUrl; // Ambil path dari URL
  const isPrivate = privateRoute.some((route) => pathname.startsWith(route));

  if (isPrivate && !token) {
    // Jika route private dan token tidak ditemukan, redirect ke halaman login
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

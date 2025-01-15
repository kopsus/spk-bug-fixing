import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const privateRoute = ["/bug", "/dashboard", "/project"];
const publicRoute = ["/", "/login"];

export async function middleware(req: NextRequest) {
  const cookie = cookies().get("accessToken"); // Ambil token dari cookies
  const token = cookie ? cookie.value : null;

  const { pathname } = req.nextUrl; // Ambil path dari URL
  const isPrivate = privateRoute.some((route) => pathname.startsWith(route));
  const isPublic = publicRoute.some((route) => pathname === route);

  // Cek akses ke private route tanpa token
  if (isPrivate && !token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Cek akses ke public route dengan token
  if (isPublic && token) {
    const dashboardUrl = new URL("/dashboard", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Izinkan akses jika tidak memenuhi kondisi di atas
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Middleware berlaku untuk semua path
};

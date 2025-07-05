import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtService } from "@/core/services/jwtService";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  try {
    jwtService.verify(token);
    return NextResponse.next();
  } catch {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}

// Protège les routes qui nécessitent d'être connecté
export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*"],
};

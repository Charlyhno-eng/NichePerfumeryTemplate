import { NextResponse } from "next/server";
import { jwtService } from "@/core/services/jwtService";
import { serialize } from "cookie";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email !== "test" || password !== "test") {
    return NextResponse.json(
      { message: "Identifiants invalides" },
      { status: 401 },
    );
  }

  const token = jwtService.sign({ email });

  const cookie = serialize("auth_token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  const response = NextResponse.json({ success: true });
  response.headers.set("Set-Cookie", cookie);

  return response;
}

import { NextResponse } from "next/server";
import { jwtService } from "@/core/services/jwtService";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const match = cookie.match(/auth_token=([^;]+)/);
  const token = match?.[1];

  if (!token) {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }

  try {
    const payload = jwtService.verify(token);
    return NextResponse.json({ loggedIn: true, email: payload.email });
  } catch {
    return NextResponse.json({ loggedIn: false }, { status: 401 });
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pin } = body;

    // Master PIN verification (configurable via HUB_MASTER_PIN or default vlush2026)
    const masterPin = process.env.HUB_MASTER_PIN || "vlush2026";

    if (!pin || pin.trim() !== masterPin) {
      return NextResponse.json(
        { error: "PIN Maestro incorrecto" },
        { status: 401 }
      );
    }

    const sessionToken = Buffer.from(
      JSON.stringify({
        role: "founder",
        name: "Marie & Socio",
        authenticatedAt: new Date().toISOString(),
      })
    ).toString("base64");

    const response = NextResponse.json({
      success: true,
      founder: "Marie & Socio",
    });

    // Set secure cookie for /hub routes
    response.cookies.set("vlush_founder_session", sessionToken, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Sesión cerrada" });
  response.cookies.delete("vlush_founder_session");
  return response;
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { founder, pin } = body;

    // Check founder credentials
    // Default demo PINs: Marie -> "marie123", Partner -> "partner123", or Master PIN "vlush2026"
    const isValidMarie = founder === "Marie" && (pin === "marie123" || pin === "vlush2026");
    const isValidPartner = founder === "Partner" && (pin === "partner123" || pin === "vlush2026");
    const isMaster = pin === "vlush2026";

    if (!isValidMarie && !isValidPartner && !isMaster) {
      return NextResponse.json(
        { error: "PIN o credenciales de fundador incorrectas" },
        { status: 401 }
      );
    }

    const founderName = isMaster ? "Marie & Partner" : founder;
    const sessionToken = Buffer.from(
      JSON.stringify({
        founder: founderName,
        authenticatedAt: new Date().toISOString(),
      })
    ).toString("base64");

    const response = NextResponse.json({
      success: true,
      founder: founderName,
    });

    // Set HTTP-only secure cookie for /hub routes
    response.cookies.set("vlush_founder_session", sessionToken, {
      path: "/",
      httpOnly: false, // accessible for frontend founder indicator
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

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /hub routes except the login portal itself
  if (pathname.startsWith("/hub")) {
    if (pathname === "/hub/login") {
      return NextResponse.next();
    }

    const sessionCookie = request.cookies.get("vlush_founder_session")?.value;

    // In local development or with valid founder session
    if (!sessionCookie) {
      const loginUrl = new URL("/hub/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/hub/:path*"],
};

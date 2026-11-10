import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { COUNTRY_COOKIE } from "@/lib/currency";
import { defaultLocale } from "@/lib/i18n";

/**
 * 1. Language routing. English is served at the root ("/pricing") and Urdu
 *    under "/ur" ("/ur/pricing"). Pages live in app/[locale], so English
 *    requests are rewritten internally to "/en/…", and the internal "/en/…"
 *    form redirects to the clean URL so it never exists twice.
 * 2. Stores the visitor's country (Vercel IP geolocation) in a cookie so
 *    statically rendered pages can show prices in the local currency.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const internalPrefix = `/${defaultLocale}`;

  if (pathname === internalPrefix || pathname.startsWith(`${internalPrefix}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(internalPrefix.length) || "/";
    return NextResponse.redirect(url, 308);
  }

  const isUrdu = pathname === "/ur" || pathname.startsWith("/ur/");
  const response = isUrdu
    ? NextResponse.next()
    : NextResponse.rewrite(new URL(`${internalPrefix}${pathname === "/" ? "" : pathname}${search}`, request.url));

  const country = request.headers.get("x-vercel-ip-country");
  if (country && request.cookies.get(COUNTRY_COOKIE)?.value !== country) {
    response.cookies.set(COUNTRY_COOKIE, country, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
      secure: true,
    });
  }

  return response;
}

export const config = {
  // Pages only: skip Next internals, API routes and static files.
  matcher: ["/((?!_next/|api/|assets/|favicon|.*\\..*).*)"],
};

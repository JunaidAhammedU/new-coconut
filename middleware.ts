import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";

const publicPaths = [
  "/",                // homepage
  "/about",           // public pages
  "/faq",
  "/api/public(.*)",  // public API routes
  "/sign-in(.*)",     // auth pages
  "/sign-up(.*)",
  "/public(.*)",      // all routes under public folder
];

const isPublic = (path: string) => {
  return publicPaths.find(
    (x) => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  );
};

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (isPublic(path)) {
    return NextResponse.next();
  }

  // Check auth status
  const { userId } = await getAuth(request);

  // If the user is not signed in and the route is protected, redirect to sign-in
  if (!userId) {
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect_url', request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/",
  ],
};
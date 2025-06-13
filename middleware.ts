import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/faq",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/public(.*)",
  "/api/public(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  const { nextUrl } = request;

  // If user is signed in and trying to access auth pages, redirect to dashboard
  if (userId && (nextUrl.pathname === "/sign-in" || nextUrl.pathname === "/sign-up")) {
    return NextResponse.redirect(new URL("/explore", request.url));
  }

  // If route is public, allow access
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  // If user is not signed in and trying to access protected route, redirect to sign-in
  if (!userId) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("redirect_url", nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
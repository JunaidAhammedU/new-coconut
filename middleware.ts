import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const publicRoutes = [
  '/',                    // homepage
  '/api/public(.*)',      // public API routes
  '/sign-in(.*)',        // auth pages
  '/sign-up(.*)',
]

export default clerkMiddleware((auth: any, req: any, evt) => {
  const isPublicRoute = createRouteMatcher(publicRoutes)(req);
  if (isPublicRoute) {
    return;
  }
  return auth();
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
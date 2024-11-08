import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the URL path is `/news`
  if (request.nextUrl.pathname === '/nope') {
    // Return a 404 response for /news
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // redirect /news to /blog
  if (request.nextUrl.pathname === '/news') {
    return NextResponse.redirect(new URL('/blog', request.url));
  }

  // Continue processing other routes
  return NextResponse.next();
}

// Specify the paths the middleware should apply to
export const config = {
  matcher: '/news',
};

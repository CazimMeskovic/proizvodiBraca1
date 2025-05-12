// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Primjer: redirect na /login ako korisnik nije autentificiran
  const isLoggedIn = false; // zamijeni s pravim uslovom

  if (!isLoggedIn && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Define routes koje middleware treba da obrađuje
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'], // promijeni prema svojim rutama
};

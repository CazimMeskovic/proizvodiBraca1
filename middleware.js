import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(req) {
  console.log('Middleware triggered for:', req.nextUrl.pathname);

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log('Cookies:', cookies());
  console.log('Supabase session data:', session);

  if (!session) {
    console.log('No session found. Redirecting to /auth');
  } else {
    console.log('Session found:', session);
  }

  if (!session && req.nextUrl.pathname.startsWith('/dodaj')) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};

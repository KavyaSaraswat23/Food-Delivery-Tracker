import { NextResponse, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside

// for redirecting
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublic = path === '/login' || path === '/signup';
    const token = request.cookies.get('token')?.value || '';
    if (isPublic && token){
        return NextResponse.redirect(new URL('/profile', request.nextUrl));
    }
    if (!isPublic &&!token){
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}

// for checking the pages !
export const config = {
  matcher: [
    '/',
    '/restaurant',
    '/profile',
    '/login',
    '/signup',
    
  ]
}
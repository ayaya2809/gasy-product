// import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
// import { COOKIE_KEYS } from '@/src/constants/app';

// const ROUTER_PUBLIC = ['/', '/terms', '/privacy', '/court/filter', '/training', '/shop', '/court/detail'];

export function middleware() {
    // const url = req.nextUrl.clone();
    // if (!isValidAccessToken(req) && !ROUTER_PUBLIC.includes(url.pathname)) {
    //     url.searchParams.set('auth', 'required');
    //     return NextResponse.redirect(new URL('/', req.url));
    // }

    return NextResponse.next();
}

// function isValidAccessToken(req: NextRequest): boolean {
//     return req.cookies.has(COOKIE_KEYS.ACCESS_TOKEN);
// }

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};

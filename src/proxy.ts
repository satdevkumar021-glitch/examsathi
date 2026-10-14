import { NextResponse, type NextRequest } from 'next/server';

/**
 * Optimistic gate for the staff workspace: visitors with no Supabase session cookie never receive the
 * admin bundle. This only checks that a cookie exists. It is not authorization — the role is verified
 * by Supabase on every /api/admin/* call (src/lib/server-auth.ts), which is the real defence.
 */
export function proxy(request: NextRequest) {
  const hasSession = request.cookies.getAll().some(c => /^sb-.+-auth-token(\.\d+)?$/.test(c.name) && c.value);
  if (hasSession) return NextResponse.next();
  const login = new URL('/login/', request.url);
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};

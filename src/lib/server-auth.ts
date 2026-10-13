import 'server-only';
import { createClient } from '@supabase/supabase-js';
import { NextResponse, type NextRequest } from 'next/server';
import { jsonRoute } from './api-route';
import { isStaffRole, type StaffRole } from './content-workflow';

export interface VerifiedUser { id: string; email: string; role: string | null }
export interface StaffUser { id: string; email: string; role: StaffRole }

const noSession = { auth: { persistSession: false, autoRefreshToken: false } } as const;

/**
 * Verifies the Bearer token with Supabase (not just decoding it). `app_metadata.role` is trusted:
 * it can only be set with the service role, unlike `user_metadata`, which users edit themselves.
 */
export async function verifyBearer(req: Request): Promise<VerifiedUser | null> {
  const token = req.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!token || !url || !anonKey) return null;
  const { data, error } = await createClient(url, anonKey, noSession).auth.getUser(token);
  if (error || !data.user) return null;
  const role = data.user.app_metadata?.role;
  return { id: data.user.id, email: data.user.email ?? '', role: typeof role === 'string' ? role : null };
}

export type StaffCheck = { ok: true; user: StaffUser } | { ok: false; response: NextResponse };

const deny = (message: string, status: number): StaffCheck =>
  ({ ok: false, response: NextResponse.json({ success: false, message }, { status, headers: { 'Cache-Control': 'no-store' } }) });

/** 401 without a valid session, 403 for a valid user who is not staff. */
export async function requireStaff(req: Request): Promise<StaffCheck> {
  const user = await verifyBearer(req);
  if (!user) return deny('Sign in to continue.', 401);
  if (!isStaffRole(user.role)) return deny('You do not have access to this workspace.', 403);
  return { ok: true, user: { id: user.id, email: user.email, role: user.role } };
}

/** Service-role client for server-only tables. Returns null when the server is not configured. */
export function serviceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && serviceKey ? createClient(url, serviceKey, noSession) : null;
}

/**
 * Prelude for staff-only JSON routes: rate limit, bounded body, verified staff role, then the handler.
 * Authorization is decided here on the server; the UI only mirrors it.
 */
export async function staffRoute(
  req: NextRequest,
  options: { name: string; limit: number; windowMs: number; maxBytes: number },
  handler: (body: unknown, user: StaffUser) => Promise<NextResponse> | NextResponse,
): Promise<NextResponse> {
  return jsonRoute(req, options, async body => {
    const staff = await requireStaff(req);
    if (!staff.ok) return staff.response;
    return handler(body, staff.user);
  });
}

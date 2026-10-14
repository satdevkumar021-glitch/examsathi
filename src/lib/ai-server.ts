import 'server-only';
import { createClient } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';
/** Server-verified identity and atomic, durable per-account quota in Supabase. */
/** Verifies the Bearer token and returns a client acting as that user. Does not touch the daily quota. */
export async function authenticateUser(req: NextRequest) {
  const token = req.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!token || !url || !key) throw new Error('AUTH');
  const client = createClient(url, key, { global: { headers: { Authorization: `Bearer ${token}` } }, auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await client.auth.getUser(token);
  if (error || !data.user) throw new Error('AUTH');
  return client;
}

/** Spends one unit of the user's daily generation quota. Call only once the request is certain to be served. */
export async function consumeQuota(client: Awaited<ReturnType<typeof authenticateUser>>): Promise<void> {
  const quota = await client.rpc('consume_examsathi_ai_quota');
  if (quota.error) throw new Error('QUOTA_SETUP');
  if (quota.data !== true) throw new Error('LIMIT');
}

export async function authorizeGeneration(req: NextRequest): Promise<void> {
  await consumeQuota(await authenticateUser(req));
}

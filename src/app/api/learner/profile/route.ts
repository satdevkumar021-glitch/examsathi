import { NextRequest, NextResponse } from 'next/server';
import { fail } from '@/lib/api-route';
import { clientIp } from '@/lib/rate-limit';
import { limitRequest } from '@/lib/rate-limit-shared';
import { serviceClient, verifyBearer } from '@/lib/server-auth';
import { computeInsights, DEFAULT_TZ_OFFSET_MINUTES, type AttemptRow } from '@/lib/learner-insights';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const NO_STORE = { 'Cache-Control': 'no-store' };
const HISTORY_LIMIT = 400;

/**
 * The signed-in learner's streak, accuracy and weak topics, derived from their server-scored attempts.
 * Guests have no server history; the client keeps using its local figures for them.
 */
export async function GET(req: NextRequest) {
  const limited = await limitRequest(`learner-profile:${clientIp(req)}`, 240, 60 * 60 * 1000);
  if (!limited.ok) return fail('Too many requests. Try again later.', 429, { 'Retry-After': String(limited.retryAfter) });
  const user = await verifyBearer(req);
  if (!user) return fail('Sign in to see your progress.', 401);
  const db = serviceClient();
  if (!db) return fail('Progress sync is not configured.', 503);

  const offset = Number(req.nextUrl.searchParams.get('tz'));
  const tz = Number.isInteger(offset) && Math.abs(offset) <= 14 * 60 && req.nextUrl.searchParams.has('tz') ? offset : DEFAULT_TZ_OFFSET_MINUTES;

  const load = (columns: string) => db.from('examsathi_attempts').select(columns).eq('user_id', user.id).order('created_at', { ascending: false }).limit(HISTORY_LIMIT);
  let { data, error } = await load('exam_id, created_at, total, correct, topic_breakdown');
  // Before migration 202610110003 the breakdown column is missing: streak and accuracy still work.
  if (error && (error.code === '42703' || error.code === 'PGRST204')) ({ data, error } = await load('exam_id, created_at, total, correct'));
  if (error) return fail('Could not load your progress.', 500);

  return NextResponse.json({ success: true, insights: computeInsights((data ?? []) as unknown as AttemptRow[], Date.now(), tz) }, { headers: NO_STORE });
}

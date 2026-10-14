import { NextRequest, NextResponse } from 'next/server';
import { fail } from '@/lib/api-route';
import { clientIp } from '@/lib/rate-limit';
import { limitRequest } from '@/lib/rate-limit-shared';
import { validCronSecret, sendPush, pushConfigured, pushDryRun } from '@/lib/push-server';
import { serviceClient } from '@/lib/server-auth';
import { dayKey } from '@/lib/learner-insights';
import { decideReminder, reminderMessage } from '@/lib/streak-reminder';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_DEVICES_PER_RUN = 2000;
const GIVE_UP_AFTER_FAILURES = 5;

/**
 * Streak-at-risk reminders. An external scheduler calls this once an hour with `Authorization: Bearer <CRON_SECRET>`.
 * Each device has its own timezone, so the decision (18:00-21:00 local, streak of 2+, not yet practised today, not
 * already nudged today) is made per device; running it hourly is safe because `last_sent_day` makes it idempotent.
 */
export async function POST(req: NextRequest) {
  const limited = await limitRequest(`push-send:${clientIp(req)}`, 30, 60 * 60 * 1000);
  if (!limited.ok) return fail('Too many requests.', 429, { 'Retry-After': String(limited.retryAfter) });
  if (!validCronSecret(req.headers.get('authorization'))) return fail('Unauthorized.', 401);
  if (!pushConfigured()) return NextResponse.json({ success: true, sent: 0, skipped: 0, removed: 0, note: 'not configured' });
  const db = serviceClient();
  if (!db) return fail('Reminders are not available right now.', 503);

  // A clock override exists only in dry-run test mode, so the window logic can be exercised.
  const override = Number(req.nextUrl.searchParams.get('now'));
  const now = pushDryRun() && Number.isFinite(override) && override > 0 ? override : Date.now();

  const { data: devices, error } = await db.from('examsathi_push_subscriptions')
    .select('id, user_id, endpoint, p256dh, auth, tz_offset_minutes, lang, last_sent_day, failures')
    .lt('failures', GIVE_UP_AFTER_FAILURES).order('id').limit(MAX_DEVICES_PER_RUN);
  if (error) return fail('Could not load subscriptions.', 500);

  const attemptTimes = new Map<string, string[]>();
  const attemptsOf = async (userId: string) => {
    if (!attemptTimes.has(userId)) {
      const { data } = await db.from('examsathi_attempts').select('created_at').eq('user_id', userId).order('created_at', { ascending: false }).limit(400);
      attemptTimes.set(userId, (data ?? []).map(row => row.created_at as string));
    }
    return attemptTimes.get(userId)!;
  };

  let sent = 0, skipped = 0, removed = 0;
  for (const device of devices ?? []) {
    const tz = device.tz_offset_minutes as number;
    const days = (await attemptsOf(device.user_id)).map(at => dayKey(at, tz));
    const decision = decideReminder({ days, tzOffsetMinutes: tz, lastSentDay: device.last_sent_day }, now);
    if (!decision.send) { skipped++; continue; }

    const result = await sendPush(
      { endpoint: device.endpoint, p256dh: device.p256dh, auth: device.auth },
      reminderMessage(decision.streak, device.lang as 'en' | 'hi' | 'pa'),
    );
    if (result === 'sent') {
      sent++;
      await db.from('examsathi_push_subscriptions').update({ last_sent_day: dayKey(now, tz), failures: 0 }).eq('id', device.id);
    } else if (result === 'gone') {
      removed++;
      await db.from('examsathi_push_subscriptions').delete().eq('id', device.id);
    } else {
      await db.from('examsathi_push_subscriptions').update({ failures: device.failures + 1 }).eq('id', device.id);
    }
  }
  return NextResponse.json({ success: true, sent, skipped, removed }, { headers: { 'Cache-Control': 'no-store' } });
}

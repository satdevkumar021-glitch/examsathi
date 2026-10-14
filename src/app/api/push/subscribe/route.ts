import { NextRequest, NextResponse } from 'next/server';
import { fail, jsonRoute } from '@/lib/api-route';
import { serviceClient, verifyBearer } from '@/lib/server-auth';
import { pushConfigured } from '@/lib/push-server';
import { validateSubscription } from '@/lib/streak-reminder';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const HOUR = 60 * 60 * 1000;
const MAX_DEVICES_PER_USER = 10;

/** Registers (or re-registers) this device for the signed-in learner's streak reminder. */
export async function POST(req: NextRequest) {
  return jsonRoute(req, { name: 'push-subscribe', limit: 60, windowMs: HOUR, maxBytes: 4000 }, async body => {
    const user = await verifyBearer(req);
    if (!user) return fail('Sign in to turn on reminders.', 401);
    if (!pushConfigured()) return fail('Reminders are not available right now.', 503);
    const parsed = validateSubscription(body);
    if (!parsed.ok) return fail(parsed.message, 400);
    const sub = parsed.value;
    const db = serviceClient();
    if (!db) return fail('Reminders are not available right now.', 503);

    // Bound the rows one account can create. Re-registering an existing device does not count against the cap.
    const { data: mine, error: listError } = await db.from('examsathi_push_subscriptions').select('endpoint').eq('user_id', user.id).limit(MAX_DEVICES_PER_USER + 1);
    if (listError) return fail('Could not save your reminder setting.', 500);
    if ((mine?.length ?? 0) >= MAX_DEVICES_PER_USER && !mine?.some(row => row.endpoint === sub.endpoint)) return fail('Too many devices. Turn reminders off on one first.', 409);

    // The endpoint is unique: a shared device that signs in as someone else moves to that account.
    const { error } = await db.from('examsathi_push_subscriptions').upsert(
      { user_id: user.id, endpoint: sub.endpoint, p256dh: sub.p256dh, auth: sub.auth, tz_offset_minutes: sub.tzOffsetMinutes, lang: sub.lang, failures: 0 },
      { onConflict: 'endpoint' },
    );
    if (error) return fail('Could not save your reminder setting.', 500);
    return NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'no-store' } });
  });
}

/** Turns reminders off for one device. Only the owner's row can be removed. */
export async function DELETE(req: NextRequest) {
  return jsonRoute(req, { name: 'push-unsubscribe', limit: 60, windowMs: HOUR, maxBytes: 2000 }, async body => {
    const user = await verifyBearer(req);
    if (!user) return fail('Sign in to change reminders.', 401);
    const endpoint = (body as { endpoint?: unknown } | null)?.endpoint;
    if (typeof endpoint !== 'string' || !endpoint || endpoint.length > 600) return fail('Invalid subscription.', 400);
    const db = serviceClient();
    if (!db) return fail('Reminders are not available right now.', 503);
    const { error } = await db.from('examsathi_push_subscriptions').delete().eq('user_id', user.id).eq('endpoint', endpoint);
    if (error) return fail('Could not change your reminder setting.', 500);
    return NextResponse.json({ success: true }, { headers: { 'Cache-Control': 'no-store' } });
  });
}

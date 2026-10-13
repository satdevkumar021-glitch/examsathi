import { NextRequest, NextResponse } from 'next/server';
import { fail } from '@/lib/api-route';
import { clientIp } from '@/lib/rate-limit';
import { limitRequest } from '@/lib/rate-limit-shared';
import { pushConfigured, vapidPublicKey } from '@/lib/push-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** The public (application server) key the browser needs to subscribe. It is not a secret. */
export async function GET(req: NextRequest) {
  const limited = await limitRequest(`push-key:${clientIp(req)}`, 120, 60 * 60 * 1000);
  if (!limited.ok) return fail('Too many requests. Try again later.', 429, { 'Retry-After': String(limited.retryAfter) });
  const key = vapidPublicKey();
  if (!pushConfigured() || !key) return fail('Reminders are not available right now.', 503);
  return NextResponse.json({ success: true, publicKey: key }, { headers: { 'Cache-Control': 'public, max-age=3600' } });
}

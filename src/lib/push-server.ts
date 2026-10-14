import 'server-only';
import { timingSafeEqual } from 'node:crypto';
import webpush from 'web-push';
import type { ReminderMessage } from './streak-reminder';

/** Test-only: log instead of contacting a push service, and honour a `now` override. Never set in production. */
export const pushDryRun = () => process.env.PUSH_DRY_RUN === '1';

export function vapidPublicKey(): string | null {
  return process.env.VAPID_PUBLIC_KEY?.trim() || null;
}

export function pushConfigured(): boolean {
  return pushDryRun() || !!(vapidPublicKey() && process.env.VAPID_PRIVATE_KEY && process.env.VAPID_SUBJECT);
}

/** Constant-time check of the scheduler's shared secret. An unset secret never matches. */
export function validCronSecret(header: string | null): boolean {
  const secret = process.env.CRON_SECRET;
  const given = header?.match(/^Bearer (.+)$/)?.[1];
  if (!secret || secret.length < 16 || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}

export interface PushTarget { endpoint: string; p256dh: string; auth: string }
/** `gone` means the browser revoked the subscription, so it should be deleted. */
export type PushResult = 'sent' | 'gone' | 'failed';

export async function sendPush(target: PushTarget, message: ReminderMessage): Promise<PushResult> {
  if (pushDryRun()) return 'sent';
  try {
    await webpush.sendNotification(
      { endpoint: target.endpoint, keys: { p256dh: target.p256dh, auth: target.auth } },
      JSON.stringify(message),
      { vapidDetails: { subject: process.env.VAPID_SUBJECT!, publicKey: vapidPublicKey()!, privateKey: process.env.VAPID_PRIVATE_KEY! }, TTL: 6 * 3600, urgency: 'low' },
    );
    return 'sent';
  } catch (error) {
    const status = (error as { statusCode?: number }).statusCode;
    return status === 404 || status === 410 ? 'gone' : 'failed';
  }
}

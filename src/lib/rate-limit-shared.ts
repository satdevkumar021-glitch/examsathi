import { rateLimit } from './rate-limit';

/**
 * Rate limiting that is correct across instances when a Redis (Upstash REST) store is configured:
 *   UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
 * Without them it uses the per-instance in-memory limiter, which is fine for one instance only.
 *
 * Fixed window: INCR the key, set its expiry on the first hit (NX), read the remaining TTL, all in one
 * MULTI/EXEC round trip. If the store is slow or down the request falls back to the in-memory limiter
 * (fail open to local limits, never fail closed), and the store is skipped for a short time so an outage
 * does not add latency to every request.
 */

export interface LimitResult { ok: boolean; retryAfter: number }

interface Options {
  url?: string;
  token?: string;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  backoffMs?: number;
  now?: () => number;
}

const MAX_KEY = 200;

export function createLimiter(options: Options = {}) {
  const { url, token, fetchImpl = fetch, timeoutMs = 800, backoffMs = 10_000, now = Date.now } = options;
  const base = url ? url.replace(/\/+$/, '') : '';
  let skipUntil = 0;

  async function viaRedis(key: string, limit: number, windowMs: number): Promise<LimitResult> {
    const redisKey = `rl:${key.slice(0, MAX_KEY)}`;
    const res = await fetchImpl(`${base}/multi-exec`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([['INCR', redisKey], ['PEXPIRE', redisKey, String(windowMs), 'NX'], ['PTTL', redisKey]]),
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!res.ok) throw new Error(`rate limit store returned ${res.status}`);
    const out = (await res.json()) as Array<{ result?: unknown; error?: string }>;
    if (!Array.isArray(out) || out.length !== 3 || out.some(item => item.error)) throw new Error('rate limit store error');
    const count = Number(out[0].result);
    const ttl = Number(out[2].result);
    if (!Number.isFinite(count)) throw new Error('rate limit store returned a bad count');
    if (count <= limit) return { ok: true, retryAfter: 0 };
    const remainingMs = Number.isFinite(ttl) && ttl > 0 ? ttl : windowMs;
    return { ok: false, retryAfter: Math.max(1, Math.ceil(remainingMs / 1000)) };
  }

  return async function limitRequest(key: string, limit: number, windowMs: number): Promise<LimitResult> {
    if (!base || !token || now() < skipUntil) return rateLimit(key, limit, windowMs);
    try {
      return await viaRedis(key, limit, windowMs);
    } catch {
      skipUntil = now() + backoffMs;
      console.error('rate limit store unavailable; using the in-memory limiter for a while');
      return rateLimit(key, limit, windowMs);
    }
  };
}

/** Shared limiter configured from the environment. */
export const limitRequest = createLimiter({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

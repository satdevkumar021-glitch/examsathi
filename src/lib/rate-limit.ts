/**
 * Fixed-window, in-memory rate limiter. State is per server instance, so on serverless it is
 * best-effort abuse damping, not a global guarantee; use a shared store (Redis) for that.
 */
const buckets = new Map<string, { count: number; resetAt: number }>();
const MAX_BUCKETS = 10000;

export function rateLimit(key: string, limit: number, windowMs: number, now = Date.now()): { ok: boolean; retryAfter: number } {
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    if (buckets.size >= MAX_BUCKETS) {
      for (const [k, v] of buckets) if (v.resetAt <= now) buckets.delete(k);
      if (buckets.size >= MAX_BUCKETS) buckets.clear();
    }
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }
  bucket.count += 1;
  return bucket.count <= limit ? { ok: true, retryAfter: 0 } : { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
}

/** Number of reverse proxies in front of the app that append to X-Forwarded-For (TRUSTED_PROXY_HOPS, default 1). */
function trustedHops(): number {
  const raw = typeof process !== 'undefined' ? process.env.TRUSTED_PROXY_HOPS : undefined;
  const n = raw === undefined || raw === '' ? 1 : Number(raw);
  return Number.isInteger(n) && n >= 0 && n <= 5 ? n : 1;
}

/**
 * The caller's IP for rate limiting. X-Forwarded-For reads "client, proxy1, proxy2": a client can put anything on
 * the left, but each trusted proxy appends the address it actually saw on the right. So count `hops` entries from the
 * right instead of trusting the first one, which an attacker controls. hops = 0 means no proxy: ignore the header.
 */
export function clientIp(request: Request, hops: number = trustedHops()): string {
  if (hops > 0) {
    const chain = (request.headers.get('x-forwarded-for') ?? '').split(',').map(part => part.trim()).filter(Boolean);
    if (chain.length) return chain[Math.max(0, chain.length - hops)];
    return request.headers.get('x-real-ip')?.trim() || 'unknown';
  }
  return 'unknown';
}

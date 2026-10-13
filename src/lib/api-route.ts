import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { readBoundedText } from './request-body';
import { clientIp, rateLimit } from './rate-limit';
import { refreshEditorial } from './editorial-loader';

export const fail = (message: string, status: number, headers?: Record<string, string>) =>
  NextResponse.json({ success: false, message }, { status, headers });

/**
 * Shared prelude for JSON POST routes: per-IP rate limit, bounded body, JSON parse and
 * uniform error responses. `cost` lets a route charge more than one unit per request.
 */
export async function jsonRoute(
  req: NextRequest,
  options: { name: string; limit: number; windowMs: number; maxBytes: number; cost?: (body: unknown) => number; editorial?: boolean },
  handler: (body: unknown) => Promise<NextResponse> | NextResponse,
): Promise<NextResponse> {
  try {
    const ip = clientIp(req);
    const first = rateLimit(`${options.name}:${ip}`, options.limit, options.windowMs);
    if (!first.ok) return fail('Too many requests. Try again later.', 429, { 'Retry-After': String(first.retryAfter) });
    const body = JSON.parse(await readBoundedText(req, options.maxBytes));
    const extra = (options.cost?.(body) ?? 1) - 1;
    for (let i = 0; i < extra; i++) {
      const next = rateLimit(`${options.name}:${ip}`, options.limit, options.windowMs);
      if (!next.ok) return fail('Too many requests. Try again later.', 429, { 'Retry-After': String(next.retryAfter) });
    }
    // Routes that read the question bank first pick up newly published editorial questions.
    if (options.editorial) await refreshEditorial();
    return await handler(body);
  } catch (error) {
    if (error instanceof Error && error.message === 'TOO_LARGE') return fail('Request too large.', 413);
    if (error instanceof SyntaxError) return fail('Invalid JSON request.', 400);
    return fail('Request failed.', 500);
  }
}

export const isString = (value: unknown, max = 200): value is string => typeof value === 'string' && value.length > 0 && value.length <= max;

export function stringList(value: unknown, maxItems: number, maxLength = 200): string[] | null {
  if (!Array.isArray(value) || value.length > maxItems) return null;
  return value.every(item => isString(item, maxLength)) ? (value as string[]) : null;
}

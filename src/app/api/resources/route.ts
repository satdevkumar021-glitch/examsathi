import { NextRequest, NextResponse } from 'next/server';
import { fail } from '@/lib/api-route';
import { clientIp } from '@/lib/rate-limit';
import { limitRequest } from '@/lib/rate-limit-shared';
import { refreshEditorial } from '@/lib/editorial-loader';
import { editorialResources } from '@/lib/editorial-store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_TOPICS = 4;

/**
 * Published, reviewed lessons, videos and document links for a topic: GET /api/resources?topics=a,b.
 * Public and answer-free. Only the fields students need are returned; the author and reviewer are never included.
 */
export async function GET(req: NextRequest) {
  const limited = await limitRequest(`resources:${clientIp(req)}`, 600, 60 * 60 * 1000);
  if (!limited.ok) return fail('Too many requests. Try again later.', 429, { 'Retry-After': String(limited.retryAfter) });
  const topics = (new URL(req.url).searchParams.get('topics') ?? '').split(',').map(t => t.trim()).filter(Boolean);
  if (topics.length === 0 || topics.length > MAX_TOPICS || topics.some(t => t.length > 120)) return fail('Invalid topics.', 400);
  await refreshEditorial();
  return NextResponse.json({ success: true, resources: editorialResources(topics) }, { headers: { 'Cache-Control': 'public, max-age=60' } });
}

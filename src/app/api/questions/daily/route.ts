import { NextRequest, NextResponse } from 'next/server';
import { ALL_QUESTIONS } from '@/lib/data/questions';
import { fail, jsonRoute, stringList } from '@/lib/api-route';
import { toPublic } from '@/lib/question-service';
import { editorialQuestions } from '@/lib/editorial-store';
import { refreshEditorial } from '@/lib/editorial-loader';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** One deterministic "question of the day" drawn from the given topics. No answer is included. */
export async function POST(req: NextRequest) {
  return jsonRoute(req, { name: 'q-daily', limit: 120, windowMs: 60 * 60 * 1000, maxBytes: 20000 }, async body => {
    const { topicIds, dayIndex } = (body ?? {}) as { topicIds?: unknown; dayIndex?: unknown };
    const topics = stringList(topicIds, 200, 120);
    if (!topics || topics.length === 0 || typeof dayIndex !== 'number' || !Number.isInteger(dayIndex) || dayIndex < 0) return fail('Invalid request.', 400);
    await refreshEditorial();
    const wanted = new Set(topics);
    const pool = [...ALL_QUESTIONS, ...editorialQuestions()].filter(q => wanted.has(q.topicId));
    const question = pool.length ? toPublic(pool[dayIndex % pool.length]) : null;
    return NextResponse.json({ success: true, question, poolSize: pool.length }, { headers: { 'Cache-Control': 'no-store' } });
  });
}

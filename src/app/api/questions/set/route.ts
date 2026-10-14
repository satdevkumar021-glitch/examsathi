import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { fail, isString, jsonRoute } from '@/lib/api-route';
import { resolveSet, type Difficulty } from '@/lib/question-service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DIFFICULTIES = new Set(['all', 'easy', 'medium', 'hard']);

/** Draws or looks up a question set. Answers and explanations are never included. */
export async function POST(req: NextRequest) {
  return jsonRoute(req, { editorial: true, name: 'q-set', limit: 300, windowMs: 60 * 60 * 1000, maxBytes: 600000 }, body => {
    const b = (body ?? {}) as Record<string, unknown>;
    const topicId = b.topicId === undefined ? 'all' : b.topicId;
    if (!isString(topicId, 120)) return fail('Invalid topic.', 400);
    if (b.examId !== undefined && !isString(b.examId, 100)) return fail('Invalid exam.', 400);
    const difficulty = b.difficulty === undefined ? 'all' : b.difficulty;
    if (typeof difficulty !== 'string' || !DIFFICULTIES.has(difficulty)) return fail('Invalid difficulty.', 400);
    const count = Number.isFinite(b.count) ? Math.max(1, Math.min(150, Math.floor(b.count as number))) : 50;
    const setNumber = Number.isFinite(b.setNumber) ? Math.max(0, Math.min(1000, Math.floor(b.setNumber as number))) : 0;
    const excludeKeys = Array.isArray(b.excludeKeys) ? b.excludeKeys.filter((k): k is string => typeof k === 'string' && k.length <= 400).slice(0, 5000) : [];
    const result = resolveSet({
      topicId,
      examId: b.examId as string | undefined,
      difficulty: difficulty as Difficulty,
      pyq20Years: b.pyq20Years === true,
      pyqOnly: b.pyqOnly === true,
      count,
      setNumber,
      ordered: b.ordered === true || topicId === 'ppsc-clerk-mega' || topicId === 'punjab-gk-punjabi-mega',
      isRevision: b.isRevision === true,
      isFresh: b.isFresh === true,
      excludeKeys,
    });
    return NextResponse.json({ success: true, ...result }, { headers: { 'Cache-Control': 'no-store' } });
  });
}

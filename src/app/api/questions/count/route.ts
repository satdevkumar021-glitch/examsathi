import { NextRequest, NextResponse } from 'next/server';
import { fail, isString, jsonRoute } from '@/lib/api-route';
import { poolCount, type CountQuery, type Difficulty } from '@/lib/question-service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DIFFICULTIES = new Set(['all', 'easy', 'medium', 'hard']);
const MAX_QUERIES = 120;

function parseQuery(value: unknown): CountQuery | null {
  if (!value || typeof value !== 'object') return null;
  const q = value as Record<string, unknown>;
  if (q.examId !== undefined && !isString(q.examId, 100)) return null;
  if (q.topicId !== undefined && !isString(q.topicId, 120)) return null;
  if (q.difficulty !== undefined && (typeof q.difficulty !== 'string' || !DIFFICULTIES.has(q.difficulty))) return null;
  return {
    examId: q.examId as string | undefined,
    topicId: q.topicId as string | undefined,
    difficulty: q.difficulty as Difficulty | undefined,
    pyq20Years: q.pyq20Years === true,
    pyqOnly: q.pyqOnly === true,
    fresh: q.fresh === true,
    limit: Number.isFinite(q.limit) ? (q.limit as number) : undefined,
  };
}

/** Batched "how many questions are available" counts, so pages never need the bank itself. */
export async function POST(req: NextRequest) {
  return jsonRoute(
    req,
    {
      editorial: true, name: 'q-count', limit: 600, windowMs: 60 * 60 * 1000, maxBytes: 600000,
      cost: body => Array.isArray((body as { queries?: unknown })?.queries) ? Math.max(1, Math.ceil((body as { queries: unknown[] }).queries.length / 10)) : 1,
    },
    body => {
      const { queries, excludeKeys } = (body ?? {}) as { queries?: unknown; excludeKeys?: unknown };
      if (!Array.isArray(queries) || queries.length === 0 || queries.length > MAX_QUERIES) return fail('Invalid queries.', 400);
      const parsed = queries.map(parseQuery);
      if (parsed.some(item => item === null)) return fail('Invalid query.', 400);
      const keys = Array.isArray(excludeKeys) ? excludeKeys.filter((k): k is string => typeof k === 'string' && k.length <= 400).slice(0, 5000) : [];
      const counts = (parsed as CountQuery[]).map(query => poolCount(query, keys));
      return NextResponse.json({ success: true, counts }, { headers: { 'Cache-Control': 'no-store' } });
    },
  );
}

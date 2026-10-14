import { NextRequest, NextResponse } from 'next/server';
import { fail, jsonRoute, stringList } from '@/lib/api-route';
import { findQuestion, toReveal } from '@/lib/question-service';
import type { QuestionReveal } from '@/lib/question-types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Returns the answer and explanation for specific questions. Used by flashcards, lessons and
 * instant-feedback practice. Each id costs one unit of a per-IP budget, so the bank cannot be
 * bulk-exported through this route. Timed exams get their review from /api/attempts instead.
 */
export async function POST(req: NextRequest) {
  return jsonRoute(
    req,
    {
      editorial: true, name: 'q-reveal', limit: 1500, windowMs: 60 * 60 * 1000, maxBytes: 30000,
      cost: body => Array.isArray((body as { ids?: unknown })?.ids) ? Math.min(150, (body as { ids: unknown[] }).ids.length) : 1,
    },
    body => {
      const ids = stringList((body as { ids?: unknown })?.ids, 150);
      if (!ids || ids.length === 0) return fail('Invalid question list.', 400);
      const reveals: Record<string, QuestionReveal> = {};
      for (const id of ids) {
        const q = findQuestion(id);
        if (q) reveals[id] = toReveal(q);
      }
      return NextResponse.json({ success: true, reveals }, { headers: { 'Cache-Control': 'no-store' } });
    },
  );
}

import { NextRequest, NextResponse } from 'next/server';
import { fail, jsonRoute, stringList } from '@/lib/api-route';
import { findQuestion, toPublic } from '@/lib/question-service';
import type { PublicQuestion } from '@/lib/question-types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Question text (no answers) for saved ids, such as favourites and bookmarks. */
export async function POST(req: NextRequest) {
  return jsonRoute(
    req,
    {
      editorial: true, name: 'q-lookup', limit: 600, windowMs: 60 * 60 * 1000, maxBytes: 60000,
      cost: body => Array.isArray((body as { ids?: unknown })?.ids) ? Math.max(1, Math.ceil((body as { ids: unknown[] }).ids.length / 10)) : 1,
    },
    body => {
      const ids = stringList((body as { ids?: unknown })?.ids, 300);
      if (!ids || ids.length === 0) return fail('Invalid question list.', 400);
      const questions: PublicQuestion[] = [];
      for (const id of ids) {
        const q = findQuestion(id);
        if (q) questions.push(toPublic(q));
      }
      return NextResponse.json({ success: true, questions }, { headers: { 'Cache-Control': 'no-store' } });
    },
  );
}

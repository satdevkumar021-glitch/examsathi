import { NextRequest, NextResponse } from 'next/server';
import { fail, jsonRoute, stringList } from '@/lib/api-route';
import { examManifest } from '@/lib/question-service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Available-question counts per syllabus topic, for the requested exams. */
export async function POST(req: NextRequest) {
  return jsonRoute(req, { editorial: true, name: 'q-manifest', limit: 240, windowMs: 60 * 60 * 1000, maxBytes: 10000 }, body => {
    const examIds = stringList((body as { examIds?: unknown })?.examIds, 60, 100);
    if (!examIds || examIds.length === 0) return fail('Invalid exams.', 400);
    const manifest: Record<string, Record<string, number>> = {};
    for (const id of new Set(examIds)) manifest[id] = examManifest(id);
    return NextResponse.json({ success: true, manifest }, { headers: { 'Cache-Control': 'private, max-age=600' } });
  });
}

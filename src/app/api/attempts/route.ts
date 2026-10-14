import 'server-only';
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { practiceExam } from '@/lib/exam-context';
import { scoreSubmission, validateAttemptBody } from '@/lib/attempt-scoring';
import { computeTopicBreakdown } from '@/lib/scoring';
import { findQuestion, toReveal } from '@/lib/question-service';
import type { QuestionReveal } from '@/lib/question-types';
import { fail, jsonRoute } from '@/lib/api-route';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Negative marking comes from the exam definition, never from the client. */
function penaltyFor(examId: string): number {
  const mark = practiceExam(examId)?.negativeMarking;
  return typeof mark === 'number' ? mark : mark === true ? 0.25 : 0;
}

/**
 * Scores a finished attempt against the server's answer key and returns the review.
 * Anyone can submit (guests included) and gets a result; signed-in users also have the
 * attempt stored. The client never receives answers before this point.
 */
export async function POST(req: NextRequest) {
  return jsonRoute(req, { editorial: true, name: 'attempt-ip', limit: 120, windowMs: 60 * 60 * 1000, maxBytes: 100000 }, async body => {
    const parsed = validateAttemptBody(body);
    if (!parsed.ok) return fail(parsed.message, 400);
    const input = parsed.value;

    const found = input.questionIds.map(id => findQuestion(id));
    const scored = scoreSubmission(input, id => findQuestion(id)?.correct, penaltyFor(input.examId));
    if (!scored.ok) return fail(scored.message, 422);
    const s = scored.score;

    const correctAnswers: Record<string, string> = {};
    const reveals: Record<string, QuestionReveal> = {};
    input.questionIds.forEach((id, i) => { const q = found[i]!; correctAnswers[id] = q.correct; reveals[id] = toReveal(q); });
    const topicBreakdown = computeTopicBreakdown(
      input.questionIds.map((id, i) => ({ id, topicId: found[i]!.topicId || 'general' })),
      correctAnswers,
      input.answers,
    );

    let stored = false;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const token = req.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1];
    if (token && url && anonKey && serviceKey) {
      const authClient = createClient(url, anonKey, { auth: { persistSession: false, autoRefreshToken: false } });
      const { data: userData } = await authClient.auth.getUser(token);
      if (userData.user) {
        const admin = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
        const row = {
          id: input.attemptId, user_id: userData.user.id, exam_id: input.examId, test_id: input.testId,
          total: s.total, correct: s.correct, wrong: s.wrong, unattempted: s.unattempted,
          raw_score: s.rawScore, percentage: s.percentage, accuracy: s.accuracy,
          time_taken_seconds: input.timeTakenSeconds, answers: input.answers,
        };
        const topics = topicBreakdown.map(t => ({ topicId: t.topicId, total: t.total, correct: t.correct, wrong: t.wrong }));
        let { error } = await admin.from('examsathi_attempts').insert({ ...row, topic_breakdown: topics });
        // Before migration 202610110003 is applied the column does not exist; keep the attempt rather than lose it.
        if (error && (error.code === '42703' || error.code === 'PGRST204')) ({ error } = await admin.from('examsathi_attempts').insert(row));
        // A retry of the same attempt is not an error; the stored row is the first, server-scored one.
        stored = !error || error.code === '23505';
      }
    }

    return NextResponse.json({ success: true, stored, score: s, topicBreakdown, reveals }, { headers: { 'Cache-Control': 'no-store' } });
  });
}

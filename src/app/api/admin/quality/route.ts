import { NextRequest, NextResponse } from 'next/server';
import { fail } from '@/lib/api-route';
import { refreshEditorial } from '@/lib/editorial-loader';
import { clientIp, rateLimit } from '@/lib/rate-limit';
import { findQuestion } from '@/lib/question-service';
import { requireStaff, serviceClient } from '@/lib/server-auth';
import { analyzeQuestions, buildReport, MIN_ANSWERS, type AttemptSample } from '@/lib/question-quality';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Most recent attempts analysed. Bounds memory and keeps the report about current content, not last year's. */
const MAX_ATTEMPTS = 5000;
const PAGE = 1000;
const WINDOW_MS = 60 * 60 * 1000;

/**
 * Question quality report for reviewers and superadmins: questions that are probably mis-keyed, too hard,
 * too easy or mislabelled, computed from stored server-scored attempts. Read-only and aggregate-only:
 * no learner id or per-learner answer ever leaves this route.
 */
export async function GET(req: NextRequest) {
  const limited = rateLimit(`admin-quality:${clientIp(req)}`, 30, WINDOW_MS);
  if (!limited.ok) return fail('Too many requests. Try again later.', 429, { 'Retry-After': String(limited.retryAfter) });
  const staff = await requireStaff(req);
  if (!staff.ok) return staff.response;
  // Educators write content; judging it is the reviewers' job, and keeps authors from tuning to the statistics.
  if (staff.user.role === 'educator') return fail('Only reviewers and superadmins can see the quality report.', 403);
  const db = serviceClient();
  if (!db) return fail('The quality report is not configured.', 503);

  await refreshEditorial();

  const attempts: AttemptSample[] = [];
  for (let from = 0; from < MAX_ATTEMPTS; from += PAGE) {
    const { data, error } = await db.from('examsathi_attempts').select('total, correct, answers')
      .order('created_at', { ascending: false }).range(from, Math.min(from + PAGE, MAX_ATTEMPTS) - 1);
    if (error) return fail('Could not load attempts.', 500);
    for (const row of data ?? []) attempts.push({ total: row.total, correct: row.correct, answers: row.answers ?? {} });
    if ((data?.length ?? 0) < PAGE) break;
  }

  const report = buildReport(analyzeQuestions(attempts, id => {
    const q = findQuestion(id);
    return q && { correct: q.correct, difficulty: q.difficulty, topicId: q.topicId };
  }));

  return NextResponse.json({
    success: true,
    attemptsAnalysed: attempts.length,
    minAnswers: MIN_ANSWERS,
    report: {
      analysed: report.analysed,
      flagged: report.flagged,
      byFlag: report.byFlag,
      items: report.items.map(s => ({
        id: s.id, topicId: s.topicId, declaredDifficulty: s.declaredDifficulty, key: s.key, n: s.n,
        pCorrect: s.pCorrect, discrimination: s.discrimination, counts: s.counts, upperCounts: s.upperCounts, flags: s.flags,
      })),
    },
  }, { headers: { 'Cache-Control': 'no-store' } });
}

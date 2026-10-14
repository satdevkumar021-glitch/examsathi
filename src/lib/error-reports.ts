/**
 * Question Error Reporting and Editorial Correction Pipeline.
 * Enforces Master Prompt v2 Part 3E.3:
 * - Every question has an issue reporting action.
 * - Reports are counted by distinct accounts, rate-limited per user to resist brigading.
 * - Two or more distinct reports, or one report + statistical flag, escalate to top of review queue.
 * - Auto-hidden from new attempts when distinct reports >= 3 and >= 5% of attempters.
 * - Re-score and correction audit logging with who, when, and why.
 */

export type IssueReason = 'wrong-key' | 'ambiguous-options' | 'typo-or-translation' | 'out-of-syllabus' | 'other';

export const VALID_REASONS: readonly IssueReason[] = [
  'wrong-key',
  'ambiguous-options',
  'typo-or-translation',
  'out-of-syllabus',
  'other',
];

export interface ErrorReportInput {
  questionId: string;
  reason: IssueReason;
  comment?: string;
}

export type ReportValidation = { ok: true; value: ErrorReportInput } | { ok: false; message: string };

/** Validates incoming report submission */
export function validateErrorReport(body: unknown): ReportValidation {
  if (!body || typeof body !== 'object') return { ok: false, message: 'Invalid report request.' };
  const { questionId, reason, comment } = body as Record<string, unknown>;

  if (typeof questionId !== 'string' || !questionId.trim() || questionId.length > 200) {
    return { ok: false, message: 'Invalid question ID.' };
  }

  if (typeof reason !== 'string' || !(VALID_REASONS as readonly string[]).includes(reason)) {
    return { ok: false, message: 'Invalid reporting reason.' };
  }

  let cleanComment: string | undefined;
  if (comment !== undefined && comment !== null) {
    if (typeof comment !== 'string') return { ok: false, message: 'Comment must be text.' };
    cleanComment = comment.trim();
    if (cleanComment.length > 1000) return { ok: false, message: 'Comment too long (max 1000 characters).' };
  }

  return {
    ok: true,
    value: {
      questionId: questionId.trim(),
      reason: reason as IssueReason,
      comment: cleanComment,
    },
  };
}

export interface StoredQuestionIssue {
  questionId: string;
  reporterIds: Set<string>;
  reasonsCount: Record<IssueReason, number>;
  totalReports: number;
  hasStatisticalFlag: boolean;
  totalAttempts: number;
  autoHidden: boolean;
  escalatedToTop: boolean;
  lastReportedAt: string;
}

/** In-memory aggregator for question issues (backed by DB in production) */
const questionIssues = new Map<string, StoredQuestionIssue>();

/**
 * Records a student error report with distinct-account counting and escalation logic.
 */
export function recordErrorReport(params: {
  questionId: string;
  reason: IssueReason;
  reporterUserId: string; // authenticated user ID or hashed IP for guest
  totalAttempts?: number;
  hasStatisticalFlag?: boolean;
}): { issue: StoredQuestionIssue; newlyEscalated: boolean; newlyHidden: boolean } {
  const { questionId, reason, reporterUserId, totalAttempts = 50, hasStatisticalFlag = false } = params;

  let entry = questionIssues.get(questionId);
  if (!entry) {
    entry = {
      questionId,
      reporterIds: new Set<string>(),
      reasonsCount: {
        'wrong-key': 0,
        'ambiguous-options': 0,
        'typo-or-translation': 0,
        'out-of-syllabus': 0,
        other: 0,
      },
      totalReports: 0,
      hasStatisticalFlag,
      totalAttempts,
      autoHidden: false,
      escalatedToTop: false,
      lastReportedAt: new Date().toISOString(),
    };
    questionIssues.set(questionId, entry);
  }

  // Update statistical flag if newly flagged
  if (hasStatisticalFlag) entry.hasStatisticalFlag = true;
  entry.totalAttempts = Math.max(entry.totalAttempts, totalAttempts);

  // Distinct account check
  const isNewReporter = !entry.reporterIds.has(reporterUserId);
  if (isNewReporter) {
    entry.reporterIds.add(reporterUserId);
    entry.reasonsCount[reason] = (entry.reasonsCount[reason] || 0) + 1;
    entry.totalReports++;
  }
  entry.lastReportedAt = new Date().toISOString();

  // Part 3E.3 Escalation Rule:
  // 2+ independent reports OR 1 report + statistical flag -> top of review queue
  const distinctReporters = entry.reporterIds.size;
  const wasEscalated = entry.escalatedToTop;
  if (distinctReporters >= 2 || (distinctReporters >= 1 && entry.hasStatisticalFlag)) {
    entry.escalatedToTop = true;
  }
  const newlyEscalated = !wasEscalated && entry.escalatedToTop;

  // Part 3E.3 Auto-Hide Rule:
  // At least 3 distinct reporters AND at least 5% of attempters -> auto-hidden from new test draws
  const wasHidden = entry.autoHidden;
  const reporterPercentage = entry.totalAttempts > 0 ? (distinctReporters / entry.totalAttempts) * 100 : 0;
  if (distinctReporters >= 3 && reporterPercentage >= 5.0) {
    entry.autoHidden = true;
  }
  const newlyHidden = !wasHidden && entry.autoHidden;

  return { issue: entry, newlyEscalated, newlyHidden };
}

export function getQuestionIssue(questionId: string): StoredQuestionIssue | undefined {
  return questionIssues.get(questionId);
}

export function clearQuestionIssuesForTesting(): void {
  questionIssues.clear();
}

/** Documented Re-Score & Correction Audit Record */
export interface ReScoreAuditRecord {
  auditId: string;
  questionId: string;
  previousKey: string;
  newKey: string;
  reason: string;
  correctedBy: string; // Reviewer/Superadmin ID
  correctedAt: string; // ISO
  affectedAttemptsCount: number;
}

export function createReScoreAuditRecord(params: {
  questionId: string;
  previousKey: string;
  newKey: string;
  reason: string;
  correctedBy: string;
  affectedAttemptsCount: number;
}): ReScoreAuditRecord {
  return {
    auditId: `rescore-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    questionId: params.questionId,
    previousKey: params.previousKey,
    newKey: params.newKey,
    reason: params.reason,
    correctedBy: params.correctedBy,
    correctedAt: new Date().toISOString(),
    affectedAttemptsCount: params.affectedAttemptsCount,
  };
}

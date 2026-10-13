import { apiUrl } from './paths';
import { createClient } from './supabase/client';
import type { FlagKind, Letter } from './question-quality';

export interface QualityItem {
  id: string;
  topicId: string;
  declaredDifficulty: 'easy' | 'medium' | 'hard';
  key: Letter;
  n: number;
  pCorrect: number;
  discrimination: number | null;
  counts: Record<Letter, number>;
  upperCounts: Record<Letter, number>;
  flags: FlagKind[];
}

export interface QualityReportResponse {
  attemptsAnalysed: number;
  minAnswers: number;
  report: { analysed: number; flagged: number; byFlag: Record<FlagKind, number>; items: QualityItem[] };
}

/** Reviewer/superadmin only; the server enforces it. */
export async function loadQualityReport(): Promise<QualityReportResponse> {
  const { data } = await createClient().auth.getSession();
  if (!data.session) throw new Error('Sign in to continue.');
  let response: Response;
  try {
    response = await fetch(apiUrl('/api/admin/quality/'), { headers: { Authorization: `Bearer ${data.session.access_token}` }, signal: AbortSignal.timeout(60000) });
  } catch {
    throw new Error('Could not reach the server. Check your connection and try again.');
  }
  const json = await response.json().catch(() => null);
  if (!response.ok || !json?.success) throw new Error(json?.message || 'Request failed.');
  return json as QualityReportResponse;
}

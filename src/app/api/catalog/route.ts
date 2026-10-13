import { NextResponse } from 'next/server';
import { AVAILABLE_EXAMS, getExamTopics } from '@/lib/data/exam-catalog';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** Public exam and syllabus catalog. Built from the client-safe catalog only: no questions, no answers. */
export function GET() {
  const exams = AVAILABLE_EXAMS.map(exam => ({
    id: exam.id,
    name: exam.name,
    namePa: exam.namePa,
    body: exam.body,
    defaultQuestions: exam.defaultQuestions,
    timeLimitMinutes: exam.timeLimitMinutes,
    negativeMarking: exam.negativeMarking,
    syllabusSummary: exam.syllabusSummary,
    topics: getExamTopics(exam.id).map(topic => ({ id: topic.id, name: topic.name, namePa: topic.namePa, subject: topic.subject })),
  }));
  return NextResponse.json({ success: true, exams }, { headers: { 'Cache-Control': 'public, max-age=300' } });
}

import { ALL_EXAMS } from '@/lib/data/exams';
import { ALL_TOPIC_IDS } from '@/lib/data/curriculum';
import { ALL_LESSONS, TOPIC_ALIASES } from '@/lib/data/lessons';
import { TOPIC_FAMILIES } from '@/lib/data/topic-scope';
import { Suspense } from 'react';
import MockTestClient from './MockTestClient';
import { AVAILABLE_TEST_TOPICS } from '@/lib/data/question_bank_engine';

export function generateStaticParams() {
  const baseParams = [
    { testId: '1' },
    { testId: '2' },
    { testId: '3' },
    { testId: 'custom' },
    { testId: 'punjab-master-cadre' },
    { testId: 'punjab-master-cadre-sst' },
    { testId: 'punjab-master-cadre-science' },
    { testId: 'punjab-ett' },
    { testId: 'punjab-clerk' },
    { testId: 'ppsc-clerk' },
    { testId: 'punjab-gk-punjabi' },
    { testId: 'reet-level2-sst' },
    { testId: 'clerk' },
    { testId: 'patwari' },
    { testId: 'topic-all' },
    { testId: 'topic-ai-custom' },
  ];

  const topicParams = AVAILABLE_TEST_TOPICS.map(t => ({
    testId: `topic-${t.id}`,
  }));

  return Array.from(new Set([...baseParams, ...topicParams, ...[...ALL_TOPIC_IDS, ...Object.values(ALL_EXAMS).flat().flatMap(exam => exam.subjects.flatMap(subject => subject.chapters.flatMap(chapter => chapter.topics.map(topic => topic.id)))), ...Object.keys(ALL_LESSONS), ...Object.keys(TOPIC_ALIASES), ...Object.keys(TOPIC_FAMILIES)].map(id => ({ testId: `topic-${id}` }))].map(p => p.testId))).map(testId => ({ testId }));
}

export default async function MockTestPage({ params }: { params: Promise<{ testId: string }> }) {
  const resolved = await params;
  return <Suspense fallback={<p role="status">Loading practice…</p>}><MockTestClient testId={resolved.testId} /></Suspense>;
}

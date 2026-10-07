import { ALL_TOPIC_IDS } from '@/lib/data/curriculum';
import { ALL_LESSONS, TOPIC_ALIASES } from '@/lib/data/lessons';
import MockTestClient from './MockTestClient';
import { AVAILABLE_TEST_TOPICS } from '@/lib/data/question_bank_engine';

export function generateStaticParams() {
  const baseParams = [
    { testId: '1' },
    { testId: '2' },
    { testId: '3' },
    { testId: 'punjab-master-cadre' },
    { testId: 'clerk' },
    { testId: 'patwari' },
    { testId: 'topic-all' },
    { testId: 'topic-ai-custom' },
  ];

  const topicParams = AVAILABLE_TEST_TOPICS.map(t => ({
    testId: `topic-${t.id}`,
  }));

  return Array.from(new Set([...baseParams, ...topicParams, ...[...ALL_TOPIC_IDS, ...Object.keys(ALL_LESSONS), ...Object.keys(TOPIC_ALIASES)].map(id => ({ testId: `topic-${id}` }))].map(p => p.testId))).map(testId => ({ testId }));
}

export default async function MockTestPage({ params }: { params: Promise<{ testId: string }> }) {
  const resolved = await params;
  return <MockTestClient testId={resolved.testId} />;
}

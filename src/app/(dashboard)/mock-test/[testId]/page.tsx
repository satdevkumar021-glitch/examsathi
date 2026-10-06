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

  return [...baseParams, ...topicParams];
}

export default async function MockTestPage({ params }: { params: Promise<{ testId: string }> }) {
  const resolved = await params;
  return <MockTestClient testId={resolved.testId} />;
}

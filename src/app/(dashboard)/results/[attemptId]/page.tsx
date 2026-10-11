import ResultsClient from './ResultsClient';
import { AVAILABLE_TEST_TOPICS } from '@/lib/data/question_bank_engine';

export function generateStaticParams() {
  const baseParams = [
    { attemptId: '1' },
    { attemptId: '2' },
    { attemptId: '3' },
    { attemptId: 'latest' },
    { attemptId: 'default' },
    { attemptId: 'punjab-master-cadre' },
    { attemptId: 'punjab-master-cadre-sst' },
    { attemptId: 'reet-level2-sst' },
    { attemptId: 'clerk' },
    { attemptId: 'patwari' },
    { attemptId: 'topic-all' },
    { attemptId: 'topic-ai-custom' },
  ];

  const topicParams = AVAILABLE_TEST_TOPICS.map(t => ({
    attemptId: `topic-${t.id}`,
  }));

  return [...baseParams, ...topicParams];
}

export default function ResultsPage() {
  return <ResultsClient />;
}

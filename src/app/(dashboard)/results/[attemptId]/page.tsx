import ResultsClient from './ResultsClient';

export function generateStaticParams() {
  return [
    { attemptId: '1' },
    { attemptId: 'latest' },
    { attemptId: 'default' },
  ];
}

export default function ResultsPage() {
  return <ResultsClient />;
}

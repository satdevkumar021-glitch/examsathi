import MockTestClient from './MockTestClient';

export function generateStaticParams() {
  return [
    { testId: '1' },
    { testId: '2' },
    { testId: '3' },
    { testId: 'punjab-master-cadre' },
    { testId: 'clerk' },
    { testId: 'patwari' },
  ];
}

export default async function MockTestPage({ params }: { params: Promise<{ testId: string }> }) {
  const resolved = await params;
  return <MockTestClient testId={resolved.testId} />;
}

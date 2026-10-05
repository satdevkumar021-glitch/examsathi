import StateExamsClient from './StateExamsClient';

export function generateStaticParams() {
  return [
    { state: 'punjab' },
    { state: 'rajasthan' },
    { state: 'central' },
  ];
}

export default async function StateExamsPage({ params }: { params: Promise<{ state: string }> }) {
  const resolved = await params;
  return <StateExamsClient state={resolved.state} />;
}

import StateExamsClient from './StateExamsClient';
import { STATES_CATALOG } from '@/lib/data/exams';

export function generateStaticParams() {
  return STATES_CATALOG.map(s => ({ state: s.id }));
}

export default async function StateExamsPage({ params }: { params: Promise<{ state: string }> }) {
  const resolved = await params;
  return <StateExamsClient state={resolved.state} />;
}

import { ALL_LESSONS } from '@/lib/data/lessons';
import LessonViewClient from './LessonViewClient';

export function generateStaticParams() {
  return Object.keys(ALL_LESSONS).map(topicId => ({ topicId }));
}

export default async function LessonPage({ params }: { params: Promise<{ topicId: string }> }) {
  const resolved = await params;
  return <LessonViewClient topicId={resolved.topicId} />;
}

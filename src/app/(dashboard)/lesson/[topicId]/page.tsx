import { ALL_LESSONS, TOPIC_ALIASES } from '@/lib/data/lessons';
import LessonViewClient from './LessonViewClient';

export function generateStaticParams() {
  const slugs = new Set([
    ...Object.keys(ALL_LESSONS),
    ...Object.keys(TOPIC_ALIASES),
    'ett-child-pedagogy',
    'psssb-computer-it',
    'child-development-pedagogy',
    'computer-awareness',
    'punjabi-clerk-prep',
    'ett-evs-science',
  ]);
  return Array.from(slugs).map(topicId => ({ topicId }));
}

export default async function LessonPage({ params }: { params: Promise<{ topicId: string }> }) {
  const resolved = await params;
  return <LessonViewClient topicId={resolved.topicId} />;
}

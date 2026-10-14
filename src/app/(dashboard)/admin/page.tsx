import { ALL_LESSONS } from '@/lib/data/lessons';
import AdminResourcePortal, { type AdminTopic } from './AdminClient';

export default function AdminPage() {
  // The topic picker only needs id/title/category; build it here so the lesson bank never ships to the browser.
  const entries: AdminTopic[] = Object.entries(ALL_LESSONS).map(([key, lesson]) => ({
    id: lesson.id || key,
    titleHi: lesson.title?.hi || lesson.id,
    titleEn: lesson.title?.en || lesson.id,
    category: lesson.category || 'General',
    relevance: lesson.examRelevance || 'All Exams',
  }));
  const uniqueTopics = Array.from(new Map(entries.map(item => [item.id, item])).values());
  return <AdminResourcePortal uniqueTopics={uniqueTopics} />;
}

import { SYLLABUS_TOPICS } from '@/lib/data/curriculum';
import { getLessonByTopicId } from '@/lib/data/lessons';
import StudyRoadmap from './RoadmapClient';

export default function RoadmapPage() {
  // Resolve lesson availability here so the lesson bank itself never ships to the browser.
  const lessonInfo: Record<string, { provenance?: string }> = {};
  for (const id of new Set(SYLLABUS_TOPICS.map(entry => entry.topic.id))) {
    const lesson = getLessonByTopicId(id);
    if (lesson) lessonInfo[id] = { provenance: lesson.editorialRecord?.verifiedSyllabusDenominator || lesson.examRelevance };
  }
  return <StudyRoadmap lessonInfo={lessonInfo} />;
}

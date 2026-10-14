import EttSyllabus from './EttSyllabus';
import { ETT_MAPPED_GROUPS, ETT_SCIENCE_UNITS } from '@/lib/data/ett-syllabus';
import { getLessonByTopicId } from '@/lib/data/lessons';

export default function Page() {
  // Resolve lesson availability here so the lesson bank never ships to the browser.
  const ids = [
    ...ETT_MAPPED_GROUPS.flatMap((g) => g.units.map((u) => u.id)),
    ...ETT_SCIENCE_UNITS.map(([id]) => `ett-science-${id}`),
  ];
  return <EttSyllabus lessonTopicIds={ids.filter((id) => getLessonByTopicId(id))} />;
}

import { ALL_EXAMS } from './exams';
export const SYLLABUS_TOPICS = Object.values(ALL_EXAMS).flatMap(exams => exams.flatMap(exam => exam.subjects.flatMap(subject => subject.chapters.flatMap(chapter => chapter.topics.map(topic => ({ exam, subject, chapter, topic }))))));
export const ALL_TOPIC_IDS = Array.from(new Set(SYLLABUS_TOPICS.map(entry => entry.topic.id)));

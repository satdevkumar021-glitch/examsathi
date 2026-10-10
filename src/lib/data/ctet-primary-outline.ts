import type { Subject } from './exams';
/** Concise preparation outline aligned to CTET Sept 2026 bulletin Appendix I.
 * Full detail remains at the publisher; outline presence does not imply lesson completion.
 */
export const CTET_PRIMARY_SOURCE = 'https://ctet.nic.in/document/ctet-sept-2026-information-bulletin/';
const subject = (id: string, name: string, hi: string, topicId: string, subtopics: string[]): Subject => ({
  id, name, nameHindi: hi, emoji: '📚', chapters: [{ id: `${id}-core`, name, nameHindi: hi,
    topics: [{ id: topicId, name, nameHindi: hi, difficulty: 'medium', examQuestions: '30', subtopics }] }],
});
export const CTET_PRIMARY_SUBJECTS: Subject[] = [
  subject('child-development', 'Child development & pedagogy', 'बाल विकास व शिक्षाशास्त्र', 'child-development-pedagogy', ['Development, individual differences, inclusion, learning and assessment']),
  subject('primary-math', 'Primary mathematics & teaching', 'प्राथमिक गणित व शिक्षण', 'primary-mathematics', ['Numbers and operations, shapes, measurement, time, money, patterns and data', 'Mathematical reasoning, errors, assessment and remedial teaching']),
  subject('primary-evs', 'Environmental studies & teaching', 'पर्यावरण अध्ययन व शिक्षण', 'primary-environmental-studies', ['Family, plants, animals, food, shelter, water, travel and making things', 'Integrated enquiry, practical activities, learning materials and assessment']),
  subject('language-one', 'Language I', 'भाषा I', 'primary-language-one', ['Reading comprehension and language teaching; choose your exam language']),
  subject('language-two', 'Language II', 'भाषा II', 'primary-language-two', ['Comprehension, communication and language teaching; choose a different language']),
];

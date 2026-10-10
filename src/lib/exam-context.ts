import { ALL_EXAMS } from './data/exams';
/** Explicit legacy route aliases. Unmapped exams never fall back to another exam. */
export const PRACTICE_EXAM_ALIASES: Record<string, string> = {
  'master-cadre-sst': 'punjab-master-cadre', 'clerk-psssb': 'punjab-clerk',
  'ett-punjab': 'punjab-ett', 'police-punjab': 'punjab-police',
  'patwari-punjab': 'punjab-patwari', 'reet-l2': 'reet-level2',
  'ctet-p1': 'ctet-paper1', 'ctet-p2': 'ctet-paper2', 'pstet-l2': 'punjab-pstet',
  'delhi-police': 'delhi-police-constable',
};
export const normalizePracticeExamId = (id: string) => PRACTICE_EXAM_ALIASES[id] || id;
export function practiceExam(id: string) {
  return Object.values(ALL_EXAMS).flat().find(exam => exam.id === normalizePracticeExamId(id));
}

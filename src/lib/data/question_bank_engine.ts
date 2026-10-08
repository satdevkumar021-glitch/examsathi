import confirmedEquivalences from './confirmed-question-equivalences.json';
import { generateLandMeasurementPractice } from './land-measurement-practice';
import { generateReasoningPractice } from './reasoning-practice';
import { topicSourceIds, topicIncludes, canonicalTopicId } from './topic-scope';
// ============================================================
// ExamSathi - Scalable Question Bank & Dynamic Generator Engine
// Uses a finite, deduplicated topic pool with historical labels under review,
// 50-Question Sets, Difficulty Filters (Simple/Mid/Hard), and Rank Engine
// ============================================================

import { ALL_EXAMS } from './exams';
import { normalizePracticeExamId, practiceExam } from '../exam-context';
import { generateQuantPractice } from './quant-practice';
import { ALL_QUESTIONS, Question } from './questions';
import { getLessonByTopicId } from './lessons';
import { MASTER_CADRE_10YR_PYQS } from './questions/master_cadre_pyqs';
import { TWENTY_YEAR_EXAM_PYQS } from './questions/twenty_year_pyqs';

export interface UserPerformanceLevel {
  level: number;
  title: string;
  titlePa: string;
  badge: string;
  percentile: string;
  status: 'exam_ready' | 'advanced' | 'intermediate' | 'developing' | 'foundation';
  description: string;
  descriptionPa: string;
  recommendations: string[];
}

export interface TestConfig {
  testId?: string;
  topicId?: string;
  subjectId?: string;
  examId?: string; // 'master-cadre-sst' | 'clerk-psssb' | 'police-punjab' | 'patwari-punjab' | 'reet-l2' | 'ctet-p2' | 'all'
  difficulty?: 'all' | 'easy' | 'medium' | 'hard';
  title?: string;
  titlePa?: string;
  count: number; // default 50
  timeLimitMinutes: number;
  negativeMarking: number; // e.g. 0.25
  pyqOnly?: boolean;
  pyq20Years?: boolean; // 2004-2024 archive
  mode: 'exam' | 'flip'; // Live MCQ vs 3D Flipcard mode
}

export interface ExamInfo {
  id: string;
  name: string;
  namePa: string;
  body: string;
  badge: string;
  defaultQuestions: number;
  timeLimitMinutes: number;
  negativeMarking: number;
  syllabusSummary: string;
  syllabusSummaryPa: string;
  pyqSpan: string;
}

const LEGACY_EXAMS: ExamInfo[] = [
  {
    id: 'master-cadre-sst',
    name: 'Punjab Master Cadre (Social Studies)',
    namePa: 'ਪੰਜਾਬ ਮਾਸਟਰ ਕੈਡਰ (ਸਮਾਜਿਕ ਸਿੱਖਿਆ)',
    body: 'Education Recruitment Board, Punjab',
    badge: '🌾 ERB Punjab',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.25,
    syllabusSummary: 'Punjab & World History, Indian Constitution, Physical Geography, Indian Economy & Banking',
    syllabusSummaryPa: 'ਇਤਿਹਾਸ, ਨਾਗਰਿਕ ਸ਼ਾਸਤਰ, ਭੂਗੋਲ ਅਤੇ ਅਰਥ ਸ਼ਾਸਤਰ ਦਾ ਸੰਪੂਰਨ ਸਿਲੇਬਸ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'clerk-psssb',
    name: 'PSSSB Clerk & Senior Assistant',
    namePa: 'ਪੀ.ਐਸ.ਐਸ.ਐਸ.ਬੀ. ਕਲਰਕ ਅਤੇ ਸੀਨੀਅਰ ਸਹਾਇਕ',
    body: 'Punjab Subordinate Services Selection Board',
    badge: '💼 PSSSB Gov',
    defaultQuestions: 150,
    timeLimitMinutes: 120,
    negativeMarking: 0.25,
    syllabusSummary: 'Paper A: Punjabi (25 Qs) | Paper B: English (25 Qs) | GK & Punjab Current Affairs (25 Qs) | Computer/IT (25 Qs) | Reasoning (25 Qs) | Mathematics (25 Qs) — Total 150 Qs, 2 hours',
    syllabusSummaryPa: 'ਜੀ.ਕੇ., ਪੰਜਾਬ ਸੱਭਿਆਚਾਰ, ਕੰਪਿਊਟਰ ਆਈ.ਟੀ., ਪੰਜਾਬੀ ਅਤੇ ਰੀਜ਼ਨਿੰਗ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'ett-punjab',
    name: 'Punjab ETT Cadre (6635 / 5994 Posts) & PSTET P1',
    namePa: 'ਪੰਜਾਬ ਈ.ਟੀ.ਟੀ. ਕੈਡਰ (6635/5994) ਅਤੇ ਪੀਸਟੈੱਟ 1',
    body: 'Department of School Education, Punjab (ERD)',
    badge: '👶 ETT Punjab',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.25,
    syllabusSummary: 'Child Development & Pedagogy, Primary Mathematics, EVS & Punjab Ecology, Punjabi Vyakaran, General Science',
    syllabusSummaryPa: 'ਬਾਲ ਮਨੋਵਿਗਿਆਨ, ਈ.ਵੀ.ਐਸ., ਗਣਿਤ ਅਤੇ ਪੰਜਾਬੀ ਵਿਆਕਰਨ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'police-punjab',
    name: 'Punjab Police Constable & SI',
    namePa: 'ਪੰਜਾਬ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ ਅਤੇ ਸਬ-ਇੰਸਪੈਕਟਰ',
    body: 'Punjab Police Recruitment Board',
    badge: '👮 Police Recruitment',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.25,
    syllabusSummary: 'General Awareness, Constitution, Punjab Police Law & Bharatiya Nyaya Sanhita, Quantitative Aptitude',
    syllabusSummaryPa: 'ਕਾਨੂੰਨ ਤੇ ਸੰਵਿਧਾਨ, ਜਨਰਲ ਅਵੇਅਰਨੈੱਸ, ਮੈਥ ਅਤੇ ਰੀਜ਼ਨਿੰਗ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'patwari-punjab',
    name: 'Punjab Revenue Patwari',
    namePa: 'ਪੰਜਾਬ ਮਾਲ ਪਟਵਾਰੀ',
    body: 'Director of Land Records / PSSSB',
    badge: '🗺️ Land Records',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.25,
    syllabusSummary: 'Land Revenue Measurements (Karam, Marla, Kanal), Agriculture Economics, Accounts, Punjab GK',
    syllabusSummaryPa: 'ਜ਼ਮੀਨੀ ਪੈਮਾਇਸ਼ (ਕਰਮ, ਮਰਲਾ, ਕਨਾਲ), ਖੇਤੀਬਾੜੀ ਅਤੇ ਲੇਖਾ ਜੋਖਾ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'reet-l2',
    name: 'REET Level 2 & 3rd Grade Teacher',
    namePa: 'ਰੀਟ (REET) ਲੈਵਲ 2 ਅਧਿਆਪਕ',
    body: 'Rajasthan Board (RBSE) / RSMSSB',
    badge: '🏜️ Rajasthan Board',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.33,
    syllabusSummary: 'Child Development & Pedagogy, Rajasthan Heritage, Subject Specialization, Teaching Methodology',
    syllabusSummaryPa: 'ਬਾਲ ਮਨੋਵਿਗਿਆਨ, ਰਾਜਸਥਾਨ ਜੀ.ਕੇ. ਅਤੇ ਅਧਿਆਪਨ ਵਿਧੀਆਂ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'ctet-p2',
    name: 'CTET Paper 2 (Elementary Stage)',
    namePa: 'ਸੀ.ਟੈੱਟ (CTET) ਪੇਪਰ 2',
    body: 'Central Board of Secondary Education (CBSE)',
    badge: '🏛️ Central CBSE',
    defaultQuestions: 50,
    timeLimitMinutes: 50,
    negativeMarking: 0.0,
    syllabusSummary: 'Child Development (Piaget, Vygotsky, Kohlberg), Social Studies, Language Pedagogy',
    syllabusSummaryPa: 'ਸੀ.ਡੀ.ਪੀ., ਸਮਾਜਿਕ ਅਧਿਐਨ ਅਤੇ ਭਾਸ਼ਾ ਪੈਡਾਗੋਜੀ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'pstet-l2',
    name: 'PSTET Level 2 (Classes 6-8, Master Cadre Eligibility)',
    namePa: 'ਪੀ.ਐਸ.ਟੈੱਟ ਲੈਵਲ 2 (ਕਲਾਸ 6-8)',
    body: 'Punjab School Education Board (PSEB)',
    badge: '📚 PSEB Punjab',
    defaultQuestions: 150,
    timeLimitMinutes: 150,
    negativeMarking: 0,
    syllabusSummary: 'Child Development & Pedagogy (30 Qs), Language I Punjabi (30 Qs), Language II Hindi/English (30 Qs), Subject Specialization SST/Science/Maths/Language (60 Qs)',
    syllabusSummaryPa: 'ਬਾਲ ਵਿਕਾਸ, ਪੰਜਾਬੀ, ਦੂਜੀ ਭਾਸ਼ਾ ਅਤੇ ਵਿਸ਼ਾ ਵਿਸ਼ੇਸ਼ੀਕਰਣ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'ctet-p1',
    name: 'CTET Paper 1 (Primary Stage, Classes 1-5)',
    namePa: 'ਸੀ.ਟੈੱਟ ਪੇਪਰ 1 (ਕਲਾਸ 1-5)',
    body: 'Central Board of Secondary Education (CBSE)',
    badge: '🏛️ CBSE Central',
    defaultQuestions: 150,
    timeLimitMinutes: 150,
    negativeMarking: 0,
    syllabusSummary: 'Child Development & Pedagogy (30 Qs), Language I (30 Qs), Language II (30 Qs), Mathematics (30 Qs), Environmental Studies (30 Qs)',
    syllabusSummaryPa: 'ਬਾਲ ਵਿਕਾਸ, ਭਾਸ਼ਾਵਾਂ, ਗਣਿਤ ਅਤੇ ਵਾਤਾਵਰਨ ਅਧਿਐਨ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'htet-l1',
    name: 'HTET Level 1 (PRT — Primary Teacher, Classes 1-5)',
    namePa: 'ਐਚ.ਟੈੱਟ ਲੈਵਲ 1 (ਪ੍ਰਾਇਮਰੀ ਅਧਿਆਪਕ)',
    body: 'Board of School Education Haryana (BSEH)',
    badge: '🏖️ BSEH Haryana',
    defaultQuestions: 150,
    timeLimitMinutes: 150,
    negativeMarking: 0,
    syllabusSummary: 'Child Development & Pedagogy (30 Qs), Hindi (30 Qs), English (30 Qs), Mathematics (30 Qs), EVS (30 Qs) — Haryana GK integrated',
    syllabusSummaryPa: 'ਬਾਲ ਵਿਕਾਸ, ਹਿੰਦੀ, ਅੰਗਰੇਜ਼ੀ, ਗਣਿਤ ਤੇ ਵਾਤਾਵਰਨ ਅਧਿਐਨ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'ssc-mts',
    name: 'SSC MTS (Multi Tasking Staff) & Havaldar',
    namePa: 'ਐਸ.ਐਸ.ਸੀ. ਮਲਟੀ ਟਾਸਕਿੰਗ ਸਟਾਫ',
    body: 'Staff Selection Commission',
    badge: '🏛️ SSC Central',
    defaultQuestions: 100,
    timeLimitMinutes: 90,
    negativeMarking: 0,
    syllabusSummary: 'Session 1: Mathematical & Reasoning Ability (Session 1), Language & Comprehension (Session 2) — Post 10th pass',
    syllabusSummaryPa: 'ਗਣਿਤ, ਰੀਜ਼ਨਿੰਗ ਅਤੇ ਭਾਸ਼ਾ ਸਮਝ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'ssc-cgl',
    name: 'SSC CGL & CHSL (Central Recruitments)',
    namePa: 'ਐਸ.ਐਸ.ਸੀ. ਸੀ.ਜੀ.ਐਲ. ਤੇ ਸੀ.ਐਚ.ਐਸ.ਐਲ.',
    body: 'Staff Selection Commission (SSC)',
    badge: '🏆 Central SSC',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.50,
    syllabusSummary: 'General Studies, Indian Constitution, Modern History, Quantitative Aptitude & Reasoning',
    syllabusSummaryPa: 'ਜਨਰਲ ਸਟੱਡੀਜ਼, ਭਾਰਤੀ ਸੰਵਿਧਾਨ, ਆਧੁਨਿਕ ਇਤਿਹਾਸ ਤੇ ਮੈਥ-ਰੀਜ਼ਨਿੰਗ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'haryana-htet',
    name: 'Haryana HTET & Police Constable',
    namePa: 'ਹਰਿਆਣਾ ਐਚ.ਟੈੱਟ ਅਤੇ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ',
    body: 'BSEH Bhiwani / HSSC Panchkula',
    badge: '⚡ Haryana State',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.0,
    syllabusSummary: 'Child Development, Haryana GK & Rakhigarhi, General Science, Agriculture & Reasoning',
    syllabusSummaryPa: 'ਬਾਲ ਵਿਕਾਸ, ਹਰਿਆਣਾ ਜੀ.ਕੇ., ਜਨਰਲ ਸਾਇੰਸ ਤੇ ਖੇਤੀਬਾੜੀ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'delhi-police',
    name: 'Delhi Police Constable & CAPF GD',
    namePa: 'ਦਿੱਲੀ ਪੁਲਿਸ ਕਾਂਸਟੇਬਲ ਤੇ CAPF ਜੀ.ਡੀ.',
    body: 'Delhi Police / SSC / MHA',
    badge: '👮 Delhi & Forces',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.25,
    syllabusSummary: 'Delhi History & Culture, General Awareness, Numerical Ability & Computer Fundamentals',
    syllabusSummaryPa: 'ਦਿੱਲੀ ਇਤਿਹਾਸ, ਜਨਰਲ ਅਵੇਅਰਨੈੱਸ, ਮੈਥ ਅਤੇ ਕੰਪਿਊਟਰ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
  {
    id: 'army-agniveer',
    name: 'Indian Army Agniveer GD & Clerk',
    namePa: 'ਭਾਰਤੀ ਫੌਜ ਅਗਨੀਵੀਰ ਜੀ.ਡੀ. ਤੇ ਕਲਰਕ',
    body: 'Join Indian Army Recruitment HQ',
    badge: '🎖️ Indian Army',
    defaultQuestions: 50,
    timeLimitMinutes: 45,
    negativeMarking: 0.50,
    syllabusSummary: 'Military General Knowledge, Honours, General Science, Elementary Math & English Grammar',
    syllabusSummaryPa: 'ਮਿਲਟਰੀ ਜੀ.ਕੇ., ਜਨਰਲ ਸਾਇੰਸ, ਮੈਥ ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਵਿਆਕਰਨ',
    pyqSpan: 'Legacy archive · provenance under review',
  },
];

export interface TopicMeta {
  id: string;
  name: string;
  namePa: string;
  subject: string;
  questionCount: string;
  examWeightage: string;
  isPYQRich: boolean;
}

export const AVAILABLE_EXAMS: ExamInfo[] = Object.values(ALL_EXAMS).flat().map(exam => {
  const legacy = LEGACY_EXAMS.find(item => normalizePracticeExamId(item.id) === exam.id);
  return { ...legacy, id: exam.id, name: exam.name, namePa: exam.namePunjabi || exam.name,
    body: exam.body, badge: exam.emoji, defaultQuestions: 50, timeLimitMinutes: 45,
    negativeMarking: typeof exam.negativeMarking === 'number' ? exam.negativeMarking : 0,
    syllabusSummary: exam.subjects.map(s => s.name).join(', '),
    syllabusSummaryPa: exam.subjects.map(s => s.namePunjabi || s.nameHindi).join(', '),
    pyqSpan: 'Practice coverage incomplete • source labels under review' };
});

export function getExamTopics(examId: string): TopicMeta[] {
  const exam = practiceExam(examId);
  if (!exam) return [];
  return exam.subjects.flatMap(subject => subject.chapters.flatMap(chapter => chapter.topics.map(topic => ({
    id: topic.id, name: topic.name, namePa: topic.namePunjabi || topic.nameHindi,
    subject: subject.name, questionCount: 'See availability', examWeightage: 'Not certified', isPYQRich: false,
  }))));
}

export const AVAILABLE_TEST_TOPICS: TopicMeta[] = [
  // ETT Punjab & Pedagogy Tracks
  { id: 'ett-child-pedagogy', name: 'ETT Child Development & Pedagogy (Piaget, Vygotsky, RTE 2009)', namePa: 'ਈ.ਟੀ.ਟੀ. ਬਾਲ ਵਿਕਾਸ ਤੇ ਸਿੱਖਿਆ ਸ਼ਾਸਤਰ', subject: 'Teaching', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'ett-evs-science', name: 'ETT Environmental Studies & Punjab Ecology (EVS)', namePa: 'ਈ.ਟੀ.ਟੀ. ਵਾਤਾਵਰਨ ਅਧਿਐਨ (EVS)', subject: 'Teaching', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'ett-primary-math', name: 'ETT Primary Mathematics & Teaching Methodology', namePa: 'ਈ.ਟੀ.ਟੀ. ਪ੍ਰਾਇਮਰੀ ਗਣਿਤ', subject: 'Teaching', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },

  // PSSSB Clerk Tracks
  { id: 'psssb-computer-it', name: 'PSSSB Clerk Computer & IT (MS Office, Shortcuts, IPv4/6, Networking)', namePa: 'ਕੰਪਿਊਟਰ ਗਿਆਨ ਤੇ ਆਈ.ਟੀ. ਸ਼ਾਰਟਕੱਟ', subject: 'Clerk', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'psssb-raavi-typing', name: 'PSSSB Raavi Typing Unicode Rules & Paper A Punjabi Grammar', namePa: 'ਰਾਵੀ ਟਾਈਪਿੰਗ ਨਿਯਮ ਤੇ ਪੇਪਰ ਏ', subject: 'Clerk', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },

  // History & Punjab
  { id: 'punjab-history', name: 'Punjab History (10 Sikh Gurus, Banda Singh, Ranjit Singh)', namePa: 'ਪੰਜਾਬ ਦਾ ਇਤਿਹਾਸ ਤੇ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ', subject: 'History', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'modern-india', name: 'Modern India (1757 - 1947 & Freedom Struggle)', namePa: 'ਆਧੁਨਿਕ ਭਾਰਤ ਦਾ ਇਤਿਹਾਸ', subject: 'History', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'ancient-india', name: 'Ancient India (Indus Valley, Vedic, Maurya, Gupta)', namePa: 'ਪ੍ਰਾਚੀਨ ਭਾਰਤ ਤੇ ਹੜੱਪਾ ਸਭਿਅਤਾ', subject: 'History', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'medieval-india', name: 'Medieval India (Delhi Sultanate, Mughals, Bhakti & Sufi)', namePa: 'ਮੱਧਕਾਲੀਨ ਭਾਰਤ ਤੇ ਮੁਗਲ ਸਾਮਰਾਜ', subject: 'History', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'world-history', name: 'World History (Renaissance, Revolutions, WWI/II, UNO)', namePa: 'ਵਿਸ਼ਵ ਇਤਿਹਾਸ ਤੇ ਕ੍ਰਾਂਤੀਆਂ', subject: 'History', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },

  // Civics & Political Science
  { id: 'fundamental-rights', name: 'Indian Constitution, Preamble & Fundamental Rights', namePa: 'ਭਾਰਤੀ ਸੰਵਿਧਾਨ ਤੇ ਮੌਲਿਕ ਅਧਿਕਾਰ', subject: 'Civics', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'parliament', name: 'Union Parliament, President & Executive', namePa: 'ਸੰਸਦ, ਰਾਸ਼ਟਰਪਤੀ ਤੇ ਕਾਰਜਪਾਲਿਕਾ', subject: 'Civics', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'judiciary', name: 'Judiciary: Supreme Court, High Courts & Writs', namePa: 'ਨਿਆਂਪਾਲਿਕਾ: ਸੁਪਰੀਮ ਕੋਰਟ ਤੇ ਹਾਈ ਕੋਰਟ', subject: 'Civics', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'local-govt', name: 'Local Government: 73rd & 74th Amendments (Panchayati Raj)', namePa: 'ਸਥਾਨਕ ਸਰਕਾਰ ਤੇ ਪੰਚਾਇਤੀ ਰਾਜ', subject: 'Civics', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },

  // Geography
  { id: 'punjab-geography', name: 'Geography of Punjab: Rivers, Doabs, Soils & Wetlands', namePa: 'ਪੰਜਾਬ ਦਾ ਭੂਗੋਲ, ਦਰਿਆ ਤੇ ਦੁਆਬੇ', subject: 'Geography', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'physical-geography', name: 'Physical Geography of India, Monsoon & Agriculture', namePa: 'ਭਾਰਤ ਦਾ ਭੌਤਿਕ ਭੂਗੋਲ ਤੇ ਮਾਨਸੂਨ', subject: 'Geography', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },

  // Economics
  { id: 'indian-economy', name: 'Indian Economy: RBI, Banking, NITI Aayog, MSP & Reforms', namePa: 'ਭਾਰਤੀ ਅਰਥਵਿਵਸਥਾ, ਬੈਂਕਿੰਗ ਤੇ MSP', subject: 'Economics', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },

  // Other Subjects
  { id: 'science-concepts', name: 'General Science: Physics, Chemistry & Biology', namePa: 'ਜਨਰਲ ਸਾਇੰਸ', subject: 'Science', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'mathematics-core', name: 'Mathematics: Arithmetic, Algebra & Mensuration', namePa: 'ਗਣਿਤ', subject: 'Math', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
  { id: 'punjabi-grammar', name: 'Punjabi Language & Vyakaran (ਪੰਜਾਬੀ ਵਿਆਕਰਨ)', namePa: 'ਪੰਜਾਬੀ ਵਿਆਕਰਨ ਤੇ ਸਾਹਿਤ', subject: 'Punjabi', questionCount: 'Availability varies by filter', examWeightage: 'Check the current notification', isPYQRich: true },
];

/**
 * Helper to distribute correct option evenly across A, B, C, D
 */
function distributeChoice<T>(correctVal: T, distractors: T[], seed: number): {
  options: { A: T; B: T; C: T; D: T };
  correct: 'A' | 'B' | 'C' | 'D';
} {
  const letters: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];
  const correctKey = letters[seed % 4];
  const otherKeys = letters.filter(k => k !== correctKey);
  const opts = {} as { A: T; B: T; C: T; D: T };
  opts[correctKey] = correctVal;
  opts[otherKeys[0]] = distractors[0];
  opts[otherKeys[1]] = distractors[1];
  opts[otherKeys[2]] = distractors[2];
  return { options: opts, correct: correctKey };
}

/**
 * Procedural Dynamic Question Generator
 * Generates algorithmic high-yield questions on the fly from key notes and flashcards
 * using finite lesson flashcards without claiming a larger authored bank.
 */
export function generateProceduralQuestions(topicId: string, count: number): Question[] {
  const generated: Question[] = [];
  const lesson = getLessonByTopicId(topicId);
  if (!lesson) return [];

  const flashcards = lesson.flashcards || [];

  let idCounter = 1;

  // Template 1: Direct fact verification from flashcards
  flashcards.forEach((card, idx) => {
    if (!card.q.hi || !card.a.hi || /^Explain:/i.test(card.q.en)) return;

    // Create 3 plausible distractors from other flashcards
    const otherAnswers = Array.from(new Map(flashcards
      .filter((_, i) => i !== idx)
      .map(c => c.a)
      .filter(a => a.hi && a.hi !== card.a.hi).map(a => [a.en || a.hi, a])).values());

    if (new Set(otherAnswers.map(a => a.en || a.hi)).size < 3) return;
    const distractor1 = otherAnswers[0] || { hi: 'उपरोक्त में से कोई नहीं', pa: 'ਉਪਰੋਕਤ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ', en: 'None of the above' };
    const distractor2 = otherAnswers[1] || { hi: 'केन्द्रीय मंत्रिमंडल', pa: 'ਕੇਂਦਰੀ ਮੰਤਰੀ ਮੰਡਲ', en: 'Union Cabinet' };
    const distractor3 = otherAnswers[2] || { hi: 'राज्य विधान सभा', pa: 'ਰਾਜ ਵਿਧਾਨ ਸਭਾ', en: 'State Legislative Assembly' };

    const choiceDistribution = distributeChoice(card.a, [distractor1, distractor2, distractor3], idx);
    const difficultyLevel = card.difficulty || 'easy';

    generated.push({
      id: `gen-${topicId}-fc-${idCounter++}`,
      topicId: topicId,
      subjectId: lesson.subjectId,
      examTag: 'Generated practice — not a past exam question',
      question: card.q,
      options: choiceDistribution.options,
      correct: choiceDistribution.correct,
      explanation: {
        hi: `सही उत्तर विकल्प (${choiceDistribution.correct}) है: ${card.a.hi}। यह पाठ के फ्लैशकार्ड पर आधारित अभ्यास प्रश्न है।`,
        pa: `ਸਹੀ ਉੱਤਰ ਵਿਕਲਪ (${choiceDistribution.correct}) ਹੈ: ${card.a.pa || card.a.hi}।`,
        en: `Correct option (${choiceDistribution.correct}): ${card.a.en} based on this lesson’s flashcard. Verify the lesson source when needed.`,
      },
      difficulty: difficultyLevel,
    });
  });


  return generated.slice(0, count);
}

/**
 * Retrieves questions for a specific test configuration, combining:
 * 1. 20-Year Exam Question Archive (2004-2024)
 * 2. 10-Year Master Cadre PYQs
 * 3. Handcrafted reference question bank (380+ questions)
 * 4. Finite computed/lesson variants; short pools stay short
 */
export function getQuestionPool(config: {
  topicId?: string;
  examId?: string;
  difficulty?: 'all' | 'easy' | 'medium' | 'hard';
  pyqOnly?: boolean;
  pyq20Years?: boolean;
  count?: number;
  excludeKeys?: string[];
}): Question[] {
  const { topicId, examId, difficulty = 'all', pyqOnly, pyq20Years, count = 50 } = config;
  void count;
  const canonical = canonicalTopicId;
  let pool = [...TWENTY_YEAR_EXAM_PYQS, ...MASTER_CADRE_10YR_PYQS, ...ALL_QUESTIONS];
  if ((!topicId || topicId === 'all') && !pyqOnly && !pyq20Years) pool.push(...generateQuantPractice('mathematics-core', 150));
  if (topicId && topicId !== 'all') {
    pool = pool.filter(q => topicIncludes(topicId, q.topicId));
    if (!pyqOnly && !pyq20Years) pool.push(...generateProceduralQuestions(topicId, 150), ...generateQuantPractice(topicId, 150), ...generateReasoningPractice(canonical(topicId), 1000), ...generateLandMeasurementPractice(canonical(topicId), 100));
  }
  if (examId && examId !== 'all') {
    const exam = practiceExam(examId);
    if (!exam) return [];
    const topics = new Set(exam.subjects.flatMap(subject => subject.chapters.flatMap(chapter => chapter.topics.flatMap(topic => [...topicSourceIds(topic.id)]))));
    // Only syllabus topics are eligible. Shared-topic questions retain their original source labels.
    pool = pool.filter(q => topics.has(canonical(q.topicId || '')));
    if (!pyqOnly && !pyq20Years && (!topicId || topicId === 'all')) {
      for (const id of topics) pool.push(...generateProceduralQuestions(id, 150), ...generateQuantPractice(id, 150), ...generateReasoningPractice(id, 1000), ...generateLandMeasurementPractice(id, 100));
    }
  }
  if (pyqOnly || pyq20Years) {
    pool = pool.filter(q => !q.id.startsWith('gen-') && q.year !== undefined &&
      q.year >= (pyq20Years ? 2004 : 2014) && q.year <= 2024);
  }
  if (difficulty !== 'all') pool = pool.filter(q => q.difficulty === difficulty);
  const seen = new Set<string>((config.excludeKeys || []).map(canonicalQuestionKey));
  pool = pool.filter(q => {
    const key = questionIdentity(q);
    if (seen.has(key)) return false;
    seen.add(key); return true;
  });
  return pool;
}

const normalizeQuestionText = (text: string) => text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const equivalentPrompts = new Map(confirmedEquivalences.flatMap(group => group.prompts.map(prompt => [normalizeQuestionText(prompt), normalizeQuestionText(group.prompts[0])] as const)));
/** Normalize saved keys too, so earlier completed paraphrases remain excluded. */
export function canonicalQuestionKey(text: string): string {
  const key = normalizeQuestionText(text);
  return equivalentPrompts.get(key) || key;
}
/** Wording plus explicitly confirmed semantic duplicates; no speculative fuzzy merging. */
export function questionIdentity(q: Question): string {
  return canonicalQuestionKey(q.question.en || q.question.hi || q.question.pa || q.id);
}
export function getTestQuestions(config: Parameters<typeof getQuestionPool>[0]): Question[] {
  const pool = getQuestionPool(config);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const limit = Number.isFinite(config.count) ? Math.max(1, Math.min(150, Math.floor(config.count!))) : 50;
  return pool.slice(0, limit);
}

/**
 * Evaluates candidate level based on score percentage and accuracy
 */
export function evaluateUserLevel(percentage: number, accuracy: number): UserPerformanceLevel {
  if (percentage >= 80 && accuracy >= 80) {
    return {
      level: 5,
      title: 'Strong Practice Result 🏆',
      titlePa: 'ਮਾਸਟਰ ਕੈਡਰ ਸਿਲੈਕਸ਼ਨ ਰੈਡੀ 🏆',
      badge: 'Gold Merit Tier',
      percentile: 'Practice band: 80%+' ,
      status: 'exam_ready',
      description: 'Outstanding performance! Your score on this practice set is high. This is a practice result, not a prediction of selection.',
      descriptionPa: 'ਸ਼ਾਨਦਾਰ ਪ੍ਰਦਰਸ਼ਨ! ਤੁਹਾਡੀ ਤਿਆਰੀ ਮਾਸਟਰ ਕੈਡਰ ਮੈਰਿਟ ਲਿਸਟ ਵਿੱਚ ਆਉਣ ਲਈ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤਿਆਰ ਹੈ।',
      recommendations: [
        'Attempt Full-Length 50-mark & 150-mark timed mock tests',
        'Review minor errors with 3D Flip Cards to maintain 100% recall',
        'Save challenging questions directly to your Study Notes for revision',
      ],
    };
  }

  if (percentage >= 65) {
    return {
      level: 4,
      title: 'Advanced Competitor 🥈',
      titlePa: 'ਐਡਵਾਂਸਡ ਉਮੀਦਵਾਰ 🥈',
      badge: 'Silver Rank',
      percentile: 'Practice band: 65%+' ,
      status: 'advanced',
      description: 'Very strong foundation! You have mastered the core syllabus. Focus on eliminating negative marks and tightening speed to reach the Gold selection merit tier.',
      descriptionPa: 'ਬਹੁਤ ਵਧੀਆ ਤਿਆਰੀ! ਨੈਗੇਟਿਵ ਮਾਰਕਿੰਗ ਤੋਂ ਬਚਣ ਲਈ ਕਮਜ਼ੋਰ ਵਿਸ਼ਿਆਂ ਦੀ ਦੁਹਰਾਈ ਕਰੋ।',
      recommendations: [
        'Focus on 20-Year PYQ live tests for this exam',
        'Target wrong answers using the Flip-Card Spaced Repetition mode',
        'Review historical dates and constitutional articles',
      ],
    };
  }

  if (percentage >= 50) {
    return {
      level: 3,
      title: 'Developing Candidate 🥉',
      titlePa: 'ਮੱਧ ਪੱਧਰੀ ਤਿਆਰੀ 🥉',
      badge: 'Bronze Tier',
      percentile: 'Practice band: 50%+' ,
      status: 'intermediate',
      description: 'Good progress. You understand the fundamental concepts but need deeper revision in tricky factual areas like historical dates, articles, and economy terms.',
      descriptionPa: 'ਚੰਗੀ ਸ਼ੁਰੂਆਤ ਹੈ ਪਰ ਮਹੱਤਵਪੂਰਨ ਤਾਰੀਖਾਂ ਅਤੇ ਧਾਰਾਵਾਂ ਨੂੰ ਹੋਰ ਪੱਕਾ ਕਰਨ ਦੀ ਲੋੜ ਹੈ।',
      recommendations: [
        'Read detailed lesson notes for weak areas',
        'Use 3D Flip Cards daily for 15 minutes',
        'Practice topic-wise mini mocks before full-length tests',
      ],
    };
  }

  if (percentage >= 35) {
    return {
      level: 2,
      title: 'Foundation Stage 📚',
      titlePa: 'ਮੁੱਢਲਾ ਪੜਾਅ 📚',
      badge: 'Apprentice Tier',
      percentile: 'Top 65% of Aspirants',
      status: 'developing',
      description: 'You have begun your journey. Dedicate structured study time to read core lesson chapters and official textbooks before taking timed exams.',
      descriptionPa: 'ਪਹਿਲਾਂ ਪਾਠ ਪੁਸਤਕਾਂ ਅਤੇ ਮੁੱਢਲੇ ਨੋਟਸ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹੋ, ਫਿਰ ਟੈਸਟ ਦਿਓ।',
      recommendations: [
        'Complete the "Read" tab for each core topic',
        'Download and review official PSEB/NCERT PDFs',
        'Start with 10-question practice drills',
      ],
    };
  }

  return {
    level: 1,
    title: 'Beginner Explorer 🌱',
    titlePa: 'ਸ਼ੁਰੂਆਤੀ ਪੜਾਅ 🌱',
    badge: 'Novice Badge',
    percentile: 'Foundation Pool',
    status: 'foundation',
    description: 'Welcome to exam preparation! Consistent daily practice with ExamSathi structured curriculum will build your confidence quickly.',
    descriptionPa: 'ਰੋਜ਼ਾਨਾ ਅਧਿਐਨ ਕਰੋ ਅਤੇ ਪੰਜਾਬੀ ਤੇ ਜਨਰਲ ਅਧਿਐਨ ਦੇ ਮੁੱਢਲੇ ਵਿਸ਼ਿਆਂ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ।',
    recommendations: [
      'Review foundational topics in your selected exam syllabus',
      'Review 3D Flip Cards in easy mode',
      "Follow today's study plan on the dashboard",
    ],
  };
}

export interface PredictedRankReport {
  hasEnoughData: boolean;
  stateRank: number;
  totalCandidates: number;
  percentile: number;
  isBenchmarkEstimate: boolean;
  cohortStatus: string;
  categoryRank: {
    general: number;
    sc: number;
    bc: number;
    ews: number;
  };
  selectionProbability: 'Unavailable' | 'High practice score (illustrative only)' | 'High (Competitive Zone)' | 'Moderate (Waitlist Range)' | 'Needs Dedicated Revision';
  strategicAdvice: string;
}



/**
 * Calculates candidate's predicted State & All-India Rank
 */
export function calculatePredictedRank(_percentage: number, _rawScore: number, _totalQuestions: number): PredictedRankReport {
  return {
    hasEnoughData: false, stateRank: 0, totalCandidates: 0, percentile: 0,
    isBenchmarkEstimate: false,
    cohortStatus: 'No verified comparison cohort is available.',
    categoryRank: { general: 0, sc: 0, bc: 0, ews: 0 },
    selectionProbability: 'Unavailable',
    strategicAdvice: 'Review incorrect and skipped questions, then compare your own practice results over time.',
  };
}

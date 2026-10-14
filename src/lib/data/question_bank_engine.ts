import 'server-only';
import { generateLandMeasurementPractice } from './land-measurement-practice';
import { generateReasoningPractice } from './reasoning-practice';
import { topicSourceIds, topicIncludes, canonicalTopicId } from './topic-scope';
import { practiceExam } from '../exam-context';
import { generateQuantPractice } from './quant-practice';
import { ALL_QUESTIONS } from './questions';
import type { Question } from '../question-types';
import { getLessonByTopicId } from './lessons';
import { canonicalQuestionKey, questionIdentity } from './exam-catalog';
import { editorialQuestions } from '../editorial-store';
export * from './exam-catalog';

// Server-only question pool engine: selection, ordering and sets.

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
  if (!lesson || lesson.practiceSource === 'authored-only') return [];

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
      originType: 'computed-variant',
      reviewStatus: 'reviewed',
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
  let pool = [...ALL_QUESTIONS, ...editorialQuestions()];
  if ((!topicId || topicId === 'all') && !pyqOnly && !pyq20Years) pool.push(...generateQuantPractice('mathematics-core', 150));
  if (topicId && topicId !== 'all') {
    pool = pool.filter(q => topicIncludes(topicId, q.topicId));
    if (!pyqOnly && !pyq20Years) pool.push(...generateProceduralQuestions(topicId, 150), ...generateQuantPractice(topicId, 150), ...generateReasoningPractice(canonical(topicId), 1000), ...generateLandMeasurementPractice(canonical(topicId), 100));
  }
  if (examId && examId !== 'all') {
    const exam = practiceExam(examId);
    if (!exam) return [];
    const topics = new Set(exam.subjects.flatMap(subject => subject.chapters.flatMap(chapter => chapter.topics.flatMap(topic => [...topicSourceIds(topic.id)]))));
    if (exam.id === 'punjab-ett' && topicId && topicId.startsWith('ett-paper-a-')) {
      topics.add(canonical(topicId));
    }
    // Only syllabus topics are eligible. Shared-topic questions retain their original source labels.
    pool = pool.filter(q => topics.has(canonical(q.topicId || '')));
    const isMasterOrLecturerExam = exam.id.startsWith('punjab-master-cadre') || exam.id === 'punjab-lecturer-cadre';
    if (!isMasterOrLecturerExam) {
      const sharedScienceTopics = new Set(['physics-concepts', 'chemistry-concepts', 'biology-concepts']);
      pool = pool.filter(q => {
        if (!/Master Cadre|Lecturer/i.test(q.examTag || '')) return true;
        if (exam.id === 'htet-l2') return false;
        return !sharedScienceTopics.has(canonical(q.topicId || ''));
      });
    }
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
    const idKey = canonicalQuestionKey(q.id);
    if (seen.has(key) || seen.has(idKey)) return false;
    seen.add(key); seen.add(idKey); return true;
  });
  return pool;
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
 * Builds a deterministic, round-robin topic-balanced pool prioritizing trilingual authored questions
 * over procedural variants so that Set 1 (1..50), Set 2 (51..100), Set 3 (101..150), Set 4 (151..200),
 * Set 5 (201..250), Set 6 (251..300) each contain a balanced cross-section of all topics.
 */
export function getBalancedOrderedPool(config: {
  topicId?: string;
  examId?: string;
  difficulty?: 'all' | 'easy' | 'medium' | 'hard';
  pyqOnly?: boolean;
  pyq20Years?: boolean;
}): Question[] {
  const rawPool = getQuestionPool({
    topicId: config.topicId,
    examId: config.examId,
    difficulty: config.difficulty,
    pyqOnly: config.pyqOnly,
    pyq20Years: config.pyq20Years,
  });

  const primaryAuthored: Question[] = [];
  const secondaryAuthored: Question[] = [];
  const computedPool: Question[] = [];

  for (const q of rawPool) {
    const isComputed = q.id.startsWith('gen-') || q.originType === 'computed-variant';
    const hasDistinctPunjabi = Boolean(q.question.pa && q.question.pa !== q.question.en);
    if (isComputed) {
      computedPool.push(q);
    } else if (hasDistinctPunjabi) {
      primaryAuthored.push(q);
    } else {
      secondaryAuthored.push(q);
    }
  }

  const interleaveByTopic = (items: Question[], maxPerTopic?: number): Question[] => {
    const groups = new Map<string, Question[]>();
    for (const q of items) {
      const key = q.topicId || 'general';
      const arr = groups.get(key) || [];
      if (!maxPerTopic || arr.length < maxPerTopic) {
        arr.push(q);
        groups.set(key, arr);
      }
    }
    const groupArrays = Array.from(groups.values());
    const result: Question[] = [];
    let round = 0;
    let added = true;
    while (added) {
      added = false;
      for (const group of groupArrays) {
        if (round < group.length) {
          result.push(group[round]);
          added = true;
        }
      }
      round++;
    }
    return result;
  };

  const isSingleTopic = Boolean(
    config.topicId &&
    config.topicId !== 'all' &&
    config.topicId !== 'ppsc-clerk-mega' &&
    config.topicId !== 'punjab-gk-punjabi-mega'
  );
  const interleavedPrimary = interleaveByTopic(primaryAuthored);
  const interleavedSecondary = interleaveByTopic(secondaryAuthored);
  const interleavedComputed = interleaveByTopic(computedPool, isSingleTopic ? undefined : 25);

  return [...interleavedPrimary, ...interleavedSecondary, ...interleavedComputed];
}

export function getOrderedSetQuestions(config: {
  topicId?: string;
  examId?: string;
  difficulty?: 'all' | 'easy' | 'medium' | 'hard';
  pyqOnly?: boolean;
  pyq20Years?: boolean;
  count?: number;
  setNumber?: number;
}): { questions: Question[]; setNumber: number; totalSets: number; totalPoolCount: number } {
  const setSize = Number.isFinite(config.count) ? Math.max(1, Math.min(150, Math.floor(config.count!))) : 50;
  // A numbered set must preserve the requested syllabus and filters.
  // Empty eligibility is an empty result, never permission to widen the scope.
  const orderedPool = getBalancedOrderedPool(config);
  const totalPoolCount = orderedPool.length;
  const totalSets = Math.max(1, Math.ceil(totalPoolCount / setSize));
  const requestedSet = Number.isFinite(config.setNumber) && config.setNumber! >= 1 ? Math.floor(config.setNumber!) : 1;
  // Beyond the final set, expose exhaustion instead of silently replaying Set 1.
  const normalizedSet = requestedSet;
  const startIdx = (normalizedSet - 1) * setSize;
  const questions = orderedPool.slice(startIdx, startIdx + setSize);
  return {
    questions,
    setNumber: normalizedSet,
    totalSets,
    totalPoolCount,
  };
}


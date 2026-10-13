// Editorial question content: validation and conversion to a servable Question. Pure, shared by the API and tests.
import type { Question } from './question-types';

export type Option = 'A' | 'B' | 'C' | 'D';
export const OPTIONS: readonly Option[] = ['A', 'B', 'C', 'D'];
const DIFFICULTIES = ['easy', 'medium', 'hard'] as const;

export interface Localized { en?: string; hi?: string; pa?: string }

export interface QuestionData {
  question: Localized;
  options: Record<Option, Localized>;
  correct: Option;
  explanation: Localized;
  difficulty: 'easy' | 'medium' | 'hard';
  examTag: string;
}

export type Checked<T> = { ok: true; value: T } | { ok: false; message: string };

const MAX = { question: 1000, option: 300, explanation: 2000, tag: 120 };

/** Accepts en/hi/pa text, trims it, and rejects anything empty, non-string or too long. */
function localized(value: unknown, label: string, max: number): Checked<Localized> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { ok: false, message: `${label} is required.` };
  const out: Localized = {};
  for (const lang of ['en', 'hi', 'pa'] as const) {
    const raw = (value as Record<string, unknown>)[lang];
    if (raw === undefined || raw === null || raw === '') continue;
    if (typeof raw !== 'string') return { ok: false, message: `${label} must be text.` };
    const text = raw.trim();
    if (text.length > max) return { ok: false, message: `${label} is too long (max ${max} characters).` };
    if (text) out[lang] = text;
  }
  if (!out.en && !out.hi) return { ok: false, message: `${label} needs English or Hindi text.` };
  return { ok: true, value: out };
}

/** Strict check of an editor's question. Everything the student will see must be present. */
export function validateQuestionData(data: unknown): Checked<QuestionData> {
  if (!data || typeof data !== 'object') return { ok: false, message: 'Invalid question data.' };
  const d = data as Record<string, unknown>;
  const question = localized(d.question, 'Question', MAX.question);
  if (!question.ok) return question;
  const options = {} as Record<Option, Localized>;
  const seen = new Set<string>();
  for (const key of OPTIONS) {
    const raw = (d.options as Record<string, unknown> | undefined)?.[key];
    const checked = localized(raw, `Option ${key}`, MAX.option);
    if (!checked.ok) return checked;
    options[key] = checked.value;
    const identity = (checked.value.en || checked.value.hi || '').toLowerCase();
    if (seen.has(identity)) return { ok: false, message: 'Options must all be different.' };
    seen.add(identity);
  }
  if (typeof d.correct !== 'string' || !(OPTIONS as readonly string[]).includes(d.correct)) return { ok: false, message: 'Choose the correct option (A–D).' };
  const explanation = localized(d.explanation, 'Explanation', MAX.explanation);
  if (!explanation.ok) return explanation;
  const difficulty = d.difficulty === undefined ? 'medium' : d.difficulty;
  if (typeof difficulty !== 'string' || !(DIFFICULTIES as readonly string[]).includes(difficulty)) return { ok: false, message: 'Invalid difficulty.' };
  const tag = d.examTag === undefined || d.examTag === '' ? 'Editorial' : d.examTag;
  if (typeof tag !== 'string' || tag.trim().length === 0 || tag.length > MAX.tag) return { ok: false, message: 'Invalid exam tag.' };
  return {
    ok: true,
    value: { question: question.value, options, correct: d.correct as Option, explanation: explanation.value, difficulty: difficulty as QuestionData['difficulty'], examTag: tag.trim() },
  };
}

/** The bank requires hi and en on every field; fill the missing one from the other language. */
function full(text: Localized): { hi: string; pa?: string; en: string } {
  const en = text.en || text.hi || '';
  const hi = text.hi || text.en || '';
  return text.pa ? { hi, pa: text.pa, en } : { hi, en };
}

/** Published items are served with an id that can never collide with the built-in bank. */
export const questionIdFor = (itemId: string) => `cms-${itemId}`;
export const isEditorialQuestionId = (id: string) => id.startsWith('cms-');

export function buildQuestion(itemId: string, topicId: string, data: QuestionData): Question {
  const languages = (['en', 'hi', 'pa'] as const).filter(lang => data.question[lang] && OPTIONS.every(key => data.options[key][lang]));
  return {
    id: questionIdFor(itemId),
    topicId,
    subjectId: 'editorial',
    examTag: data.examTag,
    question: full(data.question),
    options: { A: full(data.options.A), B: full(data.options.B), C: full(data.options.C), D: full(data.options.D) },
    correct: data.correct,
    explanation: full(data.explanation),
    difficulty: data.difficulty,
    originType: 'authored-original',
    reviewStatus: 'reviewed',
    editorialStatus: 'reviewed',
    availableLanguages: languages.length ? languages : ['en', 'hi'],
  };
}

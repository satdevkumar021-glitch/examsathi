import { studyStorage } from '@/lib/storage';
import type { Question } from './data/questions';

export interface AIGenerationResult {
  success: boolean;
  questions: Question[];
  source: 'gemini_api' | 'client_heuristic_engine';
  isVerified: boolean;
  message?: string;
}
const DAILY_LIMIT = 5;
const STORAGE_USAGE_KEY = 'examsathi_ai_quota';
export function checkAIQuota(): { remaining: number; allowed: boolean } {
  try {
    const parsed = JSON.parse(studyStorage.getItem(STORAGE_USAGE_KEY) || 'null');
    const used = parsed?.date === new Date().toISOString().slice(0, 10) ? Math.max(0, Number(parsed.count) || 0) : 0;
    const remaining = Math.max(0, DAILY_LIMIT - used);
    return { remaining, allowed: remaining > 0 };
  } catch { return { remaining: DAILY_LIMIT, allowed: true }; }
}
export function incrementAIQuota(): void {
  const quota = checkAIQuota();
  studyStorage.setItem(STORAGE_USAGE_KEY, JSON.stringify({ date: new Date().toISOString().slice(0, 10), count: DAILY_LIMIT - quota.remaining + 1 }));
}

/** Local recall practice: a term is removed from an actual sentence, never invented. */
export function extractRecallQuestions(content: string, targetCount: number): Question[] {
  const sentences = Array.from(new Set(content.split(/(?<=[.!?।])\s*|\n+/u).map(s => s.trim()).filter(s => s.length >= 35 && s.length <= 700)));
  const candidates = sentences.map(sentence => {
    const terms = sentence.match(/\p{N}{2,}|[\p{L}\p{M}]{5,}/gu) || [];
    return { sentence, answer: terms.find(t => /^\p{N}/u.test(t)) || terms[Math.floor(terms.length / 2)] };
  }).filter((c): c is { sentence: string; answer: string } => Boolean(c.answer));
  const letters = ['A', 'B', 'C', 'D'] as const;
  const result: Question[] = [];
  for (const [index, item] of candidates.entries()) {
    const isNumber = /^\p{N}/u.test(item.answer);
    const distractors = Array.from(new Set(candidates.map(c => c.answer).filter(a => a !== item.answer && /^\p{N}/u.test(a) === isNumber))).slice(0, 3);
    if (distractors.length !== 3) continue;
    const correct = letters[index % 4];
    const options = {} as Question['options'];
    let other = 0;
    for (const letter of letters) {
      const value = letter === correct ? item.answer : distractors[other++];
      options[letter] = { en: value, hi: value, pa: value };
    }
    const prompt = item.sentence.replace(item.answer, '______');
    const evidence = `Source excerpt: ${item.sentence}`;
    result.push({ id: `notes-${Date.now()}-${index}`, topicId: 'custom-notes', subjectId: 'general', examTag: 'Local notes recall • not AI verified', question: { en: prompt, hi: prompt, pa: prompt }, options, correct, explanation: { en: evidence, hi: evidence, pa: evidence }, difficulty: 'easy' });
    if (result.length >= Math.max(1, Math.min(50, targetCount))) break;
  }
  return result;
}

/** Validates untrusted model output and requires a literal excerpt from the source. */
export function validateGeneratedQuestions(value: unknown, content: string, count: number): Question[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > count) throw new Error('Invalid question count');
  const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();
  const source = normalize(content);
  const text = (v: unknown): v is { hi: string; pa: string; en: string } => Boolean(v && typeof v === 'object' && ['hi', 'pa', 'en'].every(k => typeof (v as Record<string, unknown>)[k] === 'string' && String((v as Record<string, unknown>)[k]).trim().length > 0 && String((v as Record<string, unknown>)[k]).length <= 4000));
  return value.map((v, index) => {
    if (!v || typeof v !== 'object') throw new Error('Invalid question');
    const q = v as Record<string, unknown>;
    const options = q.options as Record<string, unknown>;
    if (!text(q.question) || !text(q.explanation) || !options || !['A', 'B', 'C', 'D'].every(k => text(options[k])) || !['A', 'B', 'C', 'D'].includes(String(q.correct)) || !['easy', 'medium', 'hard'].includes(String(q.difficulty))) throw new Error('Malformed question');
    if (new Set(Object.values(options).map(v => (v as { en: string }).en.trim().toLowerCase())).size !== 4) throw new Error('Duplicate options');
    if (typeof q.sourceExcerpt !== 'string' || q.sourceExcerpt.length < 15 || !source.includes(normalize(q.sourceExcerpt))) throw new Error('Question is missing source evidence');
    const explanation = q.explanation;
    return { id: `ai-${Date.now()}-${index}`, topicId: 'custom-notes', subjectId: 'general', examTag: 'AI notes draft • review before use', question: q.question, options: options as Question['options'], correct: q.correct as Question['correct'], difficulty: q.difficulty as Question['difficulty'], explanation: { hi: `${explanation.hi}\n${q.sourceExcerpt}`, pa: `${explanation.pa}\n${q.sourceExcerpt}`, en: `${explanation.en}\nSource excerpt: ${q.sourceExcerpt}` } };
  });
}
export async function generateMCQsFromNotes(content: string, targetCount = 5): Promise<AIGenerationResult> {
  const questions = content.trim().length >= 50 && content.length <= 100000 ? extractRecallQuestions(content, targetCount) : [];
  return { success: questions.length > 0, questions, source: 'client_heuristic_engine', isVerified: false, message: questions.length ? `Created ${questions.length} local recall questions from your text. These are not AI-generated or independently verified.` : 'Not enough distinct facts to create reliable recall questions. Add several complete sentences or use the configured AI backend.' };
}

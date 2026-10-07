import type { Question } from './questions';
const supported = new Set(['percent', 'ratio', 'mathematics-core', 'quantitative-aptitude', 'ssc-cgl-quant', 'ett-primary-math']);
/** Computed answers and distinct options; these are practice variants, never PYQs. */
export function generateQuantPractice(topicId: string, count: number): Question[] {
  if (!supported.has(topicId)) return [];
  return Array.from({ length: Math.min(150, count) }, (_, i) => {
    const base = (i + 10) * 20, rate = 5 * (i % 15 + 1);
    let prompt: string, answer: number, working: string;
    const kind = topicId === 'percent' ? 0 : topicId === 'ratio' ? 1 : i % 5;
    if (kind === 0) { prompt = `What is ${rate}% of ${base}?`; answer = base * rate / 100; working = `${base} × ${rate} ÷ 100 = ${answer}`; }
    else if (kind === 1) { const a = i % 7 + 2, b = a + 3, unit = i + 10; prompt = `Divide ${unit * (a + b)} in the ratio ${a}:${b}. What is the first share?`; answer = unit * a; working = `Total parts = ${a + b}; first share = total × ${a} / ${a + b} = ${answer}`; }
    else if (kind === 2) { const years = i % 5 + 1; prompt = `Find simple interest on ₹${base} at ${rate}% per year for ${years} years.`; answer = base * rate * years / 100; working = `SI = P × R × T / 100 = ${answer}`; }
    else if (kind === 3) { const side = i + 8; prompt = `A square has side ${side} cm. What is its area in cm²?`; answer = side ** 2; working = `Area = side² = ${side}² = ${answer}`; }
    else { const start = i + 3, step = i % 9 + 2; prompt = `Find the next term: ${start}, ${start + step}, ${start + 2 * step}, ${start + 3 * step}, ___`; answer = start + 4 * step; working = `Each step adds ${step}; next term = ${answer}`; }
    const correct = (['A', 'B', 'C', 'D'] as const)[i % 4];
    let distractor = 0;
    const options = Object.fromEntries(['A', 'B', 'C', 'D'].map(key => {
      const value = String(key === correct ? answer : answer + (++distractor) * (i % 4 + 1));
      return [key, { en: value, hi: value, pa: value }];
    })) as Question['options'];
    return { id: `gen-quant-${topicId}-${i}`, topicId, subjectId: 'mathematics', examTag: 'SSC / PSSSB / CTET arithmetic practice • not a past paper', question: { en: prompt, hi: prompt, pa: prompt }, options, correct, explanation: { en: working, hi: working, pa: working }, difficulty: kind === 0 || kind === 3 ? 'easy' : 'medium' };
  });
}

import * as z from 'zod/v4';

// Tool definitions. Handlers take a client and return plain data; index.mjs adapts them to MCP.
//
// Safety model:
//  - Learner answers are never exposed: the question routes used here do not return keys.
//  - Authoring can only create a draft or a review submission. There is no publish, approve or delete tool.
//    The server still enforces the real role, four-eyes review and validation on every call.

const LANG = z.enum(['en', 'hi', 'pa']).default('en').describe('Language to return text in. Falls back to English, then Hindi.');
const DIFFICULTY = z.enum(['all', 'easy', 'medium', 'hard']).default('all');
const text = (value, lang) => value?.[lang] || value?.en || value?.hi || '';

const localized = max => z.object({
  en: z.string().max(max).optional(),
  hi: z.string().max(max).optional(),
  pa: z.string().max(max).optional(),
}).describe('Text by language. English or Hindi is required.');

export function buildTools(client) {
  return [
    {
      name: 'list_exams',
      title: 'List exams',
      description: 'Lists every exam ExamSathi supports with its body, default test length, negative marking and topic count. Use the exam id with the other tools.',
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, openWorldHint: true },
      async handler() {
        const { exams } = await client.get('/api/catalog');
        return exams.map(e => ({
          id: e.id, name: e.name, body: e.body, defaultQuestions: e.defaultQuestions,
          timeLimitMinutes: e.timeLimitMinutes, negativeMarking: e.negativeMarking, topics: e.topics.length,
        }));
      },
    },
    {
      name: 'list_topics',
      title: 'List syllabus topics',
      description: 'Lists the syllabus topics of one exam, grouped by subject. Topic ids are used to search and count questions.',
      inputSchema: z.object({ examId: z.string().min(1).max(100), lang: LANG }),
      annotations: { readOnlyHint: true, openWorldHint: true },
      async handler({ examId, lang }) {
        const { exams } = await client.get('/api/catalog');
        const exam = exams.find(e => e.id === examId);
        if (!exam) throw new Error(`Unknown exam "${examId}". Call list_exams for valid ids.`);
        const bySubject = {};
        for (const t of exam.topics) (bySubject[t.subject] ??= []).push({ id: t.id, name: lang === 'pa' && t.namePa ? t.namePa : t.name });
        return { examId, name: exam.name, subjects: bySubject };
      },
    },
    {
      name: 'search_questions',
      title: 'Draw practice questions',
      description: 'Draws practice questions for a topic or exam. Answers and explanations are NOT included; this mirrors what a student sees before submitting.',
      inputSchema: z.object({
        topicId: z.string().min(1).max(120).default('all'),
        examId: z.string().min(1).max(100).optional(),
        difficulty: DIFFICULTY,
        count: z.number().int().min(1).max(20).default(5),
        lang: LANG,
      }),
      annotations: { readOnlyHint: true, openWorldHint: true },
      async handler({ topicId, examId, difficulty, count, lang }) {
        const res = await client.post('/api/questions/set', { topicId, examId, difficulty, count });
        return {
          totalInPool: res.totalPoolCount,
          questions: res.questions.map(q => ({
            id: q.id, topicId: q.topicId, difficulty: q.difficulty, examTag: q.examTag,
            question: text(q.question, lang),
            options: Object.fromEntries(Object.entries(q.options).map(([k, v]) => [k, text(v, lang)])),
          })),
        };
      },
    },
    {
      name: 'count_questions',
      title: 'Count available questions',
      description: 'Returns how many questions exist for each topic of an exam, to find thin areas of the bank.',
      inputSchema: z.object({ examId: z.string().min(1).max(100) }),
      annotations: { readOnlyHint: true, openWorldHint: true },
      async handler({ examId }) {
        const { manifest } = await client.post('/api/questions/manifest', { examIds: [examId] });
        const perTopic = manifest[examId] ?? {};
        const rows = Object.entries(perTopic).map(([topicId, count]) => ({ topicId, count })).sort((a, b) => a.count - b.count);
        return { examId, total: rows.reduce((s, r) => s + r.count, 0), topics: rows };
      },
    },
    {
      name: 'get_quality_report',
      title: 'Question quality report',
      description: 'Statistical item analysis of live questions (suspect keys, too hard/easy, negative discrimination). Aggregate only. Requires a reviewer or superadmin token; flags mean "look at this", not proof.',
      inputSchema: z.object({ limit: z.number().int().min(1).max(100).default(20) }),
      annotations: { readOnlyHint: true, openWorldHint: true },
      async handler({ limit }) {
        const res = await client.get('/api/admin/quality', { auth: true });
        return {
          attemptsAnalysed: res.attemptsAnalysed,
          analysed: res.report.analysed,
          flagged: res.report.flagged,
          byFlag: res.report.byFlag,
          items: res.report.items.slice(0, limit).map(i => ({
            id: i.id, topicId: i.topicId, declaredDifficulty: i.declaredDifficulty, answers: i.n,
            pCorrect: i.pCorrect, discrimination: i.discrimination, flags: i.flags,
          })),
        };
      },
    },
    {
      name: 'draft_question',
      title: 'Draft a question for review',
      description: 'Saves a new multiple-choice question as a draft (or submits it for review) in the editorial pipeline. It does NOT publish: a different reviewer must approve it. Requires an educator, reviewer or superadmin token.',
      inputSchema: z.object({
        topicId: z.string().min(1).max(120),
        title: z.string().min(1).max(300).describe('Short internal title for the editors.'),
        question: localized(1000),
        options: z.object({ A: localized(300), B: localized(300), C: localized(300), D: localized(300) }),
        correct: z.enum(['A', 'B', 'C', 'D']),
        explanation: localized(2000),
        difficulty: z.enum(['easy', 'medium', 'hard']).default('medium'),
        examTag: z.string().max(120).optional(),
        submitForReview: z.boolean().default(false).describe('false saves a draft; true puts it in the review queue.'),
      }),
      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: true },
      async handler(a) {
        const res = await client.post('/api/admin/content', {
          type: 'question',
          title: a.title,
          topicId: a.topicId,
          status: a.submitForReview ? 'review' : 'draft',
          data: { question: a.question, options: a.options, correct: a.correct, explanation: a.explanation, difficulty: a.difficulty, examTag: a.examTag },
        }, { auth: true });
        return { id: res.item.id, status: res.item.status, topicId: res.item.topicId, note: 'Not live. A reviewer must approve it before students see it.' };
      },
    },
  ];
}

// Audit helper: loads the TypeScript data layer the same way tests/core.test.mjs does
// and emits a JSON snapshot of every exam, its topics, pending status, question/lesson coverage.
// Usage: node audit/scripts/analyze.mjs > audit/data/exam-snapshot.json
import { readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const cache = new Map();
const local = new Map();
const window = { localStorage: { getItem: k => local.get(k) ?? null, setItem: (k, v) => local.set(k, v), removeItem: k => local.delete(k) }, dispatchEvent() {} };
function load(file) {
  file = path.resolve(file); if (!path.extname(file)) file += '.ts';
  if (file.endsWith('.json')) return { default: JSON.parse(readFileSync(file, 'utf8')) };
  if (cache.has(file)) return cache.get(file).exports;
  const loaded = { exports: {} }; cache.set(file, loaded);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { module: loaded, exports: loaded.exports, require: n => load(n.startsWith('@/') ? path.resolve('src', n.slice(2)) : path.resolve(path.dirname(file), n)), window, Event: class Event {}, Date, Math, Set, Map, process, console });
  return loaded.exports;
}

const examsMod = load('src/lib/data/exams.ts');
const engine = load('src/lib/data/question_bank_engine.ts');
const lessons = load('src/lib/data/lessons.ts');
const bank = load('src/lib/data/questions.ts');
const scope = load('src/lib/data/topic-scope.ts');

const authored = bank.ALL_QUESTIONS;
const uniqueAuthored = new Set(authored.map(engine.questionIdentity)).size;

const out = { generatedAt: new Date().toISOString(), authoredQuestions: authored.length, uniqueAuthoredQuestions: uniqueAuthored, exams: [] };

for (const [state, list] of Object.entries(examsMod.ALL_EXAMS)) {
  for (const exam of list) {
    const topics = exam.subjects.flatMap(s => s.chapters.flatMap(c => c.topics.map(t => ({ ...t, subjectId: s.id, chapterId: c.id }))));
    const sectionMarks = exam.sections.reduce((n, s) => n + (s.marks || 0), 0);
    const sectionQuestions = exam.sections.reduce((n, s) => n + (s.questions || 0), 0);
    const authoredPool = engine.getQuestionPool({ examId: exam.id, pyqOnly: false });
    const authoredOnly = authoredPool.filter(q => !String(q.id).startsWith('gen-') && !/^(quant|reason|land)-/.test(String(q.id)));
    const topicRows = topics.map(t => {
      const tq = authored.filter(q => scope.topicIncludes(t.id, q.topicId));
      const lesson = lessons.getLessonByTopicId ? lessons.getLessonByTopicId(t.id) : undefined;
      return { id: t.id, name: t.name, subjectId: t.subjectId, chapterId: t.chapterId, pending: t.materialStatus === 'pending', authoredQuestions: tq.length, hasLesson: !!lesson };
    });
    out.exams.push({
      id: exam.id, state, name: exam.name, body: exam.body, level: exam.level || '', totalMarks: exam.totalMarks, duration: exam.duration,
      negativeMarking: exam.negativeMarking, officialWebsite: exam.officialWebsite, syllabusStatus: exam.syllabusStatus || '',
      sections: exam.sections, sectionMarks, sectionQuestions,
      subjects: exam.subjects.length, topics: topics.length,
      pendingTopics: topicRows.filter(t => t.pending).length,
      topicsZeroAuthored: topicRows.filter(t => t.authoredQuestions === 0).length,
      topicsNoLesson: topicRows.filter(t => !t.hasLesson).length,
      nonPendingNoLesson: topicRows.filter(t => !t.pending && !t.hasLesson).map(t => t.id),
      pendingWithQuestions: topicRows.filter(t => t.pending && t.authoredQuestions > 0).map(t => `${t.id}:${t.authoredQuestions}`),
      poolTotal: authoredPool.length, poolAuthored: authoredOnly.length,
      topicRows,
    });
  }
}

// Leakage check: every authored question in an exam pool must map to one of that exam's syllabus topics.
out.leakage = [];
for (const e of out.exams) {
  const exam = examsMod.getExamById(e.id);
  const eligible = new Set(exam.subjects.flatMap(s => s.chapters.flatMap(c => c.topics.flatMap(t => [...scope.topicSourceIds(t.id)]))));
  const pool = engine.getQuestionPool({ examId: e.id });
  const bad = pool.filter(q => !eligible.has(scope.canonicalTopicId(q.topicId || '')));
  if (bad.length) out.leakage.push({ exam: e.id, count: bad.length, sample: bad.slice(0, 5).map(q => `${q.id}:${q.topicId}`) });
}
// Orphan questions: authored questions whose topicId is in no exam's syllabus.
const allEligible = new Set(out.exams.flatMap(e => { const exam = examsMod.getExamById(e.id); return exam.subjects.flatMap(s => s.chapters.flatMap(c => c.topics.flatMap(t => [...scope.topicSourceIds(t.id)]))); }));
const orphans = authored.filter(q => !allEligible.has(scope.canonicalTopicId(q.topicId || '')));
const orphanTopics = {};
for (const q of orphans) orphanTopics[q.topicId] = (orphanTopics[q.topicId] || 0) + 1;
out.orphanQuestions = { count: orphans.length, byTopic: orphanTopics };

process.stdout.write(JSON.stringify(out, null, 2));

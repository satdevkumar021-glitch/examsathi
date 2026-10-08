import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
const cache = new Map();
const local = new Map();
const window = { localStorage: { getItem: key => local.get(key) ?? null, setItem: (key, value) => local.set(key, value), removeItem: key => local.delete(key) }, dispatchEvent() {} };
function load(file) {
  file = path.resolve(file); if (!path.extname(file)) file += '.ts';
  if (file.endsWith('.json')) return { default: JSON.parse(readFileSync(file,'utf8')) };
  if (cache.has(file)) return cache.get(file).exports;
  const loaded = { exports: {} }; cache.set(file, loaded);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { module: loaded, exports: loaded.exports, require: name => load(name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(file), name)), window, Event: class Event {}, Date, Math, Set, Map, process, console });
  return loaded.exports;
}


const { ALL_EXAMS } = load('src/lib/data/exams.ts');
const { getQuestionPool, questionIdentity } = load('src/lib/data/question_bank_engine.ts');
const { getLessonByTopicId, TOPIC_ALIASES } = load('src/lib/data/lessons.ts');
const { TOPIC_DOCUMENTS, TOPIC_VIDEOS } = load('src/lib/data/topic-resources.ts');
const { ALL_QUESTIONS } = load('src/lib/data/questions.ts');
const rows = Object.values(ALL_EXAMS).flat().map(exam => {
  const pool = getQuestionPool({ examId: exam.id });
  const topics = exam.subjects.flatMap(subject => subject.chapters.flatMap(chapter => chapter.topics.map(topic => {
    const lesson = getLessonByTopicId(topic.id);
    const qs = getQuestionPool({ examId: exam.id, topicId: topic.id });
    const documents = [...(lesson?.documents || []), ...(TOPIC_DOCUMENTS[topic.id] || [])];
    return { id: topic.id, name: topic.name, subject: subject.name, chapter: chapter.name,
      subtopics: topic.subtopics, lesson: Boolean(lesson), lessonAlias: TOPIC_ALIASES[topic.id] || null,
      lessonStatus: lesson?.coverageStatus || (lesson ? 'legacy-depth-unverified' : 'missing'),
      reviewedQuestions: qs.filter(q => q.editorialStatus === 'reviewed').length,
      englishWords: (lesson?.content.en || '').split(/\s+/).filter(Boolean).length,
      authoredQuestions: qs.filter(q => !q.id.startsWith('gen-')).length,
      generatedVariants: qs.filter(q => q.id.startsWith('gen-')).length,
      distinctQuestions: qs.length, fullMiniSetsOf50: Math.floor(qs.length / 50),
      flashcards: lesson?.flashcards.length || 0,
      documents: [...new Set(documents.map(d => d.url))],
      videos: [...(lesson?.videos || []), ...(TOPIC_VIDEOS[topic.id] || [])].map(v => ({ title: v.title, url: v.url || (v.youtubeId ? `https://www.youtube.com/watch?v=${v.youtubeId}` : null), isSearch: Boolean(v.url?.includes('/search?')) })),
    };
  })));
  return { id: exam.id, name: exam.name, officialWebsite: exam.officialWebsite,
    topics, topicCount: topics.length, missingLessons: topics.filter(t => !t.lesson).length,
    under50Topics: topics.filter(t => t.distinctQuestions < 50).length,
    authoredQuestions: pool.filter(q => !q.id.startsWith('gen-')).length,
    generatedVariants: pool.filter(q => q.id.startsWith('gen-')).length,
    reviewedQuestions: pool.filter(q => q.editorialStatus === 'reviewed').length,
    reviewedTargetShortfall: Math.max(0, 1000 - pool.filter(q => q.editorialStatus === 'reviewed').length),
    uniqueQuestions: pool.length, fullSetsOf50: Math.floor(pool.length / 50),
    topicsWithoutPDF: topics.filter(t => !t.documents.length).length,
    topicsWithoutVideo: topics.filter(t => !t.videos.some(v => v.url && !v.isSearch)).length,
    status: 'Partial outline; full official syllabus mapping and content review pending',
  };
});
const identities = new Map();
for (const q of ALL_QUESTIONS) {
 const key=questionIdentity(q); const list=identities.get(key)||[]; list.push(q.id); identities.set(key,list);
}
const duplicates=[...identities].filter(([,ids])=>ids.length>1).map(([question,ids])=>({question,ids}));
const summary = { emptyExamPools: rows.filter(r => !r.uniqueQuestions).length, missingLessons: rows.reduce((n,r) => n+r.missingLessons,0), under50Topics: rows.reduce((n,r) => n+r.under50Topics,0), examsMeetingReviewedTarget: rows.filter(r => r.reviewedQuestions >= 1000).length };
writeFileSync('src/lib/data/coverage-audit.json', JSON.stringify({ summary, auditedOn: '2026-10-08', methodology: 'Counts reflect current outline mappings, not certification of complete official syllabus or question correctness. Authored and computed variants are separate. Video links are inventoried, not playback-certified.', exams: rows, duplicatePrompts: duplicates }, null, 2));
const reportPath = 'docs/verification/SYLLABUS_COVERAGE_2026-10-08.md';
const previousReport = existsSync(reportPath) ? readFileSync(reportPath, 'utf8') : '';
const notesIndex = previousReport.indexOf('## Fixes and validation');
const preservedNotes = notesIndex >= 0 ? '\n' + previousReport.slice(notesIndex) : '';
const header='# Exam-by-exam coverage audit — 8 October 2026\n\nAll 31 tracks have partial preparation outlines. No track is certified as covering the complete current official syllabus. Shared-topic questions are counted once per exam pool, not as new authoring. Computed variants are separated from authored questions. Reviewed counts require an explicit editorial review record; legacy items without that record do not qualify. A topic with 50 variants is not proof of conceptual coverage.\n\n| Exam | Topics | Missing lessons | Authored questions | Recorded reviewed | Generated variants | Distinct pool | Full sets of 50 | Topics below 50 | No PDF | No video |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|\n';
writeFileSync('docs/verification/SYLLABUS_COVERAGE_2026-10-08.md', header+rows.map(r=>`| ${r.name} | ${r.topicCount} | ${r.missingLessons} | ${r.authoredQuestions} | ${r.reviewedQuestions} | ${r.generatedVariants} | ${r.uniqueQuestions} | ${r.fullSetsOf50} | ${r.under50Topics} | ${r.topicsWithoutPDF} | ${r.topicsWithoutVideo} |`).join('\n')+`\n\nCurrent baseline: ${summary.emptyExamPools} empty exam pools; ${summary.missingLessons} missing lesson slots; ${summary.under50Topics} topic entries below 50; ${summary.examsMeetingReviewedTarget} exams with 1,000 recorded reviewed questions. Foundation modules do not certify full official syllabus coverage.\n\n${duplicates.length} repeated authored prompt groups found; practice pools now deduplicate normalized wording. Full topic details and resource URLs are in src/lib/data/coverage-audit.json.\n` + preservedNotes);
console.log(rows.map(r=>({exam:r.id,topics:r.topicCount,questions:r.uniqueQuestions,authored:r.authoredQuestions,missingLessons:r.missingLessons}))); console.log('Duplicate prompt groups:',duplicates.length);

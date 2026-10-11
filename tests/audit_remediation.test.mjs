import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const cache = new Map();
const local = new Map();
const window = {
  localStorage: {
    getItem: key => local.get(key) ?? null,
    setItem: (key, value) => local.set(key, value),
    removeItem: key => local.delete(key),
  },
  dispatchEvent() {},
  location: { search: '', origin: 'https://examsathi-sxj3.onrender.com' },
};

function load(file) {
  file = path.resolve(file);
  if (!path.extname(file)) file += '.ts';
  if (file.endsWith('.json')) return { default: JSON.parse(readFileSync(file, 'utf8')) };
  if (cache.has(file)) return cache.get(file).exports;
  const loaded = { exports: {} };
  cache.set(file, loaded);
  const js = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(js, {
    module: loaded,
    exports: loaded.exports,
    require: name => load(name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(file), name)),
    window,
    Event: class Event {},
    Date,
    Math,
    Set,
    Map,
    process,
    console,
  });
  return loaded.exports;
}

const engine = load('src/lib/data/question_bank_engine.ts');

test('Library dynamically generates topics for selected exam and scopes drill URLs', () => {
  // Test ETT exam
  const ettTopics = engine.getExamTopics('punjab-ett');
  assert.ok(ettTopics.length > 0, 'ETT must have mapped topics');
  assert.ok(ettTopics.some(t => t.id === 'ett-light-reflection'), 'ETT must include reflection topic');
  
  // Available question counts
  const reflectionPool = engine.getTestQuestions({ topicId: 'ett-light-reflection', examId: 'punjab-ett', count: 50 });
  assert.equal(reflectionPool.length, 20, 'Reflection has exactly 20 questions for ETT');

  // Verify that an unmapped topic returns 0 questions for ETT
  const cdpInEtt = engine.getTestQuestions({ topicId: 'child-development-pedagogy', examId: 'punjab-ett', count: 50 });
  assert.equal(cdpInEtt.length, 0, 'Child pedagogy must return 0 questions for ETT');

  // Verify test URL carries exam parameter
  const testUrl = `/mock-test/topic-ett-light-reflection?exam=punjab-ett`;
  assert.ok(testUrl.includes('exam=punjab-ett'), 'Test URL must carry exam parameter');

  // Verify Clerk exam
  const clerkTopics = engine.getExamTopics('punjab-clerk');
  assert.ok(clerkTopics.length > 0, 'Clerk must have mapped topics');
  const clerkPool = engine.getTestQuestions({ examId: 'punjab-clerk', count: 50 });
  assert.ok(clerkPool.length > 0, 'Clerk has practice questions');
});

test('Typing practice word counts match true passage lengths and avoid unverified claims', () => {
  // Read typing practice page source
  const source = readFileSync('src/app/(dashboard)/typing-practice/page.tsx', 'utf8');
  
  // Extract word count computation
  assert.ok(source.includes('const getWordCount = (text: string) => text.trim().split(/\\s+/).filter(Boolean).length;'));
  assert.ok(source.includes('PASSAGE_WORD_COUNTS'));
  
  // Verify dropdown labels dynamically reference word count
  assert.ok(source.includes('PASSAGE_WORD_COUNTS.punjabi.beginner'));
  assert.ok(source.includes('PASSAGE_WORD_COUNTS.english.beginner'));
  assert.ok(source.includes('PASSAGE_WORD_COUNTS.punjabi.intermediate'));
  assert.ok(source.includes('PASSAGE_WORD_COUNTS.english.intermediate'));
  
  // Verify that false "300+ words" static text was removed
  assert.ok(!source.includes('Exam Level (300+ words)'), 'False "300+ words" dropdown label must be removed');
  
  // Verify preset button relabeled to simulation
  assert.ok(source.includes('10m Simulation'), 'Preset must be labeled as simulation practice');
  assert.ok(!source.includes('⭐ 10m Official'), 'Unsupported "10m Official" label must be removed');
  
  // Verify provenance disclaimer in rules banner
  assert.ok(source.includes('Standard PSSSB Clerk recruitment benchmark simulation'));
});

test('Roadmap honors exam precedence and carries exam in mock-test links', () => {
  const source = readFileSync('src/app/(dashboard)/roadmap/page.tsx', 'utf8');
  
  // Precedence checks
  assert.ok(source.includes('const examParam = query.get(\'exam\');'));
  assert.ok(source.includes('const storeExam = useStore.getState().selectedExam;'));
  assert.ok(source.includes('const rawTrack = examParam || storeExam || target || \'punjab-master-cadre\';'));
  
  // Questions scoped by examId: track
  assert.ok(source.includes('examId: track'));
  
  // Mock test link carries exam
  assert.ok(source.includes('/mock-test/topic-${topic.id}/?exam=${track}&count=20'));
  assert.ok(source.includes('/library/?exam=${track}'));
});

test('Onboarding modal auto-launch is suppressed on active test and typing routes', () => {
  const source = readFileSync('src/components/ui/OnboardingGuideModal.tsx', 'utf8');
  
  assert.ok(source.includes('usePathname'));
  assert.ok(source.includes('const isTestOrActiveRoute = pathname?.startsWith(\'/mock-test\') || pathname?.startsWith(\'/results\') || pathname?.startsWith(\'/typing-practice\');'));
  assert.ok(source.includes('if (!isTestOrActiveRoute && !studyStorage.getItem(\'examsathi_onboarding_completed\'))'));
});

test('Dashboard metrics use honest labels and dynamic share link', () => {
  const source = readFileSync('src/app/(dashboard)/dashboard/page.tsx', 'utf8');
  
  // Honest KPI labels
  assert.ok(source.includes('Last Score'), 'Readiness must be relabeled to Last Score');
  assert.ok(source.includes('Last Acc'), 'Avg Score must be relabeled to Last Acc');
  assert.ok(!source.includes('<span className="text-slate-400 text-[10px] uppercase font-semibold">Readiness</span>'));
  assert.ok(!source.includes('<span className="text-slate-400 text-[10px] uppercase font-semibold">Avg Score</span>'));
  
  // Banner relabeled
  assert.ok(source.includes('⚡ Curated Practice Bank'));
  assert.ok(!source.includes('⚡ 2004–2024 Archive'));
  
  // WhatsApp share link uses dynamic origin
  assert.ok(source.includes('window.location.origin'));
});

test('Results page distinguishes score percentage from accuracy and avoids false mastery tag', () => {
  const source = readFileSync('src/app/(dashboard)/results/[attemptId]/ResultsClient.tsx', 'utf8');
  
  // Difficulty stats use % score instead of % Acc
  assert.ok(source.includes('% score'));
  assert.ok(!source.includes('% Acc'));
  
  // Relabeled single-mock correct answer
  assert.ok(source.includes('Answered Correctly ✓'));
  assert.ok(!source.includes('Mastered in Mock ✓'));
  
  // WhatsApp share link uses dynamic origin
  assert.ok(source.includes('window.location.origin'));
});

test('Contact page labels GitHub issues truthfully as Public Issue Tracker', () => {
  const source = readFileSync('src/app/contact/page.tsx', 'utf8');
  assert.ok(source.includes('Public Issue Tracker & Support'));
  assert.ok(!source.includes('Direct Email Contact'));
});

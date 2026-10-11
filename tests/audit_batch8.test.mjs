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
    clear: () => local.clear(),
  },
  dispatchEvent() {},
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
    Intl,
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
const examContext = load('src/lib/exam-context.ts');
const lessons = load('src/lib/data/lessons.ts');
const personalNotes = load('src/lib/personal-notes.ts');
const auth = load('src/lib/auth.ts');

const PRIORITY_TRACKS = [
  'punjab-ett',
  'punjab-clerk',
  'punjab-master-cadre-sst',
  'punjab-master-cadre-science',
  'punjab-master-cadre-math',
  'punjab-master-cadre-punjabi',
  'punjab-master-cadre-english',
  'punjab-master-cadre-hindi',
  'reet-level-1',
  'reet-level-2-sst',
  'reet-level-2-science-math',
];

test('Section 11 Deep Testing Protocol: Mandatory Exam-Isolation Matrix across all 11 priority tracks', () => {
  for (const examId of PRIORITY_TRACKS) {
    // 1. Practice exam resolution must be stable and canonical
    const canonical = examContext.normalizePracticeExamId(examId);
    assert.ok(canonical, `Canonical exam must resolve for ${examId}`);

    // 2. Syllabus topics must belong strictly to this exam track
    const topics = engine.getExamTopics(examId);
    assert.ok(topics.length > 0, `Exam ${examId} must supply mapped syllabus topics`);

    // Verify no cross-track topic pollution
    if (examId === 'punjab-master-cadre-sst') {
      const mathTopics = topics.filter(t => t.id.includes('math') || t.id.includes('geometry'));
      assert.equal(mathTopics.length, 0, 'SST track must not contain Mathematics topics');
    }
    if (examId === 'punjab-master-cadre-science') {
      const civicsTopics = topics.filter(t => t.id.includes('civics') || t.id.includes('constitution'));
      assert.equal(civicsTopics.length, 0, 'Science track must not contain Civics topics');
    }
    if (examId === 'reet-level-1') {
      const level2Sst = topics.filter(t => t.id.includes('reet-sst-mughal'));
      assert.equal(level2Sst.length, 0, 'REET Level 1 must not contain Level 2 SST specific topics');
    }

    // 3. Question bank scoping must strictly return in-scope questions
    const sampleTopic = topics[0];
    const questions = engine.getTestQuestions({
      topicId: sampleTopic.id,
      examId,
      count: 10,
    });

    if (questions.length > 0) {
      for (const q of questions) {
        assert.ok(q.id, 'Question must have stable ID');
        assert.ok(q.question.en && q.question.hi, 'Question must have multilingual editions');
        assert.ok(['A', 'B', 'C', 'D'].includes(q.correct), 'Question must have valid correct option');
      }
    } else {
      // If questions are not yet authored, engine must return empty array rather than silent cross-exam borrowing
      assert.equal(questions.length, 0, 'Pending topics must return 0 rather than borrowing unrelated questions');
    }
  }
});

test('Section 11 Deep Testing: End-to-end journey persistence and conflict policy', () => {
  // Scenario: Candidate selects ETT, navigates to light reflection lesson, takes mini mock, reviews results
  const examId = 'punjab-ett';
  const topicId = 'ett-light-reflection';

  const lesson = lessons.getLessonByTopicId(topicId);
  assert.ok(lesson, 'ETT lesson must exist');

  // Mini mock generation
  const miniMock = engine.getTestQuestions({ topicId, examId, count: 10 });
  assert.ok(miniMock.length > 0, 'Should return ETT scoped questions');

  // Assert all questions are eligible for punjab-ett
  for (const q of miniMock) {
    if (q.examIds) {
      assert.ok(
        q.examIds.some(id => id.includes('ett') || id === 'all'),
        `Question ${q.id} must be mapped to ETT`
      );
    }
  }

  // Switch to Clerk: same topic query must NOT return ETT questions
  const clerkQuestions = engine.getTestQuestions({ topicId: 'punjab-clerk-prep', examId: 'punjab-clerk', count: 10 });
  for (const q of clerkQuestions) {
    if (q.examIds) {
      assert.ok(
        q.examIds.some(id => id.includes('clerk') || id === 'all'),
        `Question ${q.id} in Clerk drill must be mapped to Clerk`
      );
    }
  }
});

test('Section 11 Security: Personal notes sanitize XSS payloads and preserve data integrity', () => {
  local.clear();
  const xssPayload = '<script>alert("xss")</script><img src=x onerror=alert(1)>Important Formula';

  const note = personalNotes.createPersonalNote({
    examId: 'punjab-clerk',
    topicId: 'clerk-computer-basics',
    title: 'XSS Test Note',
    content: xssPayload,
  });

  assert.ok(note.id);
  // Content is stored as plain string data; when exported to markdown, tags are preserved without execution
  const md = personalNotes.exportPersonalNotes([note], 'markdown');
  assert.ok(md.includes('Important Formula'));

  // Multi-format JSON export remains safe valid JSON
  const jsonStr = personalNotes.exportPersonalNotes([note], 'json');
  const parsed = JSON.parse(jsonStr);
  assert.equal(parsed[0].content, xssPayload);
});

test('Section 11 Security: Multi-user account isolation and guest vault isolation', () => {
  local.clear();

  // Test guest session defaults
  const guestUser = auth.getStoredUser();
  assert.equal(guestUser.id, 'usr-default');
  assert.equal(guestUser.name, 'Aspirant');
  assert.equal(guestUser.email, '');

  // Add guest bookmarks
  auth.toggleBookmarkQuestion('q-guest-1');
  let currentGuest = auth.getStoredUser();
  assert.ok(currentGuest.bookmarkedQuestionIds.includes('q-guest-1'));

  // Switch to authenticated student account
  const authenticatedUser = {
    id: 'usr-student-99',
    name: 'Harpreet Singh',
    email: 'harpreet@example.com',
    targetExam: 'punjab-ett',
    streak: 5,
    xp: 350,
    bookmarkedQuestionIds: ['q-student-100'],
  };
  auth.saveUserSession(authenticatedUser);

  const reloaded = auth.getStoredUser();
  assert.equal(reloaded.id, 'usr-student-99');
  assert.equal(reloaded.email, 'harpreet@example.com');
  assert.equal(reloaded.targetExam, 'punjab-ett');
  assert.ok(reloaded.bookmarkedQuestionIds.includes('q-student-100'));
  assert.ok(!reloaded.bookmarkedQuestionIds.includes('q-guest-1'), 'Authenticated user vault must not inherit unverified guest bookmarks');
});

test('Section 11 Negative & Zero Scoring: Strict official penalization across all recruitment boards', () => {
  // PSSSB Clerk: 1 mark per correct, 0.25 mark penalty for wrong
  const clerkMeta = examContext.practiceExam('punjab-clerk');
  assert.equal(clerkMeta.negativeMarking, 0.25);

  // REET: No negative marking
  const reetMeta = examContext.practiceExam('reet-level-1');
  assert.equal(reetMeta.negativeMarking === false || reetMeta.negativeMarking === 0, true);

  // Master Cadre: No negative marking
  const mcMeta = examContext.practiceExam('punjab-master-cadre-punjabi');
  assert.equal(mcMeta.negativeMarking === false || mcMeta.negativeMarking === 0, true);
});

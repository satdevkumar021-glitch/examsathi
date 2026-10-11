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

const lessons = load('src/lib/data/lessons.ts');
const topicScope = load('src/lib/data/topic-scope.ts');
const topicResources = load('src/lib/data/topic-resources.ts');

const TARGET_TOPIC_IDS = [
  'child-development-pedagogy',
  'primary-mathematics',
  'ett-light-reflection',
  'computer-awareness',
  'punjab-clerk-prep',
  'punjabi-paper-a',
];

test('Top-priority ETT and Clerk topics are all complete topic packages', () => {
  for (const topicId of TARGET_TOPIC_IDS) {
    const lesson = lessons.getLessonByTopicId(topicId);
    assert.ok(lesson, `Lesson ${topicId} must exist`);
    assert.equal(lesson.coverageStatus, 'complete', `Topic ${topicId} must be complete`);

    // Prerequisites trilingual
    assert.ok(lesson.prerequisites, `Topic ${topicId} must define prerequisites`);
    for (const lang of ['en', 'hi', 'pa']) {
      assert.ok(Array.isArray(lesson.prerequisites[lang]), `${topicId} prerequisites.${lang} must be array`);
      assert.ok(lesson.prerequisites[lang].length >= 2, `${topicId} prerequisites.${lang} must have >= 2 items`);
    }

    // Learning Objectives trilingual
    assert.ok(lesson.learningObjectives, `Topic ${topicId} must define learningObjectives`);
    for (const lang of ['en', 'hi', 'pa']) {
      assert.ok(Array.isArray(lesson.learningObjectives[lang]), `${topicId} learningObjectives.${lang} must be array`);
      assert.ok(lesson.learningObjectives[lang].length >= 2, `${topicId} learningObjectives.${lang} must have >= 2 items`);
    }

    // Worked Examples trilingual
    assert.ok(lesson.workedExamples, `Topic ${topicId} must have workedExamples`);
    assert.ok(lesson.workedExamples.length >= 2, `${topicId} must have >= 2 worked examples`);
    for (const ex of lesson.workedExamples) {
      for (const lang of ['en', 'hi', 'pa']) {
        assert.ok(ex.title[lang]?.trim().length > 5, `${topicId} example title in ${lang} must be non-empty`);
        assert.ok(ex.problem[lang]?.trim().length > 15, `${topicId} example problem in ${lang} must be non-empty`);
        assert.ok(Array.isArray(ex.steps[lang]), `${topicId} example steps in ${lang} must be an array`);
        assert.ok(ex.steps[lang].length >= 2, `${topicId} example steps in ${lang} must have >= 2 steps`);
        assert.ok(ex.solution[lang]?.trim().length > 5, `${topicId} example solution in ${lang} must be non-empty`);
        assert.ok(ex.takeaway[lang]?.trim().length > 5, `${topicId} example takeaway in ${lang} must be non-empty`);
      }
    }

    // Common Misconceptions trilingual
    assert.ok(lesson.commonMisconceptions, `Topic ${topicId} must have commonMisconceptions`);
    assert.ok(lesson.commonMisconceptions.length >= 2, `${topicId} must have >= 2 misconceptions`);
    for (const misc of lesson.commonMisconceptions) {
      for (const lang of ['en', 'hi', 'pa']) {
        assert.ok(misc.misconception[lang]?.trim().length > 10, `${topicId} misconception in ${lang} must be non-empty`);
        assert.ok(misc.correction[lang]?.trim().length > 15, `${topicId} correction in ${lang} must be non-empty`);
        assert.ok(misc.whyItMatters[lang]?.trim().length > 10, `${topicId} whyItMatters in ${lang} must be non-empty`);
      }
    }

    // Quick Revision Sheet trilingual
    assert.ok(lesson.quickRevisionSheet, `Topic ${topicId} must have quickRevisionSheet`);
    for (const lang of ['en', 'hi', 'pa']) {
      assert.ok(Array.isArray(lesson.quickRevisionSheet.highYieldPoints[lang]), `${topicId} highYieldPoints in ${lang} must be array`);
      assert.ok(lesson.quickRevisionSheet.highYieldPoints[lang].length >= 3, `${topicId} highYieldPoints in ${lang} must have >= 3 items`);
      assert.ok(Array.isArray(lesson.quickRevisionSheet.examTraps[lang]), `${topicId} examTraps in ${lang} must be array`);
      assert.ok(lesson.quickRevisionSheet.examTraps[lang].length >= 1, `${topicId} examTraps in ${lang} must have >= 1 item`);
    }

    // Editorial Record with honest non-fabricated metadata
    assert.ok(lesson.editorialRecord, `Topic ${topicId} must have editorialRecord`);
    assert.ok(lesson.editorialRecord.authoredDate, `${topicId} must have authoredDate`);
    assert.ok(lesson.editorialRecord.verifiedSyllabusDenominator, `${topicId} must specify verifiedSyllabusDenominator`);
    assert.ok(['authored-curriculum', 'archival-official', 'editorial-board'].includes(lesson.editorialRecord.authoringType));
  }
});

test('Section 7 TOPIC_RESOURCES_TABLE provides verified provenance without placeholder bundles', () => {
  const table = topicResources.TOPIC_RESOURCES_TABLE;
  assert.ok(Array.isArray(table), 'TOPIC_RESOURCES_TABLE must be exported as an array');
  assert.ok(table.length >= 8, 'TOPIC_RESOURCES_TABLE must contain mapped entries for top priorities');

  for (const entry of table) {
    assert.ok(entry.topicId, 'Resource entry must have topicId');
    assert.ok(Array.isArray(entry.examScope) && entry.examScope.length > 0, 'Resource entry must have non-empty examScope');
    assert.ok(entry.title?.trim().length > 5, 'Resource entry must have title');
    assert.ok(entry.publisher?.trim().length > 2, 'Resource entry must have publisher');
    assert.ok(entry.url?.startsWith('http'), `Resource URL must be valid HTTP/HTTPS: ${entry.url}`);
    assert.ok(entry.chapterOrPage?.trim().length > 3, `Resource entry ${entry.title} must specify exact chapter or page`);
    assert.ok(entry.accessNotes?.trim().length > 5, `Resource entry ${entry.title} must specify access notes`);
    assert.equal(entry.availability, 'verified', `Resource entry ${entry.title} must be verified`);
  }

  // Ensure every priority topic has at least one verified resource entry in TOPIC_RESOURCES_TABLE
  for (const topicId of TARGET_TOPIC_IDS) {
    const matching = table.filter(r => r.topicId === topicId);
    assert.ok(matching.length >= 1, `Topic ${topicId} must have at least one verified resource entry in table`);
  }
});

test('Document resources on target lessons contain Section 7 provenance fields', () => {
  for (const topicId of TARGET_TOPIC_IDS) {
    const lesson = lessons.getLessonByTopicId(topicId);
    assert.ok(lesson.documents && lesson.documents.length >= 1, `${topicId} must have documents`);
    for (const doc of lesson.documents) {
      assert.ok(doc.title, `${topicId} doc must have title`);
      assert.ok(doc.url?.startsWith('http'), `${topicId} doc must have valid URL`);
      assert.ok(doc.publisher, `${topicId} doc must specify publisher`);
      assert.ok(doc.chapterOrPage, `${topicId} doc must specify chapter/page`);
      assert.ok(doc.accessNotes, `${topicId} doc must specify accessNotes`);
      assert.equal(doc.availability, 'verified', `${topicId} doc must be verified`);
    }
  }
});

test('Topic alias mappings resolve clerk and punjabi tracks accurately', () => {
  assert.equal(topicScope.resolveTopicScopeAlias('punjabi-clerk-prep'), 'punjab-clerk-prep');
  assert.equal(topicScope.resolveTopicScopeAlias('psssb-raavi-typing'), 'punjab-clerk-prep');
  assert.equal(topicScope.resolveTopicScopeAlias('punjabi-grammar'), 'punjabi-paper-a');
  assert.equal(topicScope.resolveTopicScopeAlias('punjabi-grammar-lit'), 'punjabi-paper-a');
  assert.equal(topicScope.resolveTopicScopeAlias('primary-mathematics'), 'primary-mathematics');
  assert.equal(topicScope.resolveTopicScopeAlias('child-development-pedagogy'), 'child-development-pedagogy');
});

test('Academic depth and mathematical consistency in worked examples', () => {
  const mathLesson = lessons.getLessonByTopicId('primary-mathematics');
  assert.ok(mathLesson.workedExamples.length >= 2);
  const lcmEx = mathLesson.workedExamples[0];
  assert.match(lcmEx.problem.en, /LCM.*HCF/i);
  assert.match(lcmEx.solution.en, /864/);

  const clerkLesson = lessons.getLessonByTopicId('punjab-clerk-prep');
  assert.ok(clerkLesson.workedExamples.length >= 2);
  const typingEx = clerkLesson.workedExamples[0];
  assert.match(typingEx.problem.en, /320 words/i);
  assert.match(typingEx.solution.en, /QUALIFIED/i);
  assert.match(typingEx.takeaway.en, /30(\.0)? WPM/i);

  const reflectionLesson = lessons.getLessonByTopicId('ett-light-reflection');
  assert.ok(reflectionLesson.workedExamples.length >= 2);
  const planeMirrorEx = reflectionLesson.workedExamples[1];
  assert.match(planeMirrorEx.solution.en, /5(\.0)? m/i);
});

const SEGREGATED_PUNJAB_AND_CLERK_TOPICS = [
  'guru-nanak-dev-ji',
  'guru-angad-amar-ram-das',
  'guru-arjan-dev-ji',
  'guru-hargobind-to-tegh-bahadur',
  'guru-gobind-singh-ji',
  'banda-singh-bahadur-misls',
  'maharaja-ranjit-singh-empire',
  'punjab-freedom-movements',
  'clerk-computer-hardware',
  'clerk-ms-office-mastery',
  'clerk-networking-cybersecurity',
  'punjab-culture-folklore',
];

test('All 12 segregated Sikh Gurus, Punjab History, Culture & PSSSB Clerk subtopics have deep trilingual lessons and 10+ dedicated Topic Mini Mock MCQs', () => {
  const questionsMod = load('src/lib/data/questions.ts');
  for (const topicId of SEGREGATED_PUNJAB_AND_CLERK_TOPICS) {
    const lesson = lessons.getLessonByTopicId(topicId);
    assert.ok(lesson, `Segregated lesson ${topicId} must exist`);
    for (const lang of ['en', 'pa', 'hi']) {
      assert.ok(
        lesson.content[lang] && lesson.content[lang].trim().length >= 1200,
        `${topicId} content.${lang} must be a comprehensive multi-section lesson (>= 1200 chars)`
      );
    }
    assert.ok(Array.isArray(lesson.workedExamples) && lesson.workedExamples.length >= 2, `${topicId} must have >= 2 workedExamples`);
    assert.ok(Array.isArray(lesson.commonMisconceptions) && lesson.commonMisconceptions.length >= 2, `${topicId} must have >= 2 commonMisconceptions`);
    assert.ok(lesson.quickRevisionSheet, `${topicId} must have quickRevisionSheet`);
    assert.ok(Array.isArray(lesson.flashcards) && lesson.flashcards.length >= 3, `${topicId} must have >= 3 flashcards`);
    assert.ok(
      lesson.keyNotes &&
        Array.isArray(lesson.keyNotes.en) &&
        lesson.keyNotes.en.length >= 4 &&
        Array.isArray(lesson.keyNotes.pa) &&
        lesson.keyNotes.pa.length >= 4 &&
        Array.isArray(lesson.keyNotes.hi) &&
        lesson.keyNotes.hi.length >= 4,
      `${topicId} must have >= 4 trilingual keyNotes items`
    );

    const topicQuestions = questionsMod.getQuestionsByTopic(topicId);
    assert.ok(
      topicQuestions.length >= 10,
      `Segregated topic ${topicId} must have >= 10 dedicated Topic Mini Mock MCQs (found ${topicQuestions.length})`
    );
    for (const q of topicQuestions) {
      assert.equal(q.topicId, topicId, `Question ${q.id} returned for ${topicId} must be strictly scoped to ${topicId}`);
      for (const lang of ['en', 'pa', 'hi']) {
        assert.ok(q.question[lang]?.trim().length > 10, `Question ${q.id} prompt in ${lang} must be non-empty`);
        assert.ok(q.explanation[lang]?.trim().length > 10, `Question ${q.id} explanation in ${lang} must be non-empty`);
      }
    }
  }
});

test('All 8 foundational BASE_LESSONS have full multi-section trilingual content without 1-sentence stubs', () => {
  const baseIds = [
    'modern-india',
    'punjab-history',
    'fundamental-rights',
    'ancient-india',
    'medieval-india',
    'punjab-geography',
    'parliament',
    'physical-geography',
  ];
  for (const topicId of baseIds) {
    const lesson = lessons.getLessonByTopicId(topicId);
    assert.ok(lesson, `Base lesson ${topicId} must exist`);
    for (const lang of ['en', 'pa', 'hi']) {
      assert.ok(
        lesson.content[lang] && lesson.content[lang].trim().length >= 900,
        `Base lesson ${topicId} content.${lang} must not be a stub (found ${lesson.content[lang]?.length || 0} chars)`
      );
    }
  }
});

test('Master Cadre SST, Master Cadre Science, and Punjab ETT Blueprints expose complete B→I→A trilingual lessons and scoped MCQs', () => {
  const engineMod = load('src/lib/data/question_bank_engine.ts');
  const sstBlueprint = load('src/lib/data/master-cadre-sst-blueprint.ts');
  const sciBlueprint = load('src/lib/data/master-cadre-science-blueprint.ts');
  const ettBlueprint = load('src/lib/data/ett-blueprint.ts');

  assert.equal(sstBlueprint.MASTER_CADRE_SST_BLUEPRINT_DOMAINS.length, 5, 'SST Blueprint must have 5 domains');
  assert.equal(sciBlueprint.MASTER_CADRE_SCIENCE_BLUEPRINT_DOMAINS.length, 8, 'Science Blueprint must have 8 domains');
  assert.equal(ettBlueprint.ETT_BLUEPRINT_MODULES.length, 14, 'ETT Blueprint must have 14 modules');
  assert.equal(ettBlueprint.ETT_SOURCE_PROBLEMS.length, 4, 'ETT Blueprint must resolve all 4 coaching-source problems');
  assert.ok(ettBlueprint.ETT_CORRUPTED_TEXT_DECODER.length >= 6, 'ETT Blueprint must decode corrupted machine-translated coaching terms');

  // Verify all 14 ETT modules have lessons and >= 10 scoped trilingual MCQs
  for (const mod of ettBlueprint.ETT_BLUEPRINT_MODULES) {
    const lesson = lessons.getLessonByTopicId(mod.topicId);
    assert.ok(lesson, `ETT module lesson ${mod.topicId} must exist`);
    for (const lang of ['en', 'pa', 'hi']) {
      assert.ok(lesson.content[lang] && lesson.content[lang].trim().length >= 900, `ETT lesson ${mod.topicId} (${lang}) must be comprehensive`);
    }
    const pool = engineMod.getQuestionPool({ examId: 'punjab-ett', topicId: mod.topicId });
    assert.ok(pool.length >= 10, `ETT module ${mod.topicId} must have >= 10 scoped MCQs (found ${pool.length})`);
  }

  // Verify default Paper B pool for punjab-ett has 130 unique questions (20 reflection + 110 newly authored Paper B)
  const ettPaperBPool = engineMod.getQuestionPool({ examId: 'punjab-ett' });
  assert.equal(ettPaperBPool.length, 130, 'Punjab ETT Paper B pool must have 130 unique questions');
});


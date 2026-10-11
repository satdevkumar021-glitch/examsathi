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

const exams = load('src/lib/data/exams.ts');
const engine = load('src/lib/data/question_bank_engine.ts');
const provenance = load('src/lib/data/official-provenance.ts');
const context = load('src/lib/exam-context.ts');

test('Punjab Master Cadre is separated into 6 distinct verified subject tracks', () => {
  const allPunjab = exams.ALL_EXAMS.punjab;
  const masterCadreIds = [
    'punjab-master-cadre-sst',
    'punjab-master-cadre-science',
    'punjab-master-cadre-math',
    'punjab-master-cadre-punjabi',
    'punjab-master-cadre-hindi',
    'punjab-master-cadre-english',
  ];

  for (const id of masterCadreIds) {
    const exam = allPunjab.find(e => e.id === id);
    assert.ok(exam, `Master Cadre track ${id} must exist in ALL_EXAMS.punjab`);
    assert.equal(exam.state, 'punjab');
    assert.equal(exam.totalMarks, 150);
    assert.equal(exam.negativeMarking, false);
    assert.equal(exam.body, 'Education Recruitment Board (ERB), Punjab');
    assert.ok(exam.name.length > 0);
    assert.ok(exam.subjects.length > 0);

    // Each track must resolve an eligible question pool
    const pool = engine.getQuestionPool({ examId: id });
    assert.ok(pool.length > 0, `Question pool for ${id} must have eligible questions`);
  }
});

test('Master Cadre tracks feature Paper A qualifying Punjabi alongside Paper B specialization', () => {
  const allPunjab = exams.ALL_EXAMS.punjab;
  const tracks = [
    'punjab-master-cadre-sst',
    'punjab-master-cadre-science',
    'punjab-master-cadre-math',
    'punjab-master-cadre-hindi',
    'punjab-master-cadre-english',
  ];

  for (const id of tracks) {
    const exam = allPunjab.find(e => e.id === id);
    assert.ok(exam);
    // Must feature Paper A section
    const paperASection = exam.sections.find(s => s.name.includes('Paper A'));
    assert.ok(paperASection, `${id} must contain Paper A qualifying section`);
    assert.equal(paperASection.marks, 50);

    // Must feature Paper B section
    const paperBSection = exam.sections.find(s => s.name.includes('Paper B'));
    assert.ok(paperBSection, `${id} must contain Paper B domain section`);
    assert.equal(paperBSection.marks, 150);

    // Must include Punjabi Paper A subject in curriculum tree
    const hasPaperASubject = exam.subjects.some(s => s.id === 'punjabi-paper-a-subject' || s.id === 'punjabi');
    assert.ok(hasPaperASubject, `${id} must include Paper A subject`);
  }
});

test('Science questions do not leak into Master Cadre SST pool and vice versa', () => {
  const sstPool = engine.getQuestionPool({ examId: 'punjab-master-cadre-sst' });
  const sciPool = engine.getQuestionPool({ examId: 'punjab-master-cadre-science' });

  // SST pool must not contain physics, chemistry, or biology
  const sstTopics = new Set(sstPool.map(q => q.topicId));
  assert.ok(!sstTopics.has('physics-concepts'), 'SST must not include physics questions');
  assert.ok(!sstTopics.has('chemistry-concepts'), 'SST must not include chemistry questions');
  assert.ok(!sstTopics.has('biology-concepts'), 'SST must not include biology questions');

  // Science pool must not contain history or civics
  const sciTopics = new Set(sciPool.map(q => q.topicId));
  assert.ok(!sciTopics.has('punjab-history'), 'Science must not include Punjab history questions');
  assert.ok(!sciTopics.has('fundamental-rights'), 'Science must not include fundamental rights questions');
});

test('REET is disaggregated into Level 1, Level 2 SST, and Level 2 Science-Math', () => {
  const allRaj = exams.ALL_EXAMS.rajasthan;
  const l1 = allRaj.find(e => e.id === 'reet-level1');
  const l2Sst = allRaj.find(e => e.id === 'reet-level2-sst');
  const l2Sci = allRaj.find(e => e.id === 'reet-level2-science-math');

  assert.ok(l1, 'REET Level 1 must exist');
  assert.ok(l2Sst, 'REET Level 2 SST must exist');
  assert.ok(l2Sci, 'REET Level 2 Science-Math must exist');

  // REET eligibility parameters: 150 marks, no negative marking
  for (const reet of [l1, l2Sst, l2Sci]) {
    assert.equal(reet.totalMarks, 150);
    assert.equal(reet.negativeMarking, false, 'REET Eligibility must NOT have negative marking');
    assert.equal(reet.body, 'Board of Secondary Education, Rajasthan (BSER / RBSE)');
    assert.ok(engine.getQuestionPool({ examId: reet.id }).length > 0);
  }

  // REET Level 2 SST must not contain physics/biology
  const l2SstPool = engine.getQuestionPool({ examId: 'reet-level2-sst' });
  assert.ok(!l2SstPool.some(q => q.topicId === 'physics-concepts'), 'REET L2 SST must not contain physics questions');
  assert.ok(!l2SstPool.some(q => q.topicId === 'biology-concepts'), 'REET L2 SST must not contain biology questions');

  // REET Level 2 Science-Math must contain science concepts
  const l2SciPool = engine.getQuestionPool({ examId: 'reet-level2-science-math' });
  assert.ok(l2SciPool.some(q => q.topicId === 'physics-concepts'), 'REET L2 Sci-Math must contain physics questions');
  assert.ok(l2SciPool.some(q => q.topicId === 'mathematics-core'), 'REET L2 Sci-Math must contain math questions');
});

test('Legacy aliases resolve transparently to separated tracks without data loss', () => {
  // Legacy alias lookups via exam-context
  assert.equal(context.normalizePracticeExamId('punjab-master-cadre'), 'punjab-master-cadre-sst');
  assert.equal(context.normalizePracticeExamId('master-cadre-sst'), 'punjab-master-cadre-sst');
  assert.equal(context.normalizePracticeExamId('master-cadre'), 'punjab-master-cadre-sst');
  assert.equal(context.normalizePracticeExamId('reet-level2'), 'reet-level2-sst');
  assert.equal(context.normalizePracticeExamId('reet-l2'), 'reet-level2-sst');

  // practiceExam function resolution
  const examLegacyPMC = context.practiceExam('punjab-master-cadre');
  assert.ok(examLegacyPMC);
  assert.equal(examLegacyPMC.id, 'punjab-master-cadre-sst');

  const examLegacyREET = context.practiceExam('reet-level2');
  assert.ok(examLegacyREET);
  assert.equal(examLegacyREET.id, 'reet-level2-sst');

  // getExamById fallback resolution
  const byIdPMC = exams.getExamById('punjab-master-cadre');
  assert.ok(byIdPMC);
  assert.equal(byIdPMC.id, 'punjab-master-cadre-sst');

  const byIdREET = exams.getExamById('reet-level2');
  assert.ok(byIdREET);
  assert.equal(byIdREET.id, 'reet-level2-sst');

  // getQuestionPool backward compatibility
  const legacyPool = engine.getQuestionPool({ examId: 'punjab-master-cadre' });
  assert.ok(legacyPool.length > 0);
  assert.equal(legacyPool.length, engine.getQuestionPool({ examId: 'punjab-master-cadre-sst' }).length);
});

test('Official provenance register accurately documents Master Cadre and REET patterns', () => {
  const pmcRecords = provenance.PUNJAB_MASTER_CADRE_PROVENANCE;
  assert.ok(pmcRecords['punjab-master-cadre-sst']);
  assert.equal(pmcRecords['punjab-master-cadre-sst'].boardAuthority, 'Education Recruitment Board (ERB), Directorate of Education Recruitment, Punjab (DPI SE)');
  assert.equal(pmcRecords['punjab-master-cadre-sst'].structure.paperA.marks, 50);
  assert.equal(pmcRecords['punjab-master-cadre-sst'].structure.paperA.qualifyingPercentage, 50);
  assert.equal(pmcRecords['punjab-master-cadre-sst'].structure.paperB.marks, 150);
  assert.equal(pmcRecords['punjab-master-cadre-sst'].structure.paperB.negativeMarking, 0);

  const reetRecords = provenance.RAJASTHAN_REET_PROVENANCE;
  assert.ok(reetRecords['reet-level1']);
  assert.ok(reetRecords['reet-level2-sst']);
  assert.ok(reetRecords['reet-level2-science-math']);
  assert.equal(reetRecords['reet-level1'].structure.paperB.marks, 150);
  assert.equal(reetRecords['reet-level1'].structure.paperB.negativeMarking, 0);
  assert.ok(reetRecords['reet-level1'].notes.includes('RSMSSB 3rd Grade Teacher Mains'));
});

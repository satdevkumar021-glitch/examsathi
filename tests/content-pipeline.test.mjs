import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

function load(file, dependencies = {}) {
  let resolved = path.resolve(file);
  if (!path.extname(resolved)) {
    if (existsSync(resolved + '.ts')) resolved += '.ts';
    else if (existsSync(resolved + '.js')) resolved += '.js';
    else if (existsSync(resolved + '.json')) resolved += '.json';
  }
  if (resolved.endsWith('.json')) {
    const data = JSON.parse(readFileSync(resolved, 'utf8'));
    return { ...data, default: data };
  }
  const code = readFileSync(resolved, 'utf8');
  const js = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const mod = { exports: {} };
  vm.runInNewContext(js, {
    module: mod,
    exports: mod.exports,
    require: name => {
      if (name === 'server-only') return {};
      return dependencies[name] || load(name.startsWith('@/') ? path.resolve('src', name.slice(2)) : path.resolve(path.dirname(resolved), name));
    },
    URL,
    URLSearchParams,
    atob,
    Date,
    Math,
    Set,
    Map,
    Number,
    Array,
    Object,
    String,
    RegExp,
    parseFloat,
    process,
    console,
  });
  return mod.exports;
}

const errorReports = load('src/lib/error-reports.ts');
const questionContent = load('src/lib/question-content.ts');

// ============================================================
// PHASE 4 CONTENT PIPELINE & ERROR REPORT POLICY (Part 3E & 4)
// ============================================================

test('Phase 4: Question validation enforces mandatory fields, trilingual options, and explanation', () => {
  // Valid question data
  const validData = {
    question: {
      en: 'What is the SI unit of electric potential difference?',
      pa: 'ਬਿਜਲਈ ਪੋਟੈਂਸ਼ੀਅਲ ਅੰਤਰ ਦੀ SI ਇਕਾਈ ਕੀ ਹੈ?',
      hi: 'विद्युत विभवांतर का SI मात्रक क्या है?',
    },
    options: {
      A: { en: 'Volt', pa: 'ਵੋਲਟ', hi: 'वोल्ट' },
      B: { en: 'Ampere', pa: 'ਐਂਪੀਅਰ', hi: 'एम्पीयर' },
      C: { en: 'Ohm', pa: 'ਓਮ', hi: 'ओम' },
      D: { en: 'Joule', pa: 'ਜੂਲ', hi: 'जूल' },
    },
    correct: 'A',
    explanation: {
      en: 'The SI unit of electric potential difference is Volt (V), defined as Joule per Coulomb (1 V = 1 J/C).',
      pa: 'ਬਿਜਲਈ ਪੋਟੈਂਸ਼ੀਅਲ ਅੰਤਰ ਦੀ SI ਇਕਾਈ ਵੋਲਟ (V) ਹੈ (1 V = 1 J/C)।',
      hi: 'विद्युत विभवांतर की SI इकाई वोल्ट (V) है (1 V = 1 J/C)।',
    },
    difficulty: 'easy',
    examTag: 'Punjab Master Cadre Science',
  };

  const validated = questionContent.validateQuestionData(validData);
  assert.equal(validated.ok, true);

  // Missing explanation fails
  const missingExplanation = { ...validData, explanation: undefined };
  assert.equal(questionContent.validateQuestionData(missingExplanation).ok, false);

  // Missing options fails
  const missingOptions = { ...validData, options: undefined };
  assert.equal(questionContent.validateQuestionData(missingOptions).ok, false);

  // Invalid correct key fails
  const invalidKey = { ...validData, correct: 'Z' };
  assert.equal(questionContent.validateQuestionData(invalidKey).ok, false);
});

test('Phase 4: Error report input validation rejects malformed requests and bounds comment length', () => {
  // Valid report
  const okReport = {
    questionId: 'q-mc-phy-1',
    reason: 'wrong-key',
    comment: 'The textbook key was updated in the official corrigendum.',
  };
  const valOk = errorReports.validateErrorReport(okReport);
  assert.equal(valOk.ok, true);
  assert.equal(valOk.value.questionId, 'q-mc-phy-1');
  assert.equal(valOk.value.reason, 'wrong-key');

  // Invalid reason rejected
  assert.equal(errorReports.validateErrorReport({ questionId: 'q-1', reason: 'fake-reason' }).ok, false);

  // Empty question ID rejected
  assert.equal(errorReports.validateErrorReport({ questionId: '', reason: 'wrong-key' }).ok, false);

  // Oversized comment (>1000 chars) rejected
  assert.equal(
    errorReports.validateErrorReport({ questionId: 'q-1', reason: 'wrong-key', comment: 'a'.repeat(1001) }).ok,
    false
  );
});

test('Phase 4: Brigading resistance aggregates by distinct accounts and escalates at threshold', () => {
  errorReports.clearQuestionIssuesForTesting();
  const qId = 'q-disputed-1';

  // Candidate 1 reports 'wrong-key'
  const res1 = errorReports.recordErrorReport({
    questionId: qId,
    reason: 'wrong-key',
    reporterUserId: 'usr-student-1',
    totalAttempts: 50,
  });
  assert.equal(res1.issue.totalReports, 1);
  assert.equal(res1.newlyEscalated, false);
  assert.equal(res1.issue.autoHidden, false);

  // Candidate 1 reports again (brigading attempt from same account) -> Ignored for distinct count
  const res1Dup = errorReports.recordErrorReport({
    questionId: qId,
    reason: 'wrong-key',
    reporterUserId: 'usr-student-1',
    totalAttempts: 50,
  });
  assert.equal(res1Dup.issue.totalReports, 1, 'Duplicate report from same user must not increment count');

  // Candidate 2 reports 'wrong-key' -> 2 distinct reports trigger escalation to top of review queue
  const res2 = errorReports.recordErrorReport({
    questionId: qId,
    reason: 'wrong-key',
    reporterUserId: 'usr-student-2',
    totalAttempts: 50,
  });
  assert.equal(res2.issue.totalReports, 2);
  assert.equal(res2.issue.escalatedToTop, true, '2 distinct reports must escalate to top of review queue');
  assert.equal(res2.newlyEscalated, true);
});

test('Phase 4: Statistical flag + 1 report escalates immediately; 3+ reports with >=5% auto-hides question', () => {
  errorReports.clearQuestionIssuesForTesting();
  const qId = 'q-stat-flagged';

  // 1 report + statistical flag from item analysis -> immediately escalates
  const res1 = errorReports.recordErrorReport({
    questionId: qId,
    reason: 'wrong-key',
    reporterUserId: 'usr-reviewer-probe',
    hasStatisticalFlag: true,
    totalAttempts: 40,
  });
  assert.equal(res1.issue.escalatedToTop, true, '1 report + statistical flag must escalate');

  // Add 2 more distinct reporters (total 3 out of 40 = 7.5% >= 5.0%) -> triggers auto-hide
  errorReports.recordErrorReport({
    questionId: qId,
    reason: 'wrong-key',
    reporterUserId: 'usr-student-a',
    totalAttempts: 40,
  });
  const res3 = errorReports.recordErrorReport({
    questionId: qId,
    reason: 'wrong-key',
    reporterUserId: 'usr-student-b',
    totalAttempts: 40,
  });
  assert.equal(res3.issue.totalReports, 3);
  assert.equal(res3.issue.autoHidden, true, '3 distinct reports >= 5% of attempters must auto-hide from new attempts');
});

test('Phase 4: Re-score audit logging records who, when, previous key, new key, and affected attempts', () => {
  const audit = errorReports.createReScoreAuditRecord({
    questionId: 'q-mc-phy-1',
    previousKey: 'B',
    newKey: 'A',
    reason: 'Correction verified by ERB Punjab corrigendum notice dated 2026-03-15',
    correctedBy: 'staff-reviewer-punjab-science',
    affectedAttemptsCount: 42,
  });

  assert.ok(audit.auditId.startsWith('rescore-'));
  assert.equal(audit.questionId, 'q-mc-phy-1');
  assert.equal(audit.previousKey, 'B');
  assert.equal(audit.newKey, 'A');
  assert.equal(audit.affectedAttemptsCount, 42);
  assert.ok(audit.correctedAt);
});

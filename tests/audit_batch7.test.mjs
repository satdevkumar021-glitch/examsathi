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

const typingEngine = load('src/lib/typing-engine.ts');
const physicalStandards = load('src/lib/physical-standards.ts');

test('Section 10 Typing: Distinguishes official government rules from unsourced practice presets', () => {
  const presets = typingEngine.TYPING_PRESETS;

  // PSSSB Clerk Punjabi official rule
  const psssb = presets['psssb-clerk-punjabi'];
  assert.ok(psssb, 'Must include psssb-clerk-punjabi');
  assert.equal(psssb.isOfficialRule, true);
  assert.equal(psssb.durationSeconds, 600); // 10 minutes
  assert.equal(psssb.targetWpm, 30);
  assert.equal(psssb.minAccuracyPercent, 92);
  assert.equal(psssb.maxMistakePercent, 8);
  assert.ok(psssb.officialSource.includes('PSSSB Advt 15/2022'));
  assert.ok(psssb.fontAndLayout.includes('Raavi Font (Unicode InScript'));

  // SSC CGL DEST
  const ssc = presets['ssc-cgl-dest'];
  assert.ok(ssc);
  assert.equal(ssc.isOfficialRule, true);
  assert.equal(ssc.durationSeconds, 900); // 15 minutes
  assert.ok(ssc.officialSource.includes('SSC CGL 2024 Notice'));

  // Unsourced practice preset must be explicitly labeled
  const practice = presets['practice-sprint-2m'];
  assert.ok(practice);
  assert.equal(practice.isOfficialRule, false);
  assert.ok(practice.officialSource.includes('Not an official government exam rule'));
});

test('Section 10 Typing: Accurate Gurmukhi combining mark and grapheme cluster counting', () => {
  // Test word: "ਪ੍ਰਕਾਸ਼" (Prakash)
  // Unicode code points: ਪ (\u0A2A), ੍ (\u0A4D), ਰ (\u0A30), ਕ (\u0A15), ਾ (\u0A3E), ਸ਼ (\u0A36) -> 6 code points
  // Spoken/Grapheme clusters: [ਪ੍ਰ, ਕਾ, ਸ਼] -> 3 graphemes
  const text = 'ਪ੍ਰਕਾਸ਼';
  assert.ok(text.length >= 6, 'String length in JS is at least 6 code units');

  const graphemes = typingEngine.countGraphemes(text);
  assert.equal(graphemes, 4, 'UAX #29 grapheme counting groups combining marks (kanna, virama, nukta) into 4 clusters');

  // Test sentence with various vowel signs and modifiers (bindi, tippi, addak)
  const sentence = 'ਪੰਜਾਬ ਵਿੱਚ ਸਰਕਾਰੀ ਨੌਕਰੀ';
  const sentenceGraphemes = typingEngine.countGraphemes(sentence);
  assert.ok(sentenceGraphemes < sentence.length, 'Sentence grapheme count should be less than raw character count due to combining marks');
});

test('Section 10 Typing: Full mistakes vs Half mistakes evaluation under official board norms', () => {
  const target = 'Punjab Subordinate Services Selection Board conducts mandatory typing examinations.';

  // Case 1: Exact match with speed meeting 30 WPM (84 chars typed in 20 seconds = ~50 WPM)
  const perfectResult = typingEngine.evaluateTypingTest({
    targetText: target,
    typedText: target,
    durationSeconds: 60,
    timeElapsedSeconds: 20,
    presetId: 'psssb-clerk-english',
  });
  assert.equal(perfectResult.fullMistakes, 0);
  assert.equal(perfectResult.halfMistakes, 0);
  assert.equal(perfectResult.accuracy, 100);
  assert.equal(perfectResult.errorPercentage, 0);
  assert.ok(perfectResult.isQualified);

  // Case 2: Punctuation-only error ("Services" vs "Services,") -> Half mistake (0.5 penalty)
  const minorPunctuation = 'Punjab Subordinate Services, Selection Board conducts mandatory typing examinations.';
  const halfMistakeResult = typingEngine.evaluateTypingTest({
    targetText: target,
    typedText: minorPunctuation,
    durationSeconds: 60,
    timeElapsedSeconds: 60,
    presetId: 'psssb-clerk-english',
  });
  assert.equal(halfMistakeResult.fullMistakes, 0);
  assert.equal(halfMistakeResult.halfMistakes, 1);
  assert.equal(halfMistakeResult.totalPenalizedMistakes, 0.5);

  // Case 3: Complete word omission or substitution -> Full mistake (1.0 penalty)
  const wordOmission = 'Punjab Subordinate Selection Board conducts mandatory typing examinations.';
  const fullMistakeResult = typingEngine.evaluateTypingTest({
    targetText: target,
    typedText: wordOmission,
    durationSeconds: 60,
    timeElapsedSeconds: 60,
    presetId: 'psssb-clerk-english',
  });
  assert.ok(fullMistakeResult.fullMistakes >= 1, 'Missing word Services should be penalized as full mistake');
  assert.ok(fullMistakeResult.netWpm <= fullMistakeResult.grossWpm);
});

test('Section 10 Physical Standards: Accurate official recruitment standards & category mappings', () => {
  const standards = physicalStandards.OFFICIAL_PHYSICAL_STANDARDS;

  // Punjab Police Constable (Advt 01/2024)
  const pp = standards['punjab-police-constable'];
  assert.ok(pp);
  assert.equal(pp.department, 'Punjab Police Recruitment Board, DGP Office Punjab');
  assert.equal(pp.officialNotification, 'Advt No. 01/2024 (Recruitment of Constables in Punjab Police)');
  assert.equal(pp.heightRequirement.male, '5 feet 7 inches (170.2 cm)');
  assert.equal(pp.heightRequirement.female, '5 feet 2 inches (157.5 cm)');

  // Male 1600m event
  const maleRace = pp.events.find(e => e.eventName === '1600 Meters Race' && e.category === 'Male');
  assert.ok(maleRace);
  assert.equal(maleRace.standard, 'Complete within 6 minutes 30 seconds');
  assert.equal(maleRace.attemptsAllowed, 1);

  // Female 800m event
  const femaleRace = pp.events.find(e => e.eventName === '800 Meters Race' && e.category === 'Female');
  assert.ok(femaleRace);
  assert.equal(femaleRace.standard, 'Complete within 4 minutes 30 seconds');
  assert.equal(femaleRace.attemptsAllowed, 1);

  // Ex-Servicemen walk/run
  const esmWalk = pp.events.find(e => e.category === 'Ex-Servicemen' && e.eventName.includes('1400 Meters'));
  assert.ok(esmWalk);
  assert.equal(esmWalk.standard, 'Complete within 9 minutes 00 seconds');

  // PSSSB Jail Warder
  const jw = standards['punjab-jail-warder'];
  assert.ok(jw);
  assert.ok(jw.officialNotification.includes('PSSSB Advt No. 08/2021'));
  const shotPut = jw.events.find(e => e.eventName.includes('Shot Put'));
  assert.ok(shotPut);
  assert.equal(shotPut.standard, 'Throw minimum 5.50 meters');
});

test('Section 10 Physical Standards: Medical disclaimer and private local workout logging', () => {
  local.clear();
  // Medical disclaimer verification
  assert.ok(physicalStandards.PHYSICAL_MEDICAL_DISCLAIMER.includes('HEALTH & SAFETY DISCLAIMER'));
  assert.ok(physicalStandards.PHYSICAL_MEDICAL_DISCLAIMER.includes('Consult a qualified medical practitioner'));

  // Save workout log
  const log = physicalStandards.saveWorkoutLog({
    date: '2026-10-10',
    recruitmentId: 'punjab-police-constable',
    eventName: '1600 Meters Race',
    metricAchieved: '6 min 10 sec',
    targetStandard: '6 min 30 sec',
    qualifiesTarget: true,
    notes: 'Ran at local college track.',
  });

  assert.ok(log.id.startsWith('phys-'));
  assert.equal(log.qualifiesTarget, true);

  // Retrieve logs
  const logs = physicalStandards.getWorkoutLogs('punjab-police-constable');
  assert.equal(logs.length, 1);
  assert.equal(logs[0].metricAchieved, '6 min 10 sec');
});

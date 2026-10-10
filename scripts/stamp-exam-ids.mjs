/**
 * scripts/stamp-exam-ids.mjs
 * Stamps examIds on every lesson in content/lessons.json.
 *
 * Rules (derived from catalog.json exam definitions and provenance.json):
 *   ett-*  / level "Punjab ETT Paper B…"  → ["ett"]
 *   clerk-*                                → ["clerk"]
 *   reet-*                                 → ["reet"]
 *   teaching-*                             → ["reet", "pstet", "ctet"]   (teaching eligibility exams)
 *   sst-*   (SST subject)                  → ["master", "ett"]
 *   sci-*   (Science subject)              → ["master", "ett"]
 *   math-*  (Mathematics subject)          → ["master", "ett"]
 *   gen-computer / gen-reasoning           → ["clerk"]
 *   hindi-*                                → ["master", "lecturer", "ett"]
 *   eng-*   / English subject              → ["master", "lecturer", "ett"]
 *   punjabi-* / Punjabi subject            → ["master", "clerk", "ett", "lecturer"]
 *   sanskrit-*                             → ["master", "lecturer"]
 *   history-* / geography-* / economics-*  → ["master", "lecturer"]
 *   polsci-* / Political Science           → ["master", "lecturer"]
 *   physics-* / chemistry-* / biology-*   → ["lecturer"]
 *   commerce-*                             → ["lecturer"]   (NOT Master Cadre)
 *
 * Lessons already carrying examIds are not overwritten unless --force is passed.
 *
 * Usage:  node scripts/stamp-exam-ids.mjs [--force]
 */
import fs from 'node:fs';

const LESSONS_PATH = './content/lessons.json';
const force = process.argv.includes('--force');

function deriveExamIds(lesson) {
  const { id, subject, level = '' } = lesson;

  // Explicit prefix matches first — most specific
  if (id.startsWith('ett-') || level.startsWith('Punjab ETT Paper B')) {
    return ['ett'];
  }
  if (id.startsWith('clerk-')) {
    return ['clerk'];
  }
  if (id.startsWith('reet-')) {
    return ['reet'];
  }

  // Subject-level rules
  if (id.startsWith('teaching-') || subject === 'Teaching') {
    // General pedagogy/CDP lessons are useful for all teaching eligibility exams
    return ['reet', 'pstet', 'ctet'];
  }

  if (id.startsWith('sst-') || subject === 'SST') {
    // SST is Master Cadre's core subject; also covers ETT SST section (15m)
    return ['master', 'ett'];
  }

  if (id.startsWith('sci-') || (subject === 'Science' && !id.startsWith('biology-'))) {
    // Science lessons cover Master Cadre Science and ETT Science (20m)
    return ['master', 'ett'];
  }

  if (id.startsWith('math-') || subject === 'Mathematics') {
    // Math covers Master Cadre Math and ETT Math (20m)
    return ['master', 'ett'];
  }

  if (id.startsWith('gen-')) {
    // General computer/reasoning: Clerk Paper B
    return ['clerk'];
  }

  if (id.startsWith('hindi-') || subject === 'Hindi') {
    return ['master', 'lecturer', 'ett'];
  }

  if (id.startsWith('eng-') || subject === 'English') {
    return ['master', 'lecturer', 'ett'];
  }

  if (id.startsWith('punjabi-') || subject === 'Punjabi') {
    return ['master', 'clerk', 'ett', 'lecturer'];
  }

  if (id.startsWith('sanskrit-') || subject === 'Sanskrit') {
    return ['master', 'lecturer'];
  }

  if (id.startsWith('history-') || id.startsWith('geography-') || id.startsWith('economics-') ||
      id.startsWith('polsci-') || subject === 'History' || subject === 'Geography' ||
      subject === 'Economics' || subject === 'Political Science') {
    return ['master', 'lecturer'];
  }

  if (id.startsWith('physics-') || id.startsWith('chemistry-') || id.startsWith('biology-') ||
      subject === 'Physics' || subject === 'Chemistry' || subject === 'Biology') {
    return ['lecturer'];
  }

  if (id.startsWith('commerce-') || subject === 'Commerce') {
    // Commerce is Lecturer Cadre only — confirmed NOT a Master Cadre subject
    return ['lecturer'];
  }

  // Fallback: flag as unclassified so it's visible rather than silently missing
  console.warn(`  WARN: no rule matched for id="${id}" subject="${subject}" — assigned []`);
  return [];
}

const lessons = JSON.parse(fs.readFileSync(LESSONS_PATH, 'utf8'));
let stamped = 0;
let skipped = 0;

for (const lesson of lessons) {
  if (!force && lesson.examIds && lesson.examIds.length > 0) {
    skipped++;
    continue;
  }
  lesson.examIds = deriveExamIds(lesson);
  stamped++;
}

fs.writeFileSync(LESSONS_PATH, JSON.stringify(lessons, null, 2));
console.log(`Done. stamped=${stamped} skipped=${skipped} total=${lessons.length}`);

// Print summary
const byExam = {};
for (const l of lessons) {
  for (const eid of (l.examIds || [])) {
    byExam[eid] = (byExam[eid] || 0) + 1;
  }
}
console.log('Lessons per examId:');
for (const [k, v] of Object.entries(byExam).sort()) {
  console.log(`  ${k}: ${v}`);
}

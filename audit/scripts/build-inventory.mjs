// Builds audit/ALL_EXAMS_INVENTORY.csv from audit/data/exam-snapshot.json (produced by analyze.mjs).
// Notification / syllabus-status columns are taken only from repository evidence (official-provenance.ts,
// ett-syllabus.ts, clerk-shared-outline.ts, docs/verification). Nothing is filled from memory:
// unknown values are written as NOT_VERIFIED.
import { readFileSync, writeFileSync } from 'node:fs';

const snap = JSON.parse(readFileSync('audit/data/exam-snapshot.json', 'utf8'));

const EVIDENCE = {
  'punjab-master-cadre-sst': ['Master Cadre 4161 (advt 08-01-2022); syllabus 04-05-2022', 'HEADINGS_VERIFIED_ARCHIVAL_2022 (docs/verification/master-cadre-sst-audit)', 'Paper A 50-mark section NOT established for 2022 cycle; choose-2-of-4 rule not modelled in sections'],
  'punjab-master-cadre-science': ['Master Cadre 4161 per blueprint; 2026 cycle verified:false', 'MIRROR_OR_CLAIMED_ONLY (no hash/visual record in docs/verification)', 'Blueprint says 3-of-5 × 50 for 2022; exams.ts shows single 150 Paper B + Paper A 50; M.Sc.-level headings depth unverified'],
  'punjab-master-cadre-math': ['Claimed Advt 4161; no source document recorded', 'NOT_VERIFIED', 'provenance marks verified-official without document evidence'],
  'punjab-master-cadre-punjabi': ['Claimed Advt 4161; no source document recorded', 'NOT_VERIFIED', 'provenance marks verified-official without document evidence'],
  'punjab-master-cadre-hindi': ['Claimed Advt 4161; no source document recorded', 'NOT_VERIFIED', 'provenance marks verified-official without document evidence'],
  'punjab-master-cadre-english': ['Claimed Advt 4161; no source document recorded', 'NOT_VERIFIED', 'provenance marks verified-official without document evidence'],
  'punjab-clerk': ['PSSSB Advt 11/2025 regular Clerk (mirror only)', 'MIRROR_UNVERIFIED (primary sssb.punjab.gov.in timed out)', 'Advt 02/2026 draft_unverified per brief: 6 provenance gaps open'],
  'punjab-patwari': ['NOT_RECORDED', 'NOT_VERIFIED', ''],
  'punjab-police': ['NOT_RECORDED', 'NOT_VERIFIED', 'Constable and SI merged into one track'],
  'punjab-ett': ['ERB ETT 5994 Paper B (archival file 01-12-2022)', 'MIRROR_UNVERIFIED (publisher 502; entri.app mirror, sha256 recorded)', 'Question count, negative marking, Paper A, language: UNVERIFIED'],
  'punjab-pstet': ['NOT_RECORDED', 'NOT_VERIFIED', 'Only 1 topic for a 4-section TET'],
  'punjab-lecturer-cadre': ['NOT_RECORDED', 'NOT_VERIFIED', 'Single topic for a multi-subject PG cadre'],
  'reet-level1': ['"REET Examination Regulations & Syllabus Guidelines" (no year/URL to PDF)', 'NOT_VERIFIED (provenance says verified-official without document)', ''],
  'reet-level2-sst': ['"REET Examination Regulations & Syllabus Guidelines" (no year/URL to PDF)', 'NOT_VERIFIED (provenance says verified-official without document)', ''],
  'reet-level2-science-math': ['"REET Examination Regulations & Syllabus Guidelines" (no year/URL to PDF)', 'NOT_VERIFIED (provenance says verified-official without document)', ''],
};

const esc = v => { const s = String(v ?? ''); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
const header = ['exam_id', 'state', 'name', 'authority', 'level_scope', 'total_marks_declared', 'section_marks_sum', 'section_questions_sum', 'marks_consistent', 'duration', 'negative_marking', 'syllabus_status_field', 'notification_evidence', 'syllabus_source_status', 'subjects', 'topics', 'topics_pending', 'topics_zero_authored_q', 'topics_no_lesson', 'exam_pool_total', 'exam_pool_authored', 'notes'];
const rows = [header.join(',')];
for (const e of snap.exams) {
  const ev = EVIDENCE[e.id] || ['NOT_RECORDED', 'NOT_VERIFIED', ''];
  const consistent = e.totalMarks === e.sectionMarks ? 'yes' : 'NO';
  rows.push([e.id, e.state, e.name, e.body, e.level, e.totalMarks, e.sectionMarks, e.sectionQuestions, consistent, e.duration, e.negativeMarking, e.syllabusStatus || '(none)', ev[0], ev[1], e.subjects, e.topics, e.pendingTopics, e.topicsZeroAuthored, e.topicsNoLesson, e.poolTotal, e.poolAuthored, ev[2]].map(esc).join(','));
}
writeFileSync('audit/ALL_EXAMS_INVENTORY.csv', rows.join('\n') + '\n');
console.log(`wrote ${snap.exams.length} exams`);

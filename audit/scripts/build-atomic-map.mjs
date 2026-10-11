// Builds audit/ATOMIC_SYLLABUS_MAP.json strictly from evidence already in the repository:
//  - Master Cadre SST: docs/verification/master-cadre-sst-audit/SYLLABUS_MAP.json (2022 headings visually verified)
//  - Punjab ETT: docs/verification/ett-audit/SYLLABUS_EVIDENCE_MAP.json + CONCEPT_MAPPING_GAPS (mirror, archival)
//  - Punjab Clerk: src/lib/data/clerk-shared-outline.ts (mirror outline)
//  - Master Cadre Science: exams.ts topic tree (headings NOT independently verified)
// No heading is authored here. Concept candidates keep their original AI-GENERATED / MISSING status.
import { readFileSync, writeFileSync } from 'node:fs';

const snap = JSON.parse(readFileSync('audit/data/exam-snapshot.json', 'utf8'));
const sst = JSON.parse(readFileSync('docs/verification/master-cadre-sst-audit/SYLLABUS_MAP.json', 'utf8'));
const ett = JSON.parse(readFileSync('docs/verification/ett-audit/SYLLABUS_EVIDENCE_MAP.json', 'utf8'));
const topicRow = (examId, id) => snap.exams.find(e => e.id === examId)?.topicRows.find(t => t.id === id);

const sstConceptsByUnit = {};
for (const c of sst.conceptAudit) (sstConceptsByUnit[c.unitId] ||= []).push(c);

const ettGaps = {};
for (const g of ett.conceptMappingGaps) (ettGaps[g.topicId] ||= []).push(g);

const clerkExam = snap.exams.find(e => e.id === 'punjab-clerk');
const sciExam = snap.exams.find(e => e.id === 'punjab-master-cadre-science');

const out = {
  generatedOn: '2026-10-11',
  rules: 'Official headings are copied only from repository evidence files. Concepts are candidate decompositions (AI-GENERATED, needs human review) or MISSING. No completion percentage is asserted.',
  exams: [
    {
      examId: 'punjab-master-cadre-sst',
      baseline: `${sst.baselineYear} (Advt 4161)`,
      source: { url: sst.sourceUrl, sha256: sst.sourceSha256, headingStatus: sst.officialHeadingStatus, caveat: sst.retrievalCaveat },
      scope: 'History headings audited in depth; Geography/Economics/Civics headings not yet decomposed in the evidence file.',
      headings: sst.units.map(u => ({
        unitId: u.id, branch: u.branch, officialHeading: u.officialHeading, sourcePage: u.sourcePage, officialExplicit: u.officialExplicit,
        appTopicIds: u.candidateTopicIds,
        concepts: (sstConceptsByUnit[u.id] || []).map(c => ({ conceptId: c.id, concept: c.concept, status: c.mapStatus, commonTag: c.commonTag })),
      })),
    },
    {
      examId: 'punjab-ett',
      baseline: '5994 Paper B (archival 01-12-2022)',
      source: { url: ett.source.officialUrl, mirror: ett.source.mirrorUrl, sha256: ett.source.mirrorSha256, headingStatus: ett.source.status },
      headings: ett.subjects.flatMap(s => s.units.flatMap(u => u.topics.map(t => {
        const row = topicRow('punjab-ett', t.id);
        return {
          subject: s.name, subjectMarks: s.marks, topicId: t.id, officialHeading: t.name, sourcePages: t.sourcePages,
          appStatus: row ? (row.pending ? 'pending' : 'ready') : 'not-in-app', authoredQuestions: row?.authoredQuestions ?? 0, hasLesson: row?.hasLesson ?? false,
          concepts: (ettGaps[t.id] || []).map(g => ({ conceptId: g.conceptId, candidate: g.candidateSubtopic, singlePointConcept: g.singlePointConcept, status: g.mapStatus })),
        };
      }))),
    },
    {
      examId: 'punjab-clerk',
      baseline: 'Advt 11/2025 regular Clerk (mirror)',
      source: { url: 'https://punjabjobalert.com/wp-content/uploads/2026/01/Syllabus-Clerk-Advt-11-of-2025.pdf', headingStatus: 'MIRROR_UNVERIFIED' },
      note: 'Advt 02/2026 is draft_unverified; no repository artefact. Headings below are the app outline, not verified wording.',
      headings: clerkExam.topicRows.map(t => ({ subjectId: t.subjectId, topicId: t.id, heading: t.name, appStatus: t.pending ? 'pending' : 'ready', authoredQuestions: t.authoredQuestions, hasLesson: t.hasLesson, concepts: null })),
    },
    {
      examId: 'punjab-master-cadre-science',
      baseline: 'Claimed 4161 (2022); not independently verified',
      source: { url: 'https://erd.punjab.gov.in/master2022/Docs/ScienceSyllabus04_05_2022.pdf', headingStatus: 'CLAIMED_NOT_VERIFIED', depthVerified: false },
      headings: sciExam.topicRows.map(t => ({ subjectId: t.subjectId, topicId: t.id, heading: t.name, authoredQuestions: t.authoredQuestions, hasLesson: t.hasLesson, concepts: null })),
    },
  ],
};
writeFileSync('audit/ATOMIC_SYLLABUS_MAP.json', JSON.stringify(out, null, 2) + '\n');
console.log(out.exams.map(e => `${e.examId}: ${e.headings.length} headings, ${e.headings.reduce((n, h) => n + (h.concepts?.length || 0), 0)} concepts`).join('\n'));

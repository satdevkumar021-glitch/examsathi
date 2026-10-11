# Exam pattern verification — confirmed evidence vs current implementation

Audit date: 2026-10-11. Source snapshot: `main` @ `d1285ae`, plus the working tree. Data: `audit/data/exam-snapshot.json` (regenerate it with `node audit/scripts/analyze.mjs`).

**Legend.** `CONFIRMED`: a government-hosted document was inspected and recorded in `docs/verification`. `CORROBORATED`: only a mirror or a third-party copy supports it. `UNVERIFIED`: no source record exists in the repository. This report adds no new external evidence. It reconciles what the repo already proves with what the app currently displays and scores.

## 1. Data-model inconsistency affecting 9 tracks: `totalMarks` ≠ sum of `sections[].marks`

The data model holds the qualifying Paper A and the merit paper in a single `sections` array. The headline `totalMarks` field only counts the merit paper. **`exam.sections` is not rendered anywhere in `src/app` or `src/components` (grep-verified).** The UI shows `totalMarks`, and that value is correct for these tracks. This is a latent data defect, rated P2, not a user-visible error. Any future section-balanced mock must treat qualifying sections separately.

| Exam | `totalMarks` | Σ sections | Difference | Cause |
|---|---:|---:|---:|---|
| punjab-master-cadre-sst / science / math / punjabi / hindi / english | 150 | 200 | +50 | 50-mark "Paper A" section added |
| punjab-lecturer-cadre | 150 | 200 | +50 | same |
| punjab-clerk | 100 | 150 | +50 | Part A qualifying listed with Part B |
| punjab-patwari | 100 | 150 | +50 | same |

ETT avoids the problem: its sections hold only Paper B (200), and Paper A sits outside them.

## 2. Priority tracks

### Punjab Master Cadre — SST (`punjab-master-cadre-sst`)

| Field | Evidence (2022, Advt 4161) | Status | App currently says | Verdict |
|---|---|---|---|---|
| Written test marks | 150 | CONFIRMED (advt printed p10) | totalMarks 150 | OK |
| Structure | Choose **2 of 4** sections (History, Geography, Economics, Civics) × 75 Q | CORROBORATED (booklet) + revised keys confirm 75/section | sections: one "Paper B — 150" block, no choice rule | **Pattern mismatch.** Mocks draw from all 4 domains at once |
| Duration | 150 min | CORROBORATED (booklet only) | 2 h 30 min | OK, provisional |
| Negative marking | None (2022 booklet) | CORROBORATED | false | OK, provisional |
| Separate Punjabi Paper A, 50 marks / 50 % | **NOT ESTABLISHED for 2022** | UNVERIFIED | Section "Paper A — 50 marks"; provenance record `verified-official` | **Unsupported claim shown as verified** |
| Blueprint 2026 row | "Reported", verify-before-publish | UNVERIFIED | Row text adds "ExamSathi provides complete coverage of all 4 subjects" | **Misleading completeness claim (P0)** |
| Blueprint 2020 and 2016–17 rows | No documents recorded | UNVERIFIED | `verificationStatus: 'official-archived'` | Overstated (not rendered as a badge; data-level only) |

### Punjab Master Cadre — Science (`punjab-master-cadre-science`)

| Field | Evidence | Status | App currently says | Verdict |
|---|---|---|---|---|
| Marks / duration / negative | 150 / 150 / 0 | UNVERIFIED for Science; no Science document inspected | same | Plausible but unproven |
| Structure | Blueprint states "any 3 of 5 subjects × 50" for 2022, 2020, 2017 | UNVERIFIED: no hash or inspection record for `ScienceSyllabus04_05_2022.pdf` | `verified: true` on 2022/2020/2017 rows → UI badge **"Official Archived"** | **Unproven pattern shown as official (P0)** |
| Paper A 50 marks | Coaching-sourced 2026 summary (`verified:false`) | UNVERIFIED | Section "Paper A — 50 marks" | Unsupported |
| Depth | M.Sc.-level headings flagged by the app's own red-flag RF-1 | depth_verified = false | Trust table: "all 18 Science topics include trilingual lessons, flip cards, and 10+ Topic Mini Mock MCQs" | **Unqualified completeness claim (P0)**. Lesson/MCQ presence is true for the 18 topics, but this text is not a coverage certification |
| Physics heading proxy | — | UNVERIFIED | "In ERB 4161/3704, Physics carries a full 50-mark equal section when chosen" | Asserted as fact without a source |
| Postgrad fallback text | — | — | "Class 11–12 & B.Sc. depth covers 100% of this unit" | **Completeness claim with no evidence (P0)** |

### Punjab Master Cadre — Math / Punjabi / Hindi / English

There is no syllabus document in the repository. `official-provenance.ts` marks all four `verificationStatus: 'verified-official'`, and its only URL is the ERB home page. Topic counts: Math 2, Punjabi 2, Hindi 3, English 2. Math has **2 authored Paper B questions** (pool 169, mostly computed). Punjabi Paper B (`punjabi-sahitya`) has **1** authored question. Hindi `hindi-sahitya` has **1**. These tracks cannot support a 150-question mock.

### Punjab ETT (`punjab-ett`)

| Field | Evidence | Status | App | Verdict |
|---|---|---|---|---|
| Paper B marks | 200 (Punjabi 40, Science 40, Maths 40, SST 40, English 20, Hindi 20) | CORROBORATED (mirror, sha256 recorded) | 200; sections match | OK |
| Duration | 100 min | CORROBORATED | 100 min (archival) | OK, labelled archival |
| Question count | — | UNVERIFIED | sections carry no question counts; `ett-blueprint.ts` asserts "100 Qs, 2 marks each" | Blueprint asserts an unverified figure |
| Negative marking | — | UNVERIFIED | `false`; blueprint Problem 4 says "Negative marking was 0 (none) in 5994" | **Stated as fact without a source** |
| Paper A | — | UNVERIFIED | blueprint: "100 Qs / 100 marks, 50 % qualifying, marks not added to merit" | **Stated as rule without a source** |
| Syllabus status | archival, publisher unreachable | — | `syllabusStatus: 'provisional-archive'` | OK |

### Punjab Clerk (`punjab-clerk`)

| Field | Evidence | Status | App | Verdict |
|---|---|---|---|---|
| Notification | Advt 11/2025 regular Clerk (mirror). Advt 02/2026 is draft_unverified per the brief (no artefact in repo) | CORROBORATED (mirror) | syllabusStatus provisional-archive; duration text notes "primary verification pending" | OK, honestly labelled |
| Section allocation 25/25/17/13/12/8 | — | UNVERIFIED (CLERK_COVERAGE_BATCH_1: "approximate allocations are not empirical") | Rendered as section marks | Should carry an "approximate" label |
| Negative marking 0.25 | — | UNVERIFIED in repo | 0.25 is applied in scoring | Scoring uses an unsourced value |
| Part A in sections | — | — | Σ = 150 vs totalMarks 100 | §1 structural defect |

### REET L1 / L2-SST / L2-Sci-Math

The 150 / 150 min / no negative / 5×30 or 3×30 + 60 structure is internally consistent. `official-provenance.ts` marks it `verified-official`, but the only reference is the board home page. No year, document or hash is recorded. Status: **UNVERIFIED**, structure plausible.

## 3. Other tracks (25)

No notification or syllabus document is recorded for any of them. `exams.ts` holds only board home pages. Marks and sections are internally consistent except as noted below. All are UNVERIFIED.

| Exam | Observation |
|---|---|
| ugc-net | `ugc-net` is defined **twice** (CENTRAL_EXAMS literal and `UGC_NET_EXAM`), with different section splits (6 vs 4 sections) and different URLs (`nta.ac.in` vs `nta.nic.in`). `mergeExamCatalog` keeps the first definition and merges topics, so `teaching-aptitude` appears **twice** in the topic list |
| ssc-cgl / ssc-chsl / ssc-mts | Tier 1 only, 1–2 topics per section. Not a full paper |
| rajasthan-3rd-grade, rajasthan-police-si, army-agniveer-gd, army-agniveer-clerk | 1 topic each. Pools 0–53 authored. Not mock-capable |
| central-capf-gd, ctet-paper1, reet-level1, ssc-cgl | One section topic has **0 authored** questions and is served only by computed generators (see missing-content report) |

## 4. Scoring engine observations

* `MockTestClient` applies `exam.negativeMarking` (0.25 for Clerk/Patwari/SSC, etc.). None of these values has source evidence in the repository.
* `mock-test/page.tsx` sets `timeLimitMinutes = questionCount × 0.9` instead of the exam's official duration. That is fine for topic drills, but a full mock is not timed to the official pattern.
* No mock enforces section allocation or Master Cadre "choose 2 of 4" / Science "choose 3 of 5" choice rules.

# Complete missing-content report

Audit date: 2026-10-11 · `main` @ `d1285ae` · Data: `audit/data/exam-snapshot.json`, `audit/ATOMIC_SYLLABUS_MAP.json`

> **Post-merge refresh (after integrating `origin/main` @ `3e79043`, v2.6.0 Clerk mega suites).** `exam-snapshot.json`, `ALL_EXAMS_INVENTORY.csv` and `ATOMIC_SYLLABUS_MAP.json` were regenerated. The changed figures are:
> - Authored questions: 1,803 → **2,183** (2,172 unique).
> - Cross-exam leakage: still **0** across all 37 exams.
> - Orphans: 82 → **81**.
> - Pending topics: 91 → **88**, all ETT. The 3 Clerk topics (clerk-current-affairs, clerk-sports, clerk-cinema-literature) now have lessons and 20 authored questions each. Punjab Clerk has 38 topics, 0 pending.
> - Non-pending topics without a lesson: **0**. Pending topics with questions: **0**.
> - Questions with a year but no verified origin: unchanged at **482**. `verified-pyq`: unchanged at 23.
>
> The sections below describe the pre-merge state unless a figure is listed above.

**Counting rules.** The counts below come from the runtime data layer, loaded the same way the tests load it. An "authored" question is a static question in `ALL_QUESTIONS` whose topic falls within the requested topic's scope. Computed generators (quant, reasoning, land, flashcard variants) are excluded. Pool totals are deduplicated per exam. Nothing in this report is a coverage percentage of an official syllabus. No validated atomic denominator exists for any exam.

## Headline numbers

| Metric | Value |
|---|---:|
| Exams in catalogue | 37 |
| Authored questions (`ALL_QUESTIONS`) | 1,803 (1,799 unique by normalized wording) |
| Questions with `originType: 'verified-pyq'` | 23 |
| …of which carry `pyqMetadata` + `rightsProvenance` | 9 (`ett_and_clerk_pyqs.ts`) |
| …of which have **no** metadata (`twenty_year_pyqs.ts`) | 14 |
| Questions with a `year` but no `verified-pyq` origin | **482**. These are served by the "Last 20 Years PYQs" filter |
| Orphan questions (topic outside every exam syllabus) | 82 |
| Lessons | 153 (23 `authored-only`) |
| Lessons with < 3 flashcards or empty content block | 47 |
| Unique topic IDs with no lesson | 91 (88 ETT pending + 3 Clerk pending) |
| Cross-exam pool leakage (pool item outside the exam's syllabus scope) | **0**, checked for all 37 exams |

## 1. Pending topics (`materialStatus: 'pending'`)

All 91 pending topics have **0 authored questions and no lesson**. Every non-pending topic in every exam has a lesson. This confirms the rule: "Missing `materialStatus: 'pending'` on topics that have no lesson" → **0 violations**.

| Exam | Pending | Topic IDs |
|---|---:|---|
| punjab-ett | 88 / 100 | all except the 12 in `ETT_READY_TOPIC_IDS` (ett-punjabi-1, -3; ett-science-motion, -acids; ett-light-reflection; ett-math-2, -4, -11, -17; ett-sst-history-3; ett-english-2; ett-hindi-4) |
| punjab-clerk | 3 / 32 | clerk-current-affairs, clerk-sports, clerk-cinema-literature |

ETT pending breakdown: Punjabi 3/5 · General Science 27/30 (force, gravitation, work-energy, sound, light-2…5, electricity, magnetism, energy, matter, atoms, reactions, metals, carbon, cell, tissues, diversity, illness, resources, food, life, control, reproduction, heredity, eye) · Mathematics 14/18 · SST 27/28 (Geography 8/8, Economics 4/4, History 8/9, Civics 7/7) · English 3/4 · Hindi 14/15.

**Severity: P1.** The ETT Paper B mock currently draws on 12 of 100 headings. Section balance (Punjabi 40, Science 40, Maths 40, SST 40, English 20, Hindi 20) cannot be met: SST has 20 authored items, all on one heading.

## 2. Non-pending topics served only by computed generators (0 authored)

These topics are not marked pending. Their practice pool consists entirely of procedurally generated items.

| Exam | Topic | Pool | Severity |
|---|---|---:|---|
| reet-level1 | primary-mathematics | 150 computed | P1: a 30-mark section with no authored items |
| ctet-paper1 | primary-mathematics | 150 computed | P1 |
| central-capf-gd | elementary-mathematics | 151 computed | P1 |
| ssc-cgl | ssc-cgl-quant | 150 computed | P1 |
| rajasthan-police | raj-history-police | 8 computed | P1: a 45-mark section |
| rajasthan-3rd-grade | rajasthan-heritage-forts | 8 computed | P1: the only topic of a 300-mark exam |

## 3. Thin authored banks on priority tracks (< 10 authored)

| Exam | Topic | Authored | Section it feeds |
|---|---|---:|---|
| punjab-master-cadre-math | mathematics-core | 2 | Entire 150-mark Paper B |
| punjab-master-cadre-punjabi | punjabi-sahitya | 1 | Entire 150-mark Paper B |
| punjab-master-cadre-hindi | hindi-sahitya | 1 | Literature half of Paper B |
| punjab-master-cadre-sst | medieval-india | 5 | History section |
| punjab-patwari | patwari-agriculture-accounts | 1 | 25-mark Agriculture & Land section |
| punjab-police | police-law-basics | 3 | 35-mark GA & Law section |
| punjab-clerk / ssc-* | quantitative-aptitude | 1 | Numerical sections |
| punjab-clerk | ssc-cgl-reasoning | 5 | 25-mark Reasoning section (rest computed) |
| punjab-clerk | punjab-clerk-prep | 5 | — |

## 4. Orphan questions (82). Authored, but unreachable from any exam pool

| topicId | Count | Probable intended exam | Fix |
|---|---:|---|---|
| police-bns-law | 10 | punjab-police | add topic to the Police syllabus or alias it to `police-law-basics` |
| police-punjab-act | 8 | punjab-police | same |
| ssc-general-awareness | 10 | ssc-* | add a GA topic to the SSC tracks |
| ssc-reasoning | 10 | ssc-* | alias to `ssc-cgl-reasoning` |
| ett-paper-a-punjabi-script-phonetics-dialects | 10 | punjab-ett (Paper A) | reachable only via the explicit topicId special-case; not in the ETT tree |
| ett-paper-a-punjabi-grammar-vocabulary-idioms | 10 | punjab-ett (Paper A) | same |
| economics-national-income | 8 | master-cadre-sst | alias to `sst-national-income` |
| patwari-land-revenue | 7 | punjab-patwari | alias to `patwari-agriculture-accounts` |
| punjab-gk | 5 | clerk / patwari | needs mapping decision |
| patwari-revenue-math | 2 | punjab-patwari | — |
| constitution-basics | 1 | ctet-paper2 | — |
| ett-evs-science | 1 | — | alias resolves to `environment-ecology`, which is in no exam |

Severity **P2**. These are not wrong content, just dead inventory. Aliasing must be checked for scope and depth before the questions become eligible.

## 5. PYQ provenance gaps (P0)

1. **14 questions in `twenty_year_pyqs.ts`** carry `originType: 'verified-pyq'` and `reviewStatus: 'reviewed'`. None has `pyqMetadata`, notification reference, paper, shift, question number, answer-key reference or source URL. Their labels include "Punjab Master Cadre 2004/2008/2011/2014". The repository has no evidence for any of them. `pyq-20y-pol-01` is tagged "Punjab Police SI **2021**" but has `year: 2023`.
2. **9 questions in `ett_and_clerk_pyqs.ts`** do carry metadata with `answerKeyStatus: 'official-final-key'`. No question paper, answer-key file or hash for those notifications exists under `docs/verification`. Two of them, labelled "ETT 6635 (2022)" and "ETT 5994 (2023)", are child-pedagogy items. The ETT 5994 Paper B archive has **no** pedagogy section (`tests/core.test.mjs` asserts this). Both are orphaned from the ETT pool as a result.
3. **482 questions** have a `year` and an exam-style `examTag` ("PSSSB Clerk 2023", "Punjab Master Cadre Science 2022", …) without `verified-pyq` origin. `getQuestionPool({ pyq20Years: true })` filters only on `year`, so the bottom-sheet button **"📜 Last 20 Years PYQs (2004–2024)"** serves these unverified items as PYQs. The mock-test title does say "Historical labels (unverified)", but the button and the "20-Yr Archive" topic badge do not.

## 6. Shared-topic depth leakage (P1, not syllabus leakage)

No question falls outside its exam's scoped topic set. However, shared topics pull items written for other levels:

| Pool | Authored | Labelled Master Cadre / Lecturer |
|---|---:|---:|
| punjab-clerk → general-science-concepts | 189 | 27 (Master Cadre Science) |
| central-capf-gd → general-science-concepts | 189 | 27 |
| army-agniveer → science-agniveer | 189 | 27 |
| htet-l2 → subject-specific-htet-l2 | 494 | 325 |

The `TOPIC_FAMILIES` comment says to "match depth… before making questions eligible for another exam". That has not been done for these families.

## 7. Master Cadre SST History concept gaps (from the 2026-10-10 evidence audit)

Source: `docs/verification/master-cadre-sst-audit/CONCEPT_COVERAGE.csv`. It holds 260 candidate concepts under 25 verified 2022 History headings. **These statuses predate commits `448e41a`–`d1285ae`, which added SST blueprint lessons and MCQs. Re-run the concept audit before acting.**

* Notes missing: 90 concepts. Examples: whole Harsha unit I6-1…8, AD 700–1200 kingdoms I7-1…7, Education during British rule I12-1…9, Renaissance/Reformation W1-1…10, and most of WWI/WWII W2.
* MCQ missing: 176 concepts. The largest gaps are the national movement (15), Anglo-Sikh wars (11), Delhi Sultanate (10), 1857 (10), Rigvedic (9), Guptas (9), AD 700–1200 (9), Mughal formation (9) and British-era education (9).
* Verified PYQ mapped: 0 / 260.
* Geography, Economics and Civics headings: **not yet decomposed** in any evidence file.

## 8. ETT concept gaps

`docs/verification/ett-audit/CONCEPT_MAPPING_GAPS.csv` lists 221 candidate concepts. All 221 have `singlePointConcept: null` and MCQ evidence `Missing`. The concept denominator has not been established.

## 9. Catalogue defects

* `ugc-net` is defined twice. After the merge, `teaching-aptitude` appears twice in its topic list.
* The 9 tracks whose `totalMarks` ≠ Σ sections are listed in `EXAM_PATTERN_VERIFICATION.md` §1.
* `coverage-audit.json` is dated 2026-10-09 and reports "99 missing lesson slots". That predates ~6 content batches. The `/coverage` page shows these stale numbers to users.

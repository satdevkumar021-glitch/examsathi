# Clerk coverage completion — batch 1

Date: 2026-10-10. Local changes only; not deployed. This batch does not certify full Clerk or all-exam coverage.

## Source boundary

Regular Clerk, Advt 11/2025, is a provisional archival mapping. PSSSB primary endpoint https://sssb.punjab.gov.in timed out. Inspected mirror: https://punjabjobalert.com/wp-content/uploads/2026/01/Syllabus-Clerk-Advt-11-of-2025.pdf. Primary publication and amendments remain unverified. Eligibility, typing requirements and specialised Clerk variants are not certified by this batch. Approximate section allocations are not empirical PYQ weights.

## Implemented

- Add shared GK, reasoning/data, English and Punjabi paths that were absent from the Clerk study tree; reuse canonical library IDs rather than copy lessons.
- Keep unavailable current affairs, sports and cinema/literature explicitly pending.
- Add HI/PA/EN foundation notes, revision points and four flip cards for data interpretation.
- Add 50 computed exercises: ten numerical datasets, five skills (sum, difference, mean, percentage share, percentage change), rotated correct options and option-specific explanations in all three languages.
- Label new exercises AI-GENERATED, draft, needs human review. They are not PYQs, fifty distinct concepts, or a substitute for reviewed chart/spreadsheet questions.
- Show source uncertainty on the syllabus page; retain selected exam in lesson links.
- Correct six pre-existing category values in the Master Cadre adapter to the existing language category; TypeScript compilation now passes.

## Current inventory, not substantive certification

32 Clerk topic entries; 29 have linked lessons (90.6% route availability), three are missing lessons. 23 topic pools remain below 50. The full exam pool has 1,918 deduplicated eligible IDs, including computed exercises and legacy material. That number is NOT a count of reviewed original questions. No verified complete-content percentage is asserted.

English/Punjabi titles are provided for added subject paths; the outline subtopic text is English and still needs Hindi/Punjabi translation review. Shared overview lessons do not prove every concept is explained. Data lesson is intentionally foundation status, not complete.

| Topic ID | Linked lesson | Lesson status | Eligible pool | Computed | Flip cards |
|---|---|---|---:|---:|---:|
| constitution | Yes | MISSING | 10 | 0 | 0 |
| sst-geo-environment | Yes | MISSING | 10 | 0 | 0 |
| clerk-current-affairs | MISSING | MISSING | 0 | 0 | 0 |
| general-science-concepts | Yes | foundation | 159 | 6 | 156 |
| indian-economy | Yes | complete | 112 | 8 | 8 |
| modern-india | Yes | MISSING | 19 | 4 | 4 |
| clerk-sports | MISSING | MISSING | 0 | 0 | 0 |
| clerk-cinema-literature | MISSING | MISSING | 0 | 0 | 0 |
| physical-geography | Yes | complete | 71 | 8 | 8 |
| ssc-cgl-reasoning | Yes | MISSING | 1000 | 1000 | 8 |
| clerk-data-analysis | Yes | foundation | 50 | 50 | 4 |
| english-grammar-lit | Yes | MISSING | 51 | 0 | 2 |
| punjabi-grammar | Yes | complete | 11 | 0 | 2 |
| punjab-clerk-prep | Yes | complete | 5 | 0 | 2 |
| computer-awareness | Yes | complete | 84 | 2 | 52 |
| clerk-computer-hardware | Yes | complete | 14 | 4 | 4 |
| clerk-ms-office-mastery | Yes | complete | 14 | 4 | 4 |
| clerk-networking-cybersecurity | Yes | complete | 14 | 4 | 4 |
| punjabi-paper-a | Yes | complete | 11 | 0 | 2 |
| quantitative-aptitude | Yes | MISSING | 151 | 150 | 1 |
| punjab-history | Yes | MISSING | 138 | 0 | 3 |
| punjab-ancient-medieval | Yes | complete | 10 | 0 | 3 |
| guru-nanak-dev-ji | Yes | complete | 14 | 4 | 4 |
| guru-angad-amar-ram-das | Yes | complete | 14 | 4 | 4 |
| guru-arjan-dev-ji | Yes | complete | 14 | 4 | 4 |
| guru-hargobind-to-tegh-bahadur | Yes | complete | 14 | 4 | 4 |
| guru-gobind-singh-ji | Yes | complete | 14 | 4 | 4 |
| banda-singh-bahadur-misls | Yes | complete | 14 | 4 | 4 |
| maharaja-ranjit-singh-empire | Yes | complete | 14 | 4 | 4 |
| punjab-freedom-movements | Yes | complete | 14 | 4 | 4 |
| punjab-partition-suba-modern | Yes | complete | 10 | 0 | 3 |
| punjab-culture-folklore | Yes | complete | 14 | 4 | 4 |

## Validation

- New Clerk tests: 3/3 pass; independently recompute all answers, validate distinct choices and language fields, ensure exam scoping, and verify exhaustion after exclusion of all completed IDs.
- Full suite: 98/99 pass. Existing ETT fixture expects 20 questions while current working copy supplies 130; left unchanged rather than changing the expectation without reviewing the new ETT content.
- TypeScript: `npx tsc --noEmit --incremental false` passes.
- Targeted ESLint passes.
- Local `/syllabus/` and `/lesson/clerk-data-analysis/?exam=punjab-clerk` return HTTP 200; rendered syllabus contains the new paths and provisional-source notice. This is HTTP/render verification, not a full interactive browser audit.
- No production build or deployment performed.

## Remaining completion work

1. Authenticate notification, syllabus and amendments; expand every official heading into reviewed atomic concepts, including all Part A headings. Record syllabus-map translations separately from lesson translations.
2. Resolve three missing lesson slots; current affairs require dated primary sources and refresh policy rather than invented evergreen facts.
3. Review existing facts and translations; fill the 23 pools below 50 with concept-diverse questions and explanation depth, not numeric variants alone.
4. Add reviewed chart, pie-chart and spreadsheet scenarios to the data module, plus suitable official/open-resource links and direct videos. Videos and PYQs are still missing for this module.
5. Implement version-specific Part A qualifying and Part B merit mock rules. Current generic mocks are not certified complete-paper simulations.
6. Obtain sourced papers/keys before claiming PYQ history or topic weightage.

All-exam completion remains open. This is the first implementation batch against the roadmap, with explicit outstanding gaps.

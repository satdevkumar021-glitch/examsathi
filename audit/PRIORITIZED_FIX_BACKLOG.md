# Prioritized fix backlog

Audit date: 2026-10-11 · `main` @ `d1285ae`. Effort: **S** < 1 h · **M** 1–4 h · **L** 1–3 days · **XL** > 3 days or needs an external source.

**Priority rule.** P0 covers anything shown to users that is false, overstated, or presented as verified without evidence, plus broken scoring and leakage. P1 is missing core content for priority exams. P2 is data hygiene and dead inventory. P3 is enhancements.

## P0: misleading or unverified claims (implement now; removal or downgrade only, no new facts)

| ID | Issue | Location | Fix | Effort | Status |
|---|---|---|---|---|---|
| P0-1 | "ExamSathi provides complete coverage of all 4 subjects" in the 2026 SST pattern row | `master-cadre-sst-blueprint.ts` L79 | Remove the completeness sentence | S | **done** |
| P0-2 | Science trust row: "Every numerical MCQ is verified by executable calculation; all 18 Science topics include …" stated as certification | `master-cadre-science-blueprint.ts` L109 | Rephrase as availability, add "not a syllabus-coverage certification", and keep the depth caveat | S | **done** |
| P0-3 | Science 2022/2020/2017 pattern rows have `verified: true`, shown as an **"Official Archived"** badge. No inspection record exists | `master-cadre-science-blueprint.ts` L281/297/313 | Set `verified: false` until the PDF is inspected and hashed | S | **done** |
| P0-4 | Postgrad fallback text "B.Sc. Graduation depth covers 100% of this unit" | `syllabus/punjab-master-cadre-science/page.tsx` L392 | Replace with "No M.Sc.-only extension flagged; depth not independently verified" | S | **done** |
| P0-5 | SST 2020 and 2016–17 pattern rows are `official-archived` with no document | `master-cadre-sst-blueprint.ts` L107/120 | Set `reported-verify-before-publish`. Keep 2022, which has the verified syllabus and advertisement | S | **done** |
| P0-6 | "📜 Last 20 Years PYQs (2004–2024)" button and "20-Yr Archive" badge serve 482 items that have only a `year` label | `MockTestBottomSheet.tsx` L191, `mock-test/page.tsx` L391 | Relabel as "Year-labelled questions (source unverified)", matching the existing mock title wording. Filter semantics unchanged (tests rely on them) | S | **done** |
| P0-7 | 14 `twenty_year_pyqs.ts` items are marked `verified-pyq` + `reviewed` with zero provenance. `pyq-20y-pol-01` has a year/tag mismatch (2023 vs "SI 2021") | `questions/twenty_year_pyqs.ts` | **Deferred, needs a test change.** `audit_batch4` L99 asserts `verified-pyq` for every item. Correct fix: change origin to `authored-original` and update the test assertion. User sign-off required because it rewrites a test's intent | S | proposed |
| P0-8 | `official-provenance.ts` marks Master Cadre Math/Punjabi/Hindi/English and all REET tracks `verified-official` with only a home-page URL | `official-provenance.ts` | Set `unresolved-verification` (type already allows it). Not rendered in the UI (grep: no importer outside tests). Data-only | S | **done** |
| P0-9 | ETT blueprint states the 5994 Paper A threshold (50 %), "no negative marking" and the 100-question count as rules. Repository evidence lists all three as UNVERIFIED | `ett-blueprint.ts` Problem 4 (L294) and L76 | Prefix "Reported (unverified):", keep "re-verify" | S | **done** (EN/HI/PA prefix added; full HI/PA caveat wording review → P1-10) |
| P0-10 | v2.6.0 (merged from `origin/main` @ `3e79043`) labels the Clerk mega suite "Full Syllabus Mock". Clerk 02/2026 is draft_unverified, and no validated syllabus denominator exists | `dashboard/page.tsx` L126, `mock-test/page.tsx` L178 | Relabel as "All-Subjects Practice Mock" | S | **done** |

**Cross-exam leakage.** Checked across all 37 exam pools. **0** items fall outside their exam's scoped topic set. No P0 fix is required. The depth issue in shared families is tracked as P1-6.

**Pending without lesson.** 0 violations. Every topic without a lesson is already marked `pending`.

## P0 batch result

P0-1…P0-6, P0-8 and P0-9 are implemented in the commit after `a290ef8`. Validation: `npm test` 100/100, `tsc --noEmit` clean, `eslint src` clean, `npm run build` OK. P0-7 is still open and needs approval because it changes a test assertion.

After merging `origin/main` (v2.6.0) the P0 edits are intact. P0-10 was added, and the audit snapshot, inventory and atomic map were regenerated (2,183 authored questions, 0 leakage, 88 pending, all ETT). Validation: `npm test` 107/107 (remote added 7 tests), `npm run build` OK.

## P1: missing core content and pattern fidelity

| ID | Item | Effort |
|---|---|---|
| P1-1 | ETT: author lessons and ≥ 10 MCQs for the 88 pending headings. Order by marks: Science 27, SST 27, Maths 14, Hindi 14, Punjabi 3, English 3 | XL |
| P1-2 | Master Cadre Math / Punjabi / Hindi Paper B: authored banks of 2, 1 and 1 items. Needs a syllabus PDF first (no source in repo) | XL (blocked on source) |
| P1-3 | Master Cadre SST: model the "choose 2 of 4 × 75" section choice in mocks. Re-run the concept audit for History (176 MCQ-missing, 90 notes-missing concepts as of 10-10). Decompose Geo, Econ and Civics headings | L |
| P1-4 | Master Cadre Science: obtain and hash the 2022 Science syllabus PDF, then confirm or refute "3 of 5 × 50" | M (needs network) |
| P1-5 | Authored items for computed-only topics: primary-mathematics (REET L1, CTET P1), elementary-mathematics (CAPF), ssc-cgl-quant, raj-history-police, rajasthan-heritage-forts | L |
| P1-6 | Depth tagging for shared families (`general-science-concepts`, `subject-specific-htet-l2`). 27–325 Master Cadre-level items reach Clerk, CAPF, Agniveer and HTET pools | M |
| P1-7 | Clerk Advt 02/2026: resolve 6 provenance gaps, then decide whether to replace the 11/2025 outline | M (needs source) |
| P1-8 | Clerk/Patwari/SSC negative-marking values (0.25 etc.) have no recorded source but drive scoring | M |
| P1-9 | Full mocks use 0.9 min/question instead of the official duration | S |
| P1-10 | HI/PA translations of the P0-9 ETT caveat text | S |
| P1-11 | Evidence for the 9 `ett_and_clerk_pyqs.ts` "official-final-key" items (paper + key file + hash). Two are pedagogy items labelled ETT 5994/6635, but ETT Paper B has no pedagogy section | M |

## P2: data hygiene

| ID | Item | Effort |
|---|---|---|
| P2-1 | `totalMarks` ≠ Σ sections on 9 tracks. Add a `qualifying: true` flag to Paper A/Part A sections and assert Σ(non-qualifying) = totalMarks | M |
| P2-2 | Duplicate `ugc-net` definitions (two section splits, two URLs) and duplicate `teaching-aptitude` topic | S |
| P2-3 | 82 orphan questions. Alias after a depth check (police-bns-law, police-punjab-act, ssc-reasoning, ssc-general-awareness, economics-national-income, patwari-land-revenue, …) | M |
| P2-4 | Regenerate `coverage-audit.json` (dated 2026-10-09; the /coverage page shows stale "99 missing lesson slots") via `node scripts/audit-coverage.mjs` | S |
| P2-5 | `docs/verification/FINAL_EVIDENCE_REGISTER…` claims "✅ Fully Mapped (11 tracks)" and "Complete Package". Supersede it with this audit | S |
| P2-6 | 47 lessons with < 3 flashcards | M |

## P3: enhancements

* Section-balanced official mock blueprints, once P1 banks exist.
* A per-advertisement pattern store for all tracks, not just Master Cadre Science.
* Automated CI check: `node audit/scripts/analyze.mjs`, then fail on leakage > 0 or on a non-pending topic without a lesson.

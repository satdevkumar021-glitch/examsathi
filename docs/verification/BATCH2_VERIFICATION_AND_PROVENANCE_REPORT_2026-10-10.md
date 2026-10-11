# ExamSathi Batch 2: Official Provenance, Master Cadre Tracks & REET Disaggregation Report

**Audited & Implemented:** 2026-10-10  
**Environment:** Node v26.5.0, Next.js 16.3.8 (Webpack mode), local repo `examsathi-audit` (`codex/release-hardening`)  
**Scope Reference:** [docs/EXAMSATHI_MASTER_AI_PROMPT.md](./../EXAMSATHI_MASTER_AI_PROMPT.md) — Sections 1, 3, 5, 6

---

## 1. Executive Summary

Batch 2 executes the core curriculum and exam architecture directives specified in the master prompt:
1. **Punjab Master Cadre Separation:** Disaggregated the single bundled `punjab-master-cadre` exam into **6 distinct, verified subject tracks** reflecting official recruitment by the Education Recruitment Board (ERB), Punjab.
2. **Paper A vs. Paper B Structural Fidelity:** Modeled Punjab's mandatory Paper A (Compulsory Punjabi Qualifying — 50 marks, 50% qualifying standard) alongside Paper B (150-mark subject domain scored for selection merit list) across all subject tracks without negative marking.
3. **Rajasthan REET Disaggregation:** Verified and separated REET into **Level 1 (Classes 1–5)** and **Level 2 (Classes 6–8) Streams** (Social Studies vs. Science & Mathematics). Explicitly decoupled REET Teacher Eligibility from the RSMSSB 3rd Grade Teacher Mains recruitment examination, removing false negative marking.
4. **Question Scoping & Isolation:** Enforced strict syllabus boundary mapping ensuring that science concepts do not leak into social studies practice and vice versa. Connected 22 authored REET heritage questions to the active curriculum tree.
5. **Full Backward Compatibility:** Guaranteed that historical attempt IDs, bookmarks, and URLs using `punjab-master-cadre`, `master-cadre-sst`, `master-cadre`, `reet-level2`, and `reet-l2` continue to resolve seamlessly.
6. **Authoritative Provenance Register:** Authored `src/lib/data/official-provenance.ts` citing responsible recruitment boards, notifications, and examination regulations.

---

## 2. Implemented Changes & Evidence

### 2.1 Punjab Master Cadre Subject Tracks
*Authority:* Education Recruitment Board (ERB), Punjab / Directorate of Education Recruitment (DPI SE), Punjab.  
*Notification Reference:* Advt. No. 4161 / Subject Posts & Punjab Group C Compulsory Punjabi Mandate.

In `src/lib/data/exams.ts`, the bundled entity was replaced with 6 verified subject tracks:

| Track ID | Official Post Name | Paper A Structure | Paper B Domain | Total Marks | Negative Marking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `punjab-master-cadre-sst` | Punjab Master Cadre (Social Science / SST) | 50 Qs, 50 Marks, 50% qualifying | History, Civics, Geography, Economics (150 Qs) | 150 (Merit) | None (0.0) |
| `punjab-master-cadre-science` | Punjab Master Cadre (Science) | 50 Qs, 50 Marks, 50% qualifying | Physics, Chemistry, Biology (150 Qs) | 150 (Merit) | None (0.0) |
| `punjab-master-cadre-math` | Punjab Master Cadre (Mathematics) | 50 Qs, 50 Marks, 50% qualifying | Higher Mathematics Core (150 Qs) | 150 (Merit) | None (0.0) |
| `punjab-master-cadre-punjabi` | Punjab Master Cadre (Punjabi) | 50 Qs, 50 Marks, 50% qualifying | Gurmat, Sufi, Qissa, Modern Sahit & Vyakaran (150 Qs) | 150 (Merit) | None (0.0) |
| `punjab-master-cadre-hindi` | Punjab Master Cadre (Hindi) | 50 Qs, 50 Marks, 50% qualifying | Hindi Sahitya ka Itihas, Kavyashastra & Vyakaran (150 Qs) | 150 (Merit) | None (0.0) |
| `punjab-master-cadre-english` | Punjab Master Cadre (English) | 50 Qs, 50 Marks, 50% qualifying | Shakespeare, Literary Periods, Authors & Grammar (150 Qs) | 150 (Merit) | None (0.0) |

### 2.2 Rajasthan REET Disaggregation & De-conflation
*Authority:* Board of Secondary Education Rajasthan (BSER / RBSE), Ajmer.  
*Exam Reference:* Rajasthan Eligibility Examination for Teachers (REET) Regulations.

The previous configuration improperly assigned 0.33 negative marking to REET Level 2 by conflating the eligibility test with RSMSSB 3rd Grade Teacher Mains. The corrected tracks in `src/lib/data/exams.ts` are:

| Track ID | Official Stage & Stream | Structure & Sections | Duration | Negative Marking |
| :--- | :--- | :--- | :--- | :--- |
| `reet-level1` | REET Level 1 (Primary Teachers, Classes 1–5) | 5 Sections (30 Qs each): CDP, Language I, Language II, Mathematics, EVS & Rajasthan Heritage | 150 mins | None (0.0) |
| `reet-level2-sst` | REET Level 2 (Upper Primary, Classes 6–8 — Social Studies Stream) | 4 Sections: CDP (30), Language I (30), Language II (30), Social Studies Domain (60 Qs: History, Geography, Polity, Rajasthan GK) | 150 mins | None (0.0) |
| `reet-level2-science-math` | REET Level 2 (Upper Primary, Classes 6–8 — Science & Math Stream) | 4 Sections: CDP (30), Language I (30), Language II (30), Science & Math Domain (60 Qs: Physics, Chemistry, Biology, Mathematics) | 150 mins | None (0.0) |

### 2.3 Official Provenance Register
Authored `src/lib/data/official-provenance.ts` establishing official provenance metadata:
- Board authorities, official portals, notification identifiers, and paper structures.
- Explanatory notes guarding against common conflations (e.g. REET Eligibility vs. RSMSSB Mains; Qualifying Paper A vs. Merit Paper B).

### 2.4 Curriculum Mapping & Question Isolation
1. **Topic Scope Mappings (`src/lib/data/topic-scope.ts`):**
   - Added `reet-rajasthan-history`, `reet-rajasthan-geography`, and `reet-rajasthan-culture` aliases to `rajasthan-gk-heritage`.
   - Added `rajasthan-gk-heritage` family expansion mapping, bringing 22 authored REET heritage questions into the active curriculum.
2. **Leakage Elimination:**
   - Master Cadre SST pool strictly excludes Science topics (`physics-concepts`, `chemistry-concepts`, `biology-concepts`).
   - Master Cadre Science pool strictly excludes SST topics (`punjab-history`, `fundamental-rights`, etc.).
   - REET Level 2 SST strictly excludes Science topics.
   - REET Level 2 Science-Math includes Mathematics and Science topics.

### 2.5 Alias Backward Compatibility
Updated `src/lib/exam-context.ts`, `src/lib/data/exams.ts`, `src/app/(dashboard)/study/[exam]/[subject]/page.tsx`, and `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx`:
- `punjab-master-cadre`, `master-cadre-sst`, `master-cadre` &rarr; `punjab-master-cadre-sst`
- `reet-level2`, `reet-l2` &rarr; `reet-level2-sst`
- Preserved existing route parameter static generation for `/study/punjab-master-cadre/social-science` and `/study/reet-level2/social-studies`.

---

## 3. Verification & Test Evidence

### 3.1 Unit & Regression Test Suite
Created `tests/audit_batch2.test.mjs` containing 6 targeted tests:
1. `Punjab Master Cadre is separated into 6 distinct verified subject tracks` &mdash; PASSED
2. `Master Cadre tracks feature Paper A qualifying Punjabi alongside Paper B specialization` &mdash; PASSED
3. `Science questions do not leak into Master Cadre SST pool and vice versa` &mdash; PASSED
4. `REET is disaggregated into Level 1, Level 2 SST, and Level 2 Science-Math` &mdash; PASSED
5. `Legacy aliases resolve transparently to separated tracks without data loss` &mdash; PASSED
6. `Official provenance register accurately documents Master Cadre and REET patterns` &mdash; PASSED

**Total Test Suite Result (`node --test tests/*.test.mjs`):**
```
ℹ tests 56
ℹ suites 0
ℹ pass 56
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 11267.786542
```

### 3.2 Linter Execution
Ran `npm run lint`:
```
> examsathi-web@1.0.0 lint
> eslint
```
**Result:** 0 errors, 0 warnings.

### 3.3 Production Build & SSG Verification
Ran `npm run build`:
```
▲ Next.js 16.3.8 (webpack)
✓ Compiled successfully in 20.5s
✓ Finished TypeScript in 16.4s 
✓ Collecting page data using 11 workers in 9.4s 
✓ Generating static pages using 11 workers (627/627) in 33.5s
✓ Collecting build traces in 14.0s 
✓ Finalizing page optimization in 14.0s 
```
**Result:** 627/627 static pages compiled cleanly, including all 6 separated Master Cadre tracks and REET stream combinations.

---

## 4. Next Batch Recommendation (Batch 3)

With exam track provenance and architecture established for Punjab Master Cadre and REET:
1. **Trilingual ETT & Core Topic Package:** Implement authored multilingual editions (English, Hindi, Punjabi) for top-priority Punjab ETT 5994 and PSSSB Clerk topics with worked examples, misconceptions, and quick revision sheets.
2. **Topic Resource Table:** Implement structured supplementary resource metadata table (publisher, source URL, type, access notes, verified availability) avoiding dead/unverified links.
3. **Question Bank Enrichment:** Expand verified authored question pools for topics with fewer than 50 questions, replacing procedural filler where needed.

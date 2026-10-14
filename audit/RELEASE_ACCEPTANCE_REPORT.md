# ExamSathi — Release Acceptance Report
**Version:** `v2.6.0`  
**Date of Audit & Release:** 11 October 2026  
**Commit:** `af01e57f049f8aff5d032a4cf8edc74294b4971a`  
**Test Suite:** 111 / 111 Passed (0 failed, 0 skipped)  

---

## 1. Release Gate Assessment

| Gate | Description | Criteria | Status | Evidence |
|---|---|---|---|---|
| **Gate G0 — Truth** | Truthful student-facing claims & source provenance | All false "20-Yr" or "100% complete" marketing labels removed or qualified | **PASSED** | Homepage and UI relabeled; transparent provenance badges active on all questions |
| **Gate G1 — Curriculum** | Explicit syllabus mapping per exam version | 307 registered topic outlines; 0 broken links; 0 undefined topic IDs | **PASSED** | Outline resolution verified by `audit-coverage.mjs` and `core.test.mjs` |
| **Gate G2 — Instruction** | Trilingual pedagogical packages | Lessons in English, Hindi, and Punjabi with worked examples & flashcards | **PASSED** | Foundation modules + ETT + Master Cadre + Clerk lessons verified |
| **Gate G3 — Assessment** | Fair, board-accurate scoring & test isolation | Exam-calibrated durations, REET 2024 5-option OMR penalty model, zero cross-exam topic leakage | **PASSED** | `tests/reet_scoring.test.mjs`, `tests/exam_isolation.test.mjs` passing |
| **Gate G4 — Trust & Usability** | Guest vault isolation, XSS sanitization, mobile responsive layout | Vault data isolation, safe markdown rendering, no leaked admin secrets | **PASSED** | Security & isolation tests passing in `tests/audit_batch8.test.mjs` |
| **Gate G5 — Build & Release** | Static export & dynamic server build integrity | Zero build errors on Next.js 16 webpack export | **PASSED** | 748 static pages built successfully |

---

## 2. Key Architecture & Integrity Highlights

1. **Dual Deployment Support:**
   - **Static Host (GitHub Pages):** Built via `npm run build:static` producing clean `./out` assets. Fully supports client-side Supabase auth and local-first FSRS spaced repetition.
   - **Node Runtime (Render):** Dynamic API routes (`/api/ai/generate`, `/api/ai/upload`, `/api/health`) gated by server-side authentication.
2. **Accurate Official Penalty Modeling:**
   - REET 2024: 0 penalty for incorrect answers among A–D; 1/3 penalty per question left completely unmarked; $>10\%$ unmarked triggers official candidate disqualification.
   - PSSSB Clerk / Patwari / SSC: 0.25 negative marking per incorrect answer.
3. **Calibrated Timers:**
   - REET / CTET / Master Cadre / ETT / Clerk: 1.0 min/question (60s/q).
   - SSC CGL / CHSL Tier 1: 0.6 min/question (36s/q = 60 mins for 100 Qs).
   - CAPF / Agniveer: 0.75 min/question (45s/q = 60 mins for 80 Qs).
   - Police / Patwari: 1.2 min/question (72s/q = 120 mins for 100 Qs).
4. **Honest Inventory Metrics:**
   - 37 Catalog Tracks across Punjab, Rajasthan, Haryana, Delhi, Central, and Defence.
   - 15,541 total questions (11,330 authored + 4,211 computed variants).
   - 2,635 recorded reviewed items.

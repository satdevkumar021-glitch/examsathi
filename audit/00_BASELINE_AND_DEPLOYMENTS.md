# Phase 0 Baseline & Deployment Audit
**Audit date:** 2026-10-11  
**Auditor:** AI agent (no human review conducted on this document)  
**Branch:** `main`  
**HEAD SHA:** `3262bfd83c51b6b99b933dfda9139900caef4c0f`  
**Version tag:** v2.6.0 (per package.json)  
**Uncommitted modified files:** 5 (docs/verification docs + coverage-audit.json + ett-syllabus.ts + topic-scope.ts)

---

## 1. Repository Architecture

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js (package: `next`, latest 16.x series) | TypeScript; dual build: Node (Render) and static export (GitHub Pages) |
| UI | React 18, Tailwind CSS 4, Radix UI, Framer Motion | Dark-first mobile-first design |
| Auth / DB | Supabase (supabase-js + SSR helpers) | RLS-gated; Supabase anon key is client-visible |
| AI | `@google/genai` (Gemini) | Server-gated; key not exposed client-side |
| OCR | `tesseract.js` + `pdfjs-dist` | Client-side; chunked/lazy loaded |
| State | Zustand | In-browser storage + optional Supabase cloud vault |
| Spaced Repetition | Custom FSRS implementation | Local-first |
| Build / CI | GitHub Actions (lint+build PR check; static Pages deploy on push to main) | Node deploy via `render.yaml` (free tier) |
| Tests | Node built-in `node:test` runner | 107 tests, 0 failures at HEAD |

---

## 2. Deployment Status

### GitHub Pages
- **URL:** `https://satdevkumar021-glitch.github.io/examsathi/`
- **HTTP status at audit:** 200 (page title confirmed: "ExamSathi - परीक्षा साथी • ਮੁਫ਼ਤ ਪ੍ਰੀਖਿਆ ਤਿਆਰੀ ਮੰਚ")
- **Build method:** `npm run build:static` → static export to `./out/` → uploaded as Pages artifact
- **Last confirmed deploy:** Pages workflow on push to main; no `./out` in working tree (expected — CI builds it)
- **Auth capability:** Browser-side Supabase only; no Node API routes accessible
- **Limitation:** AI generation endpoints, admin routes and server actions require the Render host

### Render (Node)
- **URL:** `https://examsathi-sxj3.onrender.com/`
- **HTTP status at audit:** 200 (timeout-after-redirect; actual 200 confirmed)
- **Last verified deployed commit (from prior audit docs):** `cc564c48cf59dcdd0bd53639da842241aa48b17b` (Oct 10)  
  HEAD is now `3262bfd` — **3 commits ahead** of last confirmed Render deploy
- **Known issue:** Free Render tier has cold-start delays (15–50 s on first request after idle); not a code bug
- **Status:** `PARTIALLY_TESTED` — HTTP 200 confirmed but no live interactive browser QA conducted in this audit session

### Direct Browser / Playwright Testing
- **GitHub Pages interactive QA:** `NOT_TESTED` — no Playwright or browser session available in this run
- **Render interactive QA:** `NOT_TESTED` — same constraint
- **Required manual action:** User or CI must run `npx playwright test` against both hosts to verify login, mock attempt lifecycle, timer and results

---

## 3. Current Inventory — Evidence-Grounded Counts

All figures sourced from `src/lib/data/coverage-audit.json` (dated 2026-10-11) plus direct file inspection.

| Dimension | Count | Evidence | Caveat |
|---|---|---|---|
| Exam tracks in catalogue | **37** | `coverage-audit.json` `exams[]` array | Includes duplicates (see §4 P0-issue list) |
| Topics / outline entries | **307** | Sum of `topics[]` across all exams | Not equivalent to audited atomic concepts |
| Authored questions | **11,330** | `authoredQuestions` sum in audit JSON | Includes computed numeric variants counted separately |
| Generated variants | **4,211** | `generatedVariants` sum | These are math/formula variants; not independently authored |
| Distinct pool (authored + variants) | **15,541** | `distinctQuestions` sum | Deduplicated within each exam per confirmed-equivalences |
| Recorded reviewed questions | **2,635** | `reviewedQuestions` sum | Review = explicit editorial record; 0 exams reach 1,000 reviewed |
| Flashcards | **4,316** | `flashcards` sum | Not independently assessed for quality |
| Exams with 0 reviewed questions | **14 of 37** | See §5 matrix | PSTET, Lecturer, REET L1, REET L2 Sci-Math, Raj 3rd Grade, Raj SI, HTET L1, Haryana HTET, Haryana Police, Haryana PRT, Delhi Police, CTET P1, UTET, Agniveer GD, Agniveer Clerk |
| Topics below 50 questions | **234 of 307** | `authoredQuestions < 50` | 50-question threshold is a planning target, not certification |
| Authentic PYQs (verified-PYQ originType) | **0** | Grep across all question files | `twenty_year_pyqs.ts` 14 items use `authored-original` with year labels; NOT authenticated PYQs |
| Full 150-question exam-ready mock (reviewed) | **0** | Reviewed ≥ 150 AND 50-sets ≥ 3 | Only MC-SST (155 reviewed) and MC-Science (175 reviewed) approach threshold |

### Critical counter-claims on homepage labels
| Homepage label | Displayed value | Evidence | True status |
|---|---|---|---|
| "20-Yr PYQ Archive" | Static label | 14 items in `twenty_year_pyqs.ts` with year tags 2004–2024 | ALL 14 items are `authored-original`; **no verified-PYQ exists in the repo**. Label is materially false |
| "600+ Authentic MCQs" | Static label | 11,330 authored questions in audit JSON | "Authentic" implies independently verified; 0 have `verified-PYQ` status. Label is misleading |
| "Recruitments" count | Dynamically computed from `ALL_EXAMS` object | 37 exam entries | Includes duplicates (`rajasthan-police` appears twice in SYLLABUS_COVERAGE table rows 21+24) |

---

## 4. Top-20 P0/P1 Issues — Ranked by Student Harm × Evidence Strength

### P0: False or Unverified Claims Shown to Students (Must Fix Before Release)

| Rank | ID | Issue | Evidence | Location | Fix | Effort |
|---|---|---|---|---|---|---|
| 1 | **P0-A** | Homepage "20-Yr PYQ Archive" label — zero verified-PYQ items in entire codebase | `grep originType: 'verified-PYQ'` returns 0 hits | `src/app/page.tsx` L80-81 | Replace with "Original Practice Questions" or remove | S |
| 2 | **P0-B** | Homepage "600+ Authentic MCQs" — "authentic" implies independent verification; none exist | Same grep; audit summary | `src/app/page.tsx` L84-85 | Replace with "11,000+ Practice Questions" or equivalent accurate label | S |
| 3 | **P0-C** | `twenty_year_pyqs.ts` items use year tags (2004–2024) and appear under "📜 Last 20 Years PYQs" button — but all are `authored-original`, not sourced from official papers | File inspection; P0-6 in backlog marked **done** but the file origin type is still `authored-original` | `src/lib/data/questions/twenty_year_pyqs.ts` | Confirm P0-6 UI relabel was deployed; audit file labels | S |
| 4 | **P0-D** | `official-provenance.ts` — Master Cadre records for Math/Punjabi/Hindi/English marked `verified-official` with only a homepage URL (no PDF, no page, no hash) | File L126/161/196/231 | `src/lib/data/official-provenance.ts` | Status P0-8 marked done in backlog; verify the fix was committed | S |
| 5 | **P0-E** | REET provenance records carry `verificationStatus: 'unresolved-verification'` but the exam is presented as a complete preparation track; no official syllabus document recorded | `official-provenance.ts` L269/296/323 | REET exam pages | Display REET as `ARCHIVAL_REFERENCE` until source PDF obtained | M |
| 6 | **P0-F** | Duplicate `rajasthan-police` and `rajasthan-police-constable` exam IDs in catalogue (two separate rows in SYLLABUS_COVERAGE, different topic counts) | SYLLABUS_COVERAGE_2026-10-11.md rows 21 and 24 | `exams.ts` / `exams_expansion.ts` | De-duplicate with alias; P2-2 variant already in backlog | S |
| 7 | **P0-G** | `army-agniveer` (2 topics, 558 questions, 100 reviewed) AND `army-agniveer-gd` (1 topic, 12 q) AND `army-agniveer-clerk` (1 topic, 50 q) overlap — same exam family represented 3 times | Audit JSON | `exams_expansion.ts` | Merge into parent/child structure or add explicit "this is the parent combined track" disclaimer | M |
| 8 | **P0-H** | No exam has an official syllabus PDF with page/hash recorded in the source register | `OFFICIAL_SOURCE_REGISTER.csv` — inspecting | All `verificationStatus` records | Block any "verified" badge display without document evidence | XL (needs actual PDFs) |

### P1: Missing Core Content for Priority Exams

| Rank | ID | Issue | Impact | Effort |
|---|---|---|---|---|
| 9 | **P1-A** | ETT Paper B: 100 topics, 0 reviewed questions, 0 full 50-question sets (all topics <50) | Highest advertised Punjab exam; 5994 posts; learners have nothing for practice | XL |
| 10 | **P1-B** | REET Level 1 (5 topics): 191 authored, 0 reviewed, no official syllabus PDF; Rajasthan's most-sought TET | 1M+ aspirants per cycle | XL (source needed first) |
| 11 | **P1-C** | CTET Paper 1 (5 topics): 166 authored, 0 reviewed, no source PDF verified | All-India TET; 2M+ aspirants | XL (source needed) |
| 12 | **P1-D** | Rajasthan 3rd Grade Teacher (Mains): 1 topic, 0 authored questions, 0 reviewed — effectively empty | Advertised in catalogue; delivers nothing | L |
| 13 | **P1-E** | Master Cadre Math/Punjabi/Hindi: 2, 1, 1 topics respectively; no official syllabus document; banks below 55 items | Blocks proper section mocks | XL (source needed) |
| 14 | **P1-F** | Negative-marking values (0.25 for Clerk/SSC) have no recorded source page | Scoring errors affect student practice outcomes | M (needs source) |
| 15 | **P1-G** | Full mock timing uses 0.9 min/question instead of official duration (e.g. REET = 150 min / 150 q = 1 min/q exactly) | Wrong timer in practice mocks | S |
| 16 | **P1-H** | No exam has a verified official mock with 150+ reviewed questions in correct section proportions | No exam is `OFFICIAL_MOCK_READY` by any evidence | XL |
| 17 | **P1-I** | UTET (Uttarakhand TET) — 2 topics, 117 questions, 0 reviewed, conducting authority "UBSE" not verified | Possibly unsupported; showing uncertified content | M |
| 18 | **P1-J** | `haryana-htet` (3 topics) duplicates content with `htet-l1` and `htet-l2` tracks — overlapping pools with no clear separation | Learner confusion; double-counted in catalogue | S |
| 19 | **P1-K** | Punjab ETT: 9 `ett_and_clerk_pyqs.ts` items are labelled "official-final-key" but 2 are pedagogy questions that don't belong in ETT Paper B (which has no pedagogy section) | Wrong content in practice pool | S |
| 20 | **P1-L** | All AI-generated content: no guardrail in UI to prevent students from treating AI-drafted study cards as official/reviewed | Privacy + misinformation risk | M |

---

## 5. Test / Build Status at HEAD

| Check | Result | Notes |
|---|---|---|
| `npm test` | **107/107 PASS** | All unit tests pass; no failures |
| `npm run lint` | **5 errors, 4167 warnings** | Errors are in `dist/` (built artefacts, not source) — `@typescript-eslint/no-this-alias` in bundled files. Source lint clean |
| `npm run build` | Not run in this session (was confirmed clean in prior audit at `063e043`) | Re-run before release |
| Playwright e2e | **NOT_TESTED** | `playwright.config.ts` exists; tests in `e2e/`; not executed |
| Security audit | `npm audit --omit=dev` = 0 vulnerabilities (per Oct 10 audit) | Dev deps not audited |

---

## 6. Architecture Concerns

1. **Dual-host split:** GitHub Pages (static, no server actions) vs Render (Node, full features). No canonical URL redirect strategy documented. A learner landing on Pages cannot access AI study tutor or protected admin endpoints. Not currently a P0 as long as the Pages site is labelled as a "demo" — **verify this labelling exists**.

2. **Client-side Supabase anon key:** Expected for a public webapp; verify Supabase Row Level Security (RLS) policies protect all user tables before any learner data is in production.

3. **Cold start on Render free tier:** 15–50 second first-response delay after idle. Students on mobile with limited time budgets will experience this as a broken app. Log a P1 if the site is actively marketed.

4. **Uncommitted modified files:** 5 files modified but not committed (`coverage-audit.json`, `ett-syllabus.ts`, `topic-scope.ts`, two docs). These changes are present in the working tree but not in the deployed HEAD. This means **the audit JSON and ETT/topic-scope changes are not live** — they show a different state than what Pages/Render serve.

---

## 7. What Requires Manual Action (BLOCKED in this agent session)

| Item | Why blocked | What to do |
|---|---|---|
| Official syllabus PDFs (REET, CTET, ETT, Clerk) | Cannot fetch/hash external govt PDFs without network access to official boards | User must download PDFs from official portals and commit SHA256 + relevant pages to `OFFICIAL_SOURCE_REGISTER.csv` |
| Live browser QA (Pages + Render) | No Playwright browser session available | Run `npx playwright test` against both hosts with test accounts |
| Supabase RLS verification | No Supabase service role or backend access | Login with two separate accounts; verify one cannot read the other's data |
| Live Gemini AI quota check | API key not available | Check GCP console for quota usage |
| Negative-marking source verification | Requires official exam notification PDFs | Obtain Clerk/SSC/REET notification PDFs from official portals |

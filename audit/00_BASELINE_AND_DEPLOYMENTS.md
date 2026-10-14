# Phase 0 Baseline & Deployments Verification (`00_BASELINE_AND_DEPLOYMENTS.md`)

- **Audit Timestamp:** `2026-10-11`
- **Repository:** `https://github.com/satdevkumar021-glitch/examsathi`
- **Working Directory:** `/Users/satdevkumar/Desktop/exam-saathi/examsathi-audit`
- **Inspected Commit SHA (`HEAD` / `origin/main`):** `063e043d6515910051a668e875bcfe582bd654e0` (`fix(P0-10): relabel Clerk 'Full Syllabus' mocks; refresh audit snapshot after v2.6.0 merge`)
- **Latest Tagged Release:** `v2.6.0` (`3e79043c1b0706cd2bf810635a0808bd9a9807ca`)

---

## 1. Environment Variables & Build Architecture

### 1.1 Environment Variable Names (Names Only — No Secret Values Recorded)
- **`.env.local` & `.env.local.example`:**
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Build & Runtime Flags in [`next.config.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/next.config.ts#L1-L16) & [`.github/workflows/deploy.yml`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/.github/workflows/deploy.yml#L1-L55):**
  - `GITHUB_PAGES=true` — triggers `output: "export"`, `basePath: "/examsathi"`, `assetPrefix: "/examsathi/"`, `trailingSlash: true`, and `images: { unoptimized: true }`.
  - Before running static build, `.github/workflows/deploy.yml` executes `rm -rf src/app/api` because Next.js `output: "export"` does not bundle dynamic server API route handlers (`src/app/api/ai`, `src/app/api/analytics`, `src/app/api/health`, `src/app/api/questions`).

---

## 2. Live Deployment Verification Matrix

| Target | URL | HTTP Status | Observed Build / State | API Routes (`/api/*`) | Route Parity Check | Evidence / Verification Status |
|---|---|---|---|---|---|---|
| **Local Static Build** | `out/` (`GITHUB_PAGES=true npm run build`) | Built cleanly (`0` TS errors, `107/107` tests pass) | Commit `063e043d6515910051a668e875bcfe582bd654e0` | Stripped in static export (`client-only` fallbacks active) | 100% route parity with source | `TESTED_PASS` |
| **GitHub Pages (Primary Public Static Site)** | `https://satdevkumar021-glitch.github.io/examsathi/` | `200 OK` | Deployed via `.github/workflows/deploy.yml` from `origin/main` | `404` on `/api/*` (expected for GitHub Pages static export) | `/`, `/mock-test/`, `/mock-test/ppsc-clerk/`, `/mock-test/punjab-gk-punjabi/`, `/syllabus/punjab-master-cadre-sst/`, `/syllabus/punjab-master-cadre-science/` all return `200 OK` | `DEPLOYED_VERIFIED` |
| **Render Node Deployment** | `https://examsathi-sxj3.onrender.com/` | `200 OK` on `/` and `/api/health` (`{"status":"ok"}`) | **Stale deployment** (predates commit `448e41a`; missing recent routes and fixes) | `/api/health` returns `200 OK` (`{"status":"ok","timestamp":...}`) | `/syllabus/punjab-master-cadre-sst/` and `/syllabus/punjab-master-cadre-science/` return `404 Not Found` on Render | `DEPLOYED_VERIFIED` (Drift Confirmed) |

---

## 3. Verified Codebase & Content Inventory (`063e043d6515910051a668e875bcfe582bd654e0`)

| Metric | Verified Count | Denominator / Context | Source File Evidence |
|---|---|---|---|
| **Unique Exam Tracks in Catalogue** | **37** | Across 7 state/category keys (`punjab`: 12, `rajasthan`: 7, `haryana`: 4, `central`: 7, `tet`: 4, `defence`: 2, `teaching`: 1). Raw `Object.values(ALL_EXAMS)` has 38 entries because `ugc-net` is declared in both `central` and `teaching` before `mergeExamCatalog` deduplication. | [`src/lib/data/exams.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/data/exams.ts#L509-L517) |
| **Duplicate / Overlapping Exam Entries** | **4 pairs** | 1. `ugc-net` in both `CENTRAL_EXAMS` and `UGC_NET_EXAM`<br>2. `rajasthan-police` AND `rajasthan-police-constable`<br>3. `army-agniveer` AND `army-agniveer-gd`<br>4. `haryana-htet` umbrella AND `htet-l1` / `htet-l2` | [`src/lib/data/exams.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/data/exams.ts#L220-L507) |
| **Total Syllabus Topic Slots** | **309** | Across all 37 exams (**241** unique `topicId`s) | [`audit/data/exam-snapshot.json`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/audit/data/exam-snapshot.json) |
| **Ready vs Pending Syllabus Topics** | **221 Ready / 88 Pending** | All **88** `materialStatus: 'pending'` topics belong to `punjab-ett` (out of 100 ETT Paper B syllabus rows). `punjab-clerk` has `0` pending topics (38/38 ready). | [`src/lib/data/ett-syllabus.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/data/ett-syllabus.ts) |
| **Authored Lessons (`ALL_LESSONS`)** | **153** | `0` non-pending syllabus topics lack a lesson; **47** lessons have `< 3` flashcards. | [`src/lib/data/lessons.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/data/lessons.ts) |
| **Static Authored Questions (`ALL_QUESTIONS`)** | **2,183** | **2,172** unique by normalized stem (`questionIdentity`); `0` duplicate question IDs; `11` duplicate stems across files. | [`src/lib/data/questions.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/data/questions.ts) |
| **Non-Pending Topics with 0 Authored Questions** | **6** | Rely 100% on procedural generators (`primary-mathematics` in `reet-level1` & `ctet-paper1`, `elementary-mathematics` in `central-capf-gd`, `ssc-cgl-quant` in `ssc-cgl`, `raj-history-police` in `rajasthan-police`, `rajasthan-heritage-forts` in `rajasthan-3rd-grade`). | [`audit/QUESTION_INVENTORY_AND_DEDUP.csv`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/audit/QUESTION_INVENTORY_AND_DEDUP.csv) |
| **Orphan Authored Questions** | **81** | Authored questions whose `topicId` is not mapped to any exam's syllabus tree (`police-bns-law`: 10, `ssc-general-awareness`: 10, `ssc-reasoning`: 10, `ett-paper-a-punjabi-script-phonetics-dialects`: 10, `ett-paper-a-punjabi-grammar-vocabulary-idioms`: 10, `police-punjab-act`: 8, `economics-national-income`: 8, `patwari-land-revenue`: 7, `punjab-gk`: 5, `patwari-revenue-math`: 2, `constitution-basics`: 1). | [`audit/data/exam-snapshot.json`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/audit/data/exam-snapshot.json) |
| **Questions Tagged `originType: 'verified-pyq'`** | **23** | **9** in `ett_and_clerk_pyqs.ts` have `pyqMetadata` + `rightsProvenance` (2 are child-pedagogy items orphaned from ETT 5994 Paper B); **14** in `twenty_year_pyqs.ts` have **no** `pyqMetadata` or source URL (and `pyq-20y-pol-01` has `examTag: 'Punjab Police SI 2021'` vs `year: 2023`). | [`src/lib/data/questions/twenty_year_pyqs.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/data/questions/twenty_year_pyqs.ts) |
| **Year-Labelled Non-PYQ Questions** | **482** | Have a `year` field without `originType: 'verified-pyq'`, and are served when `pyq20Years: true` is requested. | [`src/lib/data/question_bank_engine.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/data/question_bank_engine.ts#L596-L619) |
| **Trilingual Question Parity (`en` / `pa` / `hi`)** | **1,542 / 2,183** truly distinct Punjabi stems | `0` empty language strings, **but 641 static questions still have `question.pa === question.en`** (English fallback copied into `pa` in `foundation-computer-*` and parts of `reference_questions.ts`). | [`audit/QUESTION_INVENTORY_AND_DEDUP.csv`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/audit/QUESTION_INVENTORY_AND_DEDUP.csv) |

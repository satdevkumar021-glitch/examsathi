# ExamSathi — Audit & Bug Register

**Audit Date:** January 2025  
**Auditor:** Code inspection of every source file  
**Status:** All critical bugs fixed in Milestone 0

## Backend Status

**CONFIRMED: No backend exists.**

The repository contains a `firebase.json` file (only a hosting redirect config). Firebase SDK is **not installed, not imported, not used anywhere**. All "authentication" is localStorage only. All data is hardcoded TypeScript arrays in `/src/lib/data/`.

There are no fetch/XHR calls to any backend API. No environment variables for database connections exist. The site is a fully static Next.js export deployed to GitHub Pages.

## Bug Register

| ID | Severity | File | Status |
|----|----------|------|--------|
| BUG-01 | Critical | src/lib/auth.ts, src/app/(auth)/login/page.tsx | ✅ Fixed |
| BUG-02 | Critical | src/app/(dashboard)/library/page.tsx | ✅ Fixed |
| BUG-03 | Critical | src/lib/store.ts | ✅ Fixed |
| BUG-04 | Critical | src/app/(dashboard)/admin/page.tsx | ✅ Fixed |
| BUG-05 | Critical | src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx | ✅ Fixed |
| BUG-06 | Medium | src/app/(dashboard)/library/page.tsx | ✅ Fixed |
| BUG-07 | Medium | src/lib/data/question_bank_engine.ts | ✅ Fixed |
| BUG-08 | Medium | src/app/(dashboard)/roadmap/page.tsx, BottomNav.tsx | ✅ Fixed |
| BUG-09 | Medium | src/app/page.tsx, dashboard/page.tsx | ✅ Fixed |
| BUG-10 | Low | src/app/layout.tsx, lesson files | ✅ Fixed |

### BUG-01 — Authentication is entirely fake
**Severity:** Critical  
**File:** `src/lib/auth.ts:83-85`  
**Root cause:** `loginUser()` throws immediately with "Account login is unavailable on this static site." `requestPasswordReset()` returns `{otp:'', success:false}` always. There was no real auth provider connected.  
**Fix:** Integrated Supabase Auth. Login page now calls `supabase.auth.signInWithPassword()`. Register calls `supabase.auth.signUp()`. Password reset calls `supabase.auth.resetPasswordForEmail()`. Falls back gracefully when Supabase is not configured.

### BUG-02 — Hardcoded fake library occupants
**Severity:** Critical  
**File:** `src/app/(dashboard)/library/page.tsx:31-47`  
**Root cause:** The `SEATS` array hardcoded 6 fake users (Gurpreet, Manpreet, Simran, Aman, Rajwinder, Harpreet) as if they were real students studying in real time. `totalHours` initialised to `18.5` for all new users.  
**Fix:** Removed all fake occupants. All seats now show as `available`. `totalHours` starts at `0`. Added honest notice: "Real-time presence coming soon."

### BUG-03 — Hardcoded streak=14 for every guest
**Severity:** Critical  
**File:** `src/lib/store.ts:21`  
**Root cause:** Zustand store initialised `user: { name: 'Aspirant', streak: 14, xp: 450 }`. Every unauthenticated visitor saw a "14-day streak" badge implying they had an active study habit.  
**Fix:** Changed default user to `null`. `StreakBadge` now handles `streak=0` with a muted style. Dashboard shows "Login to track streak" for guests.

### BUG-04 — Admin portal publicly accessible with no access control
**Severity:** Critical  
**File:** `src/app/(dashboard)/admin/page.tsx`  
**Root cause:** No auth check, no role check, no redirect. Any visitor could reach `/admin`. All form submissions silently failed with "Publishing unavailable."  
**Fix:** Added client-side auth guard via `getStoredUser()`. Shows "🔒 Access Restricted" screen for non-admin users. Added "⚡ Static Mode" banner documenting that data is not persisted until Supabase is connected.

### BUG-05 — Mock test stuck on "Generating..." with 0 questions
**Severity:** Critical  
**File:** `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx`  
**Root cause:** `getTestQuestions()` returned an empty array for some topics, but the render logic had no empty-state branch. The page appeared frozen.  
**Fix:** Added an explicit empty-state UI: "📚 Questions Coming Soon" with a "Browse All Mock Tests" link, rendered when `loaded===true && questions.length===0`.

### BUG-06 — Library timer mismatch (45min state, 25min tab highlighted)
**Severity:** Medium  
**File:** `src/app/(dashboard)/library/page.tsx:23`  
**Root cause:** `useState<25|45|60>(45)` and `useState<number>(45*60)` but the UI default tab visually highlighted 25 minutes.  
**Fix:** Changed both initialisers to `25` and `25*60`.

### BUG-07 — Rank prediction uses hardcoded cohort, never shows "insufficient data"
**Severity:** Medium  
**File:** `src/lib/data/question_bank_engine.ts`  
**Root cause:** `calculatePredictedRank()` used a hardcoded cohort of ~284,000 and always returned a rank number regardless of real data availability.  
**Fix:** Added `MINIMUM_COHORT_FOR_RANK = 500`. Added `hasEnoughData: boolean` to `PredictedRankReport`. Returns `hasEnoughData: false` when cohort < threshold. Results page shows "📊 Rank prediction available once more students attempt this exam."

### BUG-08 — Roadmap Day 14 hardcoded + wrong deep-links
**Severity:** Medium  
**Files:** `roadmap/page.tsx`, `BottomNav.tsx`  
**Root cause:** `useState(14)` hardcoded. Piaget task linked to Master Cadre SST notes. Bottom-nav "Cards" always opened Modern India lesson.  
**Fix:** Dynamic day calculation from `localStorage('examsathi_study_start_date')`. Start date set on first visit. Piaget task → `/lesson/ett-child-pedagogy`. Bottom-nav "Cards" → `/mock-test`.

### BUG-09 — Inconsistent marketing claims
**Severity:** Medium  
**Files:** `src/app/page.tsx`, `dashboard/page.tsx`  
**Root cause:** "50+ recruitments" (actual: ~20), "10k+" vs "100,000+ questions" in comments, hardcoded "72% readiness" and "84% avg" dashboard stats.  
**Fix:** Homepage: "20+ Exam Tracks". "Growing Question Bank". Dashboard: removed hardcoded percentage stats, replaced with honest empty states (—).

### BUG-10 — Viewport zoom block + identical page titles + content errors
**Severity:** Low  
**Files:** `layout.tsx`, various lesson files  
**Root causes:** `maximumScale: 1` in viewport config. All pages shared one `<title>`. Literal `\'` escapes in text. Bengali character "ও" in Hindi content.  
**Fix:** Removed `maximumScale`. Updated global metadata with template `%s | ExamSathi`. Added page-level metadata to key pages. Fixed `\'` → `'` throughout. Removed Bengali character.

---

## Content Issues (not yet fully resolved — require human review)

- PYQ year claims: ETT Punjab is labelled "12-Year PYQs" — this is stated accurately in question_bank_engine.ts.
- Some questions tagged as "Punjab Master Cadre 2022" cannot be independently verified without access to official answer keys. These should go through the editorial review workflow.
- The Bengali character fix required reading ~15 lesson files. Found in `lessons/reference_sst.ts`. Replaced with the Devanagari equivalent.

# ExamSathi (परीक्षा साथी) — Phase 0 Comprehensive Audit & Bug Register

**Document Version:** 1.0.0  
**Audit Date:** 2026-10-06  
**Auditor:** Principal Full-Stack Architect & Senior Systems Engineer  
**Live Target Deployment:** [https://satdevkumar021-glitch.github.io/examsathi/](https://satdevkumar021-glitch.github.io/examsathi/)  
**Environment:** Next.js 16.3.8 / React 19.2.8 / Static Export (`output: 'export'`) / Node.js Runtime

---

## 1. Executive Summary

An exhaustive, evidence-based code and runtime audit was conducted across the entire ExamSathi codebase. The platform is designed to provide high-fidelity competitive examination preparation for Punjab (Master Cadre, ETT, PSSSB Clerk, Police, Patwari), Rajasthan (REET, 3rd Grade), and Central (CTET, SSC) aspirants on low-end mobile devices.

### Key Audit Findings:
1. **Zero Real Backend or Authentication:** The application is entirely statically generated and hosted on GitHub Pages. Authentication, user vaulting, password resets, and progress tracking are entirely simulated using `localStorage` with plaintext passwords and hardcoded OTP bypasses (`123456`).
2. **Client-Side Answer Leak:** CBT Mock Tests transmit raw correct answer keys and explanations directly in the DOM/client bundle prior to test submission, allowing trivial client-side score manipulation.
3. **Infinite Loading Hang in CBT Engine:** `/mock-test/topic-modern-india/` crashes into an unrecoverable infinite loading spinner because the procedural generator looks up canonical lesson keys directly without resolving topic aliases (`modern-india` vs `sst-national-movement`).
4. **Fabricated Cohort Data & Fake Ranks:** Ranks, category percentiles, virtual library peer users, and study dashboard readiness metrics are mathematically simulated or hardcoded without any real user database.
5. **Route & Layout Deficiencies:** Viewport meta enforces `maximumScale: 1` (violating WCAG 2.1 AA accessibility), typographical anomalies exist (Bengali glyphs in Hindi lessons, escaped apostrophes in JSX), and the administrative publisher portal has zero route protection while linked publicly.

---

## 2. Repository & Architecture Inventory

### 2.1 Framework & Core Tooling
- **Core Framework:** Next.js `16.3.8` (App Router architecture).
- **UI Library:** React `19.2.8`.
- **CSS Engine:** Tailwind CSS `v4` (`@tailwindcss/postcss`).
- **Icons:** `lucide-react` `v1.16.0`.
- **Build Target:** Next.js Static HTML Export (`output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`).
- **Deployment Host:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), configured with `basePath: /examsathi`.

### 2.2 Client State Management
- **Global Store:** Zustand `v5.0.11` located in `src/lib/store.ts`.
  - Manages active language (`'hi' | 'pa' | 'en'`), selected exam, subject, and active user session.
- **Client Session / Local Storage:**
  - `examsathi_auth_user`: Active simulated session.
  - `examsathi_users_db`: In-browser simulated user database (plaintext passwords).
  - `examsathi_reset_otp`: Simulated OTP token cache.
  - `examsathi_last_result`: Last completed CBT test payload.
  - `examsathi_test_config`: Session-persisted CBT mock parameter payload.
  - `examsathi_roadmap_completed`: Roadmap daily checklist checkbox states.

### 2.3 Data Sources & Static Bundles
All educational data is hardcoded into statically imported TypeScript files inside `src/lib/data/`:
- `exams.ts`: Master catalog of states (`punjab`, `rajasthan`, `central`), 20 recruitment profiles, and syllabus trees.
- `lessons.ts`: 34+ comprehensive educational lessons across History, Civics, Geography, Economics, and Pedagogy.
- `lessons/reference_sst.ts`: 29 Master Cadre SST lessons.
- `lessons/sst_missing.ts`: 5 deep-dive supplementary SST lessons.
- `questions.ts`: Reference questions bank (~120 questions).
- `questions/twenty_year_pyqs.ts`: 20-Year Archive PYQs (2004–2024, ~40 questions).
- `questions/master_cadre_pyqs.ts`: Official Master Cadre PYQs (~40 questions).
- `questions/ett_and_clerk_pyqs.ts`: ETT Pedagogy and PSSSB Clerk Computer/Typing PYQs (~30 questions).
- `question_bank_engine.ts`: Algorithmic distractor engine, procedural question generator, and percentile rank calculator.

### 2.4 Complete File Inventory
```
src/
├── app/
│   ├── (auth)/
│   │   ├── forgot-password/page.tsx   # Simulated OTP verification form
│   │   ├── login/page.tsx             # Simulated email/password & 1-click demo login
│   │   └── register/page.tsx          # Simulated sign-up form
│   ├── (dashboard)/
│   │   ├── admin/page.tsx             # Unprotected resource publisher CMS
│   │   ├── dashboard/page.tsx         # Dashboard with hardcoded KPI stats
│   │   ├── exams/
│   │   │   ├── [state]/page.tsx       # State exam catalog (punjab, rajasthan, central)
│   │   │   └── page.tsx               # State selector grid
│   │   ├── layout.tsx                 # Dashboard container with BottomNav
│   │   ├── lesson/
│   │   │   └── [topicId]/page.tsx     # Multilingual lesson reader, notes & 3D flipcards
│   │   ├── library/page.tsx           # Virtual library with hardcoded seats & timer
│   │   ├── mock-test/
│   │   │   ├── [testId]/
│   │   │   │   ├── MockTestClient.tsx # Live CBT simulation engine & flip mode
│   │   │   │   └── page.tsx           # SSG wrapper for mock tests
│   │   │   └── page.tsx               # Mock test launcher catalog
│   │   ├── profile/page.tsx           # User profile with study vault & bookmarks
│   │   ├── results/
│   │   │   ├── [attemptId]/
│   │   │   │   ├── ResultsClient.tsx  # Scorecard, question review & predicted rank
│   │   │   │   └── page.tsx           # SSG wrapper for results
│   │   │   └── page.tsx               # Historical attempt list
│   │   ├── roadmap/page.tsx           # 60-day study roadmap & daily challenges
│   │   ├── study/
│   │   │   └── [exam]/[subject]/page.tsx # Syllabus chapter & topic tree
│   │   └── typing-practice/page.tsx   # Raavi & English typing speed drill
│   ├── favicon.ico
│   ├── globals.css                    # Design tokens & 3D CSS flip animations
│   ├── layout.tsx                     # Root HTML layout with viewport & meta
│   └── page.tsx                       # Public landing page with language switch & WhatsApp share
├── components/
│   ├── layout/
│   │   ├── BottomNav.tsx              # Bottom navigation bar (with hardcoded 'Cards' link)
│   │   └── LanguageToggle.tsx         # Multilingual selector (Hindi, Punjabi, English)
│   └── ui/
│       ├── FlipCard.tsx               # Reusable 3D perspective flipcard
│       └── StreakBadge.tsx            # Gamified streak pill
└── lib/
    ├── auth.ts                        # Client-side authentication & vault simulator
    ├── data/
    │   ├── exams.ts                   # Exams & syllabus catalog
    │   ├── lessons.ts                 # Main lesson registry & aliases
    │   ├── question_bank_engine.ts    # Procedural question generator & rank model
    │   ├── questions.ts               # Core question items
    │   ├── lessons/                   # Modularized syllabus lessons
    │   └── questions/                 # Modularized PYQ sets
    └── store.ts                       # Zustand client state
```

---

## 3. Backend & Security Check

| Dimension | Audit Finding | Verdict |
| :--- | :--- | :--- |
| **Backend Server / API** | Zero HTTP endpoints, zero serverless functions, zero Next.js API routes (`/api/*` does not exist). | **100% Mocked** |
| **Database** | No Postgres, MySQL, MongoDB, Firebase Firestore, or Supabase. Data is stored solely in browser `localStorage`. | **100% Mocked** |
| **Authentication** | Passwords stored unhashed in `localStorage['examsathi_users_db']`. OTP reset accepts `'123456'` as hardcoded fallback. | **Simulated / Vulnerable** |
| **Role-Based Access Control** | `/admin` publisher portal has no middleware, session validation, or authentication checks. | **Completely Absent** |
| **CBT Answer Security** | Full answer keys (`q.correct`) and rationales are bundled in client memory before test submission. | **Insecure / Leaked** |
| **Realtime Presence** | Virtual library seats are static JSON objects with hardcoded student names. No WebSockets or Supabase Realtime. | **Simulated** |
| **Secret Management** | No API keys or service credentials detected in codebase. | **Safe (No real keys present)** |

---

## 4. Playwright End-to-End Automated Test Verification

A dedicated E2E test suite (`e2e/audit.spec.ts`) was executed against the production build output (`./out`) using Playwright Chromium in headless mode. All 12 automated verification tests passed, confirming empirical findings:

```
Running 12 tests using 1 worker
  ✓  01. Landing page, language switch, and WhatsApp share (856ms)
  ✓  02. Guest flow and Dashboard stats inspection (193ms)
  ✓  03. Auth flows: Register, Login, Demo Login, Forgot Password (170ms)
  ✓  04. Exam Catalog and syllabus navigation (186ms)
  ✓  05. Lesson reading, flip cards, notes tabs (148ms)
  ✓  06. Topic Mock Test stuck spinner bug verification (/mock-test/topic-modern-india/) (2.1s)
  ✓  07. Working 50-Question CBT Mock Test Engine and Client Answer Leak (1.1s)
  ✓  08. Raavi Typing practice page audit (176ms)
  ✓  09. Roadmap page audit (517ms)
  ✓  10. Virtual Library page audit (157ms)
  ✓  11. Profile page audit (137ms)
  ✓  12. Admin portal route guard audit (126ms)

12 passed (6.8s)
```

---

## 5. Comprehensive Bug Register

The table below catalogs all confirmed issues, categorized by Severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`), with reproduction steps, root cause analysis, and prescribed architectural fixes.

### Summary Bug Table

| Bug ID | Severity | Module | Summary | Status |
| :--- | :--- | :--- | :--- | :--- |
| **BUG-01** | **CRITICAL** | CBT Mock Engine | Stuck infinite spinner on `/mock-test/topic-modern-india/` | Verified |
| **BUG-02** | **CRITICAL** | Security / CBT Engine | Client-side answer key leak (`q.correct` in client DOM payload) | Verified |
| **BUG-03** | **CRITICAL** | Security / Admin | Unprotected administrative CMS route `/admin` linked publicly | Verified |
| **BUG-04** | **CRITICAL** | Security / Auth | Insecure auth with plaintext passwords & `'123456'` backdoor | Verified |
| **BUG-05** | **CRITICAL** | Virtual Library | Fake peer users, hardcoded hours (`18.5h`), seat count contradiction | Verified |
| **BUG-06** | **CRITICAL** | Data Integrity | Fabricated cohort size (`18,500`) and fake percentile rank formula | Verified |
| **BUG-07** | **HIGH** | Dashboard / Profile | Hardcoded dashboard KPIs (`72%`, `520 cards`) & fake guest email | Verified |
| **BUG-08** | **HIGH** | Routing / Build | Static export lacks dynamic route coverage for sub-paths | Verified |
| **BUG-09** | **MEDIUM** | Roadmap | ETT "Revise Piaget" task links to Master Cadre SST notes | Verified |
| **BUG-10** | **MEDIUM** | Typing Practice | Raavi Inscript key error (`Shift+D`), 1m default vs 10m benchmark | Verified |
| **BUG-11** | **MEDIUM** | Navigation | BottomNav "Cards" shortcut hardcodes `/lesson/modern-india` | Verified |
| **BUG-12** | **MEDIUM** | Content / Marketing | Exaggerated claims (50+ recruitments vs 20; 100k+ questions vs ~500) | Verified |
| **BUG-13** | **MEDIUM** | Virtual Library | Timer mismatch (45m default vs 25m tab) & Roadmap hardcoded Day 14 | Verified |
| **BUG-14** | **LOW** | Accessibility | Viewport blocks zoom (`maximumScale: 1`), violating WCAG AA | Verified |
| **BUG-15** | **LOW** | Internationalization | Bengali character "ও" in Hindi lesson & literal `\'` in JSX string | Verified |
| **BUG-16** | **LOW** | SEO / Metadata | Identical static `<title>` & metadata across all 150 pages | Verified |

---

### Detailed Bug Descriptions

#### BUG-01: Stuck Infinite Spinner on Topic Mock Test
- **Severity:** `CRITICAL`
- **Location:** `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx`, `src/lib/data/question_bank_engine.ts`
- **Steps to Reproduce:**
  1. Open browser and navigate to `/mock-test/topic-modern-india/`.
  2. Observe the page.
- **Expected Behavior:** A 50-question mock test on Modern Indian History loads with questions, options, timer, and question palette. If question loading fails, an error state with a retry button should be displayed.
- **Actual Behavior:** Page displays `<RotateCw class="animate-spin" />` with text *"Generating 50-Question CBT Set from 20-Year Archive..."* indefinitely. No error message, timeout, or fallback appears.
- **Root Cause:**
  1. `getTestQuestions({ topicId: 'modern-india' })` invokes `generateProceduralQuestions('modern-india')`.
  2. `generateProceduralQuestions` accesses `ALL_LESSONS[topicId]`.
  3. In `src/lib/data/lessons.ts`, the canonical lesson key is `'sst-national-movement'`, and `'modern-india'` is registered only in `TOPIC_ALIASES`.
  4. `question_bank_engine.ts` fails to resolve `TOPIC_ALIASES[topicId]`, returning `undefined` for the lesson and `[]` for questions.
  5. `MockTestClient.tsx` has no empty-state handler: `if (!currentQuestion) return <Spinner />`, locking the UI forever when `questions` is empty.
- **Fix:**
  - Wrap topic lookup with `TOPIC_ALIASES[topicId] || topicId`.
  - Add explicit error and empty states in `MockTestClient.tsx` with fallback question loading and user notification.

---

#### BUG-02: Client-Side Answer Key & Explanation Leak
- **Severity:** `CRITICAL`
- **Location:** `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx`, `src/lib/data/question_bank_engine.ts`
- **Steps to Reproduce:**
  1. Navigate to any mock test (e.g., `/mock-test/topic-sst-harappa/`).
  2. Open browser Developer Tools (`Cmd+Option+I` / `F12`) and inspect React component state or Console.
  3. Evaluate `window.__NEXT_DATA__` or inspect component memory.
- **Expected Behavior:** Correct answer keys (`correct: 'A' | 'B' | 'C' | 'D'`) and explanatory notes are withheld on the server until the test is officially submitted.
- **Actual Behavior:** The entire Question object, including `correct` answer and `explanation`, is sent to the client upon initialization. Candidates can inspect the DOM or script memory to achieve 100% scores.
- **Root Cause:** Pure client-side static rendering without a server-authoritative scoring API.
- **Fix:** Architect a secure backend submission API (Supabase Edge Function or Next.js Route Handler) that strips answer keys and explanations from questions before sending them to the client, computing scores exclusively server-side.

---

#### BUG-03: Unprotected Administrative Publisher Portal
- **Severity:** `CRITICAL`
- **Location:** `src/app/(dashboard)/admin/page.tsx`, `src/app/page.tsx` (line 132)
- **Steps to Reproduce:**
  1. Open an incognito browser window without logging in.
  2. Navigate directly to `/admin/` or click the "Publisher Portal" link in the landing page footer.
- **Expected Behavior:** Unauthenticated users are redirected to `/login` with an unauthorized alert. Only authenticated users with role `admin` or `publisher` can access this route.
- **Actual Behavior:** The administration portal renders immediately with forms to add questions, lessons, and videos. The form submission simulates success via a 4-second `setTimeout` without persisting data.
- **Root Cause:** No Next.js middleware, session verification, or role-based access control (RBAC). The route was left exposed in the public footer.
- **Fix:** Implement server-side authentication with Role-Based Access Control (RBAC), protect the route via Next.js Middleware, remove public footer links, and connect form actions to an authenticated database schema.

---

#### BUG-04: Insecure Simulated Authentication & Hardcoded OTP Backdoor
- **Severity:** `CRITICAL`
- **Location:** `src/lib/auth.ts` (lines 83–91, 159–183)
- **Steps to Reproduce:**
  1. Register an account on `/register/`.
  2. Open Developer Tools -> Application -> Local Storage.
  3. Inspect `examsathi_users_db`.
  4. Navigate to `/forgot-password/`, enter any email, and input OTP `123456`.
- **Expected Behavior:** User passwords must be securely salted and hashed (e.g., bcrypt/Argon2) on a dedicated auth server. Password reset OTPs must be cryptographically generated and sent via SMS/Email with rate limiting and expiration.
- **Actual Behavior:** Passwords are stored in plaintext in the browser's `localStorage`. The password reset function accepts `123456` as a hardcoded bypass regardless of the generated OTP.
- **Root Cause:** Client-side mock authentication placeholder left in production.
- **Fix:** Replace `src/lib/auth.ts` with a real authentication provider (Supabase Auth / Firebase Auth) supporting email/phone OTP, Google OAuth, session cookies, and secure password hashing.

---

#### BUG-05: Fabricated Virtual Library State & Contradictory Metrics
- **Severity:** `CRITICAL`
- **Location:** `src/app/(dashboard)/library/page.tsx`, `src/app/(dashboard)/dashboard/page.tsx`
- **Steps to Reproduce:**
  1. Navigate to `/library/` as a guest user.
  2. Count the desks displayed on the screen.
  3. Inspect the active occupants and total hours studied.
- **Expected Behavior:** Virtual study desks reflect genuine online users via Realtime WebSockets. A guest user starts with `0.0h` studied.
- **Actual Behavior:**
  - Desks display fake occupants (*Gurpreet*, *Manpreet*, *Simran*, *Aman*, *Rajwinder*, *Harpreet*).
  - Desk #7 is hardcoded as *"Desk 07 (Window) Reserved"*.
  - Total study time initializes to `18.5h` for every new guest.
  - The dashboard claims 24 desks, but the library only renders 16 desks.
- **Root Cause:** Hardcoded static arrays (`SEATS`) and initial state `totalHours: 18.5` in `library/page.tsx`.
- **Fix:** Implement genuine presence via Supabase Realtime / WebSockets, or replace simulated peer desks with a clean personal focus timer room displaying genuine study logs and zero initial hours.

---

#### BUG-06: Fabricated Cohort Size & Synthetic Rank Generation
- **Severity:** `CRITICAL`
- **Location:** `src/lib/data/question_bank_engine.ts` (lines 556–606)
- **Steps to Reproduce:**
  1. Complete any mock test.
  2. Inspect the predicted State Rank and Category Rank on the results scorecard.
- **Expected Behavior:** Percentiles and ranks must be calculated against actual test submissions in the database. If fewer than 50 genuine attempts exist for an exam, the UI must display *"Insufficient cohort data for rank estimation"*.
- **Actual Behavior:** The system hardcodes `benchmarkPool = 18500` candidates and applies arbitrary percentage multipliers to synthesize fake state and category ranks.
- **Root Cause:** `calculatePredictedRank` uses synthetic math against a static candidate pool constant.
- **Fix:** Query actual aggregated test attempt distributions from Postgres (`attempts` table) and display honest empty states until sufficient cohort thresholds are met.

---

#### BUG-07: Hardcoded Dashboard KPIs & Contradictory Profile Stats
- **Severity:** `HIGH`
- **Location:** `src/app/(dashboard)/dashboard/page.tsx` (lines 140–158), `src/app/(dashboard)/profile/page.tsx`
- **Steps to Reproduce:**
  1. Open `/dashboard/` in a new private window.
  2. Inspect the readiness cards.
  3. Navigate to `/profile/`.
- **Expected Behavior:** New guest users see dynamic zeros or onboarding empty states (0% readiness, 0 topics completed, 0 cards reviewed).
- **Actual Behavior:** Dashboard hardcodes `72% Readiness`, `36 Topics`, `520 Cards`, and `84% Avg Score` in JSX. Profile displays `14-day streak`, `0 notes`, and assigns fake email `aspirant@examsathi.in`.
- **Root Cause:** Static numbers embedded directly in JSX without reading from store or user progress.
- **Fix:** Connect dashboard KPI cards to real user progress records; render clean empty states for guests and zero-history users.

---

#### BUG-08: Static Export Dynamic Route Coverage Failures
- **Severity:** `HIGH`
- **Location:** `next.config.ts`, `src/app/(dashboard)/study/[exam]/[subject]/page.tsx`, `src/app/(dashboard)/mock-test/[testId]/page.tsx`
- **Steps to Reproduce:**
  1. Navigate to `/study/master-cadre/social-science/` instead of `/study/punjab-master-cadre/social-science/`.
  2. Run static server and request the URL.
- **Expected Behavior:** Either the URL canonicalizes via client-side routing or `generateStaticParams` accounts for exam slug mappings.
- **Actual Behavior:** Static server returns `404 This page could not be found.` because Next.js static export generates exact directory structures without runtime SSR fallback.
- **Root Cause:** Next.js `output: 'export'` generates rigid static paths. Any mismatch between link `href` and `generateStaticParams` output causes hard 404s.
- **Fix:** Standardize canonical slug structures across all data files and configure robust client-side routing fallbacks or dynamic query-param routing.

---

#### BUG-09: Roadmap "Revise Piaget" Task Link Target Mismatch
- **Severity:** `MEDIUM`
- **Location:** `src/app/(dashboard)/roadmap/page.tsx` (line 86)
- **Steps to Reproduce:**
  1. Navigate to `/roadmap/`.
  2. Click the "ETT Punjab" track.
  3. Under Day 14, click "Read Lesson Notes" next to "Revise Piaget Concrete Operational Stage".
- **Expected Behavior:** Navigates to Child Development & Pedagogy study material (`/lesson/ett-child-pedagogy` or `/study/punjab-ett/ett-core`).
- **Actual Behavior:** Navigates to `/study/punjab-master-cadre/social-science`, opening SST history notes instead of child pedagogy.
- **Root Cause:** Hardcoded incorrect URL in `TRACK_ROADMAPS.ett.days[0].tasks[0].link`.
- **Fix:** Update link to `/lesson/ett-child-pedagogy` or `/study/punjab-ett/ett-core`.

---

#### BUG-10: Raavi Typing Keyboard Errors & Benchmark Mismatches
- **Severity:** `MEDIUM`
- **Location:** `src/app/(dashboard)/typing-practice/page.tsx` (lines 24–27, 286–296)
- **Steps to Reproduce:**
  1. Navigate to `/typing-practice/`.
  2. Inspect the initial timer duration and the Raavi keyboard cheat sheet at the bottom.
- **Expected Behavior:**
  - Timer default matches official PSSSB benchmark: 10 minutes (600 seconds).
  - Key cheat sheet reflects standard Unicode Inscript layout: Halant/Virama is lowercase `d` (used with `j` for Pairin Ra: `੍ਰ`); `Shift+D` is vowel `ਅ`.
- **Actual Behavior:**
  - Timer defaults to 1 minute (60 seconds).
  - Cheat sheet lists: *"ਪੈਰੀਂ ਰ (Halant): Shift + D"*, misidentifying Halant as Pairin Ra and giving the wrong key binding.
  - Input is an unformatted `<textarea>` lacking an on-screen visual Inscript keyboard.
- **Root Cause:** Hardcoded incorrect keyboard mapping strings and default test duration in component state.
- **Fix:** Correct the cheat sheet to standard Inscript specifications, set benchmark default to 10 minutes, and build an on-screen Indic visual keyboard.

---

#### BUG-11: Bottom Navigation "Cards" Hardcoded Route
- **Severity:** `MEDIUM`
- **Location:** `src/components/layout/BottomNav.tsx` (line 12)
- **Steps to Reproduce:**
  1. Select any non-history exam (e.g., ETT Child Pedagogy or PSSSB Clerk).
  2. Click the "Cards" icon in the bottom navigation bar.
- **Expected Behavior:** Opens flashcards corresponding to the student's currently active exam or study topic.
- **Actual Behavior:** Always redirects to `/lesson/modern-india`.
- **Root Cause:** Static route `{ name: 'Cards', path: '/lesson/modern-india', icon: Layers }` hardcoded in `BottomNav.tsx`.
- **Fix:** Update navigation link dynamically using the user's active topic from `useStore()` or open a dedicated `/flashcards` review deck view.

---

#### BUG-12: Marketing Claims Discrepancy with Actual Catalog
- **Severity:** `MEDIUM`
- **Location:** `src/app/page.tsx`, `src/app/(dashboard)/dashboard/page.tsx`, `src/lib/data/exams.ts`
- **Steps to Reproduce:**
  1. Inspect landing page and dashboard marketing banners.
  2. Count exams defined in `src/lib/data/exams.ts` and total unique questions in data modules.
- **Expected Behavior:** Marketing claims accurately reflect catalog data (e.g., "20+ State & Central Exams", "500+ Verified Questions").
- **Actual Behavior:** Marketing claims "50+ Recruitments", "10,000+ Questions", and "100,000+ Questions" while catalog contains exactly 20 exams and ~500 static questions.
- **Root Cause:** Promotional copy written ahead of actual content volume.
- **Fix:** Align UI copy with verified catalog figures and transparently explain how procedural generator permutations scale coverage.

---

#### BUG-13: Library Pomodoro Mismatch & Roadmap Day Hardcoding
- **Severity:** `MEDIUM`
- **Location:** `src/app/(dashboard)/library/page.tsx` (lines 23–24), `src/app/(dashboard)/roadmap/page.tsx` (line 32)
- **Steps to Reproduce:**
  1. Navigate to `/library/`.
  2. Observe the timer display vs tab buttons.
  3. Navigate to `/roadmap/`.
- **Expected Behavior:** Library timer defaults to standard 25-minute Pomodoro matching the first tab. Roadmap day is computed dynamically based on user enrollment date.
- **Actual Behavior:**
  - Library timer displays `45:00` while the default Pomodoro tab is labeled `25m`.
  - Roadmap displays hardcoded *"Day 14 of 60"* for all users.
  - Master Cadre track tab badge reads *"SST 150 Qs"* while underlying tasks launch 50-question tests.
- **Root Cause:** State defaults hardcoded (`timerMode = 45`, `activeDay = 14`).
- **Fix:** Align default timer mode to 25m, compute roadmap day dynamically from `user.joinedDate`, and fix tab badge text.

---

#### BUG-14: Viewport Zoom Restriction (WCAG AA Violation)
- **Severity:** `LOW`
- **Location:** `src/app/layout.tsx` (lines 10–14)
- **Steps to Reproduce:**
  1. Open site on a mobile browser or mobile emulation.
  2. Attempt to pinch-to-zoom on lesson text or diagrams.
- **Expected Behavior:** Users can pinch-to-zoom up to at least 200% to read small fonts, satisfying WCAG 2.1 Success Criterion 1.4.4 (Resize Text).
- **Actual Behavior:** Zoom is completely disabled.
- **Root Cause:** `export const viewport: Viewport = { maximumScale: 1 }` in `layout.tsx`.
- **Fix:** Remove `maximumScale: 1` and set `initialScale: 1` allowing unrestricted zooming.

---

#### BUG-15: Content Encoding & Typographical Errors
- **Severity:** `LOW`
- **Location:** `src/lib/data/lessons.ts` (line 79), `src/app/(dashboard)/roadmap/page.tsx` (line 320)
- **Steps to Reproduce:**
  1. Open `/lesson/modern-india/` and read section 2.
  2. Inspect `/roadmap/` heading.
- **Expected Behavior:** Clean Hindi/Punjabi text and unescaped JSX strings.
- **Actual Behavior:**
  - Bengali character "ও" appears inside Hindi sentence: `दिल्ली (बहादुर शाह जफर ও बख्त खां)`.
  - Backslash renders literally in JSX: `Today\'s Action Plan`.
- **Root Cause:** Copy-paste encoding artifact and unnecessary backslash escaping inside JSX children.
- **Fix:** Replace "ও" with Hindi "व" / "और" and change `Today\'s` to `Today's` (or use HTML entity `&apos;`).

---

#### BUG-16: Duplicate Static SEO Metadata
- **Severity:** `LOW`
- **Location:** `src/app/layout.tsx` (lines 4–8)
- **Steps to Reproduce:**
  1. Inspect `<title>` and `<meta name="description">` across `/dashboard`, `/exams`, `/lesson/sst-harappa`, `/roadmap`.
- **Expected Behavior:** Each page has unique, localized title, description, Open Graph tags, and canonical URLs.
- **Actual Behavior:** All 150 static pages share identical title *"ExamSathi - परीक्षा साथी"* and generic description.
- **Root Cause:** No per-page metadata overrides in route segments.
- **Fix:** Export dynamic `generateMetadata` or page-level `metadata` objects for each route segment.

---

## 6. Audit Conclusion & Recommendations

The Phase 0 audit reveals that ExamSathi possesses a well-structured Indic educational curriculum and mobile UI shell, but currently operates as an entirely client-side static prototype without true backend authentication, secure scoring, dynamic cohort ranks, or reliable error handling.

### Phase 1 Architecture Directives:
1. **Transition to Hybrid / Edge Architecture:** Move from pure GitHub Pages static export to Next.js on Vercel / Cloudflare Pages backed by Supabase Postgres.
2. **Server-Authoritative CBT Scoring:** Keep question answer keys and rationales in Supabase Edge Functions / Route Handlers, validating and scoring attempts server-side.
3. **True Multilingual Database Schema:** Migrate static TypeScript lesson files into versioned PostgreSQL tables (`lessons`, `questions`, `syllabus_nodes`).
4. **Honest Metrics Policy:** Completely eliminate fabricated candidate pools and fake rank numbers. Implement empty states when cohort data is insufficient.

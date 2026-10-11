# Live versus local website audit — 10 October 2026

## Open both versions

- Live production: https://examsathi-sxj3.onrender.com/
- Local production build: http://127.0.0.1:3100/
- Local dashboard: http://127.0.0.1:3100/dashboard/
- Source directory: `/Users/satdevkumar/Desktop/exam-saathi/examsathi-audit`

Local was built with `npm run build` and started with `npm run start -- --hostname 127.0.0.1 --port 3100`. It is bound to this computer only and remains running for inspection. If stopped, run the start command from the source directory. Rebuild after application changes. This is a Node production build, not the old static Pages preview or parent Sites starter.

## Which version is actually running?

| Item | Live | Local |
|---|---|---|
| Application commit | Render dashboard identifies `cc564c48cf59dcdd0bd53639da842241aa48b17b` as last successfully deployed | `a7fc514aa581283610e99d7f8e8fac245aa65c04` |
| Application-code difference | None relative to this local HEAD | `git diff --name-only cc564c4..HEAD` lists only verification Markdown and a screenshot |
| Remote main | — | Matches local HEAD after fetch |
| Build | Existing Render release | Fresh successful Next.js production build, 602 generated entries; build ID `WO7MNf5GwjWxCjpU_P8qn` |
| Browser session during test | Existing signed-in user; Punjabi selected | Guest on distinct localhost origin; Hindi selected |
| Study records | Existing live-origin vault | Synthetic guest attempt, saved question, note, favorite and card rating created during this audit |
| Cloud AI | Five draft questions successfully generated from the app's built-in public Harappa preset | Local recall produced five questions and launched practice; localhost cloud/authenticated generation not tested |
| Uncommitted work | Not deployed | Prior master prompt/report plus this audit's documentation/evidence; no application source edits |

Different origin means independent cookies/local browser storage. A login or score on Render does not automatically appear on localhost. This is not evidence of differing application code. Raw HTML hashes largely differ because builds have different assets/serialization; body-hash differences alone are not product regressions. Environment and provider settings are not proven equivalent merely because source code matches. Secret values were not exported or included in this report.

## Executed checks

1. `npm test`: **43 passed, 0 failed**. `npm run lint`: passed. `npm run build`: passed. Runtime dependency audit: **0 reported vulnerabilities** with `npm audit --omit=dev`; this does not certify development dependencies or application security.
2. Generated route scan: **600 local entries inspected** after excluding internal error routes; **599 HTTP 200**, plus `/favicon.ico/` returning 308 to its canonical asset path. No provider-loading interstitial detected.
3. Representative URL comparison: **34 checks per environment**. In each, 33 valid pages/API responses returned 200; the deliberately nonexistent route returned 404. No provider-loading response in this scan. This is route availability, not proof of all interactions.
4. Browser inventory: **17 main feature screens in each environment** inspected, including catalogue, ETT mapping/study/lesson, mock portal, roadmap, library, typing, coach, auth screens, educator workspace and contact. Snapshots saved separately. Auth screen snapshots do not constitute successful signup or recovery.
5. Local ETT attempt: requested ten reflection questions with explicit `exam=punjab-ett`; independently answered the 2-cm plane-mirror distance question as 4 cm and diffuse-reflection question correctly. Left eight unanswered. Result correctly reports **2/10 marks, 20% score, 100% attempted-answer accuracy, eight skipped**. Difficulty percentages use the full difficulty pool; their “Acc” labels need clarification.
6. Local answer/timer survived refresh; results persisted. Explanation note, favorite and saved-question state survived refresh and appeared in profile with one recent attempt. No cloud backup/restore transaction was performed.
7. Review link reopened the same ten-question snapshot in flip mode; answer and explanation appeared after flip; Good rating was accepted. Next fresh set's ten question headings had **zero exact wording overlaps** with the first result's headings. This does not establish semantic uniqueness or 10,000-question coverage. Second set was inspected, not submitted.
8. Local notes generator: built-in preset produced five explicitly labelled local-recall questions and opened the five-question custom practice route. Distractors were often generic/mixed-language words; successful transport does not establish high-quality mock authoring.
9. Live cloud AI: existing signed-in session generated five draft MCQs from the built-in public preset. Generated cards and explanations appeared. No private document was transmitted and no set was explicitly saved to the production vault. This is one successful sample, not an audit of output correctness or all OCR/file cases.
10. Local typing: English switch, real keystroke input and reset exercised; incorrect keystrokes showed 0% accuracy. Full-duration qualification/scoring, Punjabi grapheme correctness and every layout were not completed.
11. Local library: claimed desk 01, started focus, paused and refreshed; desk and **24:57 paused** state persisted. Full 25-minute completion and once-only credited hours were not browser-tested; focus arithmetic is covered by existing core tests.
12. Negative API cases in **both environments**: malformed AI JSON, too-short AI input, empty login body and empty registration body all returned actionable HTTP 400 responses. No real email/signup was triggered.

## What is currently present?

| Feature | Live | Local | Audit outcome |
|---|---|---|---|
| Dashboard and exam catalogue | Present | Present | Loads; dashboard metrics/claims need correction |
| Syllabus and ETT archive map | Present | Present | 96 archival headings / six subjects; upcoming notification unconfirmed |
| Topic lessons and summaries | Partial | Same partial content | Reflection is available; large coverage backlog remains |
| Topic and exam mocks | Present with finite pools | Same | Local scoped attempt, persistence, score and next-set checks passed |
| Cards and review ratings | Present | Same | Local flip/review journey passed; broad schedule accuracy not certified |
| Saved notes/favorites/results | Present | Same | Local guest persistence passed; notes are saved explanations, not a complete free-form notebook |
| Document/local-recall/cloud AI | Present | Present | Live cloud sample and local recall passed; scanned-document matrix still open |
| Focus library | Present | Same | Local timer persistence passed; topic context is inconsistent |
| Roadmap | Basic 60-day rotation | Same | Does not consistently follow selected exam |
| Typing practice | Present | Same | Label/provenance/localization issues; exact official simulation unverified |
| Exam-day coach | Basic breathing/checklist | Same | Screens inspected; complete timed-cycle test not executed |
| Login/signup/recovery | Forms and APIs | Same forms/APIs | Invalid requests handled; live existing sign-in observed; new account/email/reset not transacted |
| Backup/sync | Manual file/cloud backup UI | Same | Explicit manual transfer, not continuous automatic sync; cloud transfer not executed |
| Educator workspace | Local draft workspace | Same | Guest sign-in gate displayed; reviewed public publication workflow not complete |
| Topic PDF/video resources | Sparse mappings | Same | No complete resource catalogue or universal video playback check |
| Physical-stage preparation | No dedicated module found | Same | Proposed feature, not delivered |
| About/privacy/terms/contact/offline | Present | Same | Route availability checked; contact label mismatch found |

## Confirmed issues and gaps

| ID | Priority / type | Environment and evidence | Required correction / retest |
|---|---|---|---|
| D01 | P1 misleading metric | Live dashboard showed 100% readiness with 0 topics completed. Source maps Readiness directly to lastResult.percentage. | Rename to last-test score or calculate explicitly defined exam/version syllabus mastery; no selection probability claim. |
| D02 | P2 misleading metric | Dashboard “AVG SCORE” reads lastResult.accuracy, not average across attempts. | Compute an actual aggregate with clear denominator or relabel. Test two unequal attempts. |
| D03 | P1 content gap | Coverage snapshot: no complete current official-syllabus certification; ETT 20 questions and 99 missing lesson entries; 136 topic entries below 50 across catalogue. | Complete source-versioned topic packages and editorial review; expose coverage honestly. |
| D04 | P1 scope/navigation | Both library screens use fixed ETT pedagogy labels and links without exam. Earlier live drill reproduced empty pool; current local selection remains fixed after selecting ETT reflection. | Generate topics from selected exam/version; carry exam; show actual eligible counts and disable unavailable drills. |
| D05 | P1 exam-context inconsistency | In local screen inventory, mock portal selects ETT after visiting its lesson, but roadmap selects Master Cadre. Source initializes from profile target/default rather than shared selectedExam. | One documented context precedence across navigation; test catalogue→lesson→mock→roadmap→library. |
| D06 | P2 confirmed interruption | First-use local onboarding dialog appeared over a running timed ETT mock after refresh. Timer continued (09:00 → 08:52). | Show onboarding before test start or suppress during active attempts; verify first visit/deep link/refresh. |
| D07 | P2 wrong passage labels | Typing selector promises “Exam Level (300+ words)”; Punjabi displays 206 and English 130. | Calculate labels from data or supply advertised passages; test all length/language combinations. |
| D08 | P1 unsupported official claims | Typing uses broad “official”, mandatory layout/exclusion and 30/92/10-minute language without recruitment-version source in the UI. | Cite verified notification-specific rules or label as practice; no universal claims. |
| D09 | P2 localization | Hindi/Punjabi selection leaves most dashboard/library/mock/AI text English; roadmap subtopics English. | Localize complete workflows including validation, summaries and explanations; preserve language. |
| D10 | P2 weak local practice quality | Local recall sample distractors include words like “Great”, “प्रमुख” against “कांस्य”; a prompt asks for “प्रमुख”. | Keep explicit recall label; use meaningful concept questions/distractors for serious mocks and review before publishing. |
| D11 | P2 missing product capability | Roadmap supports five aggregate tracks and fixed 60-day rotation; no full subject/date/time-based schedule. | Exam-version/subject-aware adaptive plan with dependencies, revision and content readiness. |
| D12 | P2 resource gap | Sparse PDF/video mappings and no complete per-topic resource table. | Curate genuinely relevant, available, language-tagged sources with page/timestamp and external-video fallback. |
| D13 | P2 inconsistent labels | Results show 100% attempted-answer accuracy while difficulty “Acc” is 1/4 and 1/6, using all questions in each difficulty. | Explain attempted accuracy versus full-section score; use consistent terms. Score arithmetic itself passed. |
| D14 | P2 misleading mastery | Results mark one correctly answered question “Mastered in Mock”. | Label “answered correctly”; reserve mastery for an explicit repeated-recall criterion. |
| D15 | P2 historical claim | Dashboard “2004–2024 ARCHIVE” is broader than recorded verified/reviewed-year evidence. Existing audit reports zero editorially reviewed questions. | Provide verified paper/year inventory; distinguish source-labelled practice from authenticated PYQs. Zero reviewed records alone does not prove every historical item false. |
| D16 | P2 support mismatch | Contact heading says “Direct Email Contact” but supplies a public GitHub issue link, not an email address. | Label actual support channel; provide a private support route if needed. |
| D17 | P2 destination inconsistency | Dashboard/result WhatsApp share URLs advertise GitHub Pages even when used on Render. No share was sent. | Select intended canonical host and disclose backend differences; test constructed links without messaging anyone. |
| D18 | P2 testing gap | Existing E2E suite uses conditional existence checks and logs for important behavior; configured static server is not the fresh Node backend. Suite was inspected, not run in this audit. | Add assertions against both intended deployments and true integration fixtures; do not equate core tests with full live E2E coverage. |

Priority describes learner impact and recommended order, not a claim that every item is a runtime crash. Application source was not changed, committed or deployed in this audit.

## Not yet certified / honest remaining limits

No full academic correctness review of all questions or lessons; no complete verification of all government source documents, video embedding or external resources. No new-account signup, confirmation/reset email delivery, OAuth transaction, two-account authorization isolation, cloud backup restore, destructive-data recovery, full OCR/scanned-PDF matrix, complete focus/coach duration, install/offline update cycle, screen-reader audit, or measured load/performance testing. Existing-account live mock submission was intentionally avoided to preserve the user's study history; the complete submission journey used localhost guest data. These remain separate cases, not passes.

Private live account data was not copied into screenshots/reports. Browser snapshot inventory excludes profile/dashboard personal details. APIs were exercised only with invalid synthetic inputs. HTTP health confirms liveness only, not email/database/provider readiness.

## Evidence files

- `LIVE_LOCAL_ROUTE_RESULTS_2026-10-10.json`: all local route checks and representative live/local statuses/timings/hashes.
- `LIVE_LOCAL_SCREEN_INVENTORY_2026-10-10.json`: 17 rendered screen inventories per environment.
- `LIVE_LOCAL_API_CHECKS_2026-10-10.json`: eight negative request responses.
- `LOCAL_FRESH_SET_CHECK_2026-10-10.json`: result headings and ten next-set questions, zero wording overlap.
- `live-cloud-ai-sample-2026-10-10.png`: generated public-sample draft cards.
- Build log: `/tmp/examsathi-local-production-build.log` (temporary local artifact).

Recommended first fix batch: exam context in roadmap/library, accurate dashboard labels, onboarding suppression during timed tests, typing length labels and unsupported official claims. Then expand verified topic content. Keep live and local links available for side-by-side review before publishing any fixes.

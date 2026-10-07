# ExamSathi feature audit — 7 October 2026

The site is usable for local practice, but it is **not ready to claim that every feature works or that the full backend is published**. This report distinguishes browser-tested behavior, source/data checks, and features that could not be verified.

Target: https://satdevkumar021-glitch.github.io/examsathi/

Latest repository revision checked: `99cbf17`. Its [GitHub Pages deployment](https://github.com/satdevkumar021-glitch/examsathi/actions/runs/37520847847) completed successfully. An independent rebuild arrived during the audit; earlier short-bank findings were rechecked against the newer implementation. Successful deployment does not prove application correctness.

## Coverage and evidence

- Browser workflows: catalog search, lessons, language switching, notes and reload, reading completion, flashcards and ratings, mini quiz feedback, CBT configuration, answer/clear/review/palette controls, submission, score review, favorites/bookmarks, profile history, roadmap, timer controls, typing, coach, AI text generation, AI vault saving and custom CBT launch, invalid login and recovery-link guarding.
- Latest HTTP sweep: 197 URLs from the available local export plus deployment assets/API paths; 176 returned 200 and 21 returned 404. The local export includes some routes absent from the current static-parameter list, so this is a route inventory comparison, not 21 independently reachable UI bugs. An SSC English link was also followed from the live roadmap and visibly produced a 404.
- Data checks: 140 configurations across 15 exam choices, four difficulty settings, both practice/PYQ modes, and 20 topic choices. These are structural/filter checks, not factual verification of every educational answer. The current bank contains 505 entries and 67 lesson records.
- Authentication regression tests: 6 passed. TypeScript check passed. ESLint failed with **61 errors and 114 warnings**.
- Mobile dashboard inspected at a 390 × 844 viewport override: no horizontal overflow in that view; viewport metadata permits zoom. This is not a full physical-device or cross-browser certification.
- No new production account was created. Real successful account login, confirmation delivery, Google authorization, password-change completion, cross-device sync and long timer expiry are not passed tests.

## Feature-by-feature results

| # | Feature | Result | What was verified / remaining issue |
|---|---|---|---|
| 1 | Landing page and main navigation | Pass, basic scope | Public entry and dashboard/catalog/auth links open. Route availability is recorded separately. |
| 2 | Dashboard | Partial | Renders and links work. Completed lesson was still followed by 0 topics; the store completion list is separate from lesson read flags. “Cards” derives from XP/10 and “average score” uses last-attempt accuracy rather than an average of attempts. |
| 3 | Exam search | Pass | CTET finds Paper 1 and Paper 2; a nonexistent term shows the empty-result message. |
| 4 | State and syllabus catalogs | Partial | Main route templates load. Listing an exam does not guarantee a complete, correctly calibrated question bank. |
| 5 | Lesson reading | Pass, sampled | Modern India content, references and tabs render. All lessons were not individually fact-checked. |
| 6 | Hindi/Punjabi/English | Partial | Language controls switch sampled content; lesson language returns to Hindi on reload. English retains some Hindi labels and generated option text. |
| 7 | Mark lesson as read | Partial | Read flag survives reload. The handler only saves the read flag; the advertised +50 XP is not awarded and dashboard completion is not updated. |
| 8 | Personal lesson notes | Pass, local scope | Saved a distinct audit note and verified it after reload. Unsaved editor text and cross-device/account synchronization are not certified. |
| 9 | Lesson flashcards | Partial | Flip and next controls work. After rating a revealed card, the next card remains revealed rather than resetting to its question side. |
| 10 | Lesson spaced repetition | Pass, local persistence scope | New rebuild stores a rating; after reload the card's interval choices changed. Earlier implementation only advanced cards; that finding is superseded. Scheduling quality and future due-date delivery are not fully validated. |
| 11 | Lesson mini mock | Pass, sampled | Correct selection disables options and displays the correct-answer explanation. |
| 12 | Official PDF resources | Partial | Four sampled URLs returned PDF/200. PSEB returned 403 to the HTTP checker; that could be provider access blocking, so it is not labeled a universal browser failure. Link relevance and every resource were not certified. |
| 13 | Curated lesson videos | Unverified / problem observed | Sample Modern India iframe stayed blank in the test browser. Successful playback and the claimed provider/title were not verified. |
| 14 | Lesson print / save PDF | Not completed | New rebuild exposes browser printing. Print-dialog completion and PDF export layout were not tested. |
| 15 | CBT configurator | Partial | Exam, difficulty, count and PYQ controls launch a test. Earlier CTET 10-question selection loaded one question; newer rebuild fills sets, but now introduces filter violations. |
| 16 | Topic filtering | Fail | Current Modern India 50-question data includes Fundamental Rights and Punjab History. Science includes history/polity top-ups. Canonical topic aliases alone are not the issue; unrelated subject top-ups are. |
| 17 | Difficulty filtering | Fail | 30 sampled exam configurations returned questions outside the selected tier. Live “Modern India (Hard)” opened with a “Mid” question. |
| 18 | Exam-specific question filtering | Fail, source evidence | The engine prioritizes exam matches but retains other exams in the pool. Selection is not strict syllabus isolation. |
| 19 | PYQ/archive provenance | Partial / unverified | Generated practice is visibly labeled, but generated items also display artificial archive years. The filter can silently retain the original pool when too few PYQs exist. No official-paper provenance audit was completed. |
| 20 | CBT answer, clear, review and palette | Pass, sampled | Selected answer, marked review, cleared/reselected another answer, navigated via palette and submitted. Resume after refresh is not implemented/verified. |
| 21 | CBT scoring | Pass, sampled | One correct, one wrong, eight skipped produced 0.75/10, 7.5% and 50% attempted accuracy. CTET wrong answer produced zero net marks when negative marking was zero. |
| 22 | CBT timeout / background timing | Not completed | Countdown visibly runs. Full timed expiry, device sleep, background throttling and timer resume were not exercised. |
| 23 | Result penalty labels | Fail | CTET scored zero penalty but displayed −0.25 in result breakdown and question status. Current source still hardcodes −0.25. |
| 24 | Result difficulty breakdown | Fail | Earlier one-question CTET result claimed an additional medium question through a fallback count. Current breakdown uses fallback rather than exact zero counts. |
| 25 | Result favorites/bookmarks/notes | Pass, local scope | Save controls update counters; result reload preserved favorite/bookmark and saved note; profile displayed saved explanation. |
| 26 | Result history / retake / flip review | Partial | Profile shows an attempt. Retake and flip links omit original exam, difficulty, count and archive settings; “Review Entire 50 Qs” appeared for a 10-question attempt. Only the last result is stored as the detailed result payload. |
| 27 | Rank and category benchmark | Simulation only | Results disclose a fictional candidate pool. Dashboard/share wording still presents predicted state/category merit. This is not real ranking or selection prediction. |
| 28 | Profile and study vault | Partial | Local saved notes/history render. Local data is not scoped/synchronized to the actual Supabase account; legacy/demo profile values can remain while real authentication says guest. |
| 29 | Roadmap checklist | Pass, sampled local scope | Task check persisted through reload; progress percentage changed; daily challenge explanation displayed. |
| 30 | Roadmap day/track navigation | Fail / partial | Latest SSC Day 14 selection shows a Day 3 plan. Live SSC English drill opens a 404. Several linked drill IDs are absent from generated static routes. |
| 31 | Virtual library | Pass, simulation scope | Desk selection and 25/45/60-minute preset controls work. No shared real-time presence; UI discloses this. |
| 32 | Library timer | Pass, controls only | Started timer, observed countdown, paused and reset to 45:00. Full completion/hours accounting was not timed end to end. |
| 33 | Library ambience | Fail, source evidence | Button changes a boolean/icon; there is no audio source or playback implementation. |
| 34 | Typing practice | Partial | English/Punjabi selection, one-minute preset, input, elapsed WPM/accuracy and reset work. Default ten-minute setting exists. Full official-duration qualification, physical Punjabi layouts and all benchmark claims were not validated. |
| 35 | Exam-day coach | Partial | Accordion and breathing start work. Strategy text incorrectly says four correct answers recover one −0.25 wrong answer: one +1 answer offsets four −0.25 wrong answers. Full five-cycle completion was not observed. |
| 36 | AI text practice | Pass as local fallback; misleading provider claim | Public preset generated five practice items; local quota decremented, save-to-vault succeeded and custom five-question CBT opened. GitHub Pages has no running AI endpoint; fallback is procedural text extraction, not confirmed Gemini inference. |
| 37 | AI photo/PDF extraction | Fail, implementation evidence; upload not completed | Static build excludes API handlers. When upload endpoint fails, UI generates from the filename and generic filler instead of file contents. The browser chooser could not be completed in this audit, so no successful OCR/upload claim is made. |
| 38 | Supabase invalid login | Pass | Fictional invalid credentials return “Invalid login credentials”; they do not create a login session. |
| 39 | Confirmation / recovery email | Blocked | Custom SMTP remains disabled in the signed-in Supabase project. Public email delivery and successful confirmation/recovery round trips are not verified. |
| 40 | Password-reset guard | Pass | Direct visit without recovery link displays “Open the link from your confirmation or recovery email”; no password form is offered. |
| 41 | Google login | Unavailable | Button disabled; provider was not configured. This is not a successful Google test. |
| 42 | Admin / publishing | Fail as production security | Gate page publicly displays admin/reviewer/educator passkeys. Authorization is client-side and role state is local. This is not secure server-enforced publishing. No content was published by this audit. |
| 43 | Cloud progress and account isolation | Not implemented | Notes, attempts, bookmarks and progress stay in shared browser storage. Supabase Auth alone does not add database sync or RLS enforcement. |
| 44 | PWA install and offline | Fail | Live manifest points to `/manifest.json`; service worker registers `/sw.js`. Both root URLs return 404 on the project Pages host. Manifest start/scope/icons and worker precache paths also omit `/examsathi/`. Install button only gives an instruction alert. |
| 45 | About, privacy, terms, contact | Pass for page access only | Pages serve successfully. Listed support mailboxes, response-time promises and policy accuracy are not verified by page availability. No email was sent. |
| 46 | WhatsApp share | Partial | Encoded destinations contain live portal URL. No message was sent. Some marketing claims still overstate archive/rank readiness. |
| 47 | Sitemap, robots and 404 | Partial | Files serve and styled 404 works. Sitemap completeness/indexing were not certified; successful 404 styling does not repair broken drill links. |
| 48 | Mobile and accessibility | Partial | Sample dashboard has no horizontal overflow and zoom is allowed. Several icon-only task buttons have no useful accessible label. Full screen-reader, keyboard-only and device matrix testing remains. |
| 49 | Build / automated checks | Partial | Latest GitHub deployment succeeded; TypeScript and six auth tests pass. Lint fails. Existing claims of “79/79 E2E tests” were not independently rerun here and do not cover the failures found above. |

## Fix in this order

1. **Repair backend and access before public launch.** Replace public admin passkeys with server-enforced Supabase roles/RLS. Configure verified SMTP and complete real signup, confirmation, login, recovery and logout tests. Keep cloud-sync wording accurate until database and per-user isolation are implemented.
2. **Restore strict question selection.** Filter topic, exam, difficulty and PYQ mode together; show the available count when short instead of filling with unrelated material. Resolve duplicate IDs (`q-pol-1`, `q-eco-1`) and remove invented years from generated practice. Add assertions for filter invariants.
3. **Repair results and continuation.** Persist scoring config with each attempt, use it for every penalty label/breakdown, and preserve the original settings and question set in retake/review links.
4. **Repair missing drills and roadmap mapping.** Generate routes for actual advertised SSC/CDP/etc. IDs or remove unsupported links. Match selected day to displayed day and retain checklist state per track/day.
5. **Make progress consistent.** Update read completion, XP, dashboard, profile and SRS from one model; namespace local fallback data per account. Reset a flashcard to the question side on advancing.
6. **Deploy real AI APIs or label the fallback honestly.** Use a dynamic backend/serverless host for Gemini/OCR. Do not claim file extraction when only the filename is processed. Show provider/fallback status and enforce quota server-side if using a paid API.
7. **Repair PWA and optional utilities.** Apply Pages base path to manifest, icons, worker registration, precache and offline fallback. Implement ambience or remove its toggle. Correct coach arithmetic and verify typing criteria against each official notice.
8. **Run final release verification.** Fix lint, repeat the identified failing cases, perform two-user account isolation and full email flows, test timer expiry and printing, then rerun on real mobile/browser combinations. Do not mark the whole project complete based only on HTTP 200 or deployment success.

## Evidence files

- `latest-route-checks.json`: current HTTP sweep and missing paths.
- `data-checks.json`: bank counts, returned topic IDs, difficulty violations, duplicate IDs and scoring sample.
- `resource-checks.json`: five sampled PDF endpoints.
- `latest-hard-filter-failure.jpg`: newest deployed Hard test displaying a Mid question.
- `mobile-dashboard.jpg`: mobile dashboard view.
- `cbt-results.jpg`: completed mixed-answer test and saved result controls.
- `ctet-result-inconsistency.jpg`: earlier zero-penalty scoring with inconsistent penalty labels; latest source still contains these labels.

Audit added only local evidence/report files. No new application fixes or new deployment were made as part of this verification pass. Distinct local audit notes, mock attempts, a card rating and one AI vault set were created through the normal UI during testing.

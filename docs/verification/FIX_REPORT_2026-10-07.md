# ExamSathi release hardening — 7 October 2026

This report distinguishes implemented fixes, tested behaviour and remaining work. It does not certify every question, syllabus claim or external service.

## Implemented

| Area | Change |
| --- | --- |
| Practice filters | Topic, exam, difficulty and archive filters stay strict; short or empty sets never silently load unrelated content. |
| Question data | Duplicate IDs removed. Generated questions have no fabricated exam year. Implausible statement templates removed. |
| Question volume | Computed arithmetic variants support 10/20/50-question sets. Other topics show actual availability rather than promise 50 questions. |
| Results | Per-attempt records and URLs, correct zero/negative scores, exam-specific penalty labels, exact difficulty counts. |
| Review and retake | Original questions are preserved for review. Retake links preserve difficulty, exam and requested size. |
| Attempt recovery | Questions, answers, flags and current position survive reload. Countdown uses an absolute deadline to handle background tabs. |
| Accounts | Guest and authenticated users have separate browser vaults. Legacy device data is migrated only into the guest vault. |
| Lessons | Unknown topics display a coverage status instead of Modern India. Reading awards 50 XP once; completion and language persist. Flashcards reset their revealed face when advancing. |
| Syllabus | Dedicated exam → subject → chapter → topic → subtopic browser with coverage counts and current official notification links. Duplicate exam IDs merge their topic trees. |
| Routes | All catalogue, lesson and question-topic lesson routes are generated, including unavailable-material status pages. Mock routes cover catalogue and lesson topics. |
| Study material | Six focused foundation modules: percentages, ratio, SSC quantitative map, reasoning, child development and general science. Shared textbook and official video-channel links included. |
| Documents | Browser text extraction for text-based PDF, DOCX, TXT and Markdown; size/page/text limits; extracted text is reviewed before generation. No filename-based or simulated OCR questions. |
| Notes practice | Local cloze recall questions use actual source sentences and distinct alternatives; short source material yields fewer questions with an explicit explanation. |
| Cloud AI | Bounded requests/counts, verified Supabase identity, durable quota RPC, model-output schema validation, duplicate-option checks, literal supporting source excerpts, safe error messages. Requires dynamic hosting and Gemini configuration. |
| Supabase quota | Additive migration applied to existing project. RLS enabled; anonymous and authenticated users cannot directly read quota table; only authenticated users can execute the own-account quota function. Verified in dashboard SQL results. |
| Admin | Public passkeys removed. Roles come from verified account app metadata. Local drafts are explicitly described as local; no backend publishing claim. |
| Authentication | API routes no longer simulate successful login/registration when Supabase is unavailable. Service-role code removed from shared browser module. |
| Timers and typing | Wall-time countdown, paste/drop blocked in typing practice, actual early-finish elapsed time, consistent practice target labels. |
| PWA | Correct Pages subpath, actual icon assets, relative manifest scope/start URL, public offline cache, auth/API cache exclusions, real install prompt when supported. |
| Metrics | Dashboard counts stored reviewed cards rather than XP-derived estimates. Fictional rank/cohort outputs disabled. |
| Contact | Unverified mailboxes and guaranteed turnaround replaced with repository issue links. |
| CI | Core regression tests run before Pages build; Node 22; bundled PDF worker copied during build. |

## Validation

- `npm test`: 15 passing tests covering auth, filters, IDs, arithmetic answers, account isolation, zero/negative scoring, and source-grounded recall/model validation.
- `npx tsc --noEmit`: passed.
- `npm run lint`: zero errors; existing unused-import and dependency warnings remain. Client hydration exceptions are documented at the individual calls; minified vendor worker is excluded from source lint.
- Static production build: passed. Dynamic production build also passed before the final UI wording/route additions; cloud generation is not live-tested without a provider key and deployed dynamic host.
- Browser: actual TXT/PDF/DOCX uploads and extracted-text review; syllabus page; 50-question arithmetic set with strict easy filter; four Gandhi-source recall questions; launch into CBT; saved answer and continuing timer after reload; mixed-answer result with zero penalty; review/retake URLs.
- Supabase: migration success, RLS and grants verified (`true / false / false / false / true` for RLS, anonymous table read, signed-in table read, anonymous function execution, signed-in function execution).
- Earlier audit screenshots/data are retained in this directory for traceability; `data-checks.json` is regenerated for the current code.

## Still incomplete / external requirements

1. **Complete academic coverage:** All supported topic routes exist, but not all topics have reviewed full lessons or 50 distinct questions. Some foundation notes retain English until translations are reviewed. The coverage browser explicitly shows pending material. All-India exam coverage is not claimed.
2. **Past-paper provenance:** Legacy year/exam tags need original paper and answer-key verification. Generated practice is not a PYQ; no generated question receives a fabricated year. Archive descriptions mark provenance as under review.
3. **AI deployment:** GitHub Pages cannot execute API routes. Deploy the dynamic Next application and configure a server-only Gemini key. The quota database is ready; cloud AI remains unavailable until this setup is complete.
4. **Scanned uploads:** Photos/scanned PDFs require OCR; unsupported input produces an error. Text-based files are supported. Browser file-chooser and text extraction passed disposable TXT, PDF and DOCX fixtures. Complex layouts, handwriting and scanned PDFs are not covered by these checks.
5. **SMTP / Google login:** Existing Supabase custom SMTP is not configured; sender domain/provider and Google OAuth credentials remain external setup. Real confirmation/reset-email delivery is unverified.
6. **Cloud progress sync:** Study progress is isolated per account on this browser; it is not yet synced across devices.
7. **Admin publishing:** Secure server publishing and review workflow are not implemented; the page is a role-gated local draft workspace.
8. **Dependencies:** npm audit reports three moderate production findings in the Mammoth CLI dependency chain and five high development-tool findings. Do not use an automatic major downgrade. Evaluate patched releases/alternative extraction before claiming a clean security audit.
9. **Accessibility / devices:** Full screen-reader audit, physical Punjabi keyboard validation, mobile-device testing and a complete offline-device install cycle remain unverified.

## Backend setup

## Deployment verification

Code release `adf842b` was pushed to `main` without rewriting remote history. [GitHub Pages deployment run](https://github.com/satdevkumar021-glitch/examsathi/actions/runs/37594913396) completed successfully. Live `/syllabus/`, `/pdf.worker.min.mjs`, and `/manifest.json` returned HTTP 200. The live syllabus hierarchy was checked in the browser; proof is saved in `live-syllabus-deployed.png`. Supabase access verification is saved in `supabase-quota-applied.png`.

## Dynamic backend setup

For a single-origin dynamic Next deployment use `npm run build`, leave `STATIC_EXPORT` unset, set `NEXT_PUBLIC_BASE_PATH` to an empty string, and configure public Supabase URL/key plus server-only `GEMINI_API_KEY`. Never publish a service-role or Gemini secret as `NEXT_PUBLIC_*`. Keep Supabase auth redirect allowlists aligned with the deployed origin. The quota migration in `supabase/migrations/202610070001_ai_quota.sql` has already been applied to project `nrzuihzvgnmpikwzbqam`.

Official resource entry points used: [SSC](https://ssc.gov.in/), [CTET](https://ctet.nic.in/), [NCERT textbooks](https://ncert.nic.in/textbook.php), [CIET official video channel reference](https://www.ciet.ncert.gov.in/activity/elrn?lang=en). These are reference links, not proof that every historical catalogue value is current.

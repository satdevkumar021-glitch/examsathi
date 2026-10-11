# ExamSathi product-vision gap audit — 10 October 2026

## Scope and evidence

This is a targeted live-browser and source review supporting the master AI prompt. It is **not a completed end-to-end audit of every feature**. No production user records were edited, no test attempts were submitted, no authentication credentials were changed and no code fixes/deployments were performed in this audit.

Live routes inspected: `/coverage/`, `/library/`, the library's `/mock-test/topic-child-development-pedagogy/?count=25` link, and `/typing-practice/`. Source review: route inventory, coverage report/data, library, typing, roadmap, exam coach, SRS module, topic resources, document-AI generation endpoint and existing E2E assertions. Local `npm test` executed: **43 passed, zero failed**. These tests do not prove all live integrations or content correctness.

The coverage page reports an audit dated **9 October 2026**, confirmed visible on the live site during this session. Counts below are that snapshot, not a freshly recomputed official-syllabus certification. The live service initially showed Render's wake-up page and subsequently loaded; cold-start delay is an observed availability/experience limitation, not a measured uptime statistic.

## Priority exam baseline

| Track | Registered topic entries | Missing lessons | Authored questions | Computed variants | Distinct practice pool | Recorded reviewed questions |
|---|---:|---:|---:|---:|---:|---:|
| ETT archival Paper B | 100 | 99 | 20 | 0 | 20 | 0 |
| Punjab Clerk | 4 | 0 | 58 | 152 | 210 | 0 |
| Punjab Master Cadre aggregate | 21 | 0 | 628 | 217 | 845 | 0 |
| REET Level 1 | 3 | 0 | 119 | 2 | 121 | 0 |
| REET Level 2 | 4 | 0 | 170 | 4 | 174 | 0 |

Across 31 registered tracks, the snapshot reports 99 missing lesson entries and 136 topic entries below 50 questions; none reaches 1,000 recorded reviewed questions. Zero missing lessons in a small preparation outline does **not** mean all official topics have been covered. ETT's larger denominator reflects its recent archival mapping, not worse relative authoring alone. No current track is certified against the complete current official syllabus. All pools are far below the requested 10,000-per-exam target; counting variants as new concepts would misrepresent progress.

## Findings and acceptance criteria

| ID / priority | Evidence and reproduction | Learner impact | Fix and acceptance criterion |
|---|---|---|---|
| C01 / P1 content gap | Live coverage plus `SYLLABUS_COVERAGE_2026-10-09.md`: all tracks incomplete; ETT 99 pending entries. | Learners cannot rely on the app to finish a full exam syllabus. | Version each official syllabus; show mapping and content percentages independently; complete one topic package at a time. Every official requirement must have source/page mapping and explicit readiness. |
| C02 / P1 content gap | Baseline table: recorded reviewed question count is zero in each priority track. | Availability is not independently checked correctness; large-bank/PYQ claims remain unsupported. | Establish genuine reviewer/provenance records and year-by-year PYQ inventory. Only reviewed items count toward the reviewed target. Never fabricate review records. |
| B01 / P1 confirmed live | Open `/library/`: default topic says “ETT Child Psychology”; click “25 Qs Speed Drill”. Result is “No questions match these filters”. Source library TOPIC_OPTIONS is fixed and links omit `exam=`. | Library promises topic practice that is unavailable in the current learner context; ETT labeling conflicts with Paper B mapping. | Populate library topics from selected exam/version, carry exam in URLs, show actual eligible count and disable unavailable drills. Verify the journey for ETT and Clerk without changing context. |
| B02 / P2 confirmed live | `/typing-practice/`: selector says “Exam Level (300+ words)” while stats show “206 WORDS”. | Learner cannot judge practice length or simulation fidelity. | Calculate labels from passage data or supply the advertised length; assert displayed count matches the selected passage in both languages. |
| B03 / P1 provenance issue | Typing page says official exams “strictly” use one layout, excludes others broadly, and labels preset “10m Official”; no notification-specific source appears in inspected content. | A practice tool can be mistaken for an authoritative recruitment instruction. Actual validity of each claim has not been established here. | Verify exact recruitment/year instructions and cite them, or label presets and layout hints as practice. Do not extrapolate a rule to all government exams. |
| B04 / P2 confirmed live | Global Punjabi selection remains checked while library headings, controls and coverage page remain primarily English. | Punjabi-speaking learners lose language continuity outside lessons. | Translate complete workflows and empty/error states; preserve selected language across routes. Test all three language editions, not just navigation labels. |
| B05 / P2 source-confirmed | `roadmap/page.tsx` initializes one aggregate Master Cadre track and uses a fixed five-track list and 60-day rotation; subtopics render English. | It cannot yet represent a complete personalized subject/date/time-based plan for all tracks. | Bind plan to exact exam version and chosen subject; budget real available time, dependencies, revisions and pending material. Verify REET levels and Master Cadre subject selections separately. |
| B06 / P2 test-quality issue | `e2e/audit.spec.ts` includes conditional checks (`if count > 0`) and console logging for essential controls, auth presence and symptoms. Suite inspected, **not executed** here. | A named “comprehensive” suite can pass without demonstrating essential behavior. | Required controls need unconditional assertions; auth requires transactions in test accounts; failures need reproductions. Execute the revised suite and disclose skipped/unavailable cases. |
| R01 / P2 availability | Render wake-up interstitial observed before app loads. | Learner initially sees provider text rather than study content. | Measure cold/warm load separately; communicate startup gracefully where controllable and evaluate hosting against an explicit budget. HTTP 200 alone must not pass an availability check. |
| R02 / P2 resource gap | Coverage: priority tracks have very sparse video coverage; all ETT entries except reflection lack PDF/video entries. `topic-resources.ts` contains chapter links and one video mapping, not a complete resource catalogue. | Learners cannot consistently find topic-specific supplementary material. | Add source-verified resource records with language, chapter/page/timestamp, rights, availability and embed/watch fallback. Link existence alone does not prove relevance. |

Source-review concern requiring browser reproduction: typing finishes when input length reaches target length, regardless of content (`handleStartTyping`). Determine whether this is intended practice completion and whether scoring correctly reports errors; do not call it an official simulation without verifying exam rules. Source also compares code units; Punjabi grapheme fairness needs dedicated numeric test cases. These are **untested risks**, not confirmed scoring failures.

## Feature inventory against the requested vision

| Feature | Evidence-based status | Remaining deep tests or product work |
|---|---|---|
| Exam catalogue / syllabus | Partial; live coverage admits incompleteness | Official version reconciliation, separate Master Cadre subjects, duplicate-looking tracks, full subtopic denominator |
| Lessons / summaries / highlights | Implemented for some topics; ETT overwhelmingly pending | Academic depth, answer correctness, translation completeness, common misconceptions |
| Flip cards / spaced revision | Modules exist; SRS source inspected | Actual recall scheduling, keyboard use, due dates, question-side leakage, repeated-card accounting |
| Topic mini mocks | Engine/tests exist; library empty flow reproduced | Every topic/count/filter, insufficiency, exam context and results association |
| Full mocks / next sets / PYQs | Prior scope logic covered by core tests; not fully re-executed live here | Disjoint sets, exposure/reset policy, official quotas, source-year inventory, independent scoring |
| Resource table / videos | Partial static mappings | Full searchable table, genuine topic fit, Hindi/Punjabi sources, embed fallback and broken links |
| Personal notes / backup | Storage/auth modules present; not transacted here | Autosave, recovery, export, conflict handling, account isolation and cross-device expectations |
| Document-to-mock AI / OCR | Server route and validation exist; source reviewed only | File/extraction QA, semantic grounding, page citations, consent, quotas, failures, private versus public publication |
| Login / logout / recovery | Existing auth tests included in 43 passing tests | Real email delivery, expiry, OAuth redirect, two-account isolation and logout on live infrastructure |
| Library / focus timer | Implemented; live interface inspected | Complete timer lifecycle, reload, background/sleep, duplicate hours, relevant topic selection |
| Exam-day calm / strategy | Basic breathing and checklist source exists | Optional no-hold alternative, accessibility, timing and localized usability; no medical claims |
| Typing | Implemented; live label/provenance problems found | Exact exam rules, keyboard mapping, graphemes, errors, paste, duration and history |
| Physical preparation | No dedicated route/module found in inspected inventory | Treat as proposed: source-specific stage standards, appropriate resources, private logs and carefully researched guidance |
| Personalized roadmap | Basic 60-day rotation exists | Exam/date/time/subject-aware planning, catch-up and dependency scheduling |
| Admin / contributions | Admin route exists; no security certification here | Server authorization, review workflow, rights, moderation and audit history |
| Offline / accessibility / performance | Existing modules/route presence only | Service-worker upgrade, real offline journey, keyboard/screen reader, contrast, mobile and slow-network cases |

## Recommended execution order

1. Repair exam context consistently in library, roadmap, lesson and mock links; remove unsupported official claims and false size labels. Add reproduction-based checks.
2. Verify priority official syllabus versions and amendments, with an explicit archival/current distinction. Separate Master Cadre subjects and REET levels.
3. Finish **one ETT topic package** end to end: genuine trilingual lesson, examples, summary, cards, source support, reviewed question coverage and mini-mock review. Repeat the same quality standard across the map.
4. Establish question editorial review, duplicate/equivalence management and provenance before scaling to thousands. Track unique questions and unique concepts separately.
5. Build the searchable resource table, mistake notebook and topic-aware revision queue, then strengthen private document AI and notes reliability.
6. Personalize planning/focus; verify typing by recruitment; introduce physical-stage support as a separately researched module.

Useful additional ideas: “continue where I stopped”; a transparent coverage dashboard for the selected exam; an error-report button on each question; a personal mistake notebook; a short diagnostic that suggests topics without claiming selection probability; downloadable low-bandwidth topic packs; and optional private accountability sharing. These are proposed capabilities, not implemented or scientifically validated outcomes in this audit.

## Audit limits and next test run

The live coverage snapshot and concrete library/typing issues above are verified. Account creation/email recovery, cloud-AI generation, complete mock submissions, note persistence across devices, permission isolation, timed focus completion, resource playback and accessibility/performance benchmarks were **not executed in this session**. They require a dedicated staged E2E run with synthetic fixtures and test accounts. Existing automated tests passing does not close them.

Use `docs/EXAMSATHI_MASTER_AI_PROMPT.md` for the complete audit-and-build specification, including evidence format, content standards, test cases, prioritization and release gates. This report and prompt are documentation only; application behavior is unchanged.

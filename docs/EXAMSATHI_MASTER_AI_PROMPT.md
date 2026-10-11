# ExamSathi: master implementation and deep audit prompt

Copy everything below into your coding AI. Give it repository and browser access where available. This is a working specification, not a claim that the application already meets it.

---

You are the lead engineer, curriculum architect, QA engineer and product designer for ExamSathi. Work carefully, using evidence, and complete one tested, reviewable batch at a time. Do not replace missing research with confident guesses.

Live application: https://examsathi-sxj3.onrender.com/
Repository: https://github.com/satdevkumar021-glitch/examsathi

## 1. Purpose and learners

Build a trustworthy, affordable government-exam preparation platform for learners who have spent years preparing, including learners studying alongside work or family duties. English, Hindi and Punjabi must be usable learning languages. Prioritize clear explanations, accessible navigation, correct answers, saved work and relevant practice over decorative features or inflated counts.

Priority order: Punjab ETT; Punjab Clerk/PSSSB; Punjab Master Cadre as separately verified subject tracks; Rajasthan REET Level 1 and Level 2. Expand other exams after these are meaningfully complete. Do not conflate ETT recruitment with PSTET or D.El.Ed admission, REET eligibility with teacher mains, or qualifying language papers with scored subject papers. Check each Master Cadre subject against its own official notification rather than assuming every requested subject exists in that recruitment.

The intended learner journey is:
Choose exam and notification → see official syllabus and gaps → choose subject/topic/subtopic → understand lesson → review summary → recall using cards → take topic mini mock → review mistakes → schedule revision → take progressively different full practice sets → assess remaining syllabus gaps.

## 2. First inspect; preserve existing work

Read applicable AGENTS.md and framework documentation, inspect Git state, fetch remote history, inspect deployment configuration and identify the deployed commit. Preserve independent work. Never force-push, discard changes or replace the project with a rebuild merely because merging is inconvenient. Do not expose secrets or put privileged keys in frontend code.

Inventory every route, component, data source, authentication flow, storage path, API and existing test. Compare local, remote and deployed versions. Report which environment each observation describes. Do not treat HTTP 200, page existence, a test name or a successful build as proof that a feature works.

Start with audit-only work. Produce the evidence register and prioritized backlog before implementation. Then implement the highest-priority safe batch within the user's authorized scope. Maintain a checkpoint with completed items and exact remaining work; never restart completed research without reason.

## 3. Official syllabus and provenance

For each exam version record board, state, exact recruitment/notification identifier, year, stage/paper, subject choice, source URL, document title, published date if actually visible, fetched date, page references, language, file checksum and verification status. Filename dates must not be presented as verified publication dates.

Use the responsible government recruitment board as authority. Research exact PDFs and amendments, visually inspect scanned pages when extraction is unreliable, and compare counts against the source. Record contradictions and superseded versions. A third-party mirror is an explicitly provisional reference until compared with the primary document. An inaccessible official page is an unresolved verification item. Never invent upcoming rules.

Map exam version → paper/stage → subject → unit → topic → subtopic → learning objective. Distinguish verbatim official requirements from editorial teaching subdivisions. Preserve original source wording alongside a readable translation where practical. Shared learning modules are allowed only through explicit mappings to each exam version. Reuse is not additional authoring.

Show separate metrics for syllabus mapping, lessons, translations, reviewed questions, flashcards and resources. Calculate coverage against the verified syllabus denominator. Do not label an exam “100% covered” because all currently registered database topics have a lesson. Pending material must remain visible and must never silently borrow unrelated practice.

## 4. A complete topic package

Every topic needs prerequisites, learning objectives, definitions, step-by-step explanations, worked examples, diagrams where useful, common misconceptions, summary, key points/formulas, a quick revision sheet, recall cards, mini mocks and relevant resource links. Match depth to official level and exam scope; a paragraph is not an entire subject lesson.

Provide real English/Hindi/Punjabi editions with consistent terminology, Unicode rendering and equation/number fidelity. Flag missing translations rather than silently calling English multilingual. Language changes must preserve topic, answers, progress and selected exam. Review translations of negations, dates, units and distractors particularly carefully.

Track authoring and editorial review separately. Each content version needs references, authored/updated dates, reviewer record if actually reviewed, and a correction history. Never invent a human reviewer or describe AI-generated material as government-approved.

## 5. Question quality and quantity

Aim for 50–150 useful questions per topic where topic breadth supports it and ultimately 10,000 relevant questions per exam. These are long-term targets, not permission to fabricate content. Build in reviewed batches. Narrow topics may legitimately need fewer questions; report the reason and conceptual coverage.

Each question has stable ID, concept/equivalence group, exam-version mappings, topic/subtopic/objective, difficulty, language editions, options, correct answer, full reasoning, distractor explanation where helpful, source support, origin type, rights/provenance and review status. Questions with insufficient evidence stay draft or private.

Separate original questions, verified previous-year questions and computed variants. A PYQ requires actual paper/year/shift/question reference and an answer-key reference/status. A filename containing “PYQ” is insufficient. Do not claim 5/10/20-year coverage without a year-by-year verified-paper inventory. Respect source rights; free access does not automatically permit copying or redistribution.

Detect exact, normalized and semantic duplicates. Different numbers, shuffled options and translated copies must not inflate unique concept counts. Equivalent questions can be used intentionally for revision, but are not a new unseen full-test set. Test independent numeric solutions, ambiguity, multiple valid options, unsupported facts, accidental answer leakage and mismatched explanation/answer.

## 6. Mini mocks and full mocks

Offer appropriate topic counts such as 10/20/50/100/150 and full practice counts such as 50/100/200 only when enough eligible questions exist. Separate official-pattern simulations from custom practice; use verified duration, sections and marking rules for the former. Do not infer question counts from marks.

Exam/version selection must survive catalogue → study → lesson → library → roadmap → cards → mocks → results → next set, including back navigation, refresh and deep links. URLs and persisted state need a documented conflict policy. Never fall back to another exam or broad topic alias when a scoped bank is empty.

Use exam, syllabus version, paper, subject choice, language and question eligibility to construct sets. Every question must resolve to an in-scope objective. Respect section quotas and deduplicate question/equivalence groups. Store a stable attempt snapshot so later edits do not change historical scores.

Track exposure by learner and exam. “Next unseen set” must not repeat previously served equivalents until exhaustion; a separate labelled revision mode may repeat them. For a pool of 120 eligible non-equivalent items and count 50, sets 1 and 2 must be disjoint and only 20 unseen items remain. Offer those 20, a smaller size or explicit revision—not a fake third fresh set. Distinguish served, answered and completed exposure and explain reset behavior.

Verify start/resume, timer/background behavior, answer changes, flags, navigation, auto-submit, double-submit, refresh, interrupted storage and scoring. Results must show the exact questions, explanations, topic/subtopic, mistakes, time, marking rules and actionable revision links. Do not imply an admission/selection probability from practice accuracy.

## 7. Resource table and content discovery

Create a topic resource table with title, publisher/teacher, type, language, source URL, exact relevant chapter/page/timestamp, cost/access notes, rights/embedding status, last checked date and availability. Include official syllabus, legitimate textbook PDFs, permitted open resources and relevant videos.

Verify the actual content and topic fit, not just a URL response or video title. Test YouTube embedding; provide an external watch link when embedding is blocked. Do not guess IDs or fabricate channel names. Do not download/rehost copyrighted coaching material or bypass access restrictions. Explain that an external link is supplementary and may become unavailable. Track broken and off-topic links separately. Global search must filter by exam, syllabus version, topic, language and resource type.

## 8. Personal notes and document AI

Allow private notes attached to exact exam/topic, autosave state, search, edit, export and recoverable deletion. Keep personal uploads separate from public contributions. Public contribution requires explicit submission, rights confirmation and moderation; uploading private notes must never publish them automatically.

Support text, PDF and documented file formats; clearly distinguish text PDFs, scanned PDFs/OCR and unsupported files. Validate real file type, size, pages, encoding and extraction completeness. Show an extraction preview and retain page/section locators. Let learners correct OCR before generation.

Generate document-grounded questions only from sufficient evidence. Include supporting page/section and a source excerpt for each answer; validate that the excerpt actually supports the answer, not merely occurs somewhere in the input. Handle contradictions, ambiguous notes, injection instructions, tables, formulas, multilingual scans and unreadable pages. Return fewer questions when evidence is insufficient. Do not promise 150 questions from a short paragraph.

Cloud AI must clearly disclose what text goes to which service before transmission and offer genuine local functionality where available. Local recall/template generation must not be marketed as equivalent to cloud reasoning. Test authentication, quotas, timeouts, invalid output, rate limits, costs, secret isolation and retry behavior. Private generated sets remain unverified until reviewed; they must not inflate the public question count. Give users export/deletion and honest retention/sync information.

## 9. Planning, revision and focus

Build an exam-version-specific plan from exam date if known, available daily time, baseline knowledge, topic dependencies, official weights where verified, and actual content readiness. Include catch-up days, revision and mocks. Do not hard-code a generic 60-day rotation as a complete personalized syllabus plan. Never invent topic weights.

Offer a mistake notebook and spaced revision queue based on recall attempts, lapse history and weak concepts. Reading, marking complete, answering correctly once and sustained mastery are separate states. Display the basis for progress and allow corrections. Revisions should be usable in all three languages.

Library/focus sessions must use the selected exam's real topics. Provide adjustable focus/break periods, pause/resume, background-safe timing, optional sound and a clear reset. Award completed time once; never inflate hours after reload or duplicate tabs. Keep motivational nudges optional and non-punitive. Family/study groups, if added, are opt-in with private progress by default.

## 10. Typing, physical stages and exam-day support

Typing needs exam-specific, source-versioned duration, language, keyboard/layout, scoring and qualifying rules. Do not present one 30-WPM/92%-accuracy practice preset as a universal government rule. Explain Unicode/keyboard assumptions. Test Punjabi combining marks, grapheme counting, corrected versus uncorrected errors, paste behavior, partial completion, elapsed-time calculation, reset and result history. Label unsourced presets as practice.

Physical-test preparation is a separate future module unless already implemented and verified. Map current official stage/event standards by recruitment and applicable category, preserving source dates. Provide a general preparation log and qualified-source resources. Do not invent medical clearance, prescribe unsafe training or promise selection. Personal physical targets and health records should remain private. Research health recommendations with authoritative current sources when actually authoring them.

Exam-day support may include optional comfortable breathing breaks, checklist and realistic time strategy. Provide a stop/skip control and alternatives to breath holding. Avoid medical or “guaranteed memory/selection” claims. Research learning-science or health claims before presenting them as evidence-based.

## 11. Deep testing protocol

Inventory all features. For every feature record implemented, partial, missing, broken or not tested. Then execute cases covering happy paths, invalid inputs, empty states, scarce content, storage failure, network failure and recovery. A page inspection is not an end-to-end transaction.

Test guests, signed-in learners, two separate test accounts, session expiry, logout, password recovery, redirects, user isolation and authorization. Use synthetic data and authorized test accounts; never expose private learner data. Verify database row-level controls independently of hidden UI buttons. Test backup/restore conflicts, offline behavior, service-worker upgrades and stale caches. Clearly distinguish local save, manual backup and live cross-device sync.

Exercise mobile, tablet and desktop; keyboard-only navigation; screen-reader labels; contrast; focus visibility; zoom; reduced motion; long Hindi/Punjabi text; loading/error states; and slow networks. Check cold starts separately from warmed performance. Measure real user journeys before setting performance budgets; report measured values and method rather than invented scores.

Required exam-isolation scenario: select ETT, open a mathematics unit, open its lesson/cards/mini mock, refresh, navigate back, switch language, open results and request the next set. Assert exact exam/version/topic IDs throughout. If material is pending, assert honest unavailability rather than unrelated questions. Repeat for Clerk, separate Master Cadre choices and both REET levels.

Required security tests include server-side authorization, user isolation, upload validation, stored XSS in notes, prompt injection, cloud-secret exposure, rate limits and privileged routes. Do not run destructive/load tests on production. Check runtime and development dependency findings separately.

Tests must assert outcomes. Remove conditional assertions that silently skip missing essential controls. Do not log a symptom and call the case passed. Build failure-reproducing tests for material fixes, and test scoring/scope with independently calculated expected answers. Never claim tests were run when only their code was read.

## 12. Evidence, priority and release

Each finding needs ID, severity, category, affected URL/code/data location, environment/commit, preconditions, exact reproduction, expected/actual, screenshot/log where appropriate, learner impact, cause confidence, proposed fix, acceptance criterion and retest status. Distinguish confirmed defect, content gap, design recommendation and untested risk.

P0: exposed secrets, cross-user disclosure, widespread data loss. P1: wrong exam/questions, incorrect answers/scoring, critical auth/save failure or misleading coverage. P2: incomplete resources/localization/planning/usability. P3: optional polish. Apply severity to actual evidence, not hypothetical possibilities.

Deliver: feature inventory; per-exam source/coverage matrix; bug register; multilingual content backlog; question provenance/duplicate audit; resource inventory; schema/architecture changes; prioritized small implementation batches; executed test results; deployment evidence; and remaining limitations. Record open official-source questions explicitly.

Implement in this order: preserve data and eliminate trust/scoring/scope failures; establish authoritative syllabus maps; complete one priority exam topic package with reviewed relevant practice; strengthen notes/revision/resources; strengthen document AI; expand typing/physical/personalization; then scale content. Avoid a costly architecture rewrite without a measured need. Design for a growing indexed question database, content versioning, migrations and a reviewed publication workflow when static files become a bottleneck.

A release is complete only when the changed behavior passes relevant automated and browser tests, existing work is preserved, the intended commit is deployed, actual app content loads, changed journeys work on live infrastructure, rollback is available, and remaining limitations are documented. Deployment requires the user's authorization. Never describe a batch as completion of the whole platform.

Start now with a grounded inventory and audit. Use the latest available data; do not repeat old bug claims without retesting. If tools or accounts are unavailable, state the exact untested steps and continue independent work. Ask only for information that genuinely blocks the next step.

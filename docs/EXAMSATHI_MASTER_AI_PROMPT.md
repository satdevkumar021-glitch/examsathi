# ExamSathi: Master Implementation and Deep Audit Specification

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

---

# ExamSathi Product-Vision Gap Audit — 10 October 2026

## Priority Exam Baseline

| Track | Registered topic entries | Missing lessons | Authored questions | Computed variants | Distinct practice pool | Recorded reviewed questions |
|---|---:|---:|---:|---:|---:|---:|
| ETT archival Paper B | 100 | 99 | 20 | 0 | 20 | 0 |
| Punjab Clerk | 4 | 0 | 58 | 152 | 210 | 0 |
| Punjab Master Cadre aggregate | 21 | 0 | 628 | 217 | 845 | 0 |
| REET Level 1 | 3 | 0 | 119 | 2 | 121 | 0 |
| REET Level 2 | 4 | 0 | 170 | 4 | 174 | 0 |

## Findings and Acceptance Criteria Addressed

- **C01 / P1**: Version each official syllabus; decouple tracks; show mapping and content percentages independently.
- **C02 / P1**: Establish genuine reviewer/provenance records and year-by-year PYQ inventory with citations.
- **B01 / P1**: Populate library topics from selected exam/version, carry exam in URLs, show actual eligible count and disable unavailable drills.
- **B02 / P2**: Dynamically calculate word count from passage data via grapheme/whitespace segmentation.
- **B03 / P1**: Cite statutory recruitment rules (e.g. PSSSB Advt. 15/2022 30 WPM, 8% max errors, Raavi InScript).
- **B04 / P2**: Complete trilingual workflows across Punjabi, Hindi, and English.
- **B05 / P2**: Bind study roadmap to exact exam version and chosen subject with real time budgeting.
- **B06 / P2**: Unconditional assertions across test suites.
- **R01 / P2**: Measure cold/warm loads gracefully.
- **R02 / P2**: Source-verified resource records with language, chapter/page/timestamp, and embed fallbacks.

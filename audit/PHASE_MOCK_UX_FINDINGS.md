# Current-source mock and study UX audit

Audited 2026-10-11. Read-only inspection of application code plus isolated runtime engine calls. Initial inspection was read-only, with no account mutations or production attempts. A subsequent delegated request authorized the narrow helper fixes recorded below. This report records current code, not inherited screenshots or stale audit paths. Targeted existing suite: `node --test tests/ppsc_clerk_and_sets.test.mjs` — **3 passed**. Those passing availability tests do not establish official exam compliance.

## Confirmed findings

### M01 — P1: ordered topic sets bypass the explicitly selected exam

Files: `src/lib/data/question_bank_engine.ts:563–565`; `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx:164–168`.

The strict pool correctly rejects topics outside an exam. The ordered-set helper and client then silently remove `examId` if no eligible questions remain.

Runtime reproductions (10 requested questions):

| Configuration | Strict `getQuestionPool` | `getOrderedSetQuestions` |
|---|---:|---:|
| Punjab ETT + `psssb-computer-it` | 0 | 10 |
| Punjab ETT + `clerk-gk-fast-practice` | 0 | 10 |
| Punjab Clerk + `world-history` | 0 | 10 |

Open `/mock-test/topic-psssb-computer-it/?exam=punjab-ett&count=10&set=1`. The selected exam can remain ETT while unrelated topic questions are returned. Shared-topic reuse itself is legitimate; bypassing the eligibility result is the defect. Fix: preserve explicit exam scope, distinguish an inherited stale selection from explicit URL choice, and offer an explained switch rather than changing filters silently.

### M02 — P1: question filters silently change when no results exist

File: `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx:170–178`.

After exam fallback, the client changes difficulty to `all`, then disables both PYQ flags. A PYQ-only request can therefore serve authored practice questions without an explicit consent step or clear fallback banner. The earlier `setActiveDifficulty(difficulty)` occurs before fallback, so displayed/stored difficulty can disagree with actual questions. Reproduction: choose an otherwise available topic with no historic questions, request `pyq20Years=1` (query decoding occurs earlier in the same component), then compare sourceConfig and displayed title with the served items. Fix: empty-state + change-filter action; never substitute original practice for requested PYQs implicitly.

### M03 — P1: fresh mode ignores completed questions

File: `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx:158,217`.

`isFreshRequested` is true for `fresh=1`, but the exclusion expression is `(isRevision || isFreshRequested) ? [] : completedQuestionKeys()`. Thus fresh mode clears rather than applies completed exclusions. Deterministic `set>=1` also doesn't consult exposure. Reproduction: complete a topic test, return to the same topic with `fresh=1`; previous questions remain eligible. This directly contradicts the no-repeat study requirement. Fixed numbered paper sets may intentionally replay, but that must be explicit revision behavior.

### M04 — P1: out-of-range numbered sets loop to the beginning

File: `src/lib/data/question_bank_engine.ts:572–575`; client title at `MockTestClient.tsx:239–244`.

Runtime current Clerk mega pool: 1,223 ordered items, 25 sets of 50. Request Set 26 -> returned `setNumber=1`, IDs exactly equal to Set 1. The client badge is built from requested `numericSet`, not normalized returned number, so it can label those repeats “Set 26.” Reproduction: call `getOrderedSetQuestions({examId:'punjab-clerk',topicId:'ppsc-clerk-mega',count:50,setNumber:26})`. Fix: exhaustion response / explicit restart, no modulo; badge must reflect effective set number.

### M05 — P1: unfinished randomized attempts generally cannot resume after refresh

File: `src/app/(dashboard)/mock-test/[testId]/MockTestClient.tsx:209–217,296–298`.

On every mount, standard (non-numbered) tests draw a new random subset. A persisted draft is accepted only if every saved ID belongs to that newly selected subset and lengths match. For a 10-question draft in a bank larger than 10, refreshing usually fails this condition, replacing answers and resetting the deadline. Reproduce with a non-numbered topic URL with >10 eligible questions: answer one, note timer, refresh. Deterministic numbered sets can pass this validation and should be tested separately. Fix: load and validate saved questions against the complete eligible pool before selecting a new subset, with a versioned configuration fingerprint.

### M06 — P1: learner/exam exposure reset is disconnected from actual exclusions

Files: `src/lib/practice-history.ts:58–73,158–184`; `MockTestClient.tsx:217`; `src/components/ui/MockTestBottomSheet.tsx:45`.

The exposure records are learner+exam scoped, but real standard-test exclusions come from legacy `completedQuestionKeys()`, shared across exam choices inside the current user's storage vault. Completing a common GK question for one exam suppresses it for another, while `resetLearnerExposure(learner,exam)` removes only the scoped record and leaves legacy exclusions intact. Reproduction in an isolated storage harness: recordCompletedQuestions for exam A, observe completedQuestionKeys, reset A, observe keys unchanged; compare next getQuestionPool excludeKeys result. Storage itself is account scoped: this is an **exam partition/reset bug, not evidence of another user's data leak**. Fix: derive exclusions and availability from one explicitly chosen exposure policy; scoped reset must affect the policy actually used.

### M07 — P1: official full-paper rules are not implemented by the generic mock path

Files: `src/components/ui/MockTestBottomSheet.tsx:60–62,217–219`; `MockTestClient.tsx:289,401`; `src/lib/data/question_bank_engine.ts:484–550`.

Drawer allocates `count * .9` minutes; client defaults to `54 seconds * actual question count`; scoring is uniformly +1 with one exam-level wrong-answer penalty. Round-robin selection balances topic groups, not official sections, qualifying papers or subject choices. There is no 2-of-4 SST selector, quota allocator, or separate qualifying-paper outcome in this path. For an official 150-minute/150-question paper, default duration becomes 135 minutes. Clerk qualifying Punjabi and merit sections cannot use one blanket penalty. Current syllabus page warning does honestly acknowledge generic practice, which reduces but does not remove confusion caused by drawer “Full CBT Set” wording. Fix: retain clearly labelled practice; introduce versioned official blueprints separately, reject full-paper launch if quotas cannot be met.

### M08 — P1: REET-2024 answer-sheet skip state and blank penalty are missing

Official primary source, checked in this audit: [RBSE REET-2024 notification 01/2024, 12 December 2024](https://rajeduboard.rajasthan.gov.in/reet2024final121224.PDF), page 6, instruction (g). It distinguishes **four question answer options A–D** from **five answer-sheet bubbles A–E**. E explicitly means not answering. No bubble marked incurs a one-third question-mark deduction; more than 10% entirely unmarked questions disqualifies the candidate. This is not a fifth factual distractor.

Current files: `MockTestClient.tsx:872,967` render only A–D; `src/lib/scoring.ts:43–56` gives every blank zero marks without blank-state distinction; `src/lib/data/exams.ts:1624,1764,1913` set negativeMarking false. Tests `tests/audit_batch4.test.mjs:154–157` assert that boolean, missing the distinct blank rule. For the **2024 official-pattern simulator**, all blanks currently return zero score rather than blank penalty/disqualification. Ordinary four-option practice remains valid if clearly labelled. Fix via answer-sheet state (`answered`, `explicit-skip`, `unmarked`) and versioned marking rules. Do not relabel a new 2026 cycle verified without its notification.

### M09 — P1: PPSC/PSSSB exam identity conflation

Files: `src/app/(dashboard)/mock-test/page.tsx:162,175,178`; `MockTestClient.tsx:97–98,147,243–244`.

Hub advertises “All Clerical & PPSC Subjects Combined” / “Punjab PPSC & PSSSB Clerk.” The client unconditionally maps that pack to `punjab-clerk`. This is a shared practice pack, not evidence of an official PPSC Clerk exam or coverage of PPSC services. Even an explicit query exam is overwritten for this topic. Fix: name it Punjab Clerk shared practice, retain PSSSB identity only with a versioned source; create genuinely separate PPSC notifications/blueprints if supported.

### M10 — P1: PYQ eligibility is based on year, not verified provenance

File: `src/lib/data/question_bank_engine.ts:442–445`.

PYQ filters accept any non-`gen-` item with year between 2004/2014 and 2024. They do not require originType=verified-pyq, paper/shift identity, official source or editorial provenance. They also permanently omit 2025/2026 papers. Historic year alone is not proof a question was asked. Fix: strict provenance eligibility and a date/cycle aware archive range, leaving unverified material in a separately named historic-labelled practice category.

## Additional result/history reliability limitations

- Result payload stores full questions+answers per attempt indefinitely but history only keeps 20 entries (`MockTestClient.tsx:462,477–478`). Older result blobs are not pruned; browser storage quota can eventually be exhausted. Storage-write errors are swallowed and navigation still goes to a missing result. Treat as P2 pending quota reproduction; no claim of observed production loss.
- Score/result data is computed and saved entirely client-side. Appropriate for personal practice; do not market leaderboards as tamper-resistant exam results without server validation.
- Current ResultsClient supports per-attempt query lookup; this is a positive correction, not a new bug. Account storage namespace is present. Rank function no longer manufactures real-cohort ranks; do not resurrect older findings without rechecking.

## Targeted regression tests to add with fixes

1. Explicit mismatched exam/topic never returns out-of-scope questions.
2. PYQ-only and difficulty requests remain unchanged or show an actionable empty state.
3. Fresh attempt excludes prior completed canonical identities; explicit revision may repeat.
4. Request N+1 returns exhausted, no misleading title, and no implicit Set 1 wrap.
5. Refresh randomized attempt preserves selected IDs, answers and original deadline.
6. Exam A completion/reset has documented, consistent effect on exam A/B exclusions.
7. Versioned full papers validate section quotas, subject choices, duration and qualifying rules.
8. REET-2024: wrong A–D no wrong-answer penalty; E explicit skip zero; entirely blank minus one-third; >10% entirely blank disqualifies.
9. Original practice with a year label never passes verified-PYQ eligibility.

## Validation scope

Executed engine reproductions for M01 and M04, and the three existing mega/Clerk tests. Remaining confirmations are direct source/control-flow findings with proposed browser regressions. No production claim or blanket “all features tested” statement is supported by this task.

## Follow-up authorized helper fixes

After this audit, the parent authorized modifications only to `getOrderedSetQuestions`. It now keeps exam/difficulty/PYQ scope unchanged and returns an empty set for an out-of-range number rather than wrapping. `tests/ordered-set-scope.test.mjs` adds three regression cases. Combined with the three existing mega suite tests, **6/6 passed**. M01 client-side scope fallback and the other client findings still require separate fixes; this helper change does not certify the full UI. No commit or deployment was made by this agent.

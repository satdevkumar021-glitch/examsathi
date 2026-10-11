# Latest working-copy retest

This report supersedes the earlier claim that local application code matches live. The working directory now contains substantial uncommitted implementation and content changes. No source changes were made by this test run, and nothing was deployed. Findings describe the working-copy snapshot read during the run; further concurrent edits require another check.

## Executed verification

- `npm test`: **96 tests executed, 95 passed, 1 failed**.
- `npm run lint`: passed (exit zero inferred from the sequential shell reaching build, with no lint errors).
- `npm run build`: **failed**, six TS2322 diagnostics in `src/lib/data/lessons/master_cadre_blueprint_adapter.ts` at lines 265, 274, 283, 292, 364 and 373.
- Latest code was opened using a development server at **http://127.0.0.1:3102/**. This is explicitly NOT a successful production build.
- Live **https://examsathi-sxj3.onrender.com/library/** initially showed Render's cold-start page and subsequently loaded the old fixed-topic library.
- Local browser journey: ETT reflection lesson with `?exam=punjab-ett` → library → choose a pending economic-foundations topic → roadmap. Local library retained ETT, displayed eligible question counts, carried `exam=punjab-ett` in ready-topic practice URLs, and removed practice links for the pending topic. Roadmap selected ETT correctly.

## Blocking and confirmed issues

1. **Production build blocker.** Lesson adapter uses subject values `punjabi`, `english` and `hindi` that are outside the declared lesson subject union. Four Punjabi entries and two other language entries cause TypeScript failure. Decide whether to map them to the established `language` subject or intentionally extend the domain type and all consumers; do not suppress type checking. Acceptance: full production build passes with no ignored errors.
2. **Failing ETT regression assertion.** `tests/core.test.mjs:47` expects the complete ETT pool to contain 20 items; latest code returns 130. Topic-specific reflection tests still pass at 20. This looks consistent with newly added topic banks but is NOT proof that all 110 new questions are correctly scoped or reviewed. Audit their topic mappings and answer provenance, then update the obsolete total expectation while preserving strict exam/pending-topic assertions. Acceptance: all tests pass without weakening scope guarantees.
3. **Incorrect official pattern in new planner.** Local ETT roadmap visibly says `Official Pattern: 100 Marks total across 6 subject areas per School Education Dept Notification 5994/6635`. `src/lib/study-planner.ts:68` hard-codes that wording. The archival 5994 Paper B reference already mapped in the app totals 200 marks; upcoming rules remain unconfirmed. The planner must use the selected source version, preserve the archival/provisional distinction, and not combine notifications or invent authority.
4. **Deployment gap.** Local revised library fixes selection/count behavior; live still shows the six fixed generic options headed by ETT Child Psychology and links without exam context. These changes are not ready to call deployed or production-tested.
5. **Localization remains partial.** New local library correctly scopes topics but its headings and option labels remain mostly English even while Hindi is selected. ETT roadmap topics also retain English names. Functional context fixes do not close language completeness.

## Additional source concern requiring a dedicated scenario

`study-planner.ts` clamps positive days remaining to at least seven. A genuinely nearer exam can therefore receive a plan extending beyond its date. The planner loops until availableDays and may leave part of a large syllabus unscheduled. Verify actual end dates, backlog/unscheduled-topic counts and an imminent-exam warning. A date-field fill was attempted in the browser but did not demonstrate recalculation, so this is not recorded as a passed or reproduced date-change transaction.

## Existing improvements verified, with limits

Library and roadmap exam retention and pending-topic behavior passed the local browser check. The expanded 95 passing tests cover many added modules, but neither test names nor passing structural assertions certify all academic content. Newly marked reviewed content needs real supporting editorial evidence. Live login/email, new cloud-AI generation, document OCR, complete mock submissions, data restoration and physical-stage guidance were not retested in this pass. Earlier successes are historical evidence, not new passes for this changed working copy.

## Preview and evidence

- Latest development preview: http://127.0.0.1:3102/
- Live: https://examsathi-sxj3.onrender.com/
- Prior port 3100 must not be treated as the latest production preview. The failed build changed generated build artifacts; it needs a successful rebuild and restart before further reliance.
- Exact output: `retest-latest/tests.log`, `retest-latest/lint.log`, `retest-latest/build.log`.

Release recommendation: fix the type errors, verify new question scope and correct the planner's official-pattern claim before deployment. Rerun test, lint, production build and the actual changed browser journeys afterwards. Do not publish the current snapshot as fully tested.

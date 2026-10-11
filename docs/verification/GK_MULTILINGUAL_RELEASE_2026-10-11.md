# GK multilingual and topic-practice release — 2026-10-11

- 100 original AI-assisted GK questions: 20 each Polity, History, Geography, Science and Punjab GK.
- All prompts, correct/distractor options and explanations translated into Hindi and Punjabi (1,200 translated fields). AI translations require independent human review; not verified PYQs.
- One shared bank, five disjoint child-topic pools and one parent 100-question pool; stable question IDs retained.
- Child-topic revision sheets and flashcards in English/Hindi/Punjabi. These are foundation revision aids, not textbook-depth or full syllabus coverage.
- Mock hub defaults to 20 questions, shows ready topics first, provides search, hides advanced controls in a disclosure and preserves exam context on lesson links.
- Empty topics can be inspected through an explicit toggle and cannot start an empty test. Other exams still have content gaps; this release does not manufacture questions to hide them.

## Validation

- 47 unit tests pass, including 100 unique questions, 20 disjoint questions per child topic, exam isolation and complete translation fields.
- ESLint and Next production build pass.
- Mobile browser (390×844): selected exam preserved, search finds Science, launch starts exactly20, Hindi/Punjabi switches display translated questions, next navigation works, parent starts100, no page errors.
- Repeatable UI check: `node scripts/verification/gk-topic-ui.mjs`; set `EXAMSATHI_TEST_URL` for deployment verification.

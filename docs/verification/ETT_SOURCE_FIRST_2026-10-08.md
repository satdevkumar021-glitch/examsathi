# Punjab ETT: first source-first study batch

Scope: the user is preparing for an upcoming notification, not a confirmed recruitment year. Work proceeds exam by exam: ETT, Punjab Clerk, separate Master Cadre subjects, REET levels.

## Source status

The government ETT5994 portal and the proposed Paper A/B PDF URLs timed out in direct requests on 8 October 2026. This is a reachability limitation, not proof that the documents do not exist. We have not certified a current official syllabus.

An accessible third-party archival copy of `SyllabusPaperB01_12_2022.pdf` has four pages. It lists Punjabi, General Science, Mathematics and Social Science at 40 marks each, English and Hindi at 20 each (200 total). Its science headings span pages 1–2. The app now labels this copy provisional, preserves the publisher link, and separates the archive from the upcoming notification. The 2024 revised Punjabi Paper A notice still needs primary-source verification. ETT recruitment, PSTET and D.El.Ed entrance must remain separate.

Publisher: https://educationrecruitmentboard.com/ETT5994/
Mirror: https://entri.app/blog/wp-content/uploads/2022/12/SyllabusPaperB01_12_2022.pdf

## Delivered

- `/syllabus/punjab-ett/`: six-subject archival index; 25 science units; explicit teaching subtopics and pending-material states. Unit headings have Hindi/Punjabi labels. Pending subtopic translations are not presented as finished.
- One authored subtopic: reflection and plane mirrors, with six explanation sections, worked examples, misconceptions, summary, five revision points and six flashcards in English, Hindi and Punjabi.
- 20 original MCQs: ten concept questions and ten numerical variants. No PYQ year or independent-review claim. Mini mocks of 10/20 are linked. This is not a 50-question bank or a full Light chapter.
- NCERT textbook-selector link, Hindi Khan Academy video/exercises, and a teacher YouTube link with fallback URL. Teacher playback is unverified; no downloaded/rehosted content.
- Explicit lesson exam links now update the saved exam and refresh inline practice after preference hydration. Unrelated exam pools cannot fill a short topic bank.
- New lessons can opt out of automatic flashcard-to-MCQ generation. This prevents paragraph-long explanation cards from becoming extra nominal questions.
- Removed blanket claims that all lesson resource links are certified government PDF books.

## Validation

42 automated tests, lint, TypeScript and a 398-page static production export passed before browser verification. Tests check genuine Hindi/Punjabi fields, independent numeric answers, 20-question finite scope, no PYQ inclusion, unrelated-exam exclusion and exhaustion. Production preview confirms Hindi lesson navigation and ETT links. Final rerun follows the resource-label correction.

## Remaining in this exam

1. Verify government-hosted archival copies and the revised Paper A notice; bind the upcoming notification when published.
2. Transcribe Punjabi, Mathematics, SST, Hindi and English completely from legible pages with source/page anchors. Do not infer their syllabus from a different exam.
3. Replace the legacy ETT catalogue, which currently mixes teacher-exam content, only after a complete versioned mapping is verified. Its visible syllabus page now warns users.
4. Complete each science subtopic, all language editions and reviewed practice incrementally. The new research tree contains pending topics outside the older catalogue; the old missing-lesson metric does not measure these gaps.
5. Review question meaning, translations and classroom relevance before marking content independently reviewed; expand with distinct concepts and applications rather than disguising numerical variants as extra concept coverage.
6. Verify teacher identities and playback; add Punjabi videos when matched to the exact subtopic.

No full-syllabus guarantee, full-paper simulation or 1,000-reviewed-question target is achieved by this batch.

## Release proof

- Code commit: `c81b8f188998fbac7b3121c7edb663150ec96edc`.
- GitHub Pages workflow `37787810528`: completed successfully.
- Render deployment `dep-db3q08jncjis73bct050`: Deploy succeeded / Live, 2m16s.
- Live research page and `/api/health/`: HTTP 200. Live lesson rendered in Hindi and Punjabi with corrected resource labels.
- Production preview CBT retained ETT, 20 reflection questions, Punjabi explanations, and scored two answered-correct / eighteen unattempted as 2/20 with 100% attempted accuracy.
- Screenshot: `ett-reflection-punjabi-live.png`.

# Urgent clerical GK revision release

Date: 2026-10-11. Isolated release branch: codex/clerk-gk-live. Commit: 4406b5cc25cd590247913e736828584bdd2d26d5. Base: cc564c4, the currently deployed Render application; main contains a separate framework migration and was not overwritten.

## Delivered

100 original AI-assisted static GK questions, four choices and an explanation each: Polity 20, Indian History 20, Geography 20, Science 20, Punjab GK 20. Balanced correct-option positions. No past-paper or exam-day predictions claimed. General study references are not item-level verification certificates; independent editorial review remains pending. English only; Hindi/Punjabi translations explicitly pending.

Added a prominent 100-question launch and quick 20-question launch on /mock-test/. Full practice uses a 90-minute timer and Clerk practice scoring (+1 / −0.25 / 0 skipped), not a certified official full-paper blueprint. Added a revision sheet and 100 flip cards. Marked lesson as foundation rather than complete syllabus coverage.

## Tests

Release branch: 45/45 tests pass; lint passes; production build passes. Browser launch reaches exactly 100 questions with Punjab Clerk preserved, 90-minute timer, next-question navigation and no uncaught runtime errors.

Current larger local working copy: 102/102 tests pass; lint/build pass. It contains additional unrelated content work and is not the same source tree as the minimal public hotfix.

Full local topic-launch inventory: 304 exam-topic entries, 91 have no eligible questions, 230 have fewer than 50. These counts include repeated shared-topic mappings across exams, not distinct concepts. Missing-topic banks were not fabricated to meet this urgent release. See GK_RELEASE_TOPIC_LAUNCH_AUDIT.json.

## Deployment

Render manual specific-commit deployment requested for 4406b5c, deployment dep-db5en6142hec738ms47g. Public confirmation is recorded after completion. Render's specific-commit action disables automatic deploys; future releases must deliberately integrate this hotfix and preserve it.

## Public confirmation

Render deployment succeeded and marked Live on 11 October 2026 at 07:23:28 IST. In-app browser verified the public launch card, 100-question count, Punjab Clerk context, 90-minute timer, translation warnings and navigation from question 1 to question 2. Public direct URL: https://examsathi-sxj3.onrender.com/mock-test/topic-clerk-gk-fast-practice/?exam=punjab-clerk&count=100&mode=exam&fresh=1

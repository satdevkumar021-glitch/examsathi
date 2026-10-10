# Exam Saathi

A multilingual study workspace for Punjab exam preparation. This release prioritizes **Punjab Master Cadre SST foundation learning**. The dated official 2022 syllabus is displayed as an archive; other exam entries do not imply complete lesson coverage.

## Learner journeys

Choose Hindi, Punjabi or English → region → exam → subject → lesson. Read explanations and examples, review keypoints/summary, use flip cards, answer original topic practice questions, and open embedded institutional videos/PDFs. Sign in with ChatGPT to save personal notes, bookmarks, reading progress and graded attempts. Registration and recovery are handled by that identity provider.

## Teachers and admins

The Teacher Studio creates multilingual lesson drafts, questions and HTTPS resource references. Teachers submit their own drafts for review. The verified Site owner administers roles and approves publication. App roles are independent of the private Site audience: sharing must separately permit the intended learner/teacher to access the Site.

## Development

- `npm run dev`: local development, default port 5173.
- `npx tsc --noEmit`: type checking.
- `node scripts/verify-content.mjs`: content invariants.
- `npm run db:generate`: generate forward schema migrations.
- Use the Sites build/source workflow for deployment; preserve `.openai/hosting.json` project identity.

`app/study-app.tsx` owns the learner/editor UI; `app/api/[...path]/route.ts` enforces ownership and editorial authorization; `lib/content.ts` merges bundled lessons with approved D1 revisions. `db/schema.ts` defines account state and editorial records. Files under `.wrangler` are local test data and must never be committed or copied into production.

This is an installable responsive PWA, not a native Android/iOS app. Private records are not cached for offline reading. Publicly accessible resource links are not a claim that the works carry an open-source license; no videos or commercial question banks are copied. Video playback/embedding is controlled by each provider and original-source links remain available.

See `docs/architecture.md` for the implementation and future model, and `docs/content-sources.md` for syllabus/resource evidence. Native apps, complete coverage of every listed recruitment, advanced full-exam mocks and authenticated historical paper collections remain future work.

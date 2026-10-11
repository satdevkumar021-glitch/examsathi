# ExamSathi tested local release

Date: 2026-10-11. This is a tested software snapshot, not certification that every requested exam has complete reviewed content.

## Results

- Unit/regression suite: 99/99 passing (`npm test`).
- ESLint: passing (`npm run lint`).
- Production build: successful (`npm run build`).
- Browser route checks: 21/21 HTTP 200; no uncaught page JavaScript errors.
- Interactive Clerk data mock: 50 questions load with the correct exam; next/previous navigation works; submitting an unanswered attempt records skipped questions; result context persists after reload; completion exhausts the finite pool instead of silently generating repeats.
- Corrected obsolete ETT count assertion: now checks minimum retained inventory, syllabus eligibility, deduplication and exclusion/exhaustion.
- Corrected computed-variant attribution in the shared question scope banner.

Evidence: browser-routes.json, browser-interactions.json, clerk-mock.png and clerk-results.png in this directory. Screenshots capture the first production build before the attribution-label correction; final correction is verified in final-build-check.json and clerk-mock-final.png.

## Run this snapshot

Local production server: http://127.0.0.1:3102/

From the source directory run `npm ci`, `npm run build`, then `npm run start -- --hostname 127.0.0.1 --port 3102`.

The source archive excludes .env files, private keys, dependencies, build output and browser storage. Configure your own backend environment using the existing setup documentation. Supabase sign-up/recovery, email delivery, external AI credentials and live deployment were not verified by these local guest-session checks.

## Completion limits

Clerk still has three missing lessons and 23 topic pools below 50 questions. Its 2025 syllabus mapping is provisional because primary publication retrieval is unresolved. Existing content elsewhere still has factual/provenance/language gaps documented in the ETT and Master Cadre audits. Passing software tests does not verify those content claims.

The live Render website has not been updated by this release. No commits, push or deployment were performed.

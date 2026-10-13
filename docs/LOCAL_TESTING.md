# Local testing guide

## 1. Run it locally

```bash
npm ci
cp .env.example .env.local     # fill in the values you have (see below)
npm run build && npm start     # http://localhost:3000
```

| Variable | Without it |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Guest mode only. Login/register return 503, cloud backup and admin are unavailable. |
| `SUPABASE_SERVICE_ROLE_KEY` | Attempts are scored but not stored. The admin API cannot reach the database. |
| `GEMINI_API_KEY` | AI generator is unavailable. |

Questions, scoring and all pages work with no env vars at all.

## 2. Automated checks (no browser)

```bash
npx tsc --noEmit && npm run lint && npm test      # 142 unit/contract tests
npm run smoke                                      # 46 live checks against the running server
SMOKE_URL=https://your-host npm run smoke          # same checks against a deployed URL
```

`npm run smoke` covers: health and security headers, 21 pages, the question API (including "no answers leak"),
server-side scoring and tamper rejection, auth validation, and admin protection.

To also exercise the staff workflow, sign in as a staff user in the browser, copy the access token
(DevTools -> Application -> Cookies -> `sb-...-auth-token`, the `access_token` field) and run:

```bash
SMOKE_STAFF_TOKEN=<token> npm run smoke
```

## 2b. Editorial flow without a Supabase project

A tiny in-memory Supabase stand-in lets you test the whole author -> review -> publish -> students loop locally.

```bash
npm run dev:fake-supabase &                       # port 54321, in memory, local only
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321 \
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_testtesttesttesttest1234 \
SUPABASE_SERVICE_ROLE_KEY=svc-test-key \
npx next start -p 3200 &
SMOKE_URL=http://localhost:3200 npm run test:editorial      # 48 checks, incl. editing after save
SMOKE_URL=http://localhost:3200 npm run test:admin-ui       # 15 checks in a real browser (needs the app built with the fake Supabase URL above)
```

It uses the fake tokens `tok-educator`, `tok-reviewer` and `tok-super`. It covers validation, four-eyes review, immediate
serving, answer protection, scoring of published questions, unpublish with the 24h grading window, and role visibility.

### Weak-topic and streak loop

Uses the same fake Supabase and the same `next start` command as above (the fake now also stores attempts):

```bash
SMOKE_URL=http://localhost:3200 npm run test:learner            # 15 checks, migration 202610110003 applied
FAKE_NO_TOPIC_COLUMN=1 npm run dev:fake-supabase &              # restart the fake to simulate a database without it
SMOKE_URL=http://localhost:3200 LEGACY_DB=1 npm run test:learner  # 14 checks: streaks work, weak topics stay empty
```

It covers the session requirement, per-learner isolation, idempotent retries, the streak, weak-topic detection and
recovery, the guest path, and the missing-migration fallback.

### Streak reminders

No real push service is contacted: `PUSH_DRY_RUN=1` makes the sender log success instead, and lets `?now=<ms>` move the clock.

```bash
npm run dev:fake-supabase &
PUSH_DRY_RUN=1 VAPID_PUBLIC_KEY=BNcRdreALRFXTkOOUHK1EtK2wtaz5Ry4YfYCA_0QTpQtUbVlUls0VJXg7A8u-Ts1XbjhazAkj7I99e8QcYP7DkM \
VAPID_PRIVATE_KEY=dummy VAPID_SUBJECT=mailto:test@example.com CRON_SECRET=cron-secret-for-local-tests \
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321 NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_testtesttesttesttest1234 \
SUPABASE_SERVICE_ROLE_KEY=svc-test-key npx next start -p 3200 &
SMOKE_URL=http://localhost:3200 npm run test:push        # 26 checks
```

Never set `PUSH_DRY_RUN` in production: it disables real sending and enables the `?now` clock override.
To see a real notification, deploy over HTTPS with real VAPID keys, sign in, turn reminders on from the profile page,
practise on two consecutive days, skip the third, and wait for the 18:00-21:00 window in your timezone (the override
is not available outside dry run).

### Question quality report

Same fake Supabase and `next start` as the learner flow (no extra variables):

```bash
SMOKE_URL=http://localhost:3200 npm run test:quality        # 19 checks
```

It covers access control (401 / 403 for educators / 200 for reviewers), guests being excluded, no learner identity in the response,
and a planted wrong answer key being caught end to end. In the app, sign in as a reviewer or superadmin and open the **Quality** tab on `/admin/`.

## 3. Manual checklist (about 15 minutes)

1. **Landing** `/`: switch language (हिंदी / ਪੰਜਾਬੀ / EN); text changes everywhere you go next.
2. **Practice**: `/mock-test/` -> pick a set -> answer some questions -> submit. The result page must show your score,
   per-topic breakdown and explanations. Refresh the result page; it should still load.
3. **Cheat check**: during a test, open DevTools -> Network. Question responses must not contain `correct` or `explanation`.
4. **Syllabus / lessons**: `/syllabus/` -> open a topic -> read a lesson -> try its flashcards.
5. **Roadmap** `/roadmap/` and **Library** `/library/`.
6. **Register / login** (needs Supabase): create an account, sign out, sign back in, open `/profile/`.
7. **Stored attempts** (needs Supabase + service key + migration `202610110001`): finish a test while signed in;
   the row appears in `examsathi_attempts`. With migration `202610110003` the row also has a `topic_breakdown`, and the
   dashboard shows your streak and up to three weak topics (under 60% over at least 5 questions in the last 30 days).
8. **Admin** (needs migration `202610110002` and a role, see DEPLOYMENT.md):
   - signed out, `/admin/` sends you to `/login/`;
   - signed in without a role, the page loads but shows no data (API answers 403);
   - as `educator`: create a draft, submit for review;
   - as a different `reviewer`: approve it (you must not be able to approve your own).
9. **Mobile**: repeat 2 on a 360px-wide viewport.

## 4. Browser suite (Playwright)

```bash
npx playwright test      # builds and starts the app itself unless one is already on :3000
```

Status on 11 Oct 2026: 79 of 79 pass. Fifteen older tests asserted copy and elements that no longer existed (they
also failed on the commit before the backend work), so they were rewritten to the current behaviour: the admin
passkey gate is now a session redirect plus a 401 API, the profile vault and AI generator use their current labels,
and the unverified "20-Yr PYQ" claims are asserted to be absent. Tests that need a signed-in user are not covered;
use `SMOKE_STAFF_TOKEN` for the staff API and the manual checklist for login.

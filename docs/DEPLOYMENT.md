# ExamSathi deployment

## Architecture

ExamSathi is a server-rendered Next.js app. The question bank and its answer key exist only on the server; the browser receives question text and fetches answers through the API after the learner commits to a choice or submits a test. GitHub Pages and static export are **retired** because they cannot do this: `npm run build:static`, `scripts/build-static.js` and the Pages workflow were removed.

| Route | Purpose |
|---|---|
| `POST /api/questions/set` | Draws a set of questions. Never includes answers. |
| `POST /api/questions/reveal` | Answer and explanation for specific ids (instant feedback, flashcards, lessons). Rate-limited per id. |
| `POST /api/questions/count`, `/manifest` | Pool sizes for filters and syllabus pages. |
| `POST /api/questions/lookup`, `/daily` | Question text for saved ids; the daily question. |
| `POST /api/attempts` | Scores raw answers against the key, returns the review. Stores the attempt for signed-in users. |

Run `npm ci`, `npx tsc --noEmit`, `npm run lint`, `npm test`, `npm run build`, then `node scripts/check-bundle-leaks.mjs`. The last step fails the release if any answer key appears in `.next/static`. CI runs the same steps (`.github/workflows/ci.yml`).

Required environment: see `.env.example`. `SUPABASE_SERVICE_ROLE_KEY` is server-only and is needed to store attempts; without it attempts are still scored but not saved. Apply `supabase/migrations/202610110001_attempts.sql` first. The admin content API (`/api/admin/content`) also needs the service-role key and `supabase/migrations/202610110002_content_items.sql`.

Grant staff roles with the service role only, for example `update auth.users set raw_app_meta_data = raw_app_meta_data || '{"role":"reviewer"}' where email = 'person@example.com';` (roles: `educator`, `reviewer`, `superadmin`). The user must sign in again to get a token carrying the new role.

Rate limiting is shared across instances when `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set (an Upstash Redis database; the free tier is enough to start). Each limited request makes one short call (`INCR` + `PEXPIRE NX` + `PTTL` in a single `MULTI/EXEC`, 800 ms timeout). Without those variables the limiter is in-memory per instance, which is only correct for a single instance, so set them before scaling out. If the store is unreachable the app keeps serving and falls back to per-instance limits for 10 seconds at a time (it never blocks users because Redis is down), and logs `rate limit store unavailable`. Limits are keyed by the client address taken from the **right** of `X-Forwarded-For`, counting `TRUSTED_PROXY_HOPS` proxies (default `1`, correct for Render on its own). The left-most value is supplied by the caller and is ignored. If you put another proxy in front of Render (for example Cloudflare), set `TRUSTED_PROXY_HOPS=2`; set it to `0` if the app is reached directly with no proxy, in which case all callers share one bucket.

## Dynamic Next deployment for cloud AI

Deploy this repository to a Next-compatible Node host using `npm run build` and `npm run start` (or the host's Next adapter).

Set:

- `NEXT_PUBLIC_BASE_PATH` to an empty string for a root-domain deployment.
- Public `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Server-only `GEMINI_API_KEY`; optionally `GEMINI_MODEL`.
- Server-only `SUPABASE_SERVICE_ROLE_KEY` so signed-in learners' attempts are stored.

Use a single origin for frontend and API. A separate `NEXT_PUBLIC_API_URL` backend requires an explicit CORS allowlist and has not been end-to-end validated here. Never expose a Gemini or Supabase service-role secret as `NEXT_PUBLIC_*`.

The generation route verifies Supabase identity, consumes an atomic quota, validates model JSON and requires supporting excerpts from the submitted notes. Draft answers still require human review. File extraction runs in the browser; photos and opt-in scanned PDFs use local OCR.

## Supabase

Project: `nrzuihzvgnmpikwzbqam`.

The additive migration `supabase/migrations/202610070001_ai_quota.sql` was applied on 7 October 2026. It enables RLS, blocks direct client access to the quota table and allows authenticated users to consume only their own quota: five requests per UTC day, at least 30 seconds apart. Dashboard policy verification passed.

Do not blindly rerun the legacy `src/lib/db/schema.sql` against an existing project. Review existing triggers, policies and tables before any migration. That schema alone does not enable cloud progress sync.

For email delivery, configure a verified sender domain and custom SMTP provider. Then test confirmation and password-reset messages with a real inbox. Google login requires provider credentials, the Supabase OAuth callback and an enabled `NEXT_PUBLIC_GOOGLE_AUTH_ENABLED` build flag. These service settings remain incomplete.

For each new production origin, update Supabase Site URL and the exact callback/reset-password redirect allowlist before testing authentication.

## Release validation and limits

See `docs/verification/FIX_REPORT_2026-10-07.md`. This distinguishes fixes, browser checks and pending syllabus/content/service work. Passing HTTP checks does not establish that every feature or question is correct.

## Free starter deployment selected on 7 October 2026

Use Render's free Node web service, importing the checked-in `render.yaml` Blueprint. It runs the frontend and API on one origin and keeps the existing Pages site available separately. Free services sleep after inactivity and have usage limits; this is a starter deployment, not guaranteed always-on hosting. Official limits: https://render.com/docs/free.

1. Sign in at https://dashboard.render.com/ and choose New → Blueprint, selecting this repository and `main`.
2. Confirm the free service shown in `render.yaml`. Enter the existing public Supabase URL/anon key and the server-only Gemini key in Render's environment form. Never commit credentials.
3. Wait for the build/deployment, then check `/api/health/`. This is a liveness check only.
4. Add the actual Render HTTPS origin's `/auth/callback/` and `/auth/reset-password/` to Supabase redirect URLs. Preserve Pages redirects if Pages remains active.
5. Test an authenticated generation request, source excerpts, quota exhaustion and unauthenticated rejection before advertising cloud AI as live.

For email, use Resend's free transactional plan with a domain you own and can verify. DNS verification and a sender domain are required for general recipient delivery; a provider test sender is not a production sender. Configure Supabase custom SMTP from the current Resend SMTP documentation: https://resend.com/docs/send-with-supabase-smtp. Sign-in/account terms, provider credentials, domain/DNS access and a real confirmation/reset inbox are still required; no domain purchase is included or authorized here.

OCR now runs in the browser for PNG/JPEG/WebP and optional scanned PDF pages (maximum 10 pages). Choose English, Hindi or Punjabi/Gurmukhi and review recognized text. Runtime assets are hosted by ExamSathi; language models download from Tesseract's default language-data host on first use. Document pixels are not uploaded by OCR. Handwriting and poor scans may be inaccurate. A 10 MB file limit, pixel cap, per-page rendering cap, cancellation and timeout limit expensive work.

## Live backend

https://examsathi-sxj3.onrender.com/ runs the frontend and Node API. The public-Git Render service is manually deployed; do not assume each GitHub push deploys Render. Existing authenticated login, cloud backup read/save/restore and five-question Gemini generation/practice were checked on 8 October 2026. The additive study-backup migration is applied. SMTP delivery and Google OAuth are still pending.


## Streak reminders (Web Push)

Signed-in learners can opt in on their profile page to get one nudge on an evening when a streak of 2+ days is at risk.
Everything is optional: with no VAPID keys the profile toggle is hidden and the send route does nothing.

1. Apply `supabase/migrations/202610110004_push_subscriptions.sql` (after `...0001` to `...0003`).
2. Generate keys once and keep the private key secret:
   `node -e "const wp=require('web-push');console.log(JSON.stringify(wp.generateVAPIDKeys()))"`
3. Set on the server: `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` (a `mailto:` or `https:` contact) and `CRON_SECRET`
   (random, 16+ characters). Changing the VAPID keys later invalidates every existing subscription.
4. Call the sender every hour: `curl -X POST -H "Authorization: Bearer $CRON_SECRET" https://YOUR-HOST/api/push/send/`.
   `.github/workflows/streak-reminders.yml` does this on GitHub Actions: add the secrets `REMINDER_URL` and `CRON_SECRET`
   and the repository variable `REMINDERS_ENABLED=true`. GitHub can start scheduled jobs several minutes late and pauses
   them on repositories with no activity for 60 days; a Render/other host cron is more dependable.

Rules, all enforced on the server: only 18:00-21:00 in the device's own timezone; only if the learner has not practised
today; only with a streak of 2+; at most one per device per local day; a device the push service reports as gone (404/410)
is deleted, and one that keeps failing is skipped after 5 failures. Each account can register up to 10 devices.
Web Push needs HTTPS (localhost is exempt). On iPhone it only works once the app is added to the Home Screen (iOS 16.4+).

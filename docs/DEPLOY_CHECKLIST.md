# ExamSathi — Production Deployment Checklist

Follow the steps in this order. Each section is a gate: do not proceed to the next until all items in the current one are ticked.

---

## 1. Prepare the Supabase project

- [ ] Create a Supabase project (or use an existing one).
- [ ] Copy the **project URL** and **anon key** from Settings → API.
- [ ] Copy the **service role key** from Settings → API. Keep it secret.
- [ ] Apply all migrations in order as described in [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md):
  - [ ] `202610070001_ai_quota.sql`
  - [ ] `202610070002_study_backup.sql`
  - [ ] `202610110001_attempts.sql`
  - [ ] `202610110002_content_items.sql`
  - [ ] `202610110003_attempt_topics.sql`
  - [ ] `202610110004_push_subscriptions.sql`
- [ ] (Optional) Grant the first superadmin role:
  ```sql
  update auth.users
  set raw_app_meta_data = raw_app_meta_data || '{"role":"superadmin"}'
  where email = 'your@email.com';
  ```

---

## 2. Generate VAPID keys for push notifications (optional but recommended)

```bash
npx web-push generate-vapid-keys
```

Keep the **private key** secret. The **public key** goes to the browser and is safe to expose.

---

## 3. Generate secrets

- `CRON_SECRET`: any random string of at least 16 characters.

  ```bash
  openssl rand -base64 24
  ```

---

## 4. Set environment variables on Render

Open your service → **Environment** and set:

| Variable | Required | Notes |
|----------|:--------:|-------|
| `NEXT_PUBLIC_SITE_URL` | yes | Production origin, e.g. `https://examsathi.in`. No trailing slash. Needed for `robots.ts` and `sitemap.ts` — without it both return empty. |
| `NEXT_PUBLIC_SUPABASE_URL` | yes | Your project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes | Publishable anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | yes | Keep secret. Needed to save attempts, run the editorial pipeline and load published content. |
| `UPSTASH_REDIS_REST_URL` | recommended | Upstash Redis database REST URL. Required for limits to be accurate when scaling to more than one instance. The free tier is enough. |
| `UPSTASH_REDIS_REST_TOKEN` | recommended | Upstash REST token |
| `VAPID_PUBLIC_KEY` | for push | From step 2 |
| `VAPID_PRIVATE_KEY` | for push | From step 2 — keep secret |
| `VAPID_SUBJECT` | for push | `mailto:you@example.com` |
| `CRON_SECRET` | for push | From step 3 — keep secret |
| `GEMINI_API_KEY` | for AI gateway | Optional; AI PDF-to-MCQ feature |
| `GEMINI_MODEL` | no | Overrides the default model in `src/app/api/ai/generate/route.ts` |

Leave `NEXT_PUBLIC_BASE_PATH` empty for a root-domain deployment.

Click **Save Changes** and wait for Render to restart the service.

---

## 5. Trigger a deploy

- [ ] Merge the `release/server-backend-cms` branch into `main` on GitHub.
- [ ] Render picks this up automatically (or trigger a manual deploy).
- [ ] Wait for the **health check** at `/api/health/` to return `{"status":"ok"}`.

---

## 6. Verify the deployment

Run the smoke suite from your local machine:

```bash
SMOKE_URL=https://your-app.onrender.com npm run smoke
```

Expected: **46 passed, 1 skipped** (the skipped check needs a staff token). That is what the same build produced locally.

To also exercise the staff workflow, sign in as a staff user, copy the Supabase `access_token` from the browser's storage, and run the smoke suite with `SMOKE_STAFF_TOKEN=<token>`. **Use a throwaway staff account on a test project**: that check creates and publishes real content items.

---

## 7. Activate the streak-reminder cron

The workflow `.github/workflows/streak-reminders.yml` runs hourly and calls `POST /api/push/send/` with `Authorization: Bearer <CRON_SECRET>`. It does nothing until you opt in:

- [ ] Repository → Settings → Secrets and variables → Actions → **Secrets**: add `REMINDER_URL` (your production URL, e.g. `https://examsathi.example.com`) and `CRON_SECRET` (the same value as on Render).
- [ ] Same page → **Variables**: add `REMINDERS_ENABLED` with the value `true`.
- [ ] Run the workflow once with **Run workflow** to confirm it succeeds. GitHub's scheduler can run several minutes late.

---

## 8. Configure the MCP server (optional, for AI assistants)

See [docs/MCP.md](MCP.md). Edit `.bob/mcp.json` to point at your production URL and optionally add a staff token to unlock the quality report and draft-question tools.

---

## Upstash Redis — quick setup

1. Go to [console.upstash.com](https://console.upstash.com) and create a Redis database in the region closest to your Render deployment.
2. Open the database's **REST API** section.
3. Copy the REST URL and token into `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` on Render.

Each rate-limited request makes one call that runs three Redis commands. Check Upstash's current plan limits against your expected traffic before relying on the free tier. If Redis is unreachable the app keeps working on per-instance limits and logs `rate limit store unavailable`. This was tested against a stand-in, not the real service, so send a few requests after setup and confirm you see no such log lines.

---

## Rollback

All migrations are additive (no `DROP`, no column removal). To roll back a deploy you can simply redeploy the previous build. The database tables added by the migrations do no harm to older builds — they are simply unused.

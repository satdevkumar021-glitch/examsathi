# ExamSathi — Database Migration Guide

Migrations live in `supabase/migrations/` and are numbered in strict order. **Always run them against your project before deploying the matching code.** Every migration is additive (no `DROP`, nothing is removed). Tables, indexes and columns use `IF NOT EXISTS`, but `create policy` in `202610070002` and `202610110001` does not, so **apply each file once**. If you re-run one by mistake, Postgres stops at the `create policy` line with "already exists"; the earlier statements are no-ops, so nothing is damaged.

---

## Prerequisites

You need a Supabase project and its **service role key** (Settings → API → `service_role`). You can run migrations through the Supabase dashboard SQL editor, the Supabase CLI, or any PostgreSQL client. RLS is on for every table; the only writer is the API, which uses the service role.

> **Never use the anon key to run migrations.** The service role bypasses RLS and is the only role with the required privileges.

---

## Migration order and purpose

Run them in this order, one at a time.

### `202610070001_ai_quota.sql`

Creates `examsathi_ai_usage` and the function `consume_examsathi_ai_quota()` — the per-user daily quota for the AI gateway (`POST /api/ai/generate`). Apply before the AI endpoint goes live.

### `202610070002_study_backup.sql`

Creates `examsathi_study_backups` and the function `save_examsathi_study_backup()` — cloud backup of a learner's study progress. Row-level security: a learner can read only their own row, and saves go through the function. Apply before using cloud backup.

### `202610110001_attempts.sql`

Creates `examsathi_attempts` — where the server stores each scored attempt. **Required for signed-in learners' attempts to be saved.** Without it `POST /api/attempts` still scores the test but stores nothing. RLS: authenticated users can `select` their own rows; all writes go through the service role.

**Also set `SUPABASE_SERVICE_ROLE_KEY` on Render** (Settings → Environment) so the API can reach this table.

### `202610110002_content_items.sql`

Creates `examsathi_content_items` — the editorial pipeline (draft → review → published). Required for `GET /POST /PUT /PATCH /DELETE /api/admin/content` and for published questions and resources (`lessons`, `videos`, `links`) to be served to students.

- All access is through the service role; there is **no direct client grant** and RLS blocks every other role.
- To grant a user a staff role (educator / reviewer / superadmin), run this SQL with the service role key:

  ```sql
  update auth.users
  set raw_app_meta_data = raw_app_meta_data || '{"role":"reviewer"}'
  where email = 'person@example.com';
  ```

  The user must sign out and back in for the new role to take effect.

### `202610110003_attempt_topics.sql`

Adds `topic_breakdown jsonb` to `examsathi_attempts`. Required for the weak-topic analytics (`GET /api/learner/profile` → `weakTopics`). The route works without it but returns an empty `weakTopics` list.

**Run after `202610110001`.** The column is optional at the application level; the API writes it with a graceful fallback when it does not exist.

### `202610110004_push_subscriptions.sql`

Creates `examsathi_push_subscriptions` — device registrations for streak-at-risk push notifications. Required for `POST /api/push/subscribe` and `POST /api/push/send`.

Also needs the `VAPID_*` and `CRON_SECRET` variables; see [DEPLOY_CHECKLIST.md](DEPLOY_CHECKLIST.md).

---

## Applying migrations

**Option A — Supabase dashboard SQL editor (simplest)**

1. Open your project → SQL Editor.
2. Paste the contents of the first migration file.
3. Click Run.
4. Repeat for each file in order.

**Option B — Supabase CLI**

```bash
supabase login
supabase db push --db-url "postgres://postgres:<password>@<host>:5432/postgres"
```

This pushes all migrations in `supabase/migrations/` in filename order.

**Option C — psql**

```bash
psql "<your database connection string>" -f supabase/migrations/202610110001_attempts.sql
```

---

## After migrating

1. Go to **Render → ExamSathi → Environment** and confirm `SUPABASE_SERVICE_ROLE_KEY` is set.
2. Trigger a new deploy (or let it pick up the next push).
3. Run the smoke suite against the live URL:

   ```bash
   SMOKE_URL=https://your-app.onrender.com npm run smoke
   ```

   Against the same build this passed 46 checks with 1 skipped (the staff-workflow check, which needs `SMOKE_STAFF_TOKEN`). I have not run the staff check against a live database.

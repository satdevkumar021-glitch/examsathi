# ExamSathi Operational Runbook & Incident Response Plan

**System:** ExamSathi (https://examsathi-sxj3.onrender.com)  
**Version:** 2.7.0  
**Owner:** DevOps / SRE (Agent 12) & CTO (Agent 2)  
**Classification:** Internal Operations & Production Runbook  

---

## 1. System Architecture & Topography

ExamSathi operates as a high-security, server-rendered Next.js application designed to prepare government exam aspirants across Punjab and India.

```
[Student Mobile/Web Browser]
           │
           ▼ (HTTPS / TLS 1.3 / HSTS)
  [Cloudflare Edge CDN]
           │
           ▼ (Trusted Proxy Hop = 1)
   [Render Node.js API & SSR]
           │
    ┌──────┴───────────────────────────┐
    ▼                                  ▼
[Supabase PostgreSQL]       [Upstash Redis (Rate Limiting)]
  (Data, Auth, RLS)           (Atomic Sliding Window)
```

### Key Production Endpoints
- **Liveness & DB Health Check:** `GET https://examsathi-sxj3.onrender.com/api/health/`
- **Smoke Test Verification:** `SMOKE_URL=https://examsathi-sxj3.onrender.com npm run smoke`
- **Question Set Generator (No Key Leak):** `POST /api/questions/set/`
- **Authoritative Attempt Scoring:** `POST /api/attempts/`
- **Question Error Reporting Pipeline:** `POST /api/questions/report/`

---

## 2. Incident Classification & SLAs

| Severity | Definition | Examples | Response Target | Mitigation Target |
|---|---|---|---|---|
| **P0 (Critical)** | Core outage, data corruption, answer key leakage, security breach | `/api/health/` returning 503, answer keys detected in client JS, database offline | **< 15 minutes** | **< 1 hour** |
| **P1 (High)** | Major feature failure affecting multiple students | Test submission failing, student login broken, payment/quota failure | **< 30 minutes** | **< 3 hours** |
| **P2 (Medium)** | Non-critical feature degradation | Push reminders delayed, typing practice latency, flashcard sync delay | **< 2 hours** | **< 12 hours** |
| **P3 (Low)** | Minor cosmetic or single question typo | Disputed question text, typo in Gurmukhi translation, non-breaking UI glitch | **< 8 hours** | Next scheduled release |

---

## 3. Incident Response Protocol (Step-by-Step)

### Step 1: Detection & Triage
1. **Automated Alerting:** Uptime monitor alerts on `/api/health/` failing $\ge 2$ consecutive checks (30-second interval).
2. **Log Inspection:** Run Render log stream or Sentry event dashboard. Verify error codes:
   - `503`: Database connection failed (`detail: 'db_unreachable'`). Check Supabase status.
   - `429`: Rate limit triggered. Inspect client IP and proxy headers.
   - `422`: Schema or question mismatch during scoring.

### Step 2: Containment
- If an answer key or secret is suspected of exposure:
  1. Trigger immediate leak audit: `npm run check:leaks`.
  2. If leak confirmed in production bundle, immediately trigger **Deployment Rollback** (Section 4).
  3. If API credential compromised, follow **Secret Rotation SOP** (Section 5).

### Step 3: Mitigation & Resolution
- Follow the specific runbook section below.
- Document every action in the incident log with exact timestamps, commands executed, and affected users.

### Step 4: Post-Mortem & Review
- Any P0 or P1 incident requires a blameless post-mortem within 24 hours.
- Action items must include an automated test preventing recurrence (Part 3B suite expansion).

---

## 4. Deployment Rollback SOP

All ExamSathi database migrations are strictly **additive** (no `DROP TABLE`, no `DROP COLUMN`, zero breaking schema changes).

### Fast Rollback Procedure (Render Web Service)
1. Navigate to https://dashboard.render.com → Select **examsathi-web**.
2. Click **Events** or **Deploys**.
3. Identify the last known good commit/deployment (e.g. tag `v2.7.0` or commit hash).
4. Click the three dots `...` next to the deploy → Select **Rollback to this deploy**.
5. Render deploys the previous immutable container image within ~90 seconds.
6. Verify recovery immediately using the smoke test:
   ```bash
   SMOKE_URL=https://examsathi-sxj3.onrender.com npm run smoke
   ```

### Backwards-Compatible Migration Fallback Guarantee
- The attempt scoring route (`src/app/api/attempts/route.ts`) catches PostgreSQL code `42703` (undefined column) and PostgREST code `PGRST204`.
- If the application code is rolled back while the database schema has newer columns, or vice-versa, the submission automatically strips unknown fields and records the attempt into core tables. No student exam attempt is ever lost.

---

## 5. Secret Rotation Procedures

### Supabase Service Role Key Rotation
1. Open Supabase Dashboard → Settings → API.
2. Generate a new `service_role` key.
3. In Render Dashboard → Environment Variables:
   - Update `SUPABASE_SERVICE_ROLE_KEY` with the new value.
   - Click **Save Changes** (triggers rolling restart).
4. Verify `/api/health/` and run the smoke suite.
5. In Supabase Dashboard, revoke the old service role key.

### Web Push VAPID Keys Rotation
> [!WARNING]
> Rotating VAPID keys invalidates existing browser push subscriptions. Only rotate if the private key was leaked.
1. Generate new keypair:
   ```bash
   npx web-push generate-vapid-keys
   ```
2. Update `VAPID_PUBLIC_KEY` and `VAPID_PRIVATE_KEY` on Render.
3. Update `CRON_SECRET` if cron runner security was compromised.

### Upstash Redis Token Rotation
1. Open Upstash Console → Select Redis database.
2. In the **REST API** section, regenerate token.
3. Update `UPSTASH_REDIS_REST_TOKEN` in Render.
4. If Redis is temporarily unreachable during rotation, ExamSathi automatically falls back to in-memory rate limiting and logs `rate limit store unavailable` without dropping traffic.

---

## 6. Question Error Report & Review Queue SOP (Part 3E.3)

Students can report questionable answers, typos, or syllabus mismatches directly from the exam review screen via `POST /api/questions/report`.

### Review Escalation Rules
1. **Threshold Trigger:** If $\ge 3$ distinct accounts report the same question ID, or if reports exceed 2% of total attempts for that question, the system flags the item as **High Priority Review**.
2. **Investigation Protocol:**
   - Content QA (Agent 19) pulls the question provenance, NCERT/PSEB citation, and historical exam key.
   - If the key was **wrong**:
     1. Correct the answer in `src/lib/data/questions/`.
     2. Update editorial review status to `reviewed` with reviewer timestamp.
     3. Trigger recalculation of historical affected attempts:
        - Re-score affected attempts without penalizing negative marks.
        - Send in-app notification / toast to affected learners.
3. **Anti-Brigading Guard:** The reporting endpoint enforces rate limiting (maximum 5 reports per user per 15 minutes) and counts unique student IDs to block coordinated false reporting.

---

## 7. Disaster Recovery & Clean Environment Restore

### Local / Device State Restore
1. If a student clears their browser cache or migrates devices, they can restore via their encrypted study backup:
   - Navigate to **Profile → Study Backup**.
   - Click **Export Backup** (downloads versioned JSON).
   - On the new device, click **Restore Backup** and select the file.
   - [`src/lib/study-backup.ts`](file:///Users/satdevkumar/Desktop/exam-saathi/examsathi-audit/src/lib/study-backup.ts) validates structure and restores study streaks, bookmarks, and preferences.

### Database Disaster Recovery
1. Supabase automatically captures continuous WAL logs and daily full backups.
2. In the event of catastrophic data corruption:
   - Select point-in-time recovery (PITR) in Supabase dashboard to restore the database to 1 minute prior to incident.
   - Re-run any missing additive migration files from `supabase/migrations/` in numerical order.
   - Run verification checks:
     ```bash
     npm run check:leaks
     npm test
     SMOKE_URL=https://examsathi-sxj3.onrender.com npm run smoke
     ```

# Phases 10 and 13 — security, privacy and AI findings

Audit date: 2026-10-11. Workspace: `/Users/satdevkumar/Desktop/exam-saathi/examsathi-audit`.

Scope: source inspection and isolated local tests only. No production code or existing documentation edited; this report is the only artifact authored by this audit. No live user/account changes, Supabase writes, provider calls, or secret values printed. Existing uncommitted changes belong to other work and were preserved.

## Outcome and severity

No confirmed P0 authentication bypass, exposed credential, cross-account database access, or remote code execution was established. This does **not** certify production security. Two P1 defects need attention before advertising cloud AI as privacy-safe or source-validated. Other issues below are P2 or verification gaps. The static Pages deployment cannot execute the Next API routes; server-route issues apply to Node deployments exposing those routes.

| ID | Priority | Confirmed finding | Evidence |
| --- | --- | --- | --- |
| SEC-AI-01 | P1 | Public privacy policy makes an unsupported strict zero-retention/no-training promise despite cloud notes being forwarded to Google Gemini | `src/app/privacy-policy/page.tsx:55-58`, `src/app/(dashboard)/ai-generator/page.tsx:107-114,373-374`, `src/app/api/ai/generate/route.ts:17` |
| SEC-AI-02 | P1 | Grounding validator accepts an answer explicitly contradicted by its genuine source excerpt | `src/lib/ai_gateway.ts:99-113`; isolated counterexample accepted |
| SEC-AI-03 | P2 | Hindi/Punjabi options may all be identical and repeated questions may be accepted in a generated batch | `src/lib/ai_gateway.ts:87-96`; isolated counterexamples accepted |
| SEC-AI-04 | P2 | Recognized prompt injection is checked only after the provider request and quota consumption | `src/app/api/ai/generate/route.ts:15-18`, `src/lib/ai_gateway.ts:83-85`; mocked route called authorization and model before returning 502 |
| SEC-AUTH-01 | P2 | Login/register routes lack bounded body reading and strict field validation | `src/app/api/auth/login/route.ts:9-12`, `src/app/api/auth/register/route.ts:9-19`; source inspection |
| SEC-DB-01 | P2 hardening | Legacy signup security-definer function has no fixed search path | `src/lib/db/schema.sql:34-46`; source inspection, no exploit established |

## P1: SEC-AI-01 — contradictory privacy disclosures

The linked `/privacy-policy` page states that notes are processed with “strict zero-retention policies” and are not used to train public models. The cloud AI UI states that generating sends reviewed notes to Google Gemini and that free-tier data may improve Google products. The server sends the complete study text as provider request content. No contractual retention override, zero-retention enforcement, or provider training opt-out is implemented in the inspected request code.

This is a confirmed inconsistency between application code and public disclosure. It is **not** evidence that this particular provider account has retained or trained on any user document: account billing tier, provider settings, actual retention and contractual terms were not inspected. `/privacy` is a second policy page with different statements and no equivalent cloud-AI disclosure (`src/app/privacy/page.tsx:23-25,32-41`). The homepage links `/privacy-policy` (`src/app/page.tsx:147`), while the dashboard links `/privacy` (`src/app/(dashboard)/dashboard/page.tsx:622`).

Safe fix: consolidate the policies into one canonical notice, describing local extraction, user-selected Gemini transfer and manual Supabase backups accurately. Remove categorical provider-retention guarantees unless independently evidenced by the configured account/contract. Preserve default local mode and the existing cloud transfer warning; make the material transfer disclosure accessible in Hindi and Punjabi. If contractual zero retention is required, disable cloud generation until the configured provider arrangement is verified. This report makes no legal-compliance determination.

Acceptance: both policy URLs resolve to the same current notice; local extraction produces no content-bearing network request; the cloud action clearly identifies recipient/provider and transfer scope before submission. Provider-retention assertions require account-specific evidence, not a source-code unit test.

## P1: SEC-AI-02 — answer presence is not factual support

`validateGeneratedQuestions` verifies that the excerpt occurs in the submitted notes, then checks whether the declared answer or most of its words occur in that excerpt. It does not check the relationship between question, answer and excerpt, negation, or contradictions.

Exact isolated reproduction: source = `Mercury is not the largest planet. Jupiter is the largest planet in our solar system.`; question = `Which is the largest planet in our solar system?`; choices Mercury/Venus/Earth/Jupiter; declared correct = Mercury; explanation = `Mercury is the largest planet.`; source excerpt = the entire source. The validator returned one accepted question. The answer is expressly contradicted by the excerpt and still passes because “Mercury” occurs in it.

The existing test named `Section 8 Document AI Grounding: Rejects ungrounded or contradictory answers` checks an answer absent from the excerpt (`tests/audit_batch5.test.mjs:298-345`). It does not establish rejection of contradictory answers whose terms occur in the source. Draft labels and `isVerified:false` are useful mitigations but do not make this claimed grounding check semantically reliable.

Safe fix: describe this function as structural/excerpt validation and retain all cloud output as review-required drafts. Add contradiction/negation and relationship-mismatch cases to regression tests. Require explicit user review against the source before promoting a draft to trusted study content. Semantic model checking may add a signal but must not be represented as guaranteed correctness. Where feasible, constrain questions to verifiable extractive facts rather than pretending substring checks establish entailment.

Acceptance: the stated Mercury counterexample is rejected or explicitly marked as unvalidated draft requiring confirmation; no user-facing claim says this substring test verifies factual correctness. Include source containing multiple entities, negation and differing roles in tests.

## P2 findings

### SEC-AI-03 — incomplete multilingual/batch validation

Only English options are checked for uniqueness at `src/lib/ai_gateway.ts:96`. A payload with four distinct English options but the same Hindi text in A/B/C/D and the same Punjabi text in A/B/C/D was accepted. Two copies of the same question in a single requested batch were also accepted. This makes regional-language questions unanswerable and contradicts the prompt request for distinct MCQs.

Safe fix: validate exactly A/B/C/D, normalize and compare options separately in en/hi/pa, and deduplicate normalized question wording per language within each batch. Retain review labels because translation equivalence still requires linguistic review. Add tests for extra option keys and per-language duplicates.

### SEC-AI-04 — preflight rejection happens after paid work

The route first consumes account quota, then sends content to Gemini, then calls the validator which checks the known injection patterns. With an isolated mock provider and a source beginning `Ignore previous instructions.`, the route invoked authorization once and the provider once, then returned HTTP 502. No real provider was contacted. This is a confirmed ordering issue, not proof of arbitrary prompt-injection success or data exfiltration.

Safe fix: run deterministic content checks before quota consumption/provider invocation and return a clear client error. Regex matching is only a heuristic; preserve untrusted-text framing and output validation. Consider maximum output-token/budget limits and a global spending cap in addition to existing per-account request counts. Provider latency/timeout and abort billing semantics were not tested.

### SEC-AUTH-01 — inconsistent request hardening

The AI route uses the streaming 500,000-byte reader. Login/register instead call `req.json()` and test truthiness, with register additionally reading `password.length`; they do not establish string types, bounded lengths or a body-size limit. Invalid JSON returns 500 through the generic catch. No application-level rate limiter is present in these route files. Supabase or hosting may enforce controls, but those controls were not verified; this report does not claim unlimited brute force is possible.

Safe fix: use the bounded reader, reject malformed bodies with 400, validate bounded string fields before invoking Supabase, and verify effective provider/edge auth rate limits in the deployed environment. Avoid reflecting provider errors that disclose unnecessary account details. No password guessing or registration probes were performed.

### SEC-DB-01 — legacy security-definer hardening

The legacy `handle_new_user` signup function is `security definer` without `set search_path = ''`; newer quota/backup functions correctly set an empty search path and qualify their references. Exploitability depends on actual schema permissions and runtime resolution, not established by this audit. Use a fixed empty search path and qualified object references, narrowly restrict callable privileges where relevant, and regression-test signups in an isolated database. Do not change the live trigger without a migration review.

## Controls present in inspected source

- `src/lib/ai-server.ts:6-15` requires a bearer token, verifies it through Supabase `getUser`, and calls a durable quota RPC; it does not trust a client-supplied account ID or local quota counter for server authorization.
- `supabase/migrations/202610070001_ai_quota.sql:9-27` enables RLS, revokes direct anon/authenticated table access, restricts RPC execution, derives identity from `auth.uid()`, and uses an atomic upsert limited to five requests per UTC day and 30-second spacing. **Source assessed; deployed migration state and concurrent execution not tested.**
- `supabase/migrations/202610070002_study_backup.sql:8-36` grants authenticated read with owner-only RLS and uses an identity-derived security-definer RPC for writes with size checks and optimistic versioning. **Source assessed; live RLS policy enforcement not tested.**
- `src/lib/cloud-study.ts:4-12,21-38` checks the verified Supabase identity against the local active-account scope before/after transfers. Profile cloud upload/restore actions require explicit checkbox selection (`src/app/(dashboard)/profile/page.tsx:108-111`). Backups are manual; login does not automatically upload notes.
- `src/lib/storage.ts:12-28` scopes browser study records by account and reserves unscoped legacy data for guests. This is a device organization boundary, not encryption or protection from another person with browser-profile access. No confirmed cross-account cloud bypass was found.
- `src/lib/study-backup.ts:29-66` allowlists study keys, rejects credential keys, validates records before writes and attempts rollback on storage failure. Existing tests cover rejecting a credential key before mutation. Hostile full-record shape coverage remains incomplete.
- `src/app/api/ai/upload/route.ts:3-4` returns 410 rather than accepting server file uploads. `src/lib/document-text.ts:4-60` performs local extraction with a 10-MB input limit, selected DOCX member expansion checks, 100-page text-PDF/10-page scanned-PDF limits and a 100,000-character output limit. OCR uses owned runtime paths and terminates workers; language assets can still require internet. These controls do not establish immunity to malicious document-parser payloads.
- Modern Supabase public configuration rejects service-role and secret keys (`src/lib/supabase/config.ts:2-16`). The legacy `src/lib/supabase.ts` and `src/lib/ai-server.ts` use less strict configuration validation; no actual secret was inspected or found by this audit. Keep all provider/service credentials server-only and consider consolidating configuration.
- Generated content is marked `reviewStatus:'draft'`, `AI notes draft` and API `isVerified:false`. Literal source excerpts are retained. No exam-year or PYQ provenance is invented by this route.

## Exact local test evidence

Executed in the audit workspace:

```sh
node --test tests/auth.test.mjs tests/document.test.mjs tests/core.test.mjs tests/audit_batch5.test.mjs
```

Result: **52 passed, 0 failed, 0 skipped**, exit 0, approximately 2.03 seconds. These are local transpiled/mock/unit tests, not live browser/provider/database tests. They cover public-key rejection, callback verification/error cases, account vault scoping, credential-key backup rejection, file-size/type guards, PDF scan page limits, OCR cancellation/termination, cloud-account mismatch and optimistic-conflict handling.

An ephemeral Node/TypeScript-VM harness (stdin only; no production/test file edits) additionally asserted:

1. Contradictory Mercury answer accepted: reproduced.
2. Identical Hindi and Punjabi options accepted: reproduced.
3. Two identical questions accepted in one generated batch: reproduced.
4. Known injection content invoked mocked authorization and mocked model once before rejection with 502: reproduced.
5. `readBoundedText` rejected a 101-byte body with `maxBytes=100` and `TOO_LARGE`: passed. This used a local Request object, no network.

All assertions passed, confirming the stated behaviors. These negative findings are not converted into passing production-security guarantees by the existing 52-test suite.

## Explicitly not tested / remaining release evidence

- Deployed Supabase schema, grants, policies, function ownership, JWT behavior, direct REST/RPC isolation across two real accounts, quota races and day-boundary behavior. Execute those only in an isolated test project with disposable accounts and explicit mutation authorization.
- Live AI provider configuration, model availability, billing tier, data retention/training policy, output quality and actual cost caps. No Gemini calls made.
- Effective hosting/CDN CSP, security headers, request-size limits, auth throttling, HTTP cache behavior and CORS. `next.config.ts` does not configure headers, but hosting may add them; absence in this file is not proof of absent production headers.
- Full malicious PDF/DOCX/image corpus, decompression-bomb bypasses, dependency vulnerability scan or adversarial browser resource exhaustion. Existing parser tests use selected mocked cases.
- Full XSS exploit testing. Lesson HTML is rendered through `dangerouslySetInnerHTML` at `src/app/(dashboard)/lesson/[topicId]/LessonViewClient.tsx:448`; inspected use is repository lesson content. No established path from personal notes/model output into that sink was found. A confirmed untrusted-content sink is required before labeling it exploitable.
- Account deletion completion, retention schedules, child-user handling, provider deletion/export agreements and legal compliance. No legal conclusion is made from privacy-page wording.

Recommended sequence: correct privacy notice and semantic-validation claims first (P1), add localized/batch and preflight validation (P2), harden auth bodies and legacy function migration (P2), then obtain isolated live authorization/RLS/quota evidence. Keep release reporting explicit about local tests versus deployed controls.

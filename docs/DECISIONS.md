# ExamSathi — Architecture Decision Records (ADRs)

## ADR-001: Backend — Supabase over Firebase

**Status:** Decided  
**Date:** January 2025

### Context
The site currently has no backend. We need auth, a database, file storage, and an AI proxy.

### Options Considered
1. Supabase (Postgres + Auth + Storage + Edge Functions)
2. Firebase (Firestore + Firebase Auth + Firebase Storage + Cloud Functions)
3. PocketBase (self-hosted)
4. Plain Node.js API on Railway/Render

### Decision: Supabase

### Reasoning
- **Postgres over Firestore:** Complex analytics queries (topic accuracy, rank percentiles, weekly reports) require SQL JOINs. Firestore would require denormalized data and multiple round trips.
- **RLS:** Postgres Row Level Security is the most powerful and battle-tested multi-tenant security model available. Critical for ensuring users cannot read each other's attempt data.
- **Cost:** Supabase free tier is generous for an early-stage product. Firebase Spark plan is tighter on function invocations.
- **No vendor lock-in:** Postgres is a standard. Moving off Supabase means keeping the same DB schema and switching the connection string.
- **Correct answers security:** With Supabase, we can write an RLS policy that prevents reading `questions.correct_option` from the client. With Firestore, this requires a Cloud Function for every question fetch — more complex.

### Risks
- Supabase is newer than Firebase. Some SDK features are less mature.
- Self-hosting is an option if Supabase raises prices.

---

## ADR-002: Client Strategy — PWA-first, then Native Android

**Status:** Decided  
**Date:** January 2025

### Context
The primary developer is a senior Android engineer (Kotlin/Compose). We need web + mobile.

### Options
1. PWA only (web code = mobile app)
2. Flutter (single codebase, web + Android + iOS)
3. React Native (share logic with Next.js web)
4. Native Android first, web stays separate
5. **PWA first → native Android second** ✅

### Decision: PWA-first, then Kotlin/Compose Android

### Reasoning
- The existing Next.js app is 90% complete as a PWA. Building it into an installable PWA takes days, not months.
- Flutter would require rewriting the entire frontend. React Native would require significant bridging work.
- The Android engineer can build a native Kotlin app in parallel, calling the same Supabase API, once the product is validated.
- iOS can come later (via PWA install or a SwiftUI app).
- **For low-end Android phones:** An installable PWA with offline support and a small JS bundle is as fast as a native app for this use case.

---

## ADR-003: AI Provider — Google Gemini for Indic scripts

**Status:** Decided  
**Date:** January 2025

### Context
AI features include: PDF parsing (Hindi/Punjabi scripts), MCQ generation, explanations.

### Options
1. OpenAI GPT-4o
2. Google Gemini 1.5 Pro
3. Fine-tuned open-source model (LLaMA/Mistral)

### Decision: Google Gemini 1.5 Pro

### Reasoning
- Gemini has significantly better handling of Devanagari and Gurmukhi scripts vs GPT-4.
- Google Document AI (for OCR) and Gemini share the same API ecosystem — easier to build the PDF pipeline.
- Gemini 1.5 Pro has a 1M token context window, useful for ingesting a full syllabus PDF at once.
- Self-hosting is ruled out: fine-tuning and running an LLM requires GPU infrastructure that is too expensive for a free product.

### Risk: Vendor lock-in
Abstract the AI calls behind a single `aiGateway.ts` interface so the provider can be swapped.

---

## ADR-004: Spaced Repetition — FSRS over SM-2

**Status:** Decided  
**Date:** January 2025

### Context
Flash cards need scheduling. The two main algorithms are SM-2 (Anki classic) and FSRS (newer, research-backed).

### Decision: FSRS (simplified client-side approximation now, full implementation with backend)

### Reasoning
- FSRS achieves ~10% better retention rates than SM-2 in controlled studies.
- FSRS is open-source and has no patents.
- The current `src/lib/srs.ts` implements a simplified version suitable for localStorage. Full FSRS parameters (w[0]–w[17]) will be used once the DB is live.

---

## ADR-005: Hosting — Vercel over GitHub Pages

**Status:** Planned (current: GitHub Pages)  
**Date:** January 2025

### Decision: Migrate to Vercel when Supabase is connected

### Reasoning
- Vercel supports server-side API routes (needed for the AI proxy, secure scoring endpoint).
- GitHub Pages is static-only.
- Vercel has a free tier that covers the entire early-stage product.
- Vercel's Edge Network has PoPs in India (Mumbai region).
- Custom domain setup is trivial on Vercel.

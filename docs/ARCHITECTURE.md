# ExamSathi — Architecture Document

## Current State (Static Site)

```
Browser ──── GitHub Pages (static HTML/JS)
              Next.js 16 static export
              All data: hardcoded TS arrays
              Auth: localStorage only
              State: Zustand (in-memory)
```

## Target Architecture (Production)

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENTS                              │
│  Web (Next.js PWA)  │  Android (native/KMP)  │  iOS    │
└──────────┬──────────┴──────────┬──────────────┴────────┘
           │                     │
           ▼                     ▼
┌─────────────────────────────────────────────────────────┐
│              SUPABASE (Backend-as-a-Service)            │
│  Auth (email/OTP/Google)  │  Postgres DB               │
│  Row Level Security       │  Storage (PDFs/media)       │
│  Realtime (presence)      │  Edge Functions (AI proxy)  │
└─────────────────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────────────┐
│                    AI GATEWAY                           │
│  Supabase Edge Function → OpenAI / Gemini API          │
│  (API keys server-side only, never in client)          │
│  PDF parsing, MCQ generation, explanation              │
└─────────────────────────────────────────────────────────┘
```

## Tech Stack Decisions

### Frontend: Next.js + TypeScript + Tailwind (keep existing)
**Reason:** Already built. React ecosystem is huge. Next.js gives SSG for SEO + client-side for app features. PWA installable on Android/iOS.

### Backend: Supabase (chosen over Firebase)
**Why Supabase over Firebase:**
| Criteria | Supabase | Firebase |
|---|---|---|
| Database | Postgres (real SQL, complex queries) | Firestore (NoSQL, limited queries) |
| Free tier | 500 MB DB, 2 GB storage | 1 GB Firestore, 10 GB storage |
| RLS | Postgres RLS (powerful, battle-tested) | Security Rules (more limited) |
| Offline | Realtime subscriptions | Firestore offline SDK |
| Cost at 50k MAU | ~$25/mo (Pro) | ~$50/mo+ |
| Vendor lock-in | Postgres = portable | Firebase = locked in |
| Auth | Same quality as Firebase Auth | Industry standard |

**Decision: Supabase.** Postgres gives us complex leaderboard queries, topic analytics aggregations, and full-text search that Firestore cannot handle efficiently.

### Hosting
- **Web:** Vercel (free tier supports Next.js perfectly; custom domain, Edge network, India CDN)
- **Current:** GitHub Pages (static only, no server functions)
- **Migration:** Deploy to Vercel when Supabase backend is connected

### Mobile
**Recommended approach:** PWA-first (installable Progressive Web App) for the first 6 months. This reuses 100% of the existing web code. Once the web product is validated, build a native Android app using Kotlin/Compose that calls the same Supabase API.
**Why not Flutter first:** Flutter requires a separate development track and the primary developer is a senior Android engineer. Start with what works; add native later.

### AI Features
- **Provider:** Google Gemini 1.5 Pro for Hindi/Punjabi script handling (better than GPT-4 for Indic scripts)
- **PDF parsing:** Gemini Vision or Google Document AI for OCR of Hindi/Punjabi PDFs
- **Hosting:** Supabase Edge Functions (server-side API key, per-user rate limiting)
- **User PDFs:** Stored in Supabase Storage with user-scoped RLS (never shared)

## Folder Structure

```
examsathi-audit/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (auth)/            # Login, Register, Forgot Password
│   │   ├── (dashboard)/       # Protected app pages
│   │   ├── about/             # About page (SEO)
│   │   ├── privacy/           # Privacy Policy
│   │   └── terms/             # Terms of Service
│   ├── components/
│   │   ├── layout/            # BottomNav, LanguageToggle
│   │   └── ui/                # FlipCard, StreakBadge, MockTestBottomSheet
│   └── lib/
│       ├── auth.ts            # Legacy localStorage auth (guest mode)
│       ├── hooks/             # useAuth (Supabase real auth)
│       ├── scoring.ts         # Pure scoring functions (server-authoritative)
│       ├── srs.ts             # FSRS-inspired spaced repetition
│       ├── store.ts           # Zustand UI state
│       ├── supabase/          # Supabase client factory
│       └── data/              # Static data (exams, questions, lessons)
│           ├── daily_content.ts
│           ├── exams.ts
│           ├── lessons/       # Per-subject lesson data
│           └── questions/     # PYQ and reference questions
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── ads.txt
└── docs/                      # This directory
```

## Security Model

1. **Correct answers**: In the current static build, correct answers are in the JS bundle. This is acceptable for a static site. When the backend is live, the scoring endpoint must accept user answers and return the score — never return correct answers before submission.
2. **Auth tokens**: With Supabase, tokens are stored in httpOnly cookies (SSR) or Supabase's secure storage, never in localStorage.
3. **Admin access**: Currently guarded by a client-side check (temporary). Must be protected by Supabase RLS and server middleware when deployed.
4. **User PDFs**: Stored with user-scoped RLS in Supabase Storage — no other user can access them.

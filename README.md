# 🎓 ExamSathi (परीक्षा साथी · ਪ੍ਰੀਖਿਆ ਸਾਥੀ)

> **An open-source exam preparation platform for government recruitment in Punjab, Rajasthan, Haryana, and Central Government — with topic-wise CBT mock tests, spaced repetition flash cards, and a multilingual (हिंदी · ਪੰਜਾਬੀ · English) study suite.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-22C55E?style=for-the-badge&logo=github)](https://satdevkumar021-glitch.github.io/examsathi/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

🚀 **Live:** [https://satdevkumar021-glitch.github.io/examsathi/](https://satdevkumar021-glitch.github.io/examsathi/)

---

## What is ExamSathi?

ExamSathi helps aspirants prepare for **20+ government recruitment exams** across four states. It bridges the gap between official syllabus notifications and study material by integrating:

- Verified PYQ (Previous Year Question) archives
- Topic-wise CBT mock test engine with negative marking
- FSRS spaced repetition flash cards
- Trilingual content (Hindi · Punjabi · English)
- Study library timer, typing practice, and personalised roadmap

### Exam Coverage

| State / Board | Exams |
|---|---|
| **Punjab** | ETT, Master Cadre (SST/Science/Math/Punjabi/Hindi/English), PSSSB Clerk, Punjab Police SI/Constable |
| **Rajasthan** | REET L1/L2, 3rd Grade Teacher, Rajasthan Patwari, Rajasthan Police |
| **Haryana** | HTET L1/L2 |
| **Central** | CTET P1/P2, SSC CHSL, SSC CGL, SSC GD, UGC NET, Army Agniveer |

### Languages

All study content is available in **हिंदी**, **ਪੰਜਾਬੀ (Gurmukhi)**, and **English** — toggle without page reload.

---

## Features

Milestones 0–7 are complete. All features below are live in the current build.

Unlike generic exam portals, ExamSathi bridges the gap between **official government syllabus notifications** and **academic study material** by providing direct integration with state board textbooks (PSEB), central textbooks (NCERT), open-school modules (NIOS), spaced repetition flashcards, topic-wise CBT mock tests, and diagnostic candidate level evaluation.

### 🏛️ Targeted Examination Bodies & Boards
* **Punjab Government:**
  * **Education Recruitment Board (ERB):** Punjab Master Cadre (SST, Science, Math, Punjabi, Hindi, English), Lecturer Cadre, ETT (Elementary Teacher Training), PSTET.
  * **PSSSB:** Punjab Subordinate Services Selection Board (Clerk, Senior Assistant, Patwari).
  * **Punjab Police Recruitment Board:** Police Constable & Sub-Inspector (SI).
* **Rajasthan Government:**
  * **RBSE / RSMSSB:** REET (Level 1 & 2), 3rd Grade Teacher, Rajasthan Patwar, Rajasthan Police, RSMSSB Clerk.
* **Haryana Government:**
  * **BSEH / HSSC:** HTET (Level 1, 2, 3), Haryana Police Constable, Haryana Clerk.
* **Delhi & Central Police:**
  * **SSC / DP:** Delhi Police Constable, Delhi Police SI, CAPF.
* **Central Government:**
  * **CBSE / CTET:** Central Teacher Eligibility Test (Paper 1 & Paper 2).
  * **Staff Selection Commission (SSC):** SSC CHSL (10+2), SSC CGL, SSC MTS, SSC GD Constable.
  * **NTA / UGC:** UGC NET.
* **Defence & Entry Forces:**
  * **Indian Army:** Agniveer (General Duty, Technical, Clerk).

### 🚀 Key Core Features
- **CBT Mock Engine** — live countdown, OMR palette, negative marking, 5-tier diagnostic level
- **Flip Card Mode** — FSRS-rated (Again / Hard / Good / Easy) spaced repetition scheduling
- **PYQ Archive** — 20-year Punjab Master Cadre & Central past papers archive (2004–2024)
- **Rank Prediction** — percentile estimate with data-sufficiency guard
- **Study Roadmap** — dynamic day counter calculated from personal start date
- **Study Library** — Pomodoro focus timer (25/45/60 min), wellness nudges, authentic seat occupancy
- **Typing Practice** — Punjabi (Raavi) 300+ word benchmark passages & InScript key rules
- **Daily Content** — trilingual current-affairs cards (Hindi, Punjabi, English)
- **Admin Panel** — RBAC (Superadmin, Reviewer, Educator), passkey security, Draft→Review→Publish flow
- **Real Auth** — Supabase email/password, Google OAuth, guest mode, and password reset flows
- **SEO & Compliance** — per-page metadata, accessible viewport, sitemap.xml, robots.txt, Privacy Policy, Terms of Service, About

---

## 📚 Complete Engineering Documentation (`/docs`)

Comprehensive architectural and engineering specifications:

| Document | Purpose & Contents |
| :--- | :--- |
| **[`docs/AUDIT.md`](docs/AUDIT.md)** | Phase 0 verification report & exhaustive 16-bug register with root causes and fixes. |
| **[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)** | Target system architecture (Next.js PWA, Supabase Postgres vs Firebase, AI gateway, low-end device optimizations). |
| **[`docs/DATA_MODEL.md`](docs/DATA_MODEL.md)** | Database ERD, complete SQL DDL migrations with RLS policies, indexes, and server-authoritative scoring view. |
| **[`docs/API.md`](docs/API.md)** | Typed REST and RPC API specifications with request/response schemas for CBT scoring, auth, and AI. |
| **[`docs/AI_PIPELINE.md`](docs/AI_PIPELINE.md)** | PDF-to-MCQ parsing, semantic chunking, deduplication, JSON schema validation, and cost caps. |
| **[`docs/ROADMAP.md`](docs/ROADMAP.md)** | Multi-milestone delivery timeline, sprint breakdown, and risk mitigation. |
| **[`docs/SECURITY.md`](docs/SECURITY.md)** | Threat model, OWASP Top 10 defenses, Content Security Policy (CSP), and DPDP Act 2023 compliance. |
| **[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)** | Production deployment, Vercel 1-click hosting, Supabase PostgreSQL, and Gemini AI vision runbook. |
| **[`docs/TESTING.md`](docs/TESTING.md)** | Playwright E2E suite, unit test matrix, and CI test execution instructions. |
| **[`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md)** | Primary source citations (NCERT, PSEB, ERB gazettes), PYQ authenticity, and Gurmukhi/Devanagari standards. |
| **[`docs/ADSENSE_CHECKLIST.md`](docs/ADSENSE_CHECKLIST.md)** | Google AdSense monetization readiness, student-focus ad placement policy, and Core Web Vitals. |
| **[`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)** | Contributor guidelines, code standards, and PR process. |

---

## ⚡ Quick Start Setup (Under 10 Minutes)

Get ExamSathi running locally in under 10 minutes:

```bash
# 1. Clone repository
git clone https://github.com/satdevkumar021-glitch/examsathi.git
cd examsathi/examsathi-web

# 2. Install dependencies (Node.js 20+ recommended)
npm install

# 3. Start local development server
npm run dev
# -> Local server live at http://localhost:3000

# 4. Run automated E2E tests (Chromium headless)
npx playwright test

# 5. Build production static bundle
npm run build:static
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| State | Zustand |
| Auth | Supabase Auth (email + Google OAuth) |
| Database | Supabase (Postgres) — optional, see below |
| Hosting | GitHub Pages (current) · Vercel (production) |
| AI (planned) | Google Gemini 1.5 Pro via Supabase Edge Functions |

---

## Quick Start (under 10 minutes)

### Prerequisites

- **Node.js 18+** — check with `node -v`
- **git**

### 1. Clone the repository

```bash
git clone https://github.com/satdevkumar021-glitch/examsathi.git
cd examsathi/examsathi-audit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

> **Supabase is optional for local development.** The app runs fully in guest mode without it — all mock tests, flash cards, lessons, and the roadmap work offline. Only real sign-in/sign-up requires Supabase credentials. See [docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md) to connect a real backend.

### 4. Start the dev server

```bash
npm run dev
```

### 5. Open the app

Navigate to [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

Use **Continue as Guest** on the login page — no account needed to explore all features.

---

## Configure Supabase (optional — for real auth)

Real sign-up, login, streak persistence, and user data storage require a Supabase project.

See **[docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md)** for the complete setup walkthrough:
- Create a free Supabase project
- Copy your `SUPABASE_URL` and `SUPABASE_ANON_KEY` into `.env.local`
- Run the DB migrations
- Configure Google OAuth redirect URLs

Without these, the app operates in static mode — all features work, data is stored in `localStorage`.

---

## Deployment

### GitHub Pages (automatic)
Push to the `main` branch — the CI/CD workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.

**Prerequisites:**
1. Go to your GitHub repo → Settings → Pages
2. Set Source to **GitHub Actions**
3. Add optional Supabase secrets: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

The site will be live at: `https://YOUR_USERNAME.github.io/examsathi/`

### Vercel (recommended for full-stack)
1. Connect your GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Set `NEXT_PUBLIC_BASE_PATH` to empty string (Vercel serves from root)
4. Deploy — Supabase auth and API routes will work

> **Why Vercel over GitHub Pages?** Vercel supports server-side API routes needed for the AI proxy and secure scoring endpoint. See [docs/DECISIONS.md — ADR-005](docs/DECISIONS.md) for the full reasoning.

---

## Project Structure

```
examsathi-audit/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (auth)/            # Login, Register, Forgot Password
│   │   ├── (dashboard)/       # All protected app pages
│   │   ├── about/             # About page
│   │   ├── privacy/           # Privacy Policy (DPDP Act)
│   │   └── terms/             # Terms of Service
│   ├── components/
│   │   ├── layout/            # BottomNav, LanguageToggle
│   │   └── ui/                # FlipCard, StreakBadge, MockTestBottomSheet
│   └── lib/
│       ├── auth.ts            # Legacy localStorage auth (guest mode)
│       ├── hooks/             # useAuth — Supabase real-time auth state
│       ├── scoring.ts         # Pure scoring functions (server-authoritative ready)
│       ├── srs.ts             # FSRS-inspired spaced repetition algorithm
│       ├── store.ts           # Zustand UI state
│       ├── supabase/          # Supabase client factory
│       └── data/              # All static data (exams, questions, lessons)
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── ads.txt
└── docs/
    ├── AUDIT.md               # Bug register — all 10 bugs found and fixed
    ├── ARCHITECTURE.md        # Current and target system architecture
    ├── ROADMAP.md             # Completed and upcoming milestones
    ├── DECISIONS.md           # Architecture Decision Records (ADRs)
    └── SUPABASE_SETUP.md      # Step-by-step Supabase configuration guide
```

---

## Documentation

| Document | Description |
|---|---|
| [docs/AUDIT.md](docs/AUDIT.md) | Full bug register — 10 bugs, root causes, and fixes |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | System architecture, tech stack decisions, security model |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Completed milestones and upcoming work |
| [docs/DECISIONS.md](docs/DECISIONS.md) | Architecture Decision Records (ADRs) |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

**Content contributions** (new questions, lesson corrections, PYQ verification) are especially welcome. Please include a source link for any factual claim.

Before submitting code, run:

```bash
npm run build   # must pass with zero TypeScript errors
```

---

## License

This project is licensed under the **[MIT License](LICENSE)** — free and open for educational and commercial adaptation.

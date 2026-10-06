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

- **CBT Mock Engine** — live countdown, OMR palette, negative marking, 5-tier diagnostic level
- **Flip Card Mode** — FSRS-rated (Again / Hard / Good / Easy) spaced repetition scheduling
- **PYQ Archive** — 10-year Punjab Master Cadre past papers
- **Rank Prediction** — percentile estimate with data-sufficiency guard
- **Study Roadmap** — dynamic day counter from your personal start date
- **Study Library** — Pomodoro timer (25/45/60 min), wellness nudges, seat occupancy
- **Typing Practice** — Punjabi (Raavi) and English WPM simulator with official benchmark
- **Daily Content** — trilingual current-affairs card (Republic Day, Gandhi Jayanti, etc.)
- **Admin Panel** — content stats, static-mode banner, access-restricted for non-admins
- **Real Auth** — Supabase email/password, Google OAuth, guest mode, OTP password reset
- **SEO** — per-page metadata, sitemap.xml, robots.txt, Privacy Policy, Terms of Service, About

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

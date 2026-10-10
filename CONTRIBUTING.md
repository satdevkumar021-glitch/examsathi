# Contributing to ExamSathi

Thank you for helping make exam preparation free and better for everyone!

## Ways to Contribute

### 1. Add Questions
Questions go in `src/lib/data/questions/`. Each question must have:
- A unique `id` (format: `q-TOPIC-NNN`)
- Text in Hindi (`hi`) — Punjabi and English strongly preferred
- All 4 options with plausible distractors
- One and only one correct answer
- An explanation with source citation
- A `year` field (use the actual PYQ year, or current year for new questions)

### 2. Add Lessons
Lessons go in `src/lib/data/lessons/`. Follow the pattern in any existing file.

### 3. Report a Bug
Open a GitHub Issue with: steps to reproduce, expected vs actual, and the relevant file/line if known.

### 4. Add an Exam
To add a new exam (NO code change needed):
1. Add a new entry in `src/lib/data/exams.ts` following the existing `Exam` interface
2. Add question files in `src/lib/data/questions/`
3. Add lesson files in `src/lib/data/lessons/`
4. That's it — routing and pages handle it automatically

## Code Style
- TypeScript strict mode — no `any` unless unavoidable
- Functional components only, no class components
- CSS via Tailwind classes only — no inline styles
- Every user-facing number must come from real data

## Pull Request Process
1. Fork the repo and create a branch from `main`
2. Run `npm run build` — it must pass with zero TypeScript errors
3. Fill in the PR template
4. One logical change per PR

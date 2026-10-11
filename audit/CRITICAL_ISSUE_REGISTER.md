# Critical Issue Register
**Audit date:** 2026-10-11 · HEAD `3262bfd` · v2.6.0  
**Scale:** P0 = false/harmful to students now · P1 = missing core content · P2 = data hygiene · P3 = enhancement  
**Effort:** S < 1h · M 1–4h · L 1–3 days · XL > 3 days or blocked on external source  

---

## P0 — Misleading Student-Facing Claims (Fix Before Advertising)

| ID | Title | Evidence | Status | Effort |
|---|---|---|---|---|
| P0-A | **"20-Yr PYQ Archive" homepage badge is false** — 0 verified-PYQ items in codebase | `grep -r "verified-PYQ"` = 0 hits | **FIXED** — `src/app/page.tsx` L80 changed to "Year-Tagged / Practice Qs (unverified source)" | ✅ |
| P0-B | **"600+ Authentic MCQs" homepage badge is false** | Coverage audit total | **FIXED** — `src/app/page.tsx` L84 changed to "11,000+ Practice Questions" | ✅ |
| P0-C | **`twenty_year_pyqs.ts` year tags present authored questions as PYQ archive** | File inspection | **FIXED** — Added explicit `IMPORTANT — NOT a verified PYQ archive` header comment to file. Mock page heading changed to "Practice Portal". | ✅ |
| P0-D | **Punjab Master Cadre Math/Punjabi/Hindi/English provenance** — previously `verified-official` with homepage URL only | `official-provenance.ts` L126/161/196/231 | **DONE** (prior commit `3262bfd`) — confirmed `unresolved-verification` | ✅ |
| P0-E | **REET tracks: `unresolved-verification` provenance but shown as full study courses** | `official-provenance.ts` L269/296/323 | **OPEN** — UI needs to show source-unavailable notice; requires UI change or PDF acquisition | M |
| P0-F | **Duplicate `rajasthan-police` AND `rajasthan-police-constable`** — two separate catalogue entries for what may be the same post | SYLLABUS_COVERAGE rows 21 & 24 | **OPEN** — requires source document to confirm if they represent distinct posts/years | M |
| P0-G | **Army Agniveer 3-way split** — `army-agniveer` parent + `army-agniveer-gd` + `army-agniveer-clerk` sub-tracks overlapping | Coverage audit JSON | **OPEN** — parent combined track retained; sub-tracks need disclaimer labels | M |
| P0-H | **ETT pedagogy questions tagged with `examId: 'ett-punjab'`** — ETT Paper B has no pedagogy section | `ett-blueprint.ts` L76 | **FIXED** — All 3 CDP items in `ett_and_clerk_pyqs.ts` changed to `examId: 'punjab-pstet'`; comments added | ✅ |
| P0-I | **No official document with page+hash for any exam** | `audit/OFFICIAL_SOURCE_REGISTER.csv` | **STRUCTURAL GAP** — requires manual PDF acquisition (BLOCKED) | XL |

## P1 — Missing Core Content for Advertised Exams

| ID | Title | Impact | Effort |
|---|---|---|---|
| P1-A | **Punjab ETT Paper B: all 100 topics below 50 questions; 0 full 50-question sets; 0 verified official paper structure** | Highest-impact Punjab exam; students get only fragments | XL |
| P1-B | **REET Level 1: 5 topics, 191 authored, 0 reviewed, no PDF** | Rajasthan's primary TET; largest aspirant base | XL (source first) |
| P1-C | **CTET Paper 1: 5 topics, 166 authored, 0 reviewed, no PDF** | All-India TET; ~2M aspirants/cycle | XL (source first) |
| P1-D | **Rajasthan 3rd Grade Teacher (Mains): 1 topic, 0 authored, 0 reviewed** | Advertised in catalogue; delivers nothing | L |
| P1-E | **Master Cadre Math/Punjabi/Hindi: microscopic question banks (≤53 items each); no syllabus PDF** | Three advertised exam tracks | XL (source first) |
| P1-F | **Negative-marking values for PSSSB Clerk, SSC tracks have no recorded source page** | Wrong scoring = wrong student practice outcomes | M (source first) |
| P1-G | **Mock timer uses 0.9 min/question generically** — REET = 1.0 min/q, some SSC tiers differ | Practising with wrong time pressure | S |
| P1-H | **No exam is OFFICIAL_MOCK_READY** — none have 150+ reviewed questions in verified section composition | Every advertised mock is `PARTIAL` or `PREVIEW` at best | XL |
| P1-I | **UTET track: 117 questions, 0 reviewed; conducting authority not verified** | May be unsupported; misleads Uttarakhand aspirants | M |
| P1-J | **`haryana-htet` duplicates `htet-l1` and `htet-l2`** — three catalogue entries for the same exam family | Learner confusion; inflated catalogue count | S |
| P1-K | **PSTET and Punjab Lecturer Cadre: 0 reviewed questions each; no source document** | Two advertised tracks deliver unreviewed content only | L |
| P1-L | **AI-generated study cards lack UI guardrail** — no label distinguishing AI draft from reviewed content | Student may treat AI content as authoritative | M |

## P2 — Data Hygiene

| ID | Title | Effort |
|---|---|---|
| P2-1 | `totalMarks` ≠ Σ sections on 9 tracks (Paper A qualifying marks incorrectly added to merit total) | M |
| P2-2 | 82 orphan question IDs not mapped to any current catalogue topic | M |
| P2-3 | `coverage-audit.json` uncommitted; working-tree version differs from HEAD | S |
| P2-4 | 47 lessons with < 3 flashcards (below useful SRS threshold) | M |
| P2-5 | `docs/verification/FINAL_EVIDENCE_REGISTER` claims "✅ Fully Mapped (11 tracks)" — superseded and incorrect | S |
| P2-6 | HI/PA translations for P0-9 ETT caveat text still pending (English-only right now) | S |

## P3 — Enhancements (After P0+P1 resolved)

- Section-balanced official mock blueprints once reviewed banks ≥ 150 per section
- Per-advertisement exam-pattern store (not just Master Cadre Science)
- CI gate: `node audit/scripts/analyze.mjs` → fail on leakage > 0
- Adaptive study plan calibration from actual student performance data
- Offline PWA: test conflict-resolution policy for cross-device Supabase sync

---

## Reproduction Evidence

| Issue | Exact reproduction command or location |
|---|---|
| P0-A, P0-B | `grep -n "20-Yr\|600+" src/app/page.tsx` → lines 80, 84 |
| P0-C | `grep -c "verified-PYQ" src/lib/data/questions/twenty_year_pyqs.ts` → 0 |
| P0-F | `grep "rajasthan-police" src/lib/data/coverage-audit.json` → two distinct entries |
| P0-G | `grep "army-agniveer" src/lib/data/coverage-audit.json` → three distinct entries |
| P1-D | `grep -A5 '"rajasthan-3rd-grade"' src/lib/data/coverage-audit.json` → authoredQuestions: 0 |
| P1-G | `grep "duration\|min.*question" src/lib/data/exams.ts` → inspect duration strings |

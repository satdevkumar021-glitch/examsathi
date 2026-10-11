# ExamSathi audit — phase 1–4 (2026-10-11)

| File | Purpose |
|---|---|
| `ALL_EXAMS_INVENTORY.csv` | All 37 catalogue exams: authority, pattern fields, evidence status, topic/pending/lesson/question counts |
| `OFFICIAL_SOURCE_REGISTER.csv` | Every source URL in the repo, with status (VERIFIED_PRIMARY_TRANSPORT_CAVEAT / MIRROR_UNVERIFIED / PUBLISHER_UNREACHABLE / CLAIMED_NOT_VERIFIED / NOT_VERIFIED / DRAFT_UNVERIFIED) |
| `EXAM_PATTERN_VERIFICATION.md` | Evidence-backed pattern compared with what the app implements |
| `ATOMIC_SYLLABUS_MAP.json` | Official heading → app topic → candidate concept, for SST, ETT, Clerk and Science. Built only from existing evidence files |
| `COMPLETE_MISSING_CONTENT_REPORT.md` | Pending topics, computed-only topics, thin banks, orphans, PYQ provenance gaps, depth leakage |
| `PRIORITIZED_FIX_BACKLOG.md` | P0–P3 items with effort |
| `DEPLOYED_VS_SOURCE_VERIFICATION.md` | Live route probes on GitHub Pages and Render |
| `data/exam-snapshot.json` | Machine snapshot that all counts are derived from |
| `scripts/` | Reproducible generators: `analyze.mjs` → snapshot; `build-inventory.mjs`; `build-atomic-map.mjs`; `pyq-check.mjs`; `depth-leak.mjs` |

Regenerate the derived files from the repo root:

```sh
node audit/scripts/analyze.mjs > audit/data/exam-snapshot.json
node audit/scripts/build-inventory.mjs
node audit/scripts/build-atomic-map.mjs
```

No official heading, notification number, PYQ provenance or completion percentage was added from memory. Values without repository evidence are recorded as NOT_VERIFIED / NOT_RECORDED.

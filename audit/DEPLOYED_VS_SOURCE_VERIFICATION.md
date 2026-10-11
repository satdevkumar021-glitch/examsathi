# Deployed vs source verification

Checked 2026-10-11 with `curl` from the audit workstation. Source: `main` @ `d1285ae` (committed 2026-10-11 08:13 +0530). It matches `origin/main`, and the working tree differs only by untracked tool directories (`.bob/`, `.openai/`, `.sites-runtime/`, `.vinext/`, `.wrangler/`, `dist/`) and this `audit/` directory.

## Deployment pipelines (from repo config)

| Target | Config | Trigger | Build |
|---|---|---|---|
| GitHub Pages: https://satdevkumar021-glitch.github.io/examsathi/ | `.github/workflows/deploy.yml` | push to `main` | `npm ci` → `npm test` → static export (`NEXT_PUBLIC_BASE_PATH=examsathi`) |
| Render: https://examsathi-sxj3.onrender.com/ | `render.yaml` (Blueprint, free plan) | Render auto-deploy (dashboard setting, not visible in repo) | `npm ci && npm run build`, `npm run start` |

## Route probe results

| Path | GitHub Pages | Render | Source has route? |
|---|---:|---:|---|
| `/` | 200 | 200 | yes |
| `/exams/punjab/` | 200 | 200 | yes |
| `/coverage/` | 200 | 200 | yes |
| `/mock-test/` | 200 | 200 | yes |
| `/syllabus/punjab-ett/` | 200 | 200 | yes |
| `/syllabus/punjab-master-cadre-sst/` | 200 | **404** | yes (`src/app/(dashboard)/syllabus/punjab-master-cadre-sst/page.tsx`) |
| `/syllabus/punjab-master-cadre-science/` | 200 | **404** | yes |
| `/study/punjab-ett/ett-science/` | 200 | 200 | yes |
| `/study/punjab-master-cadre-science/science/` | 200 | 200 | yes |
| `/study/punjab-ett/` (no subject) | 404 | 404 | no: only `study/[exam]/[subject]` exists, so expected |
| `/api/health/` | n/a (static) | 200 `{"status":"ok"}` | yes |

## Findings

1. **Render is behind `main`.** The two Master Cadre blueprint syllabus routes added in `448e41a` return 404 on Render but 200 on Pages. Render is serving a build older than `448e41a`. The previous audit (`docs/verification/LIVE_VS_LOCAL_AUDIT_2026-10-10.md`) recorded the Render deployment at `cc564c4`. The exact Render commit cannot be read from the repository. Check the Render dashboard → Events.
2. **GitHub Pages serves the blueprint pages**, including the strings flagged P0 in this audit. Both were seen in live HTML: "ExamSathi provides complete coverage of all 4 subjects" and "all 18 Science topics include trilingual lessons, flip cards, and 10+ Topic Mini Mock MCQs". So the P0 copy is live on Pages and will be corrected by the next push.
3. **Both sites show a stale coverage snapshot.** `/coverage/` renders "Audited 2026-10-09" from `src/lib/data/coverage-audit.json`, which is not regenerated during the build. The problem is in source, not deployment (P2-4).
4. I could not determine whether Pages is at exactly `d1285ae`: the `gh` CLI is unavailable on this machine, so I could not read Actions run history. Its route set matches `main`.

## Action

* After pushing the P0 batch, confirm the Pages Actions run succeeds, then re-probe the two blueprint routes for the corrected wording.
* Trigger a Render manual deploy, or check auto-deploy, so Render reaches `main`. Then re-probe `/syllabus/punjab-master-cadre-sst/` for 200.

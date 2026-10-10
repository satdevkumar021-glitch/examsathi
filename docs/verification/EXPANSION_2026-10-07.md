# ExamSathi expansion and service setup — 7 October 2026

## Implemented

- Browser OCR for PNG/JPEG/WebP and opt-in scanned PDF pages, with English/Hindi/Punjabi language selection, progress, cancellation, timeout, file/pixel/page limits and worker cleanup. Runtime assets are served by the app; language data downloads on first use. Recognized text is reviewed before question generation.
- Browser successfully recognized a disposable printed English study photo and a scanned PDF. Photo text generated four source-based recall MCQs. Handwriting and Hindi/Punjabi OCR quality are not certified by these English fixtures.
- Manual cross-device cloud study backup/restore for the same authenticated Supabase account. Transfers include allowlisted study data, exclude credentials/identity, require explicit user action and protect against account changes and concurrent saves. Restoring replaces local records rather than merging them. Cloud maximum 2 MB; local JSON backup remains available.
- Applied additive Supabase migration `202610070002_study_backup.sql`. Existing study tables/data were not replaced. RLS restricts reads to the owner; anonymous access and direct authenticated writes are revoked; save RPC identifies the caller and checks expected version.
- Added Render free-service configuration and a liveness endpoint. Dynamic hosting defaults to the domain root; Pages keeps its repository prefix. Browser asset preparation now runs for both builds.
- Added seven checked original NCERT chapter PDFs, bringing curated chapter documents to ten. Titles were checked in publisher PDFs: Nationalism in India, Chemical Reactions and Equations, Acids/Bases/Salts, Life Processes, Light, Real Numbers and Power-sharing.
- Elementary mathematics can offer 50 distinct computed practice variants. Arithmetic prompts now have Hindi/Punjabi text rather than English duplicated as translations. This does not establish full subject coverage.
- Syllabus practice buttons show available sizes and do not launch a zero-question set.

## Checks

27 regression tests pass, including OCR cancellation/cleanup, PDF page-limit rejection, cloud account isolation/version conflicts and arithmetic variants. ESLint and TypeScript pass. Static production export passes. A root-domain dynamic production build passed before the cloud backup UI addition; final hosting validation is recorded separately.

Production dependency audit remains zero findings. Five development toolchain findings remain upstream. Generated third-party OCR runtime is excluded from source lint and is covered by the package audit.

## Still pending

Full reviewed syllabus lessons and at least 50 unique relevant questions for every topic, official PYQ/answer-key provenance, complete topic video curation, automatic cloud merging, server admin publishing/review, actual email sender/domain verification, Google OAuth and full device/accessibility/authentication matrix. These are not represented as completed. Render backend and real authenticated cloud generation are live; SMTP and Google OAuth remain incomplete.

## Live account verification — 8 October 2026

- Existing Supabase login restored on Render profile; authenticated backup read and empty backup v1 save passed. Restoring v1 reloaded the profile with authentication preserved. This is a same-browser check, not a second-device certification.
- Render health returned `{"status":"ok"}`. Deployed cloud generator produced five Hindi draft MCQs from public Gandhi notes using the configured Gemini provider. Each answer matched its source excerpt.
- Started generated practice, answered five questions, submitted and verified 5/5 marks, 100% accuracy and answer explanations. This disposable attempt remains in the local study vault.
- Follow-up fixes make the header show Profile when signed in and route custom-note result links to Notes Practice.
- Evidence: `cloud-ai-live.png`, `cloud-ai-results.png`, `cloud-backup-rls.png`.

Final follow-up commits e7c7a83 and cadc057 deployed successfully to Pages and Render. Live browser verified Profile header, Notes Practice result links, neutral Answer explanation wording, and persisted spaced-repetition status after reload. Latest Render deployment: dep-db3gbv79e2qs7387qu5g. Proof: cloud-ai-final.png.

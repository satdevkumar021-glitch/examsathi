# Exam Saathi: architecture and learner experience

Updated 5 October 2026. The implementation now uses a Worker frontend/server, D1 account storage, dispatch-owned Sign in with ChatGPT, published multilingual lessons, and a draft/review/publish teacher studio. The original static implementation described below is the baseline audit; the detailed entity model and native apps are future work.

## Implemented release

- Server: authenticated API routes, per-user notes/progress/bookmarks/attempts, server grading, same-origin writes, optimistic concurrency, teacher ownership and admin approval.
- Accounts: platform Sign in with ChatGPT; first sign-in creates the learner profile. Provider handles registration/recovery. Admin is bound to the verified Site owner email. App roles never grant Site audience access.
- Content: 29 Punjab Master Cadre SST foundation lessons plus 10 preserved foundational lessons. All lesson prose, questions and explanations support Hindi/Punjabi/English. Historical 2022 syllabus is explicitly dated; this is not complete recruitment coverage.
- Frontend: readable native-script fonts, themes/text size, topic practice, flip cards, resource embeds/favorites, typing difficulty, installable PWA. PWA is not a native Android/iOS app and does not cache private study records offline.
- Editorial data: five D1 tables in `db/schema.ts`; base content JSON plus latest published revisions. Teachers submit only their own drafts; admin reviews and publishes. There is no file-upload service; external HTTPS resource links are supported.
- Validation: trilingual question structure, unique IDs/options, server account state persistence, anonymous/learner access rejection, origin rejection, invalid drafts, draft-review-publication and server answer grading tested locally.


## Current implementation and primary gaps

The current Site is four static files in `dist`: app.js, data.js, style.css and index.html. Hash routes and multilingual `L(en, hi, pa)` content support a sensible state → exam → subject → lesson flow. Notes/progress are localStorage records partitioned by the hard-coded `wife` profile or another learner profile. This is not authentication: anyone with the browser can select another profile. Progress is measured against the global lesson count instead of the chosen syllabus, and generic lessons can be attached to advanced subject routes without a verified topic mapping. SST has History and Geography outlines with zero detailed lessons. One generic question per lesson cannot form a meaningful practice bank.

Preserve the existing flow. Make Hindi/Punjabi language selection the first accessible control; replace ambiguous “Learner 1/2” with named device profiles until real accounts exist, explicitly labelled as device-only. Display verified lesson count versus official syllabus leaf count for the selected recruitment edition, never imply an outline is a completed course.

## Product patterns grounded in official products

DIKSHA organizes textbooks and courses, allows guest and signed-in access, and supports searching and textbook-linked resources. Adopt chapter-linked resource cards and visible source metadata, not a directory of generic homepages. Sources: [DIKSHA courses](https://merge.diksha.gov.in/help/getting-started/courses/index.html), [Explore DIKSHA](https://merge.diksha.gov.in/help/getting-started/explore-diksha/index.html).

Khan Academy documents self-paced mastery tracking across courses, devices and languages; mastery requires practice content. Adopt separate “read” and “demonstrated knowledge” indicators, explanation-led answers, review of weak topics, and progress by syllabus topic. Sources: [Self-paced mastery](https://support.khanacademy.org/hc/en-us/articles/360007253831-Using-self-paced-practice-and-Mastery-in-the-classroom), [Courses with mastery](https://support.khanacademy.org/hc/en-us/articles/360014675332-Which-courses-have-mastery-enabled).

Testbook's own site describes exam-specific mock/test series and chapter tests. Adopt topic, section and full-exam modes with recruitment-specific timings/marking; do not copy proprietary questions. Source: [Testbook](https://testbook.com/).

## Learner surface

Use calm, low-distraction reading pages with 18px body text, Devanagari/Gurmukhi-supporting fonts, generous line height, 65–75 character readable columns, keyboard operation and responsive tap targets. Do not hide reading behind marketing panels.

Each real lesson should contain learning goals, required background, structured explanation, examples or timeline/map where relevant, frequent misconceptions, full notes, 5–10 recall points, a short summary, topic-linked official chapter/PDF and selected video, and a bank of explained questions. A language choice must translate the full lesson, questions, explanations and resource descriptions. Retain original source language labels so an English PDF is not presented as Punjabi. Hindi/Punjabi translations need subject review; translated technical terms should show a short parenthetical English equivalent only where useful.

Lesson tabs: पढ़ें/ਪੜ੍ਹੋ, याद करें/ਦੁਹਰਾਓ, प्रश्न अभ्यास/ਸਵਾਲ ਅਭਿਆਸ, स्रोत/ਸਰੋਤ, मेरे नोट्स/ਮੇਰੇ ਨੋਟਸ. Flashcards should have think → reveal → again/good controls; do not label flashcards “Flipkart”. Bank size reflects reviewed content; avoid recycling one question into artificial volume. Mini mocks should use the selected topic's bank and avoid duplicate question ids in one attempt. Full mocks require the actual exam specification.

Provide favorites for lessons, individual resources and questions. Notes are anchored to stable topic/lesson ids and remain available after lesson revisions. Typing levels should vary text length, punctuation, numeral use and speed target; report gross/net WPM and accuracy with the calculation visible. Punjabi input/font requirements must match the exact recruitment notice; generic typing practice is not an official qualifying test simulation.

## Supported Sites account/storage path

The installed Sites references support dispatch-owned Sign in with ChatGPT (SIWC), not an invented app email/password system. Authenticated server requests receive stable `oai-authenticated-user-id` and email headers. The bundled server-only helpers in `app/chatgpt-auth.ts` are `getChatGPTUser()`, `requireChatGPTUser(returnTo)` and `chatGPTSignInPath(returnTo)`. Browser sign-in must be a top-level `<a target="_top">` navigation to the platform-owned path, never fetch/XHR; `/signin-with-chatgpt`, `/callback` and `/signout-with-chatgpt` must not be reimplemented. Protected server pages use per-request rendering. API write handlers independently reject missing identity. An authenticated ChatGPT user is not automatically a teacher, admin or workspace member.

For Site-backed implementation, migrate the static Site to the platform starter/server only through the owner workflow. D1 stores profiles, notes, bookmarks, progress, attempts and editorial records; R2 stores permitted uploads and export files. Browser storage remains for preferences and unsynced temporary drafts only. Ownership derives exclusively from trusted server identity; never accept a user id, role, email or profile selector as authority from the browser. Query notes/bookmarks using BOTH resource id and authenticated owner id. Platform access policy and explicit member allowlists establish private audience restrictions.

Registration/account recovery on this path belong to the ChatGPT identity provider. Label the UI “Sign in with ChatGPT” and account help accurately. Do not display local password fields, pretend email delivery, mock login or a fake forgot-password success. For independent email/password registration and recovery, the owner must confirm a currently supported external auth path before implementation; the installed Sites instructions explicitly require this. If that later path is supported, use a managed identity provider, verified email, secure HttpOnly session cookies, short-lived single-use recovery tokens, rate limits and neutral responses; never store raw passwords. Do not assume external auth is supported by the present Site.

References read: `/Users/satdevkumar/.codex/plugins/cache/openai-curated-remote/sites/0.1.75/skills/sites-building/references/authentication.md`, `persistence-and-storage.md`, `starter-capabilities.md`.

## Server/data model and roles

Use a modular monolith first: responsive frontend + Worker server routes + D1 + optional R2. Keep content, assessment and learner ownership logic separate modules without creating premature microservices.

Core entities: `exam`, `recruitment_edition`, `syllabus_source`, `syllabus_topic(parent_id)`, `lesson`, `lesson_revision`, `lesson_translation(locale,review_status)`, `resource(url,language,license,source_checked_at,embed_status)`, `question`, `question_translation`, `question_topic`, `paper`, `paper_question`, `profile`, `role_assignment`, `note`, `bookmark`, `progress`, `attempt`, `attempt_answer`, `review_event`. Topic/question reuse is many-to-many; exam mapping belongs to a specific edition. Official prior-year questions carry exact exam/date/paper/question number and source, while original practice questions are visibly labelled original. Stable ids and versioned revisions keep results meaningful after content updates.

Learner: reads published material and manages own state. Contributor/teacher: creates drafts and submits changes but cannot self-publish or read other learners' private notes. Reviewer: checks syllabus alignment, factual explanations, answer keys, translations and rights before publishing. Admin: manages allowlisted roles and retraction; authorization is server-side on every mutation. Initial admin setup uses an explicit server-side allowlist or a trusted owner provisioning step; never “first registrant becomes admin”.

Editorial flow: draft → submitted → reviewed → published → superseded/retracted, with immutable review history and author attribution. No silent publishing of unreviewed translations. Resource URLs must be validated against safe protocols; uploaded HTML/SVG and attachments must never execute under the app origin. Restrict upload size/type and external embeds. Keep private material inaccessible through guessable ids. Rendering notes uses plain text or sanitized limited Markdown.

Question delivery should separate unanswered items from answer/explanation retrieval where high-stakes scoring matters. Store chosen question order, syllabus edition, marking rules and answer-key version in an attempt; score on the server. Search uses reviewed titles, synonyms and local-language metadata. Filter resources by relevant lesson rather than global portals.

## Android/iOS and offline

Start with the same responsive web product, then a PWA manifest, icons and a service worker for the application shell plus explicitly downloaded public lessons. Never cache authenticated APIs/private notes indiscriminately or expose one account's cached notes after sign-out. Show downloaded version/date and online/offline state. On iOS installation uses supported home-screen behavior; Android/browser installation is conditional on browser capability. A PWA is not a shipped Play Store or App Store application. Native wrappers/apps can follow only after the shared API, offline conflict handling and account lifecycle work reliably. Embedded videos normally require connectivity; provide text notes as the robust fallback.

## Practical release priorities

1. Complete and verify Punjab Master Cadre SST syllabus mapping for the identified edition; publish actual Hindi/Punjabi lessons, questions and precise sources, with coverage counts.
2. Improve lesson/practice/favorites/typing interface while retaining explicit device-only profile state if server migration is not yet complete.
3. Migrate through the Sites owner workflow to supported SIWC + D1; implement actual cross-device notes/progress, server role authorization and editorial draft/review/publish.
4. Expand lessons in measured topic batches and audit full coverage before describing any exam as complete. Add previous papers only when authentic source and answer key are checked.
5. Add verified offline/PWA support and accessibility testing. Native app distribution remains a separate delivery.

Testing should emphasize owner isolation, unauthenticated writes, learner→admin escalation, contributor publish bypass, cross-language lesson/question consistency, answer-key correctness, scoring/timer rules, failed-save draft preservation, and mobile reading. All visible scope labels must distinguish shipped behavior from this planned architecture.

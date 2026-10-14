# Punjab Clerk urgent revision pack — 11 October 2026

## Scope and content status
200 unique original AI-generated questions, not PYQs or an official-pattern full paper. Human editorial and translation review pending. No full-syllabus coverage claim; current affairs and deeper topic coverage remain incomplete.

- Static GK100 reused from existing release: Polity20, History20, Geography20, Science20, Punjab GK20.
- Reasoning/maths30, Computer/ICT30, Punjabi20, English20 new.
- All prompts/options/explanations have English, Hindi and Punjabi editions; target-language examples stay in their original language.
- Four numbered sets50 each, deterministic membership, zero cross-set overlap; each set includes all9 subject groups. GK items are shared with the separate100-question GK test, not newly counted twice.
- Results link to next numbered50; set4 shows pack exhaustion. Retakes explicitly repeat the same pack.
- Revision sheets/cards are practice explanations, not complete teaching lessons.
- Welcome guide suppressed on mock and results routes, including delayed mount/navigation.

## Evidence
Release branch codex/clerk-gk-live, baseline8dd6853. 48 unit tests pass; lint and Next production build pass. Mobile390×844 end-to-end: set1 launch50, language switches, submit, nextset2 launch50, no blocking onboarding/no page errors. Separate GK100/topic20 search regression passes.

The user called the exam PPSC; existing app track is PSSSB Punjab Clerk. Clarification asked, provisional label Punjab Clerk retained. Official current PDF URL discovered: https://sssb.punjab.gov.in/wp-content/uploads/2026/02/Clerk.pdf ; retrieval timed out. This is an unresolved source check, not verified evidence for current pattern. No new official rules asserted.

AI content checks found and corrected ambiguous language wording. Maths answers recomputed. These checks are not human certification.

No database migrations or learner data changes. Deploy specific commit on existing free Render service; previous release can be redeployed as rollback.

## Live verification
Render deployed c397197d5cd4b86653d274c62468fa4a0a679e12 successfully on11 October2026 (duration2m18s). Public guest mobile flows PASS: Set1(50) -> submit -> Next50 -> Set2(50), Hindi/Punjabi switches, welcome guide suppressed, no page errors. GK100 and Science20 public regressions PASS. Raw evidence: CLERK_200_UI.json and GK_MULTILINGUAL_UI.json.

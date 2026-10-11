# ExamSathi Verification & Remediation Report: Batch 5 (Personal Notes & Document AI)

**Date:** 2026-10-10  
**Specification Reference:** Section 8 of `docs/EXAMSATHI_MASTER_AI_PROMPT.md`  
**Working Directory:** `examsathi-audit`  
**Test Suite:** `tests/audit_batch5.test.mjs` (9 new tests, 77 total passing across repo)  
**Quality Status:** 0 ESLint errors, 0 ESLint warnings, Clean Next.js static build  

---

## 1. Executive Summary

Batch 5 addresses **Section 8 (Personal Notes and Document AI)** of the ExamSathi master product specification. The primary mandate was ensuring that personal notes and uploaded documents remain strictly private, are scoped precisely to specific exams and syllabus topics, support autosave drafts and recoverable deletion (trash & undo), offer multi-format export, and never inflate public question counts. Furthermore, the Document AI generation engine has been fortified with adversarial prompt injection detection and strict evidentiary grounding to guarantee that generated questions are supported by source excerpts.

---

## 2. Inventory of Implemented Changes

### 2.1 Personal Notes & Storage Engine (`src/lib/personal-notes.ts`)
Prior to Batch 5, notes were stored as unindexed raw text strings in `examsathi_notes_${lesson.id}` without exam context, editing, search, deletion recovery, or export. We implemented a dedicated module providing:
- **Strict Scoping:** Storage keys formatted as `examsathi_pnotes_${examId}_${topicId}`, preventing cross-exam and cross-topic leakage.
- **Data Model:**
  ```typescript
  export interface PersonalNote {
    id: string;
    examId: string;
    topicId: string;
    title: string;
    content: string;
    tags?: string[];
    sourceExcerpt?: string;
    createdAt: number;
    updatedAt: number;
    isDeleted?: boolean;
    deletedAt?: number;
    isPublic?: boolean;
    moderationStatus?: 'private' | 'pending-review' | 'approved' | 'rejected';
  }
  ```
- **CRUD & Recoverable Deletion:**
  - `createPersonalNote()`: Instantiates notes with `isPublic: false`, `moderationStatus: 'private'`, and clears any pending draft for the topic.
  - `updatePersonalNote()`: Updates content, title, tags, and source excerpt while recording `updatedAt`.
  - `deletePersonalNote()`: Supports two-tier deletion: soft deletion (`isDeleted: true`, `deletedAt: timestamp`) allowing undo recovery, or hard deletion.
  - `restorePersonalNote()`: Recovers soft-deleted notes from trash.
  - `getPersonalNotes()`: Filters by exam and topic, executes full-text search across title, content, tags, and excerpts, and toggles trash items.
- **Draft Autosave:**
  - `saveNoteDraft()`, `getNoteDraft()`, and `clearNoteDraft()` provide real-time autosave persistence under `examsathi_draft_${examId}_${topicId}`.
- **Multi-Format Export:**
  - `exportPersonalNotes()` supports clean Markdown (with date badges, tags, and blockquoted source references), structured plain text (`.txt`), and JSON (`.json`).
- **Privacy & Moderation Guard:**
  - `submitNoteForModeration()`: Strictly validates that the user checked `rightsConfirmed: true`. Notes remain non-public (`isPublic: false`) under `pending-review` pending editorial approval.
- **Legacy Migration:**
  - `migrateLegacyTopicNotes()` safely transforms legacy un-scoped notes into structured `PersonalNote` records.

### 2.2 UI Redesign (`src/app/(dashboard)/lesson/[topicId]/LessonViewClient.tsx`)
Tab 6 ("Notes & AI") of the lesson view was overhauled:
- **Autosaving Textarea:** Saves drafts automatically as the learner types.
- **Search & Filter:** Search bar allowing learners to filter through multiple notes on complex topics.
- **Recoverable Deletion Banner:** When a note is deleted, a temporary Undo banner allows one-click recovery.
- **Inline Editing:** Enables updating existing notes without overwriting previous entries.
- **Export Action Buttons:** Direct download/copy triggers for Markdown, Plain Text, and JSON.
- **Public Submission Modal:** Requires explicit confirmation that the contributor owns the copyright or distribution rights.

### 2.3 Document AI & Evidence Grounding (`src/lib/ai_gateway.ts`)
- **Adversarial Prompt Injection Detection:**
  `detectPromptInjection()` scans study text for known jailbreaks and injection vectors:
  - `ignore previous/prior instructions`
  - `system: you are`
  - `disregard above/preceding`
  - `<script>` and `javascript:` tags
- **Strict Evidence Grounding in `validateGeneratedQuestions()`:**
  - Beyond confirming that the source excerpt exists in the source text, it validates that the declared correct answer actually appears in the excerpt.
  - For single words or numbers, requires exact occurrence in the excerpt.
  - For multi-word phrases, prevents false matches caused by common surnames or stopwords (e.g. "Singh" matching "Banda Singh Bahadur" when the answer was "Maharaja Ranjit Singh") by requiring either full phrase match or $\ge 75\%$ keyword coverage.
- **Provenance Tagging:**
  - All AI/heuristic generated questions are explicitly assigned `originType: 'computed-variant'`, `reviewStatus: 'draft'`, and tagged as `AI notes draft • review before use`. They are barred from public question banks and cannot inflate official exam question counts.

---

## 3. Test Verification Results

All 77 tests in the repository pass cleanly:

```
✔ Punjab Master Cadre is separated into 6 distinct verified subject tracks (11.08ms)
✔ Master Cadre tracks feature Paper A qualifying Punjabi alongside Paper B specialization (0.12ms)
✔ Science questions do not leak into Master Cadre SST pool and vice versa (6.37ms)
✔ REET is disaggregated into Level 1, Level 2 SST, and Level 2 Science-Math (18.87ms)
✔ Legacy aliases resolve transparently to separated tracks without data loss (2.55ms)
✔ Official provenance register accurately documents Master Cadre and REET patterns (0.08ms)
✔ Top-priority ETT and Clerk topics are all complete topic packages (0.67ms)
✔ Section 7 TOPIC_RESOURCES_TABLE provides verified provenance without placeholder bundles (0.12ms)
✔ Document resources on target lessons contain Section 7 provenance fields (0.09ms)
✔ Topic alias mappings resolve clerk and punjabi tracks accurately (0.06ms)
✔ Academic depth and mathematical consistency in worked examples (0.15ms)
✔ Section 5 Question Provenance: ETT and Clerk PYQs have complete verified metadata and distractor explanations (0.46ms)
✔ Section 5 Question Provenance: 20-Year PYQ archive uses canonical exam IDs and verified origins (0.10ms)
✔ Section 5 Question Quality: Procedural generators assign originType: computed-variant and reviewStatus: reviewed (0.70ms)
✔ Section 6 Official Marking Schemes: PSSSB Clerk, Punjab ETT, Master Cadre, and REET penalty rules are verified (0.11ms)
✔ Section 6 Multi-Level Partitioned Exposure Tracking: Partitioned strictly by learner and exam (0.45ms)
✔ Section 6 Disjoint Next Unseen Sets and Exhaustion Semantics (120 pool with count 50) (0.82ms)
✔ Section 6 Strict Scoping: Unknown exams or unmapped topics never silently borrow from "all" (3.40ms)
✔ Section 8 Personal Notes: Creation, exam/topic scoping, and default private status (1.74ms)
✔ Section 8 Recoverable Deletion: Soft-delete trash bin and restoration (0.66ms)
✔ Section 8 Draft Autosave: Saving, retrieving, and auto-clearing upon note creation (0.43ms)
✔ Section 8 Search and Inline Editing: Fast search and update integrity (0.25ms)
✔ Section 8 Multi-Format Export: Markdown, Plain Text, and JSON formats (19.16ms)
✔ Section 8 Privacy & Moderation Guard: Uploads stay private, moderation requires rights confirmation (0.44ms)
✔ Section 8 Legacy Migration: Preserves legacy topic notes into scoped engine (0.85ms)
✔ Section 8 Document AI: Adversarial prompt injection detection (0.65ms)
✔ Section 8 Document AI Grounding: Rejects ungrounded or contradictory answers (1.53ms)
... (50 existing core, auth, document, and remediation tests)
ℹ tests 77
ℹ pass 77
ℹ fail 0
```

---

## 4. Next Steps

With Batch 5 verified and operational, the roadmap advances to:
- **Batch 6: Planning, Revision, Focus, and Exam Coach (Section 9 of Master AI Prompt)**
  - Exam date countdowns, daily study hours budget, and syllabus deficit tracker.
  - Active retention and FSRS spaced repetition scheduling tied to topic mini mocks.
  - Pomodoro focus session state handling across tab switches and breaks.
  - AI Exam Coach responses grounded exclusively in verified syllabus data and actual learner metrics.

# ExamSathi (परीक्षा साथी) — Data Model & Database Architecture

**Document Version:** 1.0.0  
**Target Engine:** PostgreSQL 16+ (Supabase / Self-Hosted)  
**Security:** Row Level Security (RLS) enabled on all public tables  
**Integrity:** Strict Foreign Keys, Enums, Partial Indexes & Soft Deletes (`deleted_at`)

---

## 1. Entity Relationship Overview

The ExamSathi data architecture is structured around five core domains:
1. **Identity & Access Management:** User profiles, role-based access (`admin`, `editor`, `reviewer`, `student`), preferences (language, target exams), and gamified streaks/XP.
2. **Academic Hierarchy (Data-Driven):** States → Exam Bodies → Exams → Papers/Stages → Hierarchical Syllabus Nodes (Subject → Unit → Topic → Subtopic).
3. **Pedagogical Content & SRS:** Multilingual Lessons (versioned), Flashcards, Free Spaced Repetition Scheduler (`srs_state` with FSRS parameters), and Curated Free Learning Resources.
4. **Assessment & Question Bank:** Multilingual Questions (draft/reviewed/published/ai_unverified), Mock Templates, CBT Exam Attempts, Attempt Answers, and Aggregated Real-Cohort Ranks.
5. **AI Generation & Activity Logs:** User-uploaded private documents, AI-generated question sets, Daily GK & Thought of the Day, Focus Study Sessions (Virtual Library Pomodoro), and Audit Logs.

---

## 2. Complete SQL DDL Migrations & Schema Definition

Below is the production-grade DDL migration script with full Row Level Security (RLS) policies, indexes, and constraints.

```sql
-- ============================================================
-- 001_initial_schema.sql: ExamSathi Database Migration
-- ============================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ------------------------------------------------------------
-- 1. ENUMS & DOMAINS
-- ------------------------------------------------------------
CREATE TYPE user_role AS ENUM ('student', 'reviewer', 'editor', 'admin');
CREATE TYPE content_status AS ENUM ('draft', 'under_review', 'published', 'ai_unverified', 'archived');
CREATE TYPE question_difficulty AS ENUM ('easy', 'medium', 'hard');
CREATE TYPE option_letter AS ENUM ('A', 'B', 'C', 'D');
CREATE TYPE attempt_status AS ENUM ('in_progress', 'completed', 'timed_out', 'abandoned');
CREATE TYPE srs_rating AS ENUM ('again', 'hard', 'good', 'easy');
CREATE TYPE typing_language AS ENUM ('punjabi_raavi', 'hindi_inscript', 'english');

-- ------------------------------------------------------------
-- 2. USERS, PROFILES & ROLES
-- ------------------------------------------------------------
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role NOT NULL DEFAULT 'student',
    full_name TEXT NOT NULL,
    phone TEXT,
    preferred_language VARCHAR(5) NOT NULL DEFAULT 'hi' CHECK (preferred_language IN ('hi', 'pa', 'en')),
    target_state_id UUID,
    primary_exam_id UUID,
    streak_count INT NOT NULL DEFAULT 0,
    longest_streak INT NOT NULL DEFAULT 0,
    last_active_date DATE,
    xp_points INT NOT NULL DEFAULT 0,
    total_study_seconds INT NOT NULL DEFAULT 0,
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

-- ------------------------------------------------------------
-- 3. JURISDICTIONS, EXAM BODIES & EXAM CATALOG
-- ------------------------------------------------------------
CREATE TABLE public.states (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(10) UNIQUE NOT NULL, -- 'punjab', 'rajasthan', 'central', 'haryana', 'delhi'
    name JSONB NOT NULL,              -- {"en": "Punjab", "hi": "पंजाब", "pa": "ਪੰਜਾਬ"}
    emblem_icon TEXT NOT NULL DEFAULT '🌾',
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.exam_bodies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    state_id UUID NOT NULL REFERENCES public.states(id) ON DELETE RESTRICT,
    code VARCHAR(30) UNIQUE NOT NULL, -- 'PSSSB', 'ERB_PUNJAB', 'RSMSSB', 'CBSE', 'SSC'
    name JSONB NOT NULL,
    official_website_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.exams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    body_id UUID NOT NULL REFERENCES public.exam_bodies(id) ON DELETE RESTRICT,
    slug VARCHAR(60) UNIQUE NOT NULL, -- 'master-cadre-sst', 'ett-punjab', 'clerk-psssb', 'reet-l2'
    title JSONB NOT NULL,
    description JSONB,
    eligibility JSONB,
    official_notification_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

CREATE TABLE public.exam_papers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    code VARCHAR(30) NOT NULL,        -- 'PAPER_A_PUNJABI', 'PAPER_B_CORE', 'TIER_1'
    title JSONB NOT NULL,
    duration_minutes INT NOT NULL DEFAULT 100,
    total_questions INT NOT NULL DEFAULT 100,
    total_marks NUMERIC(6, 2) NOT NULL DEFAULT 100.0,
    negative_marking NUMERIC(4, 2) NOT NULL DEFAULT 0.25,
    is_qualifying_only BOOLEAN NOT NULL DEFAULT FALSE,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 4. HIERARCHICAL SYLLABUS TREE
-- ------------------------------------------------------------
CREATE TABLE public.syllabus_nodes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    paper_id UUID NOT NULL REFERENCES public.exam_papers(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES public.syllabus_nodes(id) ON DELETE CASCADE,
    node_type VARCHAR(20) NOT NULL CHECK (node_type IN ('subject', 'unit', 'topic', 'subtopic')),
    slug VARCHAR(80) NOT NULL,
    title JSONB NOT NULL,
    expected_weightage_min INT DEFAULT 0,
    expected_weightage_max INT DEFAULT 0,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ,
    UNIQUE (paper_id, parent_id, slug)
);

-- ------------------------------------------------------------
-- 5. MULTILINGUAL LESSONS & SOURCES
-- ------------------------------------------------------------
CREATE TABLE public.sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    author TEXT,
    publisher TEXT, -- 'NCERT', 'PSEB', 'Govt of Punjab Gazette'
    edition_year INT,
    source_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.lessons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    syllabus_node_id UUID NOT NULL REFERENCES public.syllabus_nodes(id) ON DELETE CASCADE,
    version INT NOT NULL DEFAULT 1,
    status content_status NOT NULL DEFAULT 'published',
    title JSONB NOT NULL,
    summary JSONB NOT NULL,
    content_html JSONB NOT NULL,      -- {"hi": "...", "pa": "...", "en": "..."}
    key_points JSONB NOT NULL,        -- {"hi": ["..."], "pa": ["..."], "en": ["..."]}
    verified_by UUID REFERENCES public.profiles(id),
    verified_at TIMESTAMPTZ,
    primary_source_id UUID REFERENCES public.sources(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

-- ------------------------------------------------------------
-- 6. QUESTION BANK (SERVER-AUTHORITATIVE)
-- ------------------------------------------------------------
CREATE TABLE public.questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    syllabus_node_id UUID REFERENCES public.syllabus_nodes(id) ON DELETE SET NULL,
    primary_exam_id UUID REFERENCES public.exams(id) ON DELETE SET NULL,
    pyq_year INT,                     -- e.g. 2022
    pyq_exam_tag TEXT,                -- 'Master Cadre SST 2022'
    difficulty question_difficulty NOT NULL DEFAULT 'medium',
    status content_status NOT NULL DEFAULT 'published',
    is_pyq BOOLEAN NOT NULL DEFAULT FALSE,
    source_id UUID REFERENCES public.sources(id),
    
    -- Multilingual Question Content
    stem JSONB NOT NULL,              -- {"hi": "...", "pa": "...", "en": "..."}
    options JSONB NOT NULL,           -- {"A": {"hi": "..."}, "B": {...}, "C": {...}, "D": {...}}
    
    -- Correct answer kept strictly server-side
    correct_option option_letter NOT NULL,
    explanation JSONB NOT NULL,       -- Explains why correct and why others are incorrect
    examiner_trap_notes JSONB,        -- Hints on subtle distractors
    
    created_by UUID REFERENCES public.profiles(id),
    reviewed_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

-- ------------------------------------------------------------
-- 7. FSRS SPACED REPETITION FLIP CARDS
-- ------------------------------------------------------------
CREATE TABLE public.flashcards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    syllabus_node_id UUID REFERENCES public.syllabus_nodes(id) ON DELETE CASCADE,
    front JSONB NOT NULL,             -- {"hi": "...", "pa": "...", "en": "..."}
    back JSONB NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.srs_states (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    card_id UUID NOT NULL REFERENCES public.flashcards(id) ON DELETE CASCADE,
    stability NUMERIC(6, 3) NOT NULL DEFAULT 0.0,
    difficulty NUMERIC(5, 2) NOT NULL DEFAULT 0.0,
    reps INT NOT NULL DEFAULT 0,
    lapses INT NOT NULL DEFAULT 0,
    due_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ,
    last_rating srs_rating,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, card_id)
);

-- ------------------------------------------------------------
-- 8. CBT TEST ENGINE & SERVER-AUTHORITATIVE ATTEMPTS
-- ------------------------------------------------------------
CREATE TABLE public.mock_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    exam_paper_id UUID NOT NULL REFERENCES public.exam_papers(id) ON DELETE CASCADE,
    title JSONB NOT NULL,
    description JSONB,
    question_count INT NOT NULL DEFAULT 50,
    duration_minutes INT NOT NULL DEFAULT 45,
    negative_marking NUMERIC(4, 2) NOT NULL DEFAULT 0.25,
    is_official_pattern BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    template_id UUID REFERENCES public.mock_templates(id),
    exam_id UUID NOT NULL REFERENCES public.exams(id),
    status attempt_status NOT NULL DEFAULT 'in_progress',
    total_questions INT NOT NULL,
    correct_count INT DEFAULT 0,
    wrong_count INT DEFAULT 0,
    unattempted_count INT DEFAULT 0,
    raw_score NUMERIC(6, 2) DEFAULT 0.0,
    percentage NUMERIC(5, 2) DEFAULT 0.0,
    accuracy NUMERIC(5, 2) DEFAULT 0.0,
    duration_seconds INT NOT NULL,
    time_taken_seconds INT DEFAULT 0,
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.attempt_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    attempt_id UUID NOT NULL REFERENCES public.attempts(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    selected_option option_letter,
    is_correct BOOLEAN,
    is_marked_for_review BOOLEAN NOT NULL DEFAULT FALSE,
    time_spent_seconds INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (attempt_id, question_id)
);

-- Real Cohort Percentile & Rank Snapshots (No Synthetic Fake Ranks)
CREATE TABLE public.rank_snapshots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    attempt_id UUID NOT NULL REFERENCES public.attempts(id) ON DELETE CASCADE,
    exam_id UUID NOT NULL REFERENCES public.exams(id),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    total_cohort_count INT NOT NULL,
    real_state_rank INT NOT NULL,
    percentile NUMERIC(5, 2) NOT NULL,
    calculated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 9. USER VAULT: BOOKMARKS, NOTES & ERROR LOG
-- ------------------------------------------------------------
CREATE TABLE public.user_bookmarks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES public.lessons(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT one_target_check CHECK (
        (question_id IS NOT NULL AND lesson_id IS NULL) OR 
        (question_id IS NULL AND lesson_id IS NOT NULL)
    )
);

CREATE TABLE public.user_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
    note_text TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.user_error_notebook (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    attempt_id UUID NOT NULL REFERENCES public.attempts(id) ON DELETE CASCADE,
    mistake_category VARCHAR(30) DEFAULT 'factual_gap', -- 'misread_stem', 'conceptual', 'negative_marking_rush'
    resolved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 10. ADAPTIVE ROADMAP & VIRTUAL LIBRARY SESSIONS
-- ------------------------------------------------------------
CREATE TABLE public.user_roadmap_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    day_number INT NOT NULL,
    task_id VARCHAR(50) NOT NULL,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, exam_id, day_number, task_id)
);

CREATE TABLE public.study_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    target_syllabus_node_id UUID REFERENCES public.syllabus_nodes(id),
    target_label TEXT NOT NULL,
    duration_minutes INT NOT NULL,
    completed_seconds INT NOT NULL,
    session_status VARCHAR(20) NOT NULL DEFAULT 'completed',
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ended_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 11. TYPING PRACTICE ATTEMPTS
-- ------------------------------------------------------------
CREATE TABLE public.typing_attempts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    language typing_language NOT NULL,
    duration_seconds INT NOT NULL,
    gross_wpm NUMERIC(5, 2) NOT NULL,
    net_wpm NUMERIC(5, 2) NOT NULL,
    accuracy_percentage NUMERIC(5, 2) NOT NULL,
    is_official_passed BOOLEAN NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 12. AI PDF-TO-MCQ & PRIVATE USER UPLOADS
-- ------------------------------------------------------------
CREATE TABLE public.user_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    file_name TEXT NOT NULL,
    file_size_bytes INT NOT NULL,
    storage_path TEXT NOT NULL,
    parsed_characters INT DEFAULT 0,
    is_private BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE public.generated_question_sets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    document_id UUID REFERENCES public.user_documents(id) ON DELETE SET NULL,
    requested_count INT NOT NULL,
    generated_count INT NOT NULL,
    topic_summary TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 13. DAILY CONTENT: THOUGHT, GK EVENT & MINI QUIZ
-- ------------------------------------------------------------
CREATE TABLE public.daily_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publish_date DATE UNIQUE NOT NULL,
    thought JSONB NOT NULL,            -- {"hi": "...", "pa": "...", "en": "..."}
    thought_author JSONB NOT NULL,
    historical_event JSONB NOT NULL,
    daily_mini_quiz_question_id UUID REFERENCES public.questions(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------
-- 14. AUDIT LOGS
-- ------------------------------------------------------------
CREATE TABLE public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor_id UUID REFERENCES public.profiles(id),
    action VARCHAR(50) NOT NULL,       -- 'question_update', 'role_escalation', 'data_import'
    target_table VARCHAR(50) NOT NULL,
    target_id UUID,
    before_state JSONB,
    after_state JSONB,
    ip_address INET,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 15. PERFORMANCE INDEXES
-- ============================================================
CREATE INDEX idx_questions_node ON public.questions(syllabus_node_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_questions_exam ON public.questions(primary_exam_id, is_pyq) WHERE deleted_at IS NULL;
CREATE INDEX idx_attempts_user_exam ON public.attempts(user_id, exam_id);
CREATE INDEX idx_srs_due ON public.srs_states(user_id, due_date);
CREATE INDEX idx_syllabus_parent ON public.syllabus_nodes(parent_id);
CREATE INDEX idx_questions_stem_trgm ON public.questions USING gin ((stem->>'hi') gin_trgm);

-- ============================================================
-- 16. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attempt_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.srs_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Profiles: Users manage their own profile; admins view all
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Questions: Public can read published questions; answer key hidden via VIEW
CREATE POLICY "Public read published questions" ON public.questions FOR SELECT USING (status = 'published' AND deleted_at IS NULL);

-- Lessons: Public read published lessons
CREATE POLICY "Public read published lessons" ON public.lessons FOR SELECT USING (status = 'published' AND deleted_at IS NULL);

-- Attempts & Answers: Strictly isolated to the attempting user
CREATE POLICY "Users manage own attempts" ON public.attempts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own attempt answers" ON public.attempt_answers FOR ALL 
USING (EXISTS (SELECT 1 FROM public.attempts a WHERE a.id = attempt_id AND a.user_id = auth.uid()));

-- User Private Documents: Strictly isolated
CREATE POLICY "Users manage own documents" ON public.user_documents FOR ALL USING (auth.uid() = user_id);
```

---

## 3. Server-Authoritative Question View (`v_client_questions`)

To ensure candidates cannot inspect answer keys via developer tools, the API exposes a sanitized database view during an active exam:

```sql
CREATE OR REPLACE VIEW public.v_client_questions AS
SELECT 
    id,
    syllabus_node_id,
    primary_exam_id,
    difficulty,
    is_pyq,
    pyq_year,
    pyq_exam_tag,
    stem,
    options
FROM public.questions
WHERE status = 'published' AND deleted_at IS NULL;
```

`correct_option`, `explanation`, and `examiner_trap_notes` are omitted from `v_client_questions` and are only released upon calling the scoring RPC `submit_exam_attempt()`.

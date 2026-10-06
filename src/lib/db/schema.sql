-- ============================================================
-- ExamSathi (परीक्षा साथी) — Supabase PostgreSQL Schema
-- Production Database Setup with Row Level Security (RLS)
-- ============================================================

-- 1. PROFILES TABLE (Mirrors auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text not null,
  phone text,
  target_exam text default 'master-cadre-sst',
  target_state text default 'punjab',
  streak integer default 0,
  xp integer default 0,
  library_hours numeric(6,1) default 0.0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Policies for profiles
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Trigger to auto-create profile on auth.users signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email, target_exam)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email,
    coalesce(new.raw_user_meta_data->>'targetExam', 'master-cadre-sst')
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. TEST ATTEMPTS TABLE (Stores complete CBT Mock results)
create table if not exists public.test_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  test_id text not null,
  exam_id text not null,
  total_questions integer not null,
  correct_count integer not null,
  wrong_count integer not null,
  unattempted_count integer not null,
  raw_score numeric(6,2) not null,
  percentage integer not null,
  accuracy integer not null,
  time_taken_seconds integer not null,
  state_rank integer,
  merit_tier text,
  answers_payload jsonb,
  created_at timestamptz default now()
);

alter table public.test_attempts enable row level security;

create policy "Users can view their own test attempts"
  on public.test_attempts for select
  using (auth.uid() = user_id);

create policy "Users can insert their own test attempts"
  on public.test_attempts for insert
  with check (auth.uid() = user_id);


-- 3. USER FAVORITES TABLE (Starred questions)
create table if not exists public.user_favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  question_id text not null,
  created_at timestamptz default now(),
  unique(user_id, question_id)
);

alter table public.user_favorites enable row level security;

create policy "Users can manage their favorite questions"
  on public.user_favorites for all
  using (auth.uid() = user_id);


-- 4. USER BOOKMARKS TABLE (Saved for later)
create table if not exists public.user_bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  question_id text not null,
  created_at timestamptz default now(),
  unique(user_id, question_id)
);

alter table public.user_bookmarks enable row level security;

create policy "Users can manage their bookmarked questions"
  on public.user_bookmarks for all
  using (auth.uid() = user_id);


-- 5. SAVED REVIEW NOTES TABLE (Personal Study Vault)
create table if not exists public.saved_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  question_id text not null,
  topic_id text,
  title text not null,
  explanation text not null,
  thought text,
  correct_option text not null,
  correct_text text not null,
  exam_tag text,
  year integer,
  created_at timestamptz default now()
);

alter table public.saved_notes enable row level security;

create policy "Users can manage their saved review notes"
  on public.saved_notes for all
  using (auth.uid() = user_id);


-- 6. AI UPLOADED DRILLS TABLE (Uploaded Notes & Vision OCR MCQs)
create table if not exists public.ai_uploads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade not null,
  file_name text not null,
  file_url text,
  file_type text not null,
  extracted_summary text,
  mcqs_json jsonb not null,
  created_at timestamptz default now()
);

alter table public.ai_uploads enable row level security;

create policy "Users can manage their own AI uploads"
  on public.ai_uploads for all
  using (auth.uid() = user_id);

-- Storage bucket creation instruction:
-- In Supabase Dashboard -> Storage -> Create new bucket 'notes-uploads' (Private)

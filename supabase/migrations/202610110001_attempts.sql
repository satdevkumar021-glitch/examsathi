-- Additive: server-scored mock attempts. Rows are written only by the API using the
-- service role after re-scoring against the server-side answer key; users may only read their own.
create table if not exists public.examsathi_attempts (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  exam_id text not null check (char_length(exam_id) <= 100),
  test_id text not null check (char_length(test_id) <= 200),
  total integer not null check (total between 1 and 300),
  correct integer not null check (correct >= 0),
  wrong integer not null check (wrong >= 0),
  unattempted integer not null check (unattempted >= 0),
  raw_score numeric(7,2) not null,
  percentage numeric(5,1) not null,
  accuracy numeric(5,1) not null,
  time_taken_seconds integer not null check (time_taken_seconds between 0 and 21600),
  answers jsonb not null check (jsonb_typeof(answers) = 'object' and octet_length(answers::text) <= 65536),
  created_at timestamptz not null default now()
);
create index if not exists examsathi_attempts_user_created_idx on public.examsathi_attempts (user_id, created_at desc);
alter table public.examsathi_attempts enable row level security;
revoke all on public.examsathi_attempts from anon, authenticated;
grant select on public.examsathi_attempts to authenticated;
create policy "Read own attempts" on public.examsathi_attempts for select to authenticated using ((select auth.uid()) = user_id);

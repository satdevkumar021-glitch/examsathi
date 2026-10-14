-- Additive: editorial pipeline (draft -> review -> published). Replaces the browser-only localStorage pipeline.
-- Only the API writes here, using the service role after verifying the caller's staff role.
-- No direct client access: RLS is on and every client grant is revoked.
create table if not exists public.examsathi_content_items (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('question', 'lesson', 'video', 'pdf')),
  title text not null check (char_length(title) between 1 and 300),
  topic_id text not null check (char_length(topic_id) between 1 and 120),
  status text not null default 'draft' check (status in ('draft', 'review', 'published', 'rejected')),
  author_id uuid not null references auth.users(id) on delete restrict,
  author_email text not null check (char_length(author_email) <= 320),
  author_role text not null check (author_role in ('educator', 'reviewer', 'superadmin')),
  reviewed_by text check (char_length(reviewed_by) <= 400),
  feedback text check (char_length(feedback) <= 1000),
  data jsonb not null check (jsonb_typeof(data) = 'object' and octet_length(data::text) <= 20000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists examsathi_content_items_status_idx on public.examsathi_content_items (status, created_at desc);
create index if not exists examsathi_content_items_author_idx on public.examsathi_content_items (author_id);
alter table public.examsathi_content_items enable row level security;
revoke all on public.examsathi_content_items from anon, authenticated;

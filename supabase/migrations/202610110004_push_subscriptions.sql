-- Web push: one row per device a signed-in learner opted in on, for the streak-at-risk reminder.
-- Rows are written and read only by the API with the service role; clients have no grants.
create table if not exists public.examsathi_push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  endpoint text not null unique check (char_length(endpoint) <= 600),
  p256dh text not null check (char_length(p256dh) <= 200),
  auth text not null check (char_length(auth) <= 100),
  tz_offset_minutes integer not null default 330 check (tz_offset_minutes between -840 and 840),
  lang text not null default 'en' check (lang in ('en', 'hi', 'pa')),
  last_sent_day text,
  failures integer not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists examsathi_push_user_idx on public.examsathi_push_subscriptions (user_id);
alter table public.examsathi_push_subscriptions enable row level security;
revoke all on public.examsathi_push_subscriptions from anon, authenticated;

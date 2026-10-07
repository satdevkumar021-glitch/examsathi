-- Additive migration: no existing profiles or study data are modified.
create table if not exists public.examsathi_ai_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  usage_day date not null,
  request_count integer not null default 0 check (request_count between 0 and 5),
  last_requested timestamptz not null,
  primary key (user_id, usage_day)
);
alter table public.examsathi_ai_usage enable row level security;
revoke all on public.examsathi_ai_usage from anon, authenticated;
create or replace function public.consume_examsathi_ai_quota()
returns boolean language plpgsql security definer set search_path = '' as $$
declare changed integer;
begin
  if auth.uid() is null then return false; end if;
  insert into public.examsathi_ai_usage (user_id, usage_day, request_count, last_requested)
    values (auth.uid(), (now() at time zone 'UTC')::date, 1, now())
  on conflict (user_id, usage_day) do update
    set request_count = public.examsathi_ai_usage.request_count + 1, last_requested = now()
    where public.examsathi_ai_usage.request_count < 5
      and public.examsathi_ai_usage.last_requested < now() - interval '30 seconds';
  get diagnostics changed = row_count;
  return changed = 1;
end;
$$;
revoke all on function public.consume_examsathi_ai_quota() from public, anon;
grant execute on function public.consume_examsathi_ai_quota() to authenticated;

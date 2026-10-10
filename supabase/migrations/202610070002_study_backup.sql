-- Additive, per-account cloud snapshot. Existing study tables are untouched.
create table if not exists public.examsathi_study_backups (
  user_id uuid primary key references auth.users(id) on delete cascade,
  backup jsonb not null check (jsonb_typeof(backup) = 'object' and octet_length(backup::text) <= 2097152),
  version bigint not null default 1 check (version > 0),
  updated_at timestamptz not null default now()
);
alter table public.examsathi_study_backups enable row level security;
revoke all on public.examsathi_study_backups from anon, authenticated;
grant select on public.examsathi_study_backups to authenticated;
create policy "Read own study backup" on public.examsathi_study_backups for select to authenticated using ((select auth.uid()) = user_id);

create or replace function public.save_examsathi_study_backup(p_backup jsonb, p_expected_version bigint)
returns bigint language plpgsql security definer set search_path = '' as $$
declare account uuid := auth.uid(); saved_version bigint;
begin
  if account is null then raise exception 'Sign in required' using errcode = '28000'; end if;
  if p_expected_version is null or p_expected_version < 0 or p_backup is null
    or jsonb_typeof(p_backup) <> 'object' or p_backup->>'version' is distinct from '1'
    or jsonb_typeof(p_backup->'records') is distinct from 'object'
    or octet_length(p_backup::text) > 2097152 then
    raise exception 'Invalid or oversized study backup' using errcode = '22023';
  end if;
  if p_expected_version = 0 then
    insert into public.examsathi_study_backups (user_id, backup) values (account, p_backup)
      on conflict (user_id) do nothing returning version into saved_version;
  else
    update public.examsathi_study_backups set backup = p_backup, version = version + 1, updated_at = now()
      where user_id = account and version = p_expected_version returning version into saved_version;
  end if;
  if saved_version is null then raise exception 'Backup changed on another device. Refresh before saving.' using errcode = '40001'; end if;
  return saved_version;
end;
$$;
revoke all on function public.save_examsathi_study_backup(jsonb, bigint) from public, anon;
grant execute on function public.save_examsathi_study_backup(jsonb, bigint) to authenticated;

import { createClient } from './supabase/client';
import { exportStudyBackup, restoreStudyBackup } from './study-backup';
export type CloudSnapshot = { backup: unknown; version: number; updated_at: string };
function assertAccount(id: string) {
  if (window.localStorage.getItem('examsathi:active-account') !== id) throw new Error('Account changed. Reload before transferring study data.');
}
async function identity() {
  const client = createClient();
  const { data, error } = await client.auth.getUser();
  if (error || !data.user) throw new Error('Sign in to transfer study progress.');
  assertAccount(data.user.id);
  return { client, id: data.user.id };
}
export async function readCloudStudy(): Promise<CloudSnapshot | null> {
  const { client, id } = await identity();
  const { data, error } = await client.from('examsathi_study_backups').select('backup,version,updated_at').eq('user_id', id).maybeSingle();
  assertAccount(id);
  if (error) throw new Error('Cloud backup is unavailable. Check your connection or use a downloaded backup.');
  return data;
}
export async function saveCloudStudy(expectedVersion: number): Promise<number> {
  const { client, id } = await identity();
  const text = exportStudyBackup();
  if (new Blob([text]).size > 2 * 1024 * 1024) throw new Error('Cloud backups support up to 2 MB. Download a local backup for larger vaults.');
  assertAccount(id);
  const { data, error } = await client.rpc('save_examsathi_study_backup', { p_backup: JSON.parse(text), p_expected_version: expectedVersion });
  assertAccount(id);
  if (error?.code === '40001') throw new Error('Another device changed the backup. Refresh cloud status and review the latest backup before saving.');
  if (error || !Number.isSafeInteger(data) || data < 1) throw new Error('Could not save cloud backup. Your local progress is unchanged.');
  return data;
}
export async function restoreCloudStudy(): Promise<void> {
  const { client, id } = await identity();
  const { data, error } = await client.from('examsathi_study_backups').select('backup').eq('user_id', id).maybeSingle();
  assertAccount(id);
  if (error || !data) throw new Error('No readable cloud backup was found. Local progress is unchanged.');
  restoreStudyBackup(JSON.stringify(data.backup));
}

import { apiUrl } from './paths';
import { createClient } from './supabase/client';
import type { ItemType, StaffRole, WorkflowStatus } from './content-workflow';

export interface ContentItem {
  id: string;
  type: ItemType;
  title: string;
  topicId: string;
  status: WorkflowStatus;
  author: string;
  authorRole: StaffRole;
  /** True when the signed-in staff member created it. */
  mine: boolean;
  reviewedBy?: string;
  feedback?: string;
  data: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

/** Calls the staff API with the learner's session token. The server decides what is allowed. */
async function call<T>(method: string, body?: unknown): Promise<T> {
  const { data } = await createClient().auth.getSession();
  if (!data.session) throw new Error('Sign in to continue.');
  let response: Response;
  try {
    response = await fetch(apiUrl('/api/admin/content/'), {
      method,
      headers: { Authorization: `Bearer ${data.session.access_token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
      body: body ? JSON.stringify(body) : undefined,
      signal: AbortSignal.timeout(20000),
    });
  } catch {
    throw new Error('Could not reach the server. Check your connection and try again.');
  }
  const json = await response.json().catch(() => null);
  if (!response.ok || !json?.success) throw new Error(json?.message || 'Request failed.');
  return json as T;
}

export const listContent = () => call<{ role: StaffRole; items: ContentItem[] }>('GET');
export const createContent = (item: { type: ItemType; title: string; topicId: string; status: WorkflowStatus; data: Record<string, unknown> }) =>
  call<{ item: ContentItem }>('POST', item);
export const moveContent = (id: string, to: WorkflowStatus, note?: string) => call<{ item: ContentItem }>('PATCH', { id, to, note });
export const deleteContent = (id: string) => call<unknown>('DELETE', { id });

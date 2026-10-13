// Editorial workflow rules. Pure functions, used by the API (authoritative) and the UI (hints only).

export type StaffRole = 'educator' | 'reviewer' | 'superadmin';
export type WorkflowStatus = 'draft' | 'review' | 'published' | 'rejected';
export type ItemType = 'question' | 'lesson' | 'video' | 'pdf';

export const STAFF_ROLES: readonly StaffRole[] = ['educator', 'reviewer', 'superadmin'];
export const ITEM_TYPES: readonly ItemType[] = ['question', 'lesson', 'video', 'pdf'];
export const STATUSES: readonly WorkflowStatus[] = ['draft', 'review', 'published', 'rejected'];

export const isStaffRole = (value: unknown): value is StaffRole => typeof value === 'string' && (STAFF_ROLES as readonly string[]).includes(value);
export const isStatus = (value: unknown): value is WorkflowStatus => typeof value === 'string' && (STATUSES as readonly string[]).includes(value);
export const isItemType = (value: unknown): value is ItemType => typeof value === 'string' && (ITEM_TYPES as readonly string[]).includes(value);

/** Anyone on staff can save a draft or submit for review; only a superadmin can publish directly. */
export function canCreate(role: StaffRole, status: WorkflowStatus): boolean {
  if (status === 'draft' || status === 'review') return true;
  return status === 'published' && role === 'superadmin';
}

export interface Actor { id: string; role: StaffRole }
export interface ItemState { authorId: string; status: WorkflowStatus }

/**
 * Allowed status changes:
 * - draft/rejected/review -> back to draft or forward to review: the author, or any reviewer/superadmin
 * - review -> published/rejected: a reviewer or superadmin, and never the author (four-eyes), except a superadmin
 * - draft -> published and published -> draft: superadmin only
 */
export function canTransition(actor: Actor, item: ItemState, to: WorkflowStatus): boolean {
  const from = item.status;
  if (from === to) return false;
  const isAuthor = item.authorId === actor.id;
  const isReviewer = actor.role === 'reviewer' || actor.role === 'superadmin';
  if (to === 'review' && (from === 'draft' || from === 'rejected')) return isAuthor || isReviewer;
  if (to === 'draft' && (from === 'review' || from === 'rejected')) return isAuthor || isReviewer;
  if (from === 'review' && (to === 'published' || to === 'rejected')) return isReviewer && (actor.role === 'superadmin' || !isAuthor);
  if (from === 'draft' && to === 'published') return actor.role === 'superadmin';
  if (from === 'published' && to === 'draft') return actor.role === 'superadmin';
  return false;
}

export const canDelete = (role: StaffRole): boolean => role === 'superadmin';

export const MAX_DATA_BYTES = 20000;

export interface NewItemInput {
  type: ItemType;
  title: string;
  topicId: string;
  status: WorkflowStatus;
  data: Record<string, unknown>;
}

export type Validation<T> = { ok: true; value: T } | { ok: false; message: string };

export function validateNewItem(body: unknown): Validation<NewItemInput> {
  if (!body || typeof body !== 'object') return { ok: false, message: 'Invalid request.' };
  const { type, title, topicId, status, data } = body as Record<string, unknown>;
  if (!isItemType(type)) return { ok: false, message: 'Invalid item type.' };
  if (typeof title !== 'string' || !title.trim() || title.length > 300) return { ok: false, message: 'Title must be 1–300 characters.' };
  if (typeof topicId !== 'string' || !topicId || topicId.length > 120) return { ok: false, message: 'Invalid topic.' };
  if (!isStatus(status)) return { ok: false, message: 'Invalid status.' };
  if (!data || typeof data !== 'object' || Array.isArray(data)) return { ok: false, message: 'Invalid item data.' };
  if (JSON.stringify(data).length > MAX_DATA_BYTES) return { ok: false, message: 'Item is too large.' };
  return { ok: true, value: { type, title: title.trim(), topicId, status, data: data as Record<string, unknown> } };
}

export interface TransitionInput { id: string; to: WorkflowStatus; note?: string }

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const isUuid = (value: unknown): value is string => typeof value === 'string' && UUID.test(value);

export function validateTransition(body: unknown): Validation<TransitionInput> {
  if (!body || typeof body !== 'object') return { ok: false, message: 'Invalid request.' };
  const { id, to, note } = body as Record<string, unknown>;
  if (!isUuid(id)) return { ok: false, message: 'Invalid item.' };
  if (!isStatus(to)) return { ok: false, message: 'Invalid status.' };
  if (note !== undefined && (typeof note !== 'string' || note.length > 1000)) return { ok: false, message: 'Note is too long.' };
  return { ok: true, value: { id, to, note: note as string | undefined } };
}

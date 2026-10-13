import { NextRequest, NextResponse } from 'next/server';
import { fail } from '@/lib/api-route';
import { clientIp } from '@/lib/rate-limit';
import { limitRequest } from '@/lib/rate-limit-shared';
import { requireStaff, serviceClient, staffRoute } from '@/lib/server-auth';
import { validateQuestionData } from '@/lib/question-content';
import { invalidateEditorial } from '@/lib/editorial-loader';
import { canCreate, canDelete, canEdit, canTransition, isUuid, validateEdit, validateNewItem, validateTransition, type StaffRole, type WorkflowStatus } from '@/lib/content-workflow';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const NO_STORE = { 'Cache-Control': 'no-store' };
const WINDOW = 60 * 60 * 1000;
const COLUMNS = 'id, type, title, topic_id, status, author_id, author_email, author_role, reviewed_by, feedback, data, created_at, updated_at';

interface Row {
  id: string; type: string; title: string; topic_id: string; status: WorkflowStatus;
  author_id: string; author_email: string; author_role: StaffRole;
  reviewed_by: string | null; feedback: string | null; data: Record<string, unknown>;
  created_at: string; updated_at: string;
}

const present = (row: Row, viewerId: string) => ({
  id: row.id, type: row.type, title: row.title, topicId: row.topic_id, status: row.status,
  author: row.author_email, authorRole: row.author_role, mine: row.author_id === viewerId,
  reviewedBy: row.reviewed_by ?? undefined, feedback: row.feedback ?? undefined,
  data: row.data, createdAt: row.created_at, updatedAt: row.updated_at,
});

const unavailable = () => fail('The editorial service is not configured.', 503);

/** Educators see their own items; reviewers and superadmins see the whole pipeline. */
export async function GET(req: NextRequest) {
  const limited = await limitRequest(`admin-list:${clientIp(req)}`, 300, WINDOW);
  if (!limited.ok) return fail('Too many requests. Try again later.', 429, { 'Retry-After': String(limited.retryAfter) });
  const staff = await requireStaff(req);
  if (!staff.ok) return staff.response;
  const db = serviceClient();
  if (!db) return unavailable();
  let query = db.from('examsathi_content_items').select(COLUMNS).order('created_at', { ascending: false }).limit(500);
  if (staff.user.role === 'educator') query = query.eq('author_id', staff.user.id);
  const { data, error } = await query;
  if (error) return fail('Could not load the pipeline.', 500);
  return NextResponse.json({ success: true, role: staff.user.role, items: (data as Row[]).map(row => present(row, staff.user.id)) }, { headers: NO_STORE });
}

export async function POST(req: NextRequest) {
  return staffRoute(req, { name: 'admin-create', limit: 120, windowMs: WINDOW, maxBytes: 40000 }, async (body, user) => {
    const parsed = validateNewItem(body);
    if (!parsed.ok) return fail(parsed.message, 400);
    const item = parsed.value;
    // A question must be complete and well-formed before it can enter the pipeline, so review is about substance.
    if (item.type === 'question') {
      const checked = validateQuestionData(item.data);
      if (!checked.ok) return fail(checked.message, 400);
      item.data = checked.value as unknown as Record<string, unknown>;
    }
    if (!canCreate(user.role, item.status)) return fail('Only a superadmin can publish directly. Submit it for review instead.', 403);
    const db = serviceClient();
    if (!db) return unavailable();
    const { data, error } = await db.from('examsathi_content_items').insert({
      type: item.type, title: item.title, topic_id: item.topicId, status: item.status, data: item.data,
      author_id: user.id, author_email: user.email, author_role: user.role,
      reviewed_by: item.status === 'published' ? `${user.email} (${user.role})` : null,
    }).select(COLUMNS).single();
    if (error) return fail('Could not save the item.', 500);
    if (item.status === 'published') invalidateEditorial();
    return NextResponse.json({ success: true, item: present(data as Row, user.id) }, { status: 201, headers: NO_STORE });
  });
}

/** Edits a draft or rejected item in place. Anything under review or live must first be withdrawn or unpublished. */
export async function PUT(req: NextRequest) {
  return staffRoute(req, { name: 'admin-edit', limit: 240, windowMs: WINDOW, maxBytes: 40000 }, async (body, user) => {
    const parsed = validateEdit(body);
    if (!parsed.ok) return fail(parsed.message, 400);
    const { id, title, topicId } = parsed.value;
    let data = parsed.value.data;
    const db = serviceClient();
    if (!db) return unavailable();
    const { data: current, error: readError } = await db.from('examsathi_content_items').select(COLUMNS).eq('id', id).maybeSingle();
    if (readError) return fail('Could not load the item.', 500);
    // Educators cannot learn that other people's items exist.
    if (!current || (user.role === 'educator' && current.author_id !== user.id)) return fail('Item not found.', 404);
    if (!canEdit(user, { authorId: current.author_id, status: current.status })) {
      return fail(current.status === 'draft' || current.status === 'rejected' ? 'You cannot edit this item.' : 'Withdraw this item to draft before editing it.', 403);
    }
    if (current.type === 'question') {
      const checked = validateQuestionData(data);
      if (!checked.ok) return fail(checked.message, 400);
      data = checked.value as unknown as Record<string, unknown>;
    }
    const { data: saved, error } = await db.from('examsathi_content_items')
      .update({ title, topic_id: topicId, data, updated_at: new Date().toISOString() })
      .eq('id', id).eq('status', current.status) // It may have been submitted or moved since it was loaded.
      .select(COLUMNS).maybeSingle();
    if (error) return fail('Could not save the item.', 500);
    if (!saved) return fail('This item changed. Refresh and try again.', 409);
    return NextResponse.json({ success: true, item: present(saved as Row, user.id) }, { headers: NO_STORE });
  });
}

/** Moves an item through the workflow. The server decides whether this actor may make this move. */
export async function PATCH(req: NextRequest) {
  return staffRoute(req, { name: 'admin-transition', limit: 300, windowMs: WINDOW, maxBytes: 5000 }, async (body, user) => {
    const parsed = validateTransition(body);
    if (!parsed.ok) return fail(parsed.message, 400);
    const { id, to, note } = parsed.value;
    const db = serviceClient();
    if (!db) return unavailable();
    const { data: current, error: readError } = await db.from('examsathi_content_items').select(COLUMNS).eq('id', id).maybeSingle();
    if (readError) return fail('Could not load the item.', 500);
    // Educators cannot learn that other people's items exist.
    if (!current || (user.role === 'educator' && current.author_id !== user.id)) return fail('Item not found.', 404);
    if (!canTransition(user, { authorId: current.author_id, status: current.status }, to)) return fail('You cannot make this change.', 403);
    const decided = to === 'published' || to === 'rejected';
    const { data, error } = await db.from('examsathi_content_items')
      .update({
        status: to,
        updated_at: new Date().toISOString(),
        reviewed_by: decided ? `${user.email} (${user.role})` : to === 'draft' ? null : current.reviewed_by,
        feedback: note ?? (to === 'draft' || to === 'review' ? null : current.feedback),
      })
      .eq('id', id).eq('status', current.status) // Another reviewer may have acted first.
      .select(COLUMNS).maybeSingle();
    if (error) return fail('Could not update the item.', 500);
    if (!data) return fail('This item changed. Refresh and try again.', 409);
    if (to === 'published' || current.status === 'published') invalidateEditorial();
    return NextResponse.json({ success: true, item: present(data as Row, user.id) }, { headers: NO_STORE });
  });
}

export async function DELETE(req: NextRequest) {
  return staffRoute(req, { name: 'admin-delete', limit: 60, windowMs: WINDOW, maxBytes: 2000 }, async (body, user) => {
    const id = (body as { id?: unknown } | null)?.id;
    if (!isUuid(id)) return fail('Invalid item.', 400);
    if (!canDelete(user.role)) return fail('Only a superadmin can delete items.', 403);
    const db = serviceClient();
    if (!db) return unavailable();
    const { error } = await db.from('examsathi_content_items').delete().eq('id', id);
    if (error) return fail('Could not delete the item.', 500);
    invalidateEditorial();
    return NextResponse.json({ success: true }, { headers: NO_STORE });
  });
}

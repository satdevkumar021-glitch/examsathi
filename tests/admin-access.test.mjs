import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source, dependencies = {}) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, require: name => dependencies[name], URL, JSON, Object, Array, String, RegExp }, {});
  return exports;
}
const code = text => text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const w = load('../src/lib/content-workflow.ts');
const actor = (role, id = 'u1') => ({ id, role });
const item = (status, authorId = 'author') => ({ authorId, status });

test('anyone on staff may draft or submit; only a superadmin may publish directly', () => {
  for (const role of ['educator', 'reviewer', 'superadmin']) {
    assert.equal(w.canCreate(role, 'draft'), true);
    assert.equal(w.canCreate(role, 'review'), true);
  }
  assert.equal(w.canCreate('educator', 'published'), false);
  assert.equal(w.canCreate('reviewer', 'published'), false);
  assert.equal(w.canCreate('superadmin', 'published'), true);
  assert.equal(w.canCreate('educator', 'rejected'), false, 'items cannot be born rejected');
});

test('an educator cannot approve, reject or touch other peoples items', () => {
  const educator = actor('educator', 'author');
  assert.equal(w.canTransition(educator, item('review', 'author'), 'published'), false);
  assert.equal(w.canTransition(educator, item('review', 'author'), 'rejected'), false);
  assert.equal(w.canTransition(actor('educator', 'someone-else'), item('draft', 'author'), 'review'), false);
  assert.equal(w.canTransition(educator, item('draft', 'author'), 'review'), true);
  assert.equal(w.canTransition(educator, item('draft', 'author'), 'published'), false);
});

test('reviewers decide on review items but never their own (four-eyes); superadmin may', () => {
  assert.equal(w.canTransition(actor('reviewer', 'r1'), item('review', 'author'), 'published'), true);
  assert.equal(w.canTransition(actor('reviewer', 'r1'), item('review', 'author'), 'rejected'), true);
  assert.equal(w.canTransition(actor('reviewer', 'author'), item('review', 'author'), 'published'), false);
  assert.equal(w.canTransition(actor('superadmin', 'author'), item('review', 'author'), 'published'), true);
});

test('only a superadmin publishes from draft or unpublishes; nobody changes status to itself', () => {
  assert.equal(w.canTransition(actor('reviewer'), item('draft'), 'published'), false);
  assert.equal(w.canTransition(actor('superadmin'), item('draft'), 'published'), true);
  assert.equal(w.canTransition(actor('reviewer'), item('published'), 'draft'), false);
  assert.equal(w.canTransition(actor('superadmin'), item('published'), 'draft'), true);
  assert.equal(w.canTransition(actor('superadmin'), item('draft'), 'draft'), false);
  assert.equal(w.canTransition(actor('superadmin'), item('published'), 'rejected'), false);
});

test('only superadmin deletes', () => {
  assert.equal(w.canDelete('superadmin'), true);
  assert.equal(w.canDelete('reviewer'), false);
  assert.equal(w.canDelete('educator'), false);
});

test('roles are a closed set', () => {
  for (const bad of ['admin', 'Superadmin', '', null, undefined, 1, {}]) assert.equal(w.isStaffRole(bad), false);
  assert.equal(w.isStaffRole('reviewer'), true);
});

test('item and transition bodies are validated', () => {
  const ok = { type: 'question', title: ' Q ', topicId: 'punjab-history', status: 'review', data: { a: 1 } };
  assert.equal(w.validateNewItem(ok).ok, true);
  assert.equal(w.validateNewItem(ok).value.title, 'Q');
  for (const patch of [{ type: 'script' }, { title: '' }, { title: 'x'.repeat(301) }, { topicId: '' }, { status: 'archived' }, { data: [] }, { data: null }, { data: { big: 'x'.repeat(20001) } }]) {
    assert.equal(w.validateNewItem({ ...ok, ...patch }).ok, false, JSON.stringify(patch).slice(0, 40));
  }
  assert.equal(w.validateNewItem(null).ok, false);
  const id = '123e4567-e89b-42d3-a456-426614174000';
  assert.equal(w.validateTransition({ id, to: 'published' }).ok, true);
  for (const bad of [{ id: 'nope', to: 'published' }, { id, to: 'x' }, { id, to: 'review', note: 5 }, { id, to: 'review', note: 'x'.repeat(1001) }]) assert.equal(w.validateTransition(bad).ok, false);
});

test('every admin route verifies the staff role on the server before touching data', () => {
  const route = readFileSync(new URL('../src/app/api/admin/content/route.ts', import.meta.url), 'utf8');
  assert.ok(route.includes('requireStaff(req)'), 'GET must verify the caller');
  assert.equal((route.match(/staffRoute\(/g) || []).length, 3, 'POST, PATCH and DELETE use staffRoute');
  assert.ok(route.includes('canTransition(') && route.includes('canCreate(') && route.includes('canDelete('));
  assert.ok(route.includes(".eq('author_id', staff.user.id)"), 'educators only list their own items');
  const auth = code(readFileSync(new URL('../src/lib/server-auth.ts', import.meta.url), 'utf8'));
  assert.ok(auth.includes('auth.getUser(token)'), 'tokens are verified with Supabase, not just decoded');
  assert.ok(auth.includes('app_metadata'), 'role comes from app_metadata');
  assert.ok(!auth.includes('user_metadata'), 'user_metadata is user-editable and must not grant roles');
  assert.ok(auth.includes("'server-only'"));
});

test('migration locks the table to the service role', () => {
  const sql = code(readFileSync(new URL('../supabase/migrations/202610110002_content_items.sql', import.meta.url), 'utf8').replace(/^--.*$/gm, ''));
  assert.match(sql, /enable row level security/);
  assert.match(sql, /revoke all on public\.examsathi_content_items from anon, authenticated/);
  assert.doesNotMatch(sql, /grant /i);
});

test('proxy redirects session-less visitors to login and lets signed-in cookies through', () => {
  const src = readFileSync(new URL('../src/proxy.ts', import.meta.url), 'utf8');
  assert.match(src, /matcher:\s*\['\/admin', '\/admin\/:path\*'\]/);
  const NextResponse = { next: () => ({ kind: 'next' }), redirect: url => ({ kind: 'redirect', to: url.pathname }) };
  const { proxy } = load('../src/proxy.ts', { 'next/server': { NextResponse } });
  const request = cookies => ({ url: 'https://exam.example/admin/', cookies: { getAll: () => cookies } });
  assert.deepEqual(proxy(request([])), { kind: 'redirect', to: '/login/' });
  assert.deepEqual(proxy(request([{ name: 'theme', value: 'dark' }])), { kind: 'redirect', to: '/login/' });
  assert.deepEqual(proxy(request([{ name: 'sb-abc-auth-token', value: '' }])), { kind: 'redirect', to: '/login/' }, 'an empty cookie is not a session');
  assert.deepEqual(proxy(request([{ name: 'sb-abc-auth-token', value: 'x' }])), { kind: 'next' });
  assert.deepEqual(proxy(request([{ name: 'sb-abc-auth-token.0', value: 'x' }])), { kind: 'next' }, 'chunked session cookies count');
  assert.ok(src.includes('not authorization'), 'documents that the role is verified in the API');
});

test('the admin page no longer keeps the pipeline or role in the browser', () => {
  const page = readFileSync(new URL('../src/app/(dashboard)/admin/page.tsx', import.meta.url), 'utf8');
  assert.ok(!page.includes('examsathi_admin_pipeline'));
  assert.ok(!page.includes('DEFAULT_PIPELINE'));
  assert.ok(!page.includes('studyStorage'));
  assert.ok(page.includes('listContent()'));
});

test('no admin route is reachable without the auth prelude', () => {
  const dir = new URL('../src/app/api/admin/', import.meta.url);
  const walk = d => readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(new URL(`${e.name}/`, d)) : e.name === 'route.ts' ? [new URL(e.name, d)] : []);
  const routes = walk(dir);
  assert.ok(routes.length >= 1);
  for (const file of routes) {
    const src = readFileSync(file, 'utf8');
    assert.ok(src.includes('requireStaff(') || src.includes('staffRoute('), `${file.pathname} is unprotected`);
  }
});

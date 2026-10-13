// Local testing only: an in-memory Supabase stand-in (/auth/v1/user, content_items, attempts and push subscriptions). Never deploy it.
// FAKE_NO_TOPIC_COLUMN=1 simulates a database where migration 202610110003 has not been applied.
// Minimal Supabase stand-in: /auth/v1/user and PostgREST for examsathi_content_items
import http from 'node:http';
import { randomUUID } from 'node:crypto';
const users = { 'tok-educator': { id: '11111111-1111-4111-8111-111111111111', email: 'edu@x.in', role: 'educator' },
  'tok-reviewer': { id: '22222222-2222-4222-8222-222222222222', email: 'rev@x.in', role: 'reviewer' },
  'tok-super': { id: '33333333-3333-4333-8333-333333333333', email: 'root@x.in', role: 'superadmin' },
  'tok-learner': { id: '44444444-4444-4444-8444-444444444444', email: 'l@x.in', role: null },
  'tok-other': { id: '55555555-5555-4555-8555-555555555555', email: 'o@x.in', role: null } };
let attempts = [];
let pushSubs = [];
const noTopicColumn = !!process.env.FAKE_NO_TOPIC_COLUMN;
let rows = [];
const send = (res, code, body) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(body)); };
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  let raw = ''; req.on('data', c => raw += c); req.on('end', () => {
    if (url.pathname === '/auth/v1/user') {
      const u = users[(req.headers.authorization || '').replace('Bearer ', '')];
      return u ? send(res, 200, { id: u.id, email: u.email, aud: 'authenticated', app_metadata: { role: u.role }, user_metadata: {} }) : send(res, 401, { message: 'bad jwt' });
    }
    if (url.pathname === '/rest/v1/examsathi_content_items') {
      const q = Object.fromEntries(url.searchParams);
      const eq = k => q[k]?.startsWith('eq.') ? q[k].slice(3) : null;
      const inList = k => q[k]?.startsWith('in.(') ? q[k].slice(4, -1).split(',').map(v => v.replace(/^"|"$/g, '')) : null;
      const match = r => (!eq('status') || r.status === eq('status')) && (!eq('type') || r.type === eq('type')) && (!inList('type') || inList('type').includes(r.type)) && (!eq('id') || r.id === eq('id')) && (!eq('author_id') || r.author_id === eq('author_id'));
      if (req.method === 'GET') return send(res, 200, rows.filter(match));
      if (req.method === 'POST') { const b = JSON.parse(raw); const row = { id: randomUUID(), created_at: new Date().toISOString(), updated_at: new Date().toISOString(), reviewed_by: null, feedback: null, ...b }; rows.push(row); return send(res, 201, row); }
      if (req.method === 'PATCH') { const b = JSON.parse(raw); const hit = rows.filter(match); hit.forEach(r => Object.assign(r, b)); return send(res, 200, hit); }
      if (req.method === 'DELETE') { rows = rows.filter(r => !match(r)); return send(res, 204, {}); }
    }
    if (url.pathname === '/rest/v1/examsathi_push_subscriptions') {
      const q = Object.fromEntries(url.searchParams);
      const eq = k => q[k]?.startsWith('eq.') ? q[k].slice(3) : null;
      const lt = k => q[k]?.startsWith('lt.') ? Number(q[k].slice(3)) : null;
      const match = r => (!eq('user_id') || r.user_id === eq('user_id')) && (!eq('endpoint') || r.endpoint === eq('endpoint')) && (!eq('id') || r.id === eq('id')) && (lt('failures') === null || r.failures < lt('failures'));
      if (req.method === 'GET') return send(res, 200, pushSubs.filter(match));
      if (req.method === 'POST') {
        const b = JSON.parse(raw);
        const prior = pushSubs.find(r => r.endpoint === b.endpoint);
        if (prior) Object.assign(prior, b); else pushSubs.push({ id: randomUUID(), last_sent_day: null, failures: 0, ...b });
        return send(res, 201, {});
      }
      if (req.method === 'PATCH') { const b = JSON.parse(raw); pushSubs.filter(match).forEach(r => Object.assign(r, b)); return send(res, 204, {}); }
      if (req.method === 'DELETE') { pushSubs = pushSubs.filter(r => !match(r)); return send(res, 204, {}); }
    }
    if (url.pathname === '/__test/attempts' && req.method === 'POST') {
      // Test hook: insert attempts at exact instants so any streak shape can be built. Not part of Supabase.
      const { userId, times } = JSON.parse(raw);
      const { rows } = JSON.parse(raw);
      if (rows) { for (const r of rows) attempts.push({ id: randomUUID(), user_id: userId, exam_id: 'master-cadre-sst', created_at: new Date().toISOString(), ...r }); return send(res, 201, {}); }
      for (const t of times) attempts.push({ id: randomUUID(), user_id: userId, exam_id: 'master-cadre-sst', created_at: new Date(t).toISOString(), total: 10, correct: 5 });
      return send(res, 201, {});
    }
    if (url.pathname === '/__test/push' && req.method === 'GET') return send(res, 200, pushSubs);
    if (url.pathname === '/rest/v1/examsathi_attempts') {
      if (req.method === 'POST') {
        const b = JSON.parse(raw);
        if (noTopicColumn && 'topic_breakdown' in b) return send(res, 400, { code: 'PGRST204', message: "Could not find the 'topic_breakdown' column" });
        if (attempts.some(a => a.id === b.id)) return send(res, 409, { code: '23505', message: 'duplicate key' });
        attempts.push({ created_at: new Date().toISOString(), ...b });
        return send(res, 201, {});
      }
      if (req.method === 'GET') {
        const uid = url.searchParams.get('user_id')?.replace('eq.', '');
        const cols = (url.searchParams.get('select') || '').split(',').map(c => c.trim());
        if (noTopicColumn && cols.includes('topic_breakdown')) return send(res, 400, { code: '42703', message: 'column does not exist' });
        // PostgREST paging: `offset`/`limit` query params (supabase-js .range() sends the Range header, handled below).
        const range = (req.headers.range || '').match(/^(\d+)-(\d+)$/);
        const start = range ? Number(range[1]) : Number(url.searchParams.get('offset')) || 0;
        const end = range ? Number(range[2]) + 1 : start + (Number(url.searchParams.get('limit')) || 1000);
        const rows = (uid ? attempts.filter(a => a.user_id === uid) : [...attempts]).sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(start, end);
        return send(res, 200, rows.map(a => Object.fromEntries(cols.map(c => [c, a[c] ?? null]))));
      }
    }
    send(res, 404, { message: 'not found ' + url.pathname });
  });
}).listen(54321, () => console.log('fake supabase on 54321'));

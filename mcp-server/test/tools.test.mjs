import test from 'node:test';
import assert from 'node:assert/strict';
import { createClient, parseBaseUrl, ApiError } from '../src/client.mjs';
import { buildTools } from '../src/tools.mjs';

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

function harness(routes, token) {
  const calls = [];
  const fetchImpl = async (url, init) => {
    const u = new URL(url);
    calls.push({ path: u.pathname, method: init.method, headers: init.headers, body: init.body ? JSON.parse(init.body) : undefined });
    const route = routes[`${init.method} ${u.pathname}`];
    return route ? route(init) : json({ success: false, message: 'nope' }, 404);
  };
  const client = createClient({ baseUrl: 'https://x.example', token, fetchImpl });
  const tools = Object.fromEntries(buildTools(client).map(t => [t.name, t]));
  return { calls, tools };
}

const catalog = { success: true, exams: [{ id: 'e1', name: 'Exam One', body: 'Board', defaultQuestions: 50, timeLimitMinutes: 45, negativeMarking: 0.25, topics: [{ id: 't1', name: 'Topic', namePa: 'ਵਿਸ਼ਾ', subject: 'History' }] }] };

test('base url: https required, http only for localhost', () => {
  assert.equal(parseBaseUrl('https://a.example/path'), 'https://a.example');
  assert.equal(parseBaseUrl('http://localhost:3000'), 'http://localhost:3000');
  assert.throws(() => parseBaseUrl('http://a.example'));
  assert.throws(() => parseBaseUrl('not a url'));
});

test('public tools never send an Authorization header', async () => {
  const { calls, tools } = harness({ 'GET /api/catalog': () => json(catalog) }, 'SECRET');
  await tools.list_exams.handler({});
  assert.equal(calls[0].headers.Authorization, undefined);
});

test('list_exams and list_topics shape the catalog', async () => {
  const { tools } = harness({ 'GET /api/catalog': () => json(catalog) });
  assert.deepEqual((await tools.list_exams.handler({}))[0], { id: 'e1', name: 'Exam One', body: 'Board', defaultQuestions: 50, timeLimitMinutes: 45, negativeMarking: 0.25, topics: 1 });
  const t = await tools.list_topics.handler({ examId: 'e1', lang: 'pa' });
  assert.deepEqual(t.subjects.History, [{ id: 't1', name: 'ਵਿਸ਼ਾ' }]);
  await assert.rejects(tools.list_topics.handler({ examId: 'zzz', lang: 'en' }), /Unknown exam/);
});

test('search_questions returns text only and drops any answer fields the server might add', async () => {
  const { tools } = harness({
    'POST /api/questions/set': () => json({
      success: true, totalPoolCount: 9,
      questions: [{ id: 'q1', topicId: 't1', difficulty: 'easy', examTag: 'Tag', correct: 'B', explanation: { en: 'leak' },
        question: { en: 'Q?', hi: 'प्र' }, options: { A: { en: 'a' }, B: { en: 'b' }, C: { hi: 'c' }, D: { en: 'd' } } }],
    }),
  });
  const out = await tools.search_questions.handler({ topicId: 't1', difficulty: 'all', count: 1, lang: 'en' });
  const flat = JSON.stringify(out);
  assert.equal(out.questions[0].options.C, 'c');
  assert.ok(!flat.includes('leak') && !('correct' in out.questions[0]));
});

test('count_questions sorts thinnest topics first', async () => {
  const { tools } = harness({ 'POST /api/questions/manifest': () => json({ success: true, manifest: { e1: { a: 9, b: 1, c: 4 } } }) });
  const out = await tools.count_questions.handler({ examId: 'e1' });
  assert.equal(out.total, 14);
  assert.deepEqual(out.topics.map(t => t.topicId), ['b', 'c', 'a']);
});

test('staff tools refuse without a token and never call the network', async () => {
  const { calls, tools } = harness({});
  await assert.rejects(tools.get_quality_report.handler({ limit: 5 }), e => e instanceof ApiError && e.status === 401);
  await assert.rejects(tools.draft_question.handler({}), /EXAMSATHI_STAFF_TOKEN/);
  assert.equal(calls.length, 0);
});

test('get_quality_report sends the bearer token and returns aggregate fields only', async () => {
  const { calls, tools } = harness({
    'GET /api/admin/quality': () => json({ success: true, attemptsAnalysed: 100, report: { analysed: 2, flagged: 1, byFlag: { 'too-hard': 1 },
      items: [{ id: 'a', topicId: 't', declaredDifficulty: 'easy', key: 'A', n: 40, pCorrect: 0.1, discrimination: 0, counts: {}, upperCounts: {}, flags: ['too-hard'] }, { id: 'b', n: 30, flags: [] }] } }),
  }, 'TOKEN');
  const out = await tools.get_quality_report.handler({ limit: 1 });
  assert.equal(calls[0].headers.Authorization, 'Bearer TOKEN');
  assert.equal(out.items.length, 1);
  assert.ok(!('key' in out.items[0]), 'answer key is not forwarded');
});

test('draft_question can only create a draft or review item, never published', async () => {
  const { calls, tools } = harness({
    'POST /api/admin/content': init => json({ success: true, item: { id: 'i1', status: JSON.parse(init.body).status, topicId: 't1' } }, 201),
  }, 'TOKEN');
  const base = tools.draft_question.inputSchema.parse({
    topicId: 't1', title: 'T', question: { en: 'Q' }, correct: 'A', explanation: { en: 'E' },
    options: { A: { en: 'a' }, B: { en: 'b' }, C: { en: 'c' }, D: { en: 'd' } },
  });
  assert.equal((await tools.draft_question.handler(base)).status, 'draft');
  assert.equal((await tools.draft_question.handler({ ...base, submitForReview: true })).status, 'review');
  assert.deepEqual(calls.map(c => c.body.status), ['draft', 'review']);
  assert.ok(!tools.draft_question.inputSchema.shape.status, 'no caller-controlled status');
});

test('server errors surface their message but not the token', async () => {
  const { tools } = harness({ 'GET /api/admin/quality': () => json({ success: false, message: 'Forbidden.' }, 403) }, 'TOKEN');
  await assert.rejects(tools.get_quality_report.handler({ limit: 5 }), e => e.status === 403 && e.message === 'Forbidden.' && !e.message.includes('TOKEN'));
});

test('input schemas bound counts and reject bad values', () => {
  const { tools } = harness({});
  assert.throws(() => tools.search_questions.inputSchema.parse({ count: 500 }));
  assert.throws(() => tools.draft_question.inputSchema.parse({ topicId: 't', title: 'x', correct: 'E' }));
});

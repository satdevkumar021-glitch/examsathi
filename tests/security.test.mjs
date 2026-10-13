import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, Map, Date, Math, Number });
  return exports;
}
const { rateLimit, clientIp } = load('../src/lib/rate-limit.ts');

test('rate limiter allows up to the limit then blocks with a retry hint', () => {
  const t = 1_000_000;
  for (let i = 0; i < 3; i++) assert.equal(rateLimit('a', 3, 60_000, t + i).ok, true);
  const blocked = rateLimit('a', 3, 60_000, t + 10);
  assert.equal(blocked.ok, false);
  assert.ok(blocked.retryAfter > 0 && blocked.retryAfter <= 60);
});

test('rate limiter isolates keys and resets after the window', () => {
  const t = 2_000_000;
  rateLimit('x', 1, 1000, t);
  assert.equal(rateLimit('x', 1, 1000, t + 1).ok, false);
  assert.equal(rateLimit('y', 1, 1000, t + 1).ok, true);
  assert.equal(rateLimit('x', 1, 1000, t + 1001).ok, true);
});

test('client IP uses the first forwarded address, falling back safely', () => {
  const req = headers => ({ headers: { get: name => headers[name] ?? null } });
  assert.equal(clientIp(req({ 'x-forwarded-for': '1.2.3.4, 5.6.7.8' })), '1.2.3.4');
  assert.equal(clientIp(req({ 'x-real-ip': '9.9.9.9' })), '9.9.9.9');
  assert.equal(clientIp(req({})), 'unknown');
});

test('the app sets security headers and is never built as a static export', () => {
  const config = readFileSync(new URL('../next.config.ts', import.meta.url), 'utf8');
  for (const header of ['X-Content-Type-Options', 'X-Frame-Options', 'Strict-Transport-Security', 'Referrer-Policy', 'frame-ancestors']) assert.ok(config.includes(header), header);
  assert.match(config, /async headers\(\)/);
  assert.doesNotMatch(config, /output:\s*['"]export['"]|isStaticExport/, 'static export would ship the answer key or drop the API');
});

test('auth routes bound the body, rate limit and require 8+ character passwords', () => {
  for (const route of ['login', 'register']) {
    const source = readFileSync(new URL(`../src/app/api/auth/${route}/route.ts`, import.meta.url), 'utf8');
    assert.ok(source.includes('readBoundedText(req, 10000)'), `${route} body cap`);
    assert.ok(source.includes('limitRequest('), `${route} rate limit`);
  }
  assert.ok(readFileSync(new URL('../src/app/api/auth/register/route.ts', import.meta.url), 'utf8').includes('password.length < 8'));
});

// ---- Shared (Redis) limiter ----
function loadShared() {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL('../src/lib/rate-limit-shared.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const local = load('../src/lib/rate-limit.ts');
  const require = id => (id === './rate-limit' ? local : (() => { throw new Error(id); })());
  vm.runInNewContext(js, { exports, require, Map, Date, Math, Number, Array, Error, JSON, AbortSignal, console: { error() {} }, process: { env: {} }, fetch: () => { throw new Error('no network'); } });
  return exports;
}
const { createLimiter } = loadShared();

/** A fake Upstash multi-exec endpoint with real INCR/PEXPIRE NX/PTTL semantics. */
function fakeRedis() {
  const store = new Map();
  let clock = 0;
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, auth: init.headers.Authorization });
    const cmds = JSON.parse(init.body);
    const out = cmds.map(([cmd, key, arg, flag]) => {
      const e = store.get(key);
      const live = e && e.expiresAt > clock ? e : undefined;
      if (cmd === 'INCR') { const n = (live?.count ?? 0) + 1; store.set(key, { count: n, expiresAt: live ? live.expiresAt : Infinity }); return { result: n }; }
      if (cmd === 'PEXPIRE') { const cur = store.get(key); if (flag === 'NX' && cur.expiresAt !== Infinity) return { result: 0 }; cur.expiresAt = clock + Number(arg); return { result: 1 }; }
      if (cmd === 'PTTL') return { result: store.get(key).expiresAt - clock };
      return { error: 'ERR' };
    });
    return new Response(JSON.stringify(out), { status: 200 });
  };
  return { fetchImpl, calls, advance: ms => { clock += ms; } };
}

test('shared limiter: two instances count against one budget', async () => {
  const redis = fakeRedis();
  const a = createLimiter({ url: 'https://r.example', token: 'T', fetchImpl: redis.fetchImpl });
  const b = createLimiter({ url: 'https://r.example', token: 'T', fetchImpl: redis.fetchImpl });
  assert.equal((await a('k', 3, 60_000)).ok, true);
  assert.equal((await b('k', 3, 60_000)).ok, true);
  assert.equal((await a('k', 3, 60_000)).ok, true);
  const blocked = await b('k', 3, 60_000);
  assert.equal(blocked.ok, false);
  assert.ok(blocked.retryAfter >= 1 && blocked.retryAfter <= 60);
  assert.equal(redis.calls[0].auth, 'Bearer T');
});

test('shared limiter: the window is set once and expires', async () => {
  const redis = fakeRedis();
  const limit = createLimiter({ url: 'https://r.example', token: 'T', fetchImpl: redis.fetchImpl });
  await limit('w', 1, 1000);
  redis.advance(600);
  const blocked = await limit('w', 1, 1000);
  assert.equal(blocked.ok, false);
  assert.equal(blocked.retryAfter, 1, 'TTL was not extended by the second hit');
  redis.advance(500);
  assert.equal((await limit('w', 1, 1000)).ok, true);
});

test('shared limiter: with no store configured it uses the local limiter and makes no request', async () => {
  const limit = createLimiter({ fetchImpl: () => { throw new Error('should not be called'); } });
  assert.equal((await limit('local-1', 1, 1000)).ok, true);
  assert.equal((await limit('local-1', 1, 1000)).ok, false);
});

test('shared limiter: a store outage falls back to local limits and backs off', async () => {
  let calls = 0;
  let t = 1000;
  const limit = createLimiter({ url: 'https://r.example', token: 'T', backoffMs: 10_000, now: () => t, fetchImpl: async () => { calls++; throw new Error('down'); } });
  assert.equal((await limit('o', 1, 60_000)).ok, true);
  assert.equal(calls, 1);
  assert.equal((await limit('o', 1, 60_000)).ok, false, 'still limited locally during the outage');
  assert.equal(calls, 1, 'store skipped during back-off');
  t += 10_001;
  await limit('o2', 5, 60_000);
  assert.equal(calls, 2, 'store retried after back-off');
});

test('shared limiter: error replies and malformed bodies are treated as an outage, not as "allowed forever"', async () => {
  for (const reply of [new Response('x', { status: 500 }), new Response(JSON.stringify([{ error: 'WRONGTYPE' }, { result: 1 }, { result: 5 }]), { status: 200 }), new Response(JSON.stringify([{ result: 'abc' }, { result: 1 }, { result: 5 }]), { status: 200 })]) {
    const limit = createLimiter({ url: 'https://r.example', token: 'T', fetchImpl: async () => reply.clone() });
    const key = `bad-${Math.random()}`;
    assert.equal((await limit(key, 1, 60_000)).ok, true);
    assert.equal((await limit(key, 1, 60_000)).ok, false);
  }
});

test('every route that rate limits uses the shared limiter, not the per-instance one', () => {
  for (const file of ['src/lib/api-route.ts', 'src/app/api/auth/login/route.ts', 'src/app/api/auth/register/route.ts', 'src/app/api/admin/quality/route.ts', 'src/app/api/admin/content/route.ts', 'src/app/api/learner/profile/route.ts', 'src/app/api/push/key/route.ts', 'src/app/api/push/send/route.ts']) {
    const source = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
    assert.ok(source.includes('limitRequest('), `${file} uses limitRequest`);
    assert.doesNotMatch(source, /[^a-zA-Z]rateLimit\(/, `${file} must not call the in-memory limiter directly`);
  }
});

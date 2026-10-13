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
    assert.ok(source.includes('rateLimit('), `${route} rate limit`);
  }
  assert.ok(readFileSync(new URL('../src/app/api/auth/register/route.ts', import.meta.url), 'utf8').includes('password.length < 8'));
});

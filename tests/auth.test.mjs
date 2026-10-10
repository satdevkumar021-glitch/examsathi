import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source, dependencies = {}) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, require: name => dependencies[name], URL, URLSearchParams, atob, process });
  return exports;
}
const config = load('../src/lib/supabase/config.ts');
const anon = `eyJheader.${Buffer.from(JSON.stringify({ role: 'anon' })).toString('base64url')}.signature`;
const service = `eyJheader.${Buffer.from(JSON.stringify({ role: 'service_role' })).toString('base64url')}.signature`;

test('requires a valid URL and a public key; rejects secret keys and incomplete configuration', () => {
  assert.equal(config.isValidSupabaseConfig('https://example.supabase.co', anon), true);
  assert.equal(config.isValidSupabaseConfig('https://example.supabase.co', 'sb_publishable_valid_public_key'), true);
  for (const [url, key] of [[undefined, anon], ['https://example.supabase.co', undefined], ['https://your-project-ref.supabase.co', anon], ['invalid', anon], ['http://example.com', anon], ['https://example.supabase.co', service], ['https://example.supabase.co', 'sb_secret_private'], ['https://example.supabase.co', 'eyJmalformed'], ['https://example.com/path', anon]]) assert.equal(config.isValidSupabaseConfig(url, key), false);
});

test('all auth links preserve the Pages subdirectory and support root/local deployments', () => {
  for (const path of ['/auth/callback', '/auth/reset-password']) {
    for (const base of ['examsathi', '/examsathi', '/examsathi/']) assert.equal(config.buildAuthRedirect('https://example.com', path, base), `https://example.com/examsathi${path}/`);
    assert.equal(config.buildAuthRedirect('http://localhost:3000', path, ''), `http://localhost:3000${path}/`);
  }
});

function callback(auth) { return load('../src/lib/supabase/callback.ts', { './client': { createClient: () => ({ auth }) } }); }
const session = { user: { id: 'test-user' } };
function authFixture(overrides = {}) {
  return { exchangeCodeForSession: async () => ({ data: { session }, error: null }), setSession: async () => ({ data: { session }, error: null }), getUser: async () => ({ data: { user: session.user }, error: null }), ...overrides };
}

test('PKCE callback exchanges a one-use code once across duplicate mounts and verifies user', async () => {
  let exchanges = 0;
  const api = callback(authFixture({ exchangeCodeForSession: async () => { exchanges++; return { data: { session }, error: null }; } }));
  const href = 'https://example.com/examsathi/auth/callback/?code=test-code';
  const first = api.completeAuthCallback(href);
  assert.equal(first, api.completeAuthCallback(href));
  assert.equal(await first, session);
  assert.equal(exchanges, 1);
});

test('direct visits and error redirects cannot reuse an existing session', async () => {
  const api = callback(authFixture());
  await assert.rejects(api.completeAuthCallback('https://example.com/auth/reset-password/'), /Open the link/);
  await assert.rejects(api.completeAuthCallback('https://example.com/auth/reset-password/#error=access_denied'), /expired or is invalid/);
});

test('expired codes and failed user verification produce actionable errors', async () => {
  const expired = callback(authFixture({ exchangeCodeForSession: async () => ({ data: { session: null }, error: { message: 'expired' } }) }));
  await assert.rejects(expired.completeAuthCallback('https://example.com/auth/callback/?code=expired'), /already used/);
  const unverified = callback(authFixture({ getUser: async () => ({ data: { user: null }, error: { message: 'invalid' } }) }));
  await assert.rejects(unverified.completeAuthCallback('https://example.com/auth/callback/?code=unverified'), /Unable to verify/);
});

test('legacy recovery links require tokens and recovery type', async () => {
  const api = callback(authFixture());
  await assert.rejects(api.completeAuthCallback('https://example.com/auth/reset-password/#access_token=test&refresh_token=test&type=signup'), /recovery link/);
  assert.equal(await api.completeAuthCallback('https://example.com/auth/reset-password/#access_token=test&refresh_token=test&type=recovery'), session);
});

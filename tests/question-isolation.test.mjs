import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

// The question bank and its answer key must only be reachable from server code.
const root = path.resolve('src');
const serverOnly = new Set([
  'lib/question-service.ts',
  'lib/data/question_bank_engine.ts',
  'lib/api-route.ts',
].map(p => path.join(root, p)));
const bankModules = /(data\/questions|question_bank_engine|data\/quant-practice|data\/reasoning-practice|data\/land-measurement-practice|data\/clerk-data-practice|data\/clerk-gk-fast|data\/foundation-content|question-service)['"]|\/(questions|quant-practice|reasoning-practice|land-measurement-practice|clerk-data-practice|clerk-gk-fast|foundation-content)['"]/;

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(item => {
    const full = path.join(dir, item.name);
    return item.isDirectory() ? files(full) : /\.(ts|tsx)$/.test(item.name) ? [full] : [];
  });
}

test('only server code imports the question bank', () => {
  const offenders = [];
  for (const file of files(root)) {
    const rel = path.relative(root, file);
    // The bank's own modules may import each other; API routes and server pages may use the service.
    if (rel.startsWith(`lib${path.sep}data${path.sep}`) || rel.startsWith(`app${path.sep}api${path.sep}`) || serverOnly.has(file)) continue;
    const source = readFileSync(file, 'utf8');
    if (source.split('\n').some(line => /^\s*import\b/.test(line) && bankModules.test(line) && !/import type/.test(line))) {
      // Server components (no 'use client') may read counts from the service; they never reach the browser.
      const isServerPage = !/^['"]use client['"]/m.test(source) && /\.(tsx)$/.test(file) && rel.startsWith('app');
      const isServerLib = source.includes("import 'server-only'");
      if (!isServerPage && !isServerLib) offenders.push(rel);
    }
  }
  assert.deepEqual(offenders, []);
});

test('bank modules are marked server-only', () => {
  for (const rel of ['lib/question-service.ts', 'lib/data/question_bank_engine.ts', 'lib/api-route.ts']) {
    assert.ok(readFileSync(path.join(root, rel), 'utf8').includes("import 'server-only'"), rel);
  }
});

test('server question routes never return answer fields except reveal and attempts', () => {
  const routes = path.join(root, 'app/api/questions');
  for (const dir of readdirSync(routes)) {
    const source = readFileSync(path.join(routes, dir, 'route.ts'), 'utf8');
    const reveals = dir === 'reveal';
    assert.equal(source.includes('toReveal('), reveals, `${dir} reveal usage`);
    if (!reveals) assert.doesNotMatch(source, /\.correct\b|\.explanation\b/, `${dir} must not read answers`);
  }
  const set = readFileSync(path.join(routes, 'set/route.ts'), 'utf8');
  assert.ok(readFileSync(path.join(root, 'lib/question-service.ts'), 'utf8').includes('questions.map(toPublic)'));
  assert.ok(set.includes('resolveSet('));
});

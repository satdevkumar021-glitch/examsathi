import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { generate } from '../scripts/gen-theme-css.mjs';

test('theme-light.css is up to date with the colour classes used in src/', () => {
  const committed = readFileSync(new URL('../src/app/theme-light.css', import.meta.url), 'utf8');
  assert.equal(committed, generate(), 'Run: node scripts/gen-theme-css.mjs');
});

test('light theme keeps the document-level contract', () => {
  const css = readFileSync(new URL('../src/app/theme-light.css', import.meta.url), 'utf8');
  assert.match(css, /html\[data-theme="light"\] \{\s+color-scheme: light;/);
  assert.match(css, /--color-slate-900: #f1f5f9/);
});

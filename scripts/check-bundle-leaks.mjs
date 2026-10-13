// Fails if the built browser bundle contains question-bank answer keys.
// Run after `npm run build`. The bank must only exist in server chunks.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('.next/static');
const limitBytes = 1_500_000; // The old bundle carried a ~4.5 MB chunk of questions.
const answerKey = /"correct":"[A-D]"/g;
let leaks = 0, oversized = [];

const visit = dir => {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) { visit(full); continue; }
    if (!item.name.endsWith('.js')) continue;
    const text = readFileSync(full, 'utf8');
    const hits = text.match(answerKey)?.length ?? 0;
    // AI-made drills build one question at a time; a bank would have hundreds of keys in a chunk.
    if (hits > 20) { leaks += hits; console.error(`${path.relative('.', full)}: ${hits} answer keys`); }
    if (statSync(full).size > limitBytes) oversized.push(`${path.relative('.', full)} (${(statSync(full).size / 1e6).toFixed(2)} MB)`);
  }
};
try { visit(root); } catch { console.error('No .next/static found. Run `npm run build` first.'); process.exit(2); }
if (oversized.length) console.warn('Large chunks:', oversized.join(', '));
if (leaks) { console.error(`FAIL: ${leaks} answer keys found in browser chunks.`); process.exit(1); }
console.log('OK: no question-bank answer keys in browser chunks.');

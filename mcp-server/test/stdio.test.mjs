import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// End to end over real stdio against a fake HTTP API: proves the protocol wiring, not just the handlers.
const entry = fileURLToPath(new URL('../src/index.mjs', import.meta.url));

function rpc(child) {
  let buffer = '';
  const waiting = new Map();
  child.stdout.on('data', chunk => {
    buffer += chunk;
    let i;
    while ((i = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, i).trim();
      buffer = buffer.slice(i + 1);
      if (!line) continue;
      const msg = JSON.parse(line);
      waiting.get(msg.id)?.(msg);
    }
  });
  let id = 0;
  return {
    call: (method, params) => new Promise(resolve => { const n = ++id; waiting.set(n, resolve); child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: n, method, params }) + '\n'); }),
    notify: (method, params) => child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method, params }) + '\n'),
  };
}

test('lists tools and calls one over stdio', async () => {
  const api = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, exams: [{ id: 'e1', name: 'Exam', body: 'B', defaultQuestions: 10, timeLimitMinutes: 9, negativeMarking: 0, topics: [] }] }));
  });
  await new Promise(r => api.listen(0, '127.0.0.1', r));
  const child = spawn(process.execPath, [entry], { env: { ...process.env, EXAMSATHI_API_URL: `http://127.0.0.1:${api.address().port}`, EXAMSATHI_STAFF_TOKEN: '' } });
  try {
    const c = rpc(child);
    const init = await c.call('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'test', version: '0' } });
    assert.equal(init.result.serverInfo.name, 'examsathi');
    c.notify('notifications/initialized', {});
    const list = await c.call('tools/list', {});
    const names = list.result.tools.map(t => t.name).sort();
    assert.deepEqual(names, ['count_questions', 'draft_question', 'get_quality_report', 'list_exams', 'list_topics', 'search_questions']);
    assert.equal(list.result.tools.find(t => t.name === 'list_exams').annotations.readOnlyHint, true);
    const call = await c.call('tools/call', { name: 'list_exams', arguments: {} });
    assert.match(call.result.content[0].text, /"id": "e1"/);
    const staff = await c.call('tools/call', { name: 'get_quality_report', arguments: {} });
    assert.equal(staff.result.isError, true);
    assert.match(staff.result.content[0].text, /EXAMSATHI_STAFF_TOKEN/);
  } finally {
    child.kill();
    api.close();
  }
});

test('refuses to start without a valid URL', async () => {
  for (const url of [undefined, 'http://evil.example']) {
    const env = { ...process.env }; delete env.EXAMSATHI_API_URL; if (url) env.EXAMSATHI_API_URL = url;
    const child = spawn(process.execPath, [entry], { env });
    const code = await new Promise(r => child.on('exit', r));
    assert.equal(code, 1);
  }
});

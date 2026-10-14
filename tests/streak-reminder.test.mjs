import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source, dependencies = {}) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, require: name => dependencies[name], Object, Array, Set, Map, Math, Number, Date, JSON, URL, RegExp, String });
  return exports;
}
const insights = load('../src/lib/learner-insights.ts');
const { decideReminder, reminderMessage, validateSubscription, localHour } = load('../src/lib/streak-reminder.ts', { './learner-insights': insights });
const { dayKey } = insights;

const IST = 330;
// 2025-07-10 19:30 IST = 14:00 UTC.
const EVENING = Date.UTC(2025, 6, 10, 14, 0, 0);
const day = (n, now = EVENING) => dayKey(now - n * 86400000, IST);

test('localHour applies the device offset', () => {
  assert.equal(localHour(EVENING, IST), 19);
  assert.equal(localHour(EVENING, 0), 14);
  assert.equal(localHour(EVENING, -300), 9);
});

test('sends in the evening when a streak of 2+ is unpractised today', () => {
  const d = decideReminder({ days: [day(1), day(2)], tzOffsetMinutes: IST, lastSentDay: null }, EVENING);
  assert.deepEqual({ ...d }, { send: true, streak: 2 });
});

test('reports the real streak length', () => {
  const d = decideReminder({ days: [day(1), day(2), day(3), day(4), day(5)], tzOffsetMinutes: IST, lastSentDay: null }, EVENING);
  assert.equal(d.send, true);
  assert.equal(d.streak, 5);
});

test('does not nudge a learner who already practised today', () => {
  const d = decideReminder({ days: [day(0), day(1), day(2)], tzOffsetMinutes: IST, lastSentDay: null }, EVENING);
  assert.equal(d.send, false);
  assert.equal(d.reason, 'practised-today');
});

test('does not nudge when there is nothing to lose (streak under 2)', () => {
  const d = decideReminder({ days: [day(1)], tzOffsetMinutes: IST, lastSentDay: null }, EVENING);
  assert.equal(d.reason, 'no-streak');
});

test('a broken streak is not nudged', () => {
  const d = decideReminder({ days: [day(2), day(3)], tzOffsetMinutes: IST, lastSentDay: null }, EVENING);
  assert.equal(d.reason, 'no-streak');
});

test('never sends twice on the same local day', () => {
  const d = decideReminder({ days: [day(1), day(2)], tzOffsetMinutes: IST, lastSentDay: dayKey(EVENING, IST) }, EVENING);
  assert.equal(d.reason, 'already-sent');
});

test('sends again the next day', () => {
  const next = EVENING + 86400000;
  const d = decideReminder({ days: [day(0, next), day(1, next)].slice(1).concat(day(2, next)), tzOffsetMinutes: IST, lastSentDay: dayKey(EVENING, IST) }, next);
  assert.equal(d.send, true);
});

test('respects quiet hours: not in the morning, not late at night', () => {
  const base = Date.UTC(2025, 6, 10, 0, 0, 0);
  const ist = hour => base - 330 * 60000 + hour * 3600000; // local hour `hour` on 10 July in IST
  for (const hour of [0, 6, 12, 17]) assert.equal(decideReminder({ days: [day(1, ist(hour)), day(2, ist(hour))], tzOffsetMinutes: IST, lastSentDay: null }, ist(hour)).reason, 'outside-window', `hour ${hour}`);
  for (const hour of [18, 19, 20]) assert.equal(decideReminder({ days: [day(1, ist(hour)), day(2, ist(hour))], tzOffsetMinutes: IST, lastSentDay: null }, ist(hour)).send, true, `hour ${hour}`);
  for (const hour of [21, 22, 23]) assert.equal(decideReminder({ days: [day(1, ist(hour)), day(2, ist(hour))], tzOffsetMinutes: IST, lastSentDay: null }, ist(hour)).reason, 'outside-window', `hour ${hour}`);
});

test('the window follows each device timezone, not the server clock', () => {
  // 14:00 UTC is 19:30 IST (inside) but 09:00 in UTC-5 (outside).
  const mk = tz => decideReminder({ days: [dayKey(EVENING - 86400000, tz), dayKey(EVENING - 2 * 86400000, tz)], tzOffsetMinutes: tz, lastSentDay: null }, EVENING);
  assert.equal(mk(IST).send, true);
  assert.equal(mk(-300).reason, 'outside-window');
});

test('messages are specific, bounded and localized', () => {
  for (const lang of ['en', 'hi', 'pa']) {
    const m = reminderMessage(7, lang);
    assert.ok(m.title.includes('7'), lang);
    assert.ok(m.title.length < 80 && m.body.length < 160, lang);
    assert.equal(m.url, '/mock-test/');
  }
  assert.notEqual(reminderMessage(3, 'hi').title, reminderMessage(3, 'en').title);
  assert.equal(reminderMessage(3, 'xx').title, reminderMessage(3, 'en').title);
});

const KEY = 'BNcRdreALRFXTkOOUHK1EtK2wtaz5Ry4YfYCA_0QTpQtUbVlUls0VJXg7A8u-Ts1XbjhazAkj7I99e8QcYP7DkM';
const good = (over = {}) => ({ subscription: { endpoint: 'https://fcm.googleapis.com/fcm/send/abc123', keys: { p256dh: KEY, auth: 'tBHItJI5svbpez7KI4CCXg' } }, tzOffsetMinutes: 330, lang: 'hi', ...over });

test('accepts a real-shaped subscription', () => {
  const r = validateSubscription(good());
  assert.equal(r.ok, true);
  assert.equal(r.value.lang, 'hi');
  assert.equal(r.value.tzOffsetMinutes, 330);
});

test('accepts the major push services', () => {
  for (const endpoint of ['https://updates.push.services.mozilla.com/wpush/v2/x', 'https://web.push.apple.com/x', 'https://wns2-par02p.notify.windows.com/w/?token=x', 'https://fcm.googleapis.com/fcm/send/x'])
    assert.equal(validateSubscription(good({ subscription: { endpoint, keys: { p256dh: KEY, auth: 'tBHItJI5svbpez7KI4CCXg' } } })).ok, true, endpoint);
});

test('rejects endpoints that are not push services (no SSRF)', () => {
  for (const endpoint of [
    'http://fcm.googleapis.com/x', 'https://evil.example.com/x', 'https://169.254.169.254/latest/meta-data', 'https://localhost/x',
    'https://fcm.googleapis.com.evil.com/x', 'https://user:pw@fcm.googleapis.com/x', 'ftp://fcm.googleapis.com/x', 'not a url', '',
    'https://evilgoogleapis.com/x', 'https://fcm.googleapis.com/' + 'a'.repeat(700),
  ]) assert.equal(validateSubscription(good({ subscription: { endpoint, keys: { p256dh: KEY, auth: 'tBHItJI5svbpez7KI4CCXg' } } })).ok, false, endpoint.slice(0, 50));
});

test('rejects malformed bodies and keys', () => {
  const ep = 'https://fcm.googleapis.com/fcm/send/abc';
  for (const bad of [null, 'x', {}, { subscription: null }, { subscription: { endpoint: ep } }, { subscription: { endpoint: ep, keys: {} } },
    { subscription: { endpoint: ep, keys: { p256dh: 'short', auth: 'tBHItJI5svbpez7KI4CCXg' } } },
    { subscription: { endpoint: ep, keys: { p256dh: KEY, auth: 'bad auth!' } } },
    { subscription: { endpoint: ep, keys: { p256dh: KEY + '<script>', auth: 'tBHItJI5svbpez7KI4CCXg' } } },
    { subscription: { endpoint: ep, keys: { p256dh: 'a'.repeat(300), auth: 'tBHItJI5svbpez7KI4CCXg' } } },
    { subscription: { endpoint: 123, keys: { p256dh: KEY, auth: 'tBHItJI5svbpez7KI4CCXg' } } },
  ]) assert.equal(validateSubscription(bad).ok, false);
});

test('bad timezone and language fall back to safe defaults', () => {
  const r = validateSubscription(good({ tzOffsetMinutes: 99999, lang: 'fr' }));
  assert.equal(r.ok, true);
  assert.equal(r.value.tzOffsetMinutes, 330);
  assert.equal(r.value.lang, 'en');
  assert.equal(validateSubscription(good({ tzOffsetMinutes: 1.5 })).value.tzOffsetMinutes, 330);
  assert.equal(validateSubscription(good({ tzOffsetMinutes: '330' })).value.tzOffsetMinutes, 330);
});

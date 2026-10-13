// Streak-reminder pipeline against a running app wired to scripts/dev/fake-supabase.mjs, started with
// PUSH_DRY_RUN=1 VAPID_PUBLIC_KEY=... VAPID_PRIVATE_KEY=... VAPID_SUBJECT=mailto:x@y.z CRON_SECRET=<16+ chars>.
// Dry run means no real push service is contacted. See docs/LOCAL_TESTING.md.
const B = process.env.SMOKE_URL || 'http://localhost:3200';
const FAKE = process.env.FAKE_URL || 'http://127.0.0.1:54321';
const CRON = process.env.CRON_SECRET || 'cron-secret-for-local-tests';
const j = async (m, p, body, tok, base = B) => { const r = await fetch(base + p, { method: m, headers: { 'content-type': 'application/json', ...(tok ? { authorization: 'Bearer ' + tok } : {}) }, body: body ? JSON.stringify(body) : undefined }); const t = await r.text(); let o = null; try { o = JSON.parse(t); } catch {} return { s: r.status, o, t }; };
let pass = 0, failn = 0; const ok = (n, c, x = '') => { if (c) pass++; else failn++; console.log((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  ' + x)); };

const KEY = 'BNcRdreALRFXTkOOUHK1EtK2wtaz5Ry4YfYCA_0QTpQtUbVlUls0VJXg7A8u-Ts1XbjhazAkj7I99e8QcYP7DkM';
const sub = (n, extra = {}) => ({ subscription: { endpoint: `https://fcm.googleapis.com/fcm/send/device-${n}`, keys: { p256dh: KEY, auth: 'tBHItJI5svbpez7KI4CCXg' } }, tzOffsetMinutes: 330, lang: 'hi', ...extra });
const LEARNER = '44444444-4444-4444-8444-444444444444', OTHER = '55555555-5555-4555-8555-555555555555';
// 19:30 IST on a fixed day, and the same instant one day later.
const EVENING = Date.UTC(2030, 0, 10, 14, 0, 0);
const send = (now, secret = CRON) => j('POST', `/api/push/send/?now=${now}`, null, secret);

let r = await j('GET', '/api/push/key/');
ok('public key is served', r.s === 200 && typeof r.o?.publicKey === 'string' && r.o.publicKey.length > 20, r.t);
ok('the private key is never exposed', !/PRIVATE|secret/i.test(r.t), r.t);

r = await j('POST', '/api/push/subscribe/', sub(1));
ok('subscribing needs a session (401)', r.s === 401, r.t);
r = await j('POST', '/api/push/subscribe/', sub(1), 'garbage');
ok('garbage token rejected (401)', r.s === 401, r.t);
r = await j('POST', '/api/push/subscribe/', { subscription: { endpoint: 'https://169.254.169.254/x', keys: { p256dh: KEY, auth: 'tBHItJI5svbpez7KI4CCXg' } } }, 'tok-learner');
ok('a non-push endpoint is rejected (SSRF guard)', r.s === 400, r.t);
r = await j('POST', '/api/push/subscribe/', { subscription: { endpoint: 'https://fcm.googleapis.com/x', keys: { p256dh: 'short', auth: 'x' } } }, 'tok-learner');
ok('malformed keys are rejected', r.s === 400, r.t);

r = await j('POST', '/api/push/subscribe/', sub(1), 'tok-learner');
ok('learner subscribes a device', r.s === 200 && r.o?.success, r.t);
r = await j('POST', '/api/push/subscribe/', sub(1), 'tok-learner');
ok('re-subscribing the same device is idempotent', r.s === 200, r.t);
let stored = (await j('GET', '/__test/push', null, null, FAKE)).o;
ok('exactly one row stored for that device', stored.filter(x => x.endpoint.endsWith('device-1')).length === 1, JSON.stringify(stored).slice(0, 200));

// Device limit.
for (let n = 2; n <= 10; n++) await j('POST', '/api/push/subscribe/', sub(n), 'tok-learner');
r = await j('POST', '/api/push/subscribe/', sub(11), 'tok-learner');
ok('an account is capped at 10 devices (409)', r.s === 409, r.t);
r = await j('POST', '/api/push/subscribe/', sub(3), 'tok-learner');
ok('re-registering an existing device still works at the cap', r.s === 200, r.t);

r = await j('DELETE', '/api/push/subscribe/', { endpoint: sub(5).subscription.endpoint }, 'tok-other');
ok("another user cannot remove someone else's device", r.s === 200, r.t);
stored = (await j('GET', '/__test/push', null, null, FAKE)).o;
ok('...and the row is still there', stored.some(x => x.endpoint.endsWith('device-5')), '');
r = await j('DELETE', '/api/push/subscribe/', { endpoint: sub(5).subscription.endpoint }, 'tok-learner');
stored = (await j('GET', '/__test/push', null, null, FAKE)).o;
ok('the owner can unsubscribe', r.s === 200 && !stored.some(x => x.endpoint.endsWith('device-5')), r.t);
// Keep a single device for the send tests.
for (const n of [2, 3, 4, 6, 7, 8, 9, 10]) await j('DELETE', '/api/push/subscribe/', { endpoint: sub(n).subscription.endpoint }, 'tok-learner');

// The send route.
r = await j('POST', '/api/push/send/');
ok('send without a secret is rejected (401)', r.s === 401, r.t);
r = await send(EVENING, 'wrong-secret-wrong-secret');
ok('send with the wrong secret is rejected (401)', r.s === 401, r.t);
r = await send(EVENING, 'short');
ok('send with a short secret is rejected (401)', r.s === 401, r.t);
r = await j('POST', '/api/push/send/?now=' + EVENING, null, 'tok-learner');
ok('a learner token is not a cron secret (401)', r.s === 401, r.t);

// Streak: practised on the three previous IST days at 19:30, not yet today.
const DAY = 86400000;
await j('POST', '/__test/attempts', { userId: LEARNER, times: [EVENING - DAY, EVENING - 2 * DAY, EVENING - 3 * DAY] }, null, FAKE);

r = await send(Date.UTC(2030, 0, 10, 4, 0, 0));
ok('09:30 IST is outside the window: nothing sent', r.o?.sent === 0 && r.o?.skipped >= 1, r.t);
r = await send(EVENING);
ok('19:30 IST with a 3-day streak at risk: one reminder sent', r.o?.sent === 1, r.t);
r = await send(EVENING);
ok('running again the same evening sends nothing (idempotent)', r.o?.sent === 0, r.t);
r = await send(EVENING + 3600000);
ok('...even an hour later', r.o?.sent === 0, r.t);
r = await send(EVENING + DAY);
ok('the next evening the streak is already broken, so no nudge', r.o?.sent === 0, r.t);

stored = (await j('GET', '/__test/push', null, null, FAKE)).o;
ok('last_sent_day is recorded in the learner timezone', stored[0]?.last_sent_day === '2030-01-10', JSON.stringify(stored[0]));

// A learner who has already practised today is left alone, and the row stays untouched.
await j('POST', '/__test/attempts', { userId: OTHER, times: [EVENING - 3600000, EVENING - DAY, EVENING - 2 * DAY] }, null, FAKE);
await j('POST', '/api/push/subscribe/', sub(20), 'tok-other');
r = await send(EVENING);
stored = (await j('GET', '/__test/push', null, null, FAKE)).o;
const theirs = stored.find(x => x.endpoint.endsWith('device-20'));
ok('a learner who already practised today is not nudged', r.o?.sent === 0 && theirs?.last_sent_day === null, JSON.stringify({ r: r.o, theirs }));

// A device in a timezone where it is still morning is not nudged either.
await j('POST', '/api/push/subscribe/', sub(21, { tzOffsetMinutes: -300 }), 'tok-learner');
r = await send(EVENING);
stored = (await j('GET', '/__test/push', null, null, FAKE)).o;
ok('a device where it is morning is not nudged (per-device timezone)', stored.find(x => x.endpoint.endsWith('device-21'))?.last_sent_day === null, r.t);

console.log(`\n${pass} passed, ${failn} failed`);
process.exit(failn ? 1 : 0);

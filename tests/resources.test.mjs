import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(source) {
  const exports = {};
  const js = ts.transpileModule(readFileSync(new URL(source, import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(js, { exports, URL, JSON, Object, Array, String, RegExp, Set, TextEncoder }, {});
  return exports;
}
const r = load('../src/lib/resource-content.ts');
const src = file => readFileSync(new URL(`../src/${file}`, import.meta.url), 'utf8');
const code = text => text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

test('YouTube ids are extracted from real link shapes and nothing else', () => {
  const id = 'dQw4w9WgXcQ';
  for (const input of [id, ` ${id} `, `https://www.youtube.com/watch?v=${id}`, `https://youtube.com/watch?v=${id}&t=30s`, `https://m.youtube.com/watch?v=${id}`, `https://youtu.be/${id}`, `https://youtu.be/${id}?si=abc`, `https://www.youtube.com/embed/${id}`, `https://www.youtube.com/shorts/${id}`, `https://www.youtube-nocookie.com/embed/${id}`]) {
    assert.equal(r.youtubeIdFrom(input), id, input);
  }
  for (const bad of ['', 'short', 'x'.repeat(12), `https://evil.example/watch?v=${id}`, `https://youtube.com.evil.example/watch?v=${id}`, `https://www.youtube.com/watch?v=${id}x`, `https://www.youtube.com/watch`, `javascript:alert(1)`, `https://www.youtube.com/watch?v="><script>`, null, undefined, 5, {}]) {
    assert.equal(r.youtubeIdFrom(bad), null, String(bad));
  }
});

test('document links must be public https: no http, credentials, IPs, localhost or odd ports', () => {
  assert.equal(r.safeHttpsUrl('https://ncert.nic.in/textbook.php'), 'https://ncert.nic.in/textbook.php');
  assert.equal(r.safeHttpsUrl('  https://pseb.ac.in/a.pdf  '), 'https://pseb.ac.in/a.pdf');
  assert.equal(r.safeHttpsUrl('https://example.com:443/x'), 'https://example.com/x');
  for (const bad of ['http://ncert.nic.in/a.pdf', 'javascript:alert(1)', 'data:text/html,hi', 'ftp://x.example/a', 'https://user:pass@example.com/', 'https://user@example.com/', 'https://127.0.0.1/a', 'https://10.0.0.5/a', 'https://169.254.169.254/latest', 'https://[::1]/a', 'https://localhost/a', 'https://app.localhost/a', 'https://intranet/a', 'https://printer.local/a', 'https://example.com:8443/a', 'https://' + 'a'.repeat(600) + '.com', '', null, 7]) {
    assert.equal(r.safeHttpsUrl(bad), null, String(bad));
  }
});

test('a lesson is plain text with a title and a body in English or Hindi', () => {
  const ok = r.validateResourceData('lesson', { title: { en: 'Doabs', pa: 'ਦੁਆਬੇ' }, body: { en: 'Five rivers.\r\n\r\nTwo doabs.' } });
  assert.equal(ok.ok, true);
  assert.equal(ok.value.body.en, 'Five rivers.\n\nTwo doabs.', 'line endings are normalised, paragraphs kept');
  for (const bad of [{ body: { en: 'x' } }, { title: { en: 'x' } }, { title: { pa: 'ਸਿਰਫ਼' }, body: { en: 'x' } }, { title: { en: 'x' }, body: { en: 'y'.repeat(6001) } }, { title: { en: 'x'.repeat(201) }, body: { en: 'y' } }, { title: { en: 5 }, body: { en: 'y' } }, null, [], 'text']) {
    assert.equal(r.validateResourceData('lesson', bad).ok, false, JSON.stringify(bad)?.slice(0, 50));
  }
});

test('control characters are stripped from lesson text but markup is kept as inert text', () => {
  const ok = r.validateResourceData('lesson', { title: { en: 'T\u0000\u0007' }, body: { en: 'a\u0000b <script>alert(1)</script>' } });
  assert.equal(ok.ok, true);
  assert.equal(ok.value.title.en, 'T');
  assert.equal(ok.value.body.en, 'ab <script>alert(1)</script>', 'kept literally; the page renders it as text, never as HTML');
});

test('a video stores only the validated id', () => {
  const ok = r.validateResourceData('video', { youtubeId: 'https://youtu.be/dQw4w9WgXcQ?x=1', channel: ' StudyIQ ', duration: '1:15:30', language: 'pa', extra: '<script>' });
  assert.deepEqual(JSON.parse(JSON.stringify(ok.value)), { youtubeId: 'dQw4w9WgXcQ', channel: 'StudyIQ', duration: '1:15:30', language: 'pa' });
  assert.equal(r.validateResourceData('video', { youtubeId: 'https://evil.example/x' }).ok, false);
  assert.equal(r.validateResourceData('video', { youtubeId: 'dQw4w9WgXcQ', channel: 'c'.repeat(101) }).ok, false);
  assert.equal(r.validateResourceData('video', { youtubeId: 'dQw4w9WgXcQ', language: 'klingon' }).value.language, 'hi', 'unknown language falls back');
});

test('a document stores only a safe link, a publisher and a language', () => {
  const ok = r.validateResourceData('pdf', { url: 'https://ncert.nic.in/a.pdf', publisher: 'NCERT', language: 'en', junk: 1 });
  assert.deepEqual(JSON.parse(JSON.stringify(ok.value)), { url: 'https://ncert.nic.in/a.pdf', language: 'en', publisher: 'NCERT' });
  assert.equal(r.validateResourceData('pdf', { url: 'http://ncert.nic.in/a.pdf' }).ok, false);
  assert.equal(r.validateResourceData('pdf', { url: 'javascript:alert(1)' }).ok, false);
});

test('size limits are in bytes, so Hindi and Punjabi cannot slip past a character count', () => {
  const hindi = 'अ'.repeat(5000); // 5,000 characters, 15,000 bytes
  assert.equal(r.validateResourceData('lesson', { title: { hi: 'शीर्षक' }, body: { hi: hindi } }).ok, true, 'fits');
  const tooBig = r.validateResourceData('lesson', { title: { hi: 'शीर्षक' }, body: { hi: hindi, pa: 'ਅ'.repeat(5000) } });
  assert.equal(tooBig.ok, false);
  assert.match(tooBig.message, /too (large|long)/i);
  assert.ok(r.byteLength('अ') === 5, 'JSON-encoded 3-byte character plus quotes');
  assert.ok(r.MAX_DATA_BYTES < 20000, 'headroom under the database limit');
});

test('public resources expose only student-facing fields and drop malformed rows', () => {
  const row = { id: 'i1', type: 'video', title: 'T', topicId: 'punjab-history', data: { youtubeId: 'dQw4w9WgXcQ', channel: 'C', language: 'hi', author_email: 'a@b.c', reviewed_by: 'x' } };
  const pub = r.toPublicResource(row);
  assert.deepEqual(Object.keys(pub).sort(), ['id', 'topicId', 'title', 'type', 'video'].sort());
  assert.ok(!JSON.stringify(pub).includes('author') && !JSON.stringify(pub).includes('reviewed_by'));
  assert.equal(r.toPublicResource({ ...row, data: { youtubeId: 'nope' } }), null, 'legacy or hand-edited rows are never served');
  assert.equal(r.toPublicResource({ ...row, type: 'question' }), null);
  assert.equal(r.toPublicResource({ ...row, type: 'pdf', data: { url: 'http://x.example' } }), null);
});

test('the admin API validates resources on create and edit, and questions by bytes', () => {
  const route = code(src('app/api/admin/content/route.ts'));
  assert.equal((route.match(/validateResourceData\(/g) || []).length, 2, 'POST and PUT both validate resources');
  assert.equal((route.match(/byteLength\(/g) || []).length, 2, 'question size is checked in bytes on create and edit');
  assert.ok(route.includes("isResourceType(item.type)") && route.includes("isResourceType(current.type)"));
});

test('the public resources route is rate limited, bounded, cached briefly and returns no staff data', () => {
  const route = code(src('app/api/resources/route.ts'));
  assert.ok(route.includes('limitRequest('));
  assert.ok(route.includes('MAX_TOPICS') && route.includes('t.length > 120'));
  assert.ok(route.includes('refreshEditorial()'));
  assert.ok(route.includes('editorialResources('));
  assert.ok(!/author|reviewed_by|serviceClient|feedback/.test(route), 'never reads staff columns');
});

test('the loader serves only published, valid resources and keeps the last good copy on error', () => {
  const loader = code(src('lib/editorial-loader.ts'));
  assert.ok(loader.includes(".eq('status', 'published')"));
  assert.ok(loader.includes('toPublicResource('));
  assert.ok(/questions\.error \|\| !questions\.data \|\| items\.error \|\| !items\.data\) return/.test(loader), 'partial loads are discarded');
});

test('the student page never renders educator text as HTML and never embeds anything but a validated id', () => {
  const page = code(src('app/(dashboard)/lesson/[topicId]/LessonViewClient.tsx'));
  const htmlUses = page.match(/dangerouslySetInnerHTML/g) || [];
  assert.equal(htmlUses.length, 1, 'only the built-in, reviewed-in-repo lesson uses HTML');
  const educatorBlock = page.slice(page.indexOf('Lessons from educators'), page.indexOf('Worked Examples &'));
  assert.ok(educatorBlock.includes('whitespace-pre-wrap') && !educatorBlock.includes('dangerouslySetInnerHTML'), 'educator lessons are text nodes');
  assert.ok(page.includes('youtube-nocookie.com/embed/${item.video?.youtubeId}'), 'embed uses only the stored id');
  assert.ok(page.includes('noopener noreferrer nofollow'), 'educator links are not trusted');
});

test('every educator link the student page opens is https by construction', () => {
  const page = src('app/(dashboard)/lesson/[topicId]/LessonViewClient.tsx');
  assert.ok(page.includes('href={item.document?.url}'));
  // The only way a url reaches the page is through toPublicResource -> validateResourceData -> safeHttpsUrl.
  assert.ok(src('lib/resource-content.ts').includes("url.protocol !== 'https:'"));
});

test('the fake upload tab is gone: nothing claims success without saving', () => {
  const admin = src('app/(dashboard)/admin/AdminClient.tsx');
  assert.ok(!admin.includes('Document indexed'), 'no fake success message');
  assert.ok(!admin.includes('UploadCloud'));
});

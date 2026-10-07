import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
function moduleAt(file, dependencies, globals = {}) {
  const loaded = { exports: {} };
  const code = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(code, { module: loaded, exports: loaded.exports, require: name => { if (!(name in dependencies)) throw new Error(name); return dependencies[name]; }, setTimeout, clearTimeout, ...globals });
  return loaded.exports;
}
const paths = { publicPath: path => '/examsathi' + path };
test('document extraction rejects oversized, unsupported and unreadable input before generation', async () => {
  const { extractDocumentText } = moduleAt('src/lib/document-text.ts', { './paths': paths, './document-ocr': {} });
  await assert.rejects(extractDocumentText({ name: 'notes.txt', size: 11 * 1024 * 1024 }), /10 MB/);
  await assert.rejects(extractDocumentText({ name: 'notes.exe', size: 100 }), /Use PDF/);
  await assert.rejects(extractDocumentText({ name: 'notes.txt', size: 20, text: async () => 'Too short' }), /Not enough/);
});
test('scanned PDF page limit rejects work and releases PDF worker', async () => {
  let destroyed = 0, recognized = 0;
  const pdfjs = { GlobalWorkerOptions: {}, getDocument: () => ({ promise: Promise.resolve({ numPages: 11, getPage: async () => ({ getTextContent: async () => ({ items: [] }) }) }), destroy: async () => { destroyed++; } }) };
  const { extractDocumentText } = moduleAt('src/lib/document-text.ts', { './paths': paths, './document-ocr': { recognizeStudyImage: async () => { recognized++; } }, 'pdfjs-dist': pdfjs });
  await assert.rejects(extractDocumentText({ name: 'scan.pdf', size: 100, arrayBuffer: async () => new ArrayBuffer(0) }, { scanPDF: true }), /at most 10 pages/);
  assert.equal(recognized, 0); assert.equal(destroyed, 1);
});
test('OCR uses owned runtime paths, selected language and terminates after recognition', async () => {
  let configuration, termination = 0;
  const { recognizeStudyImage } = moduleAt('src/lib/document-ocr.ts', { './paths': paths, 'tesseract.js': { createWorker: async (...args) => { configuration = args; return { recognize: async () => ({ data: { text: 'Recognized study notes' } }), terminate: async () => { termination++; } }; } } }, { File: class File {} });
  assert.equal(await recognizeStudyImage({}, { language: 'pan' }), 'Recognized study notes');
  assert.equal(configuration[0], 'pan'); assert.equal(configuration[2].workerPath, '/examsathi/ocr/worker.min.js'); assert.equal(configuration[2].corePath, '/examsathi/ocr'); assert.equal(termination, 1);
});
test('cancelling OCR releases a worker even when recognition never resolves', async () => {
  const controller = new AbortController(); let termination = 0, started;
  const ready = new Promise(resolve => { started = resolve; });
  const { recognizeStudyImage } = moduleAt('src/lib/document-ocr.ts', { './paths': paths, 'tesseract.js': { createWorker: async () => ({ recognize: () => { started(); return new Promise(() => {}); }, terminate: async () => { termination++; } }) } }, { File: class File {} });
  const pending = recognizeStudyImage({}, { signal: controller.signal });
  await ready; controller.abort(); await assert.rejects(pending, /cancelled/); assert.equal(termination, 1);
});
test('cloud transfers refuse a different active local account before reading any vault', async () => {
  let exported = 0, writes = 0;
  const client = { auth: { getUser: async () => ({ data: { user: { id: 'alice' } }, error: null }) }, rpc: async () => { writes++; } };
  const { saveCloudStudy } = moduleAt('src/lib/cloud-study.ts', { './supabase/client': { createClient: () => client }, './study-backup': { exportStudyBackup: () => { exported++; return '{}'; }, restoreStudyBackup() {} } }, { window: { localStorage: { getItem: () => 'bob' } } });
  await assert.rejects(saveCloudStudy(0), /Account changed/); assert.equal(exported, 0); assert.equal(writes, 0);
});
test('cloud save propagates version conflicts without changing local records', async () => {
  let restored = 0, parameters;
  const client = { auth: { getUser: async () => ({ data: { user: { id: 'alice' } }, error: null }) }, rpc: async (_name, input) => { parameters = input; return { error: { code: '40001' }, data: null }; } };
  const { saveCloudStudy } = moduleAt('src/lib/cloud-study.ts', { './supabase/client': { createClient: () => client }, './study-backup': { exportStudyBackup: () => '{"version":1,"records":{}}', restoreStudyBackup: () => { restored++; } } }, { Blob, window: { localStorage: { getItem: () => 'alice' } } });
  await assert.rejects(saveCloudStudy(4), /Another device changed/); assert.equal(parameters.p_expected_version, 4); assert.equal(restored, 0);
});

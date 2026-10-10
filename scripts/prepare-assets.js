const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const destination = path.join(root, 'public', 'ocr');
fs.mkdirSync(destination, { recursive: true });
fs.copyFileSync(path.join(root, 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs'), path.join(root, 'public/pdf.worker.min.mjs'));
fs.copyFileSync(path.join(root, 'node_modules/tesseract.js/dist/worker.min.js'), path.join(destination, 'worker.min.js'));
for (const name of fs.readdirSync(path.join(root, 'node_modules/tesseract.js-core'))) {
  if (/\.wasm(\.js)?$/.test(name)) fs.copyFileSync(path.join(root, 'node_modules/tesseract.js-core', name), path.join(destination, name));
}

import { publicPath } from './paths';
import { recognizeStudyImage, type ExtractionOptions } from './document-ocr';
export async function extractDocumentText(file: File, options: ExtractionOptions = {}): Promise<string> {
  if (file.size > 10 * 1024 * 1024) throw new Error('Maximum file size is 10 MB.');
  const ext = file.name.split('.').pop()?.toLowerCase();
  let text: string;
  if (['png', 'jpg', 'jpeg', 'webp'].includes(ext || '')) text = await recognizeStudyImage(file, options);
  else if (ext === 'txt' || ext === 'md') text = await file.text();
  else if (ext === 'docx') {
    const { unzipSync, strFromU8 } = await import('fflate');
    let expanded = 0;
    const files = unzipSync(new Uint8Array(await file.arrayBuffer()), { filter: entry => {
      if (!/^word\/(document|footnotes|endnotes|header\d*|footer\d*)\.xml$/.test(entry.name)) return false;
      expanded += entry.originalSize;
      if (expanded > 10 * 1024 * 1024) throw new Error('DOCX content is too large. Split it into smaller sections.');
      return true;
    } });
    if (!files['word/document.xml']) throw new Error('This is not a readable DOCX document.');
    text = Object.values(files).map(bytes => {
      const xml = new DOMParser().parseFromString(strFromU8(bytes), 'application/xml');
      if (xml.getElementsByTagName('parsererror').length) throw new Error('Invalid DOCX text content.');
      return Array.from(xml.getElementsByTagNameNS('*', 'p')).map(paragraph =>
        Array.from(paragraph.getElementsByTagNameNS('*', 't')).map(node => node.textContent || '').join('')
      ).join('\n');
    }).join('\n');
  } else if (ext === 'pdf') {
    const pdfjs = await import('pdfjs-dist');
    pdfjs.GlobalWorkerOptions.workerSrc = publicPath('/pdf.worker.min.mjs');
    const task = pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) });
    const pdf = await task.promise;
    try {
      if (pdf.numPages > 100) throw new Error('Please use a document with at most 100 pages.');
      const pages: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        options.signal?.throwIfAborted();
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        let pageText = content.items.map(item => 'str' in item ? `${item.str}${item.hasEOL ? '\n' : ' '}` : '').join('');
        if (pageText.trim().length < 20 && options.scanPDF) {
          if (pdf.numPages > 10) throw new Error('Scanned PDFs support at most 10 pages. Split this document first.');
          const initial = page.getViewport({ scale: 1 });
          const scale = Math.min(2, 2200 / Math.max(initial.width, initial.height));
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          canvas.width = Math.ceil(viewport.width); canvas.height = Math.ceil(viewport.height);
          const context = canvas.getContext('2d');
          if (!context) throw new Error('Your browser cannot render this scan.');
          await page.render({ canvas, canvasContext: context, viewport }).promise;
          options.onProgress?.(`Reading scanned page ${i}/${pdf.numPages}`);
          try { pageText = await recognizeStudyImage(canvas, options); }
          finally { canvas.width = 0; canvas.height = 0; }
        }
        pages.push(pageText);
        page.cleanup();
        if (pages.reduce((total, page) => total + page.length, 0) > 100000) throw new Error('Split this PDF into smaller study sections.');
      }
      text = pages.join('\n');
    } finally { await task.destroy(); }
  } else throw new Error('Use PDF, DOCX, TXT, Markdown, PNG, JPEG or WebP.');
  options.signal?.throwIfAborted();
  if (text.trim().length < 50) throw new Error('Not enough readable study text found. For a scanned PDF, enable OCR. Use a clearer photo or paste corrected text.');
  if (text.length > 100000) throw new Error('Please split your notes into sections of at most 100,000 characters.');
  return text.trim();
}

import { publicPath } from './paths';
export async function extractDocumentText(file: File): Promise<string> {
  if (file.size > 10 * 1024 * 1024) throw new Error('Maximum file size is 10 MB.');
  const ext = file.name.split('.').pop()?.toLowerCase();
  let text: string;
  if (ext === 'txt' || ext === 'md') text = await file.text();
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
        const content = await (await pdf.getPage(i)).getTextContent();
        pages.push(content.items.map(item => 'str' in item ? `${item.str}${item.hasEOL ? '\n' : ' '}` : '').join(''));
        if (pages.reduce((total, page) => total + page.length, 0) > 100000) throw new Error('Split this PDF into smaller study sections.');
      }
      text = pages.join('\n');
    } finally { await task.destroy(); }
  } else throw new Error('Use a text-based PDF, DOCX, TXT or Markdown file. Photos and scanned PDFs require OCR; paste their extracted text instead.');
  if (text.trim().length < 50) throw new Error('No readable study text found. This may be a scanned PDF; paste OCR text instead.');
  if (text.length > 100000) throw new Error('Please split your notes into sections of at most 100,000 characters.');
  return text.trim();
}

import { publicPath } from './paths';
export type ExtractionOptions = {
  language?: 'eng' | 'hin' | 'pan';
  scanPDF?: boolean;
  signal?: AbortSignal;
  onProgress?: (message: string) => void;
};

/** Only runtime/language assets are downloaded; document pixels stay in this browser. */
export async function recognizeStudyImage(image: File | HTMLCanvasElement, options: ExtractionOptions): Promise<string> {
  options.signal?.throwIfAborted();
  const { createWorker } = await import('tesseract.js');
  let bitmap: ImageBitmap | undefined;
  let canvas: HTMLCanvasElement;
  if (image instanceof File) {
    bitmap = await createImageBitmap(image);
    if (bitmap.width * bitmap.height > 24_000_000) {
      bitmap.close();
      throw new Error('Photo exceeds 24 megapixels. Resize or crop it first.');
    }
    const scale = Math.min(1, 2400 / Math.max(bitmap.width, bitmap.height));
    canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext('2d');
    if (!context) { bitmap.close(); throw new Error('Your browser cannot read images.'); }
    context.fillStyle = '#ffffff'; context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
  } else canvas = image;
  options.onProgress?.('Loading OCR language data. The first use needs internet.');
  const workerPromise = createWorker(options.language || 'eng', 1, {
    workerPath: publicPath('/ocr/worker.min.js'),
    corePath: publicPath('/ocr'),
    logger: message => options.onProgress?.(`${message.status} ${Math.round(message.progress * 100)}%`),
  });
  let rejectCancel: (error: Error) => void = () => {};
  const cancelled = new Promise<never>((_, reject) => { rejectCancel = reject; });
  const abortInitialization = () => rejectCancel(new Error('Extraction cancelled.'));
  options.signal?.addEventListener('abort', abortInitialization, { once: true });
  const timeout = setTimeout(() => rejectCancel(new Error('OCR timed out. Check your connection or use a smaller scan.')), 120000);
  let worker;
  try {
    if (options.signal?.aborted) abortInitialization();
    worker = await Promise.race([workerPromise, cancelled]);
  } catch (error) {
    void workerPromise.then(created => created.terminate()).catch(() => {});
    clearTimeout(timeout);
    options.signal?.removeEventListener('abort', abortInitialization);
    if (image instanceof File) { canvas.width = 0; canvas.height = 0; }
    throw error;
  }
  let terminated = false;
  const terminate = async () => { if (!terminated) { terminated = true; await worker.terminate(); } };
  try {
    options.signal?.throwIfAborted();
    const result = await Promise.race([worker.recognize(canvas), cancelled]);
    options.signal?.throwIfAborted();
    return result.data.text;
  } finally {
    clearTimeout(timeout);
    options.signal?.removeEventListener('abort', abortInitialization);
    await terminate();
    if (image instanceof File) { canvas.width = 0; canvas.height = 0; }
  }
}

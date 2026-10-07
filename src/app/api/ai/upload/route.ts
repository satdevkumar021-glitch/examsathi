import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function POST() {
  return NextResponse.json({ success: false, message: 'Extract and review document text in the browser, then use the text generation endpoint. Scanned images require OCR.' }, { status: 410 });
}

import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { readBoundedText } from '@/lib/request-body';
import { clientIp } from '@/lib/rate-limit';
import { limitRequest } from '@/lib/rate-limit-shared';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const limited = await limitRequest(`login:${clientIp(req)}`, 10, 15 * 60 * 1000);
    if (!limited.ok) {
      return NextResponse.json({ success: false, message: 'Too many attempts. Try again later.' }, { status: 429, headers: { 'Retry-After': String(limited.retryAfter) } });
    }
    const body = JSON.parse(await readBoundedText(req, 10000));
    const { email, password } = body;

    if (typeof email !== 'string' || typeof password !== 'string' || !email || !password || email.length > 254 || password.length > 256) {
      return NextResponse.json({
        success: false,
        message: 'Email and password are required.',
      }, { status: 400 });
    }

    // Live Supabase Authentication
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseClient()!;
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.message,
        }, { status: 401 });
      }

      return NextResponse.json({
        success: true,
        source: 'supabase_cloud_auth',
        user: {
          id: data.user?.id,
          email: data.user?.email,
          name: data.user?.user_metadata?.name || splitEmail(data.user?.email || ''),
          targetExam: data.user?.user_metadata?.targetExam || 'master-cadre-sst',
          state: data.user?.user_metadata?.targetState || 'punjab',
        },
        session: data.session,
        message: 'Authentication successful with Supabase PostgreSQL cloud.',
      });
    }

    return NextResponse.json({ success: false, message: 'Authentication service is not configured.' }, { status: 503 });
  } catch (error) {
    if (error instanceof Error && error.message === 'TOO_LARGE') return NextResponse.json({ success: false, message: 'Request too large.' }, { status: 413 });
    if (error instanceof SyntaxError) return NextResponse.json({ success: false, message: 'Invalid JSON request.' }, { status: 400 });
    return NextResponse.json({
      success: false,
      message: 'Unable to sign in. Please try again.',
    }, { status: 500 });
  }
}

function splitEmail(email: string): string {
  const parts = email.split('@')[0];
  return parts.charAt(0).toUpperCase() + parts.slice(1);
}

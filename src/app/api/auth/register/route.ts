import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';
import { readBoundedText } from '@/lib/request-body';
import { clientIp } from '@/lib/rate-limit';
import { limitRequest } from '@/lib/rate-limit-shared';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const limited = await limitRequest(`register:${clientIp(req)}`, 5, 60 * 60 * 1000);
    if (!limited.ok) {
      return NextResponse.json({ success: false, message: 'Too many attempts. Try again later.' }, { status: 429, headers: { 'Retry-After': String(limited.retryAfter) } });
    }
    const body = JSON.parse(await readBoundedText(req, 10000));
    const { email, password, name, phone, targetExam = 'master-cadre-sst', state = 'punjab' } = body;

    if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string' || !email || !password || !name || email.length > 254 || password.length > 256 || name.length > 100) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, and password are required.',
      }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({
        success: false,
        message: 'Password must be at least 8 characters.',
      }, { status: 400 });
    }

    // Live Supabase Authentication
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseClient()!;
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            phone,
            targetExam,
            targetState: state,
          },
        },
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.message,
        }, { status: 400 });
      }

      return NextResponse.json({
        success: true,
        source: 'supabase_cloud_auth',
        user: {
          id: data.user?.id,
          email: data.user?.email,
          name,
          targetExam,
          state,
        },
        session: data.session,
        message: 'Account registered successfully in Supabase PostgreSQL cloud.',
      });
    }

    return NextResponse.json({ success: false, message: 'Authentication service is not configured.' }, { status: 503 });
  } catch (error) {
    if (error instanceof Error && error.message === 'TOO_LARGE') return NextResponse.json({ success: false, message: 'Request too large.' }, { status: 413 });
    if (error instanceof SyntaxError) return NextResponse.json({ success: false, message: 'Invalid JSON request.' }, { status: 400 });
    return NextResponse.json({
      success: false,
      message: 'Unable to register. Please try again.',
    }, { status: 500 });
  }
}

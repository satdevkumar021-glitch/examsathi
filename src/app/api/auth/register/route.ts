import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name, phone, targetExam = 'master-cadre-sst', state = 'punjab' } = body;

    if (!email || !password || !name) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, and password are required.',
      }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({
        success: false,
        message: 'Password must be at least 6 characters.',
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
  } catch {
    return NextResponse.json({
      success: false,
      message: 'Unable to register. Please try again.',
    }, { status: 500 });
  }
}

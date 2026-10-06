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

    // Offline / Local Simulation Mode
    return NextResponse.json({
      success: true,
      source: 'simulated_local_auth',
      user: {
        id: `local-${Date.now()}`,
        email,
        name,
        targetExam,
        state,
        streak: 1,
        xp: 100,
      },
      message: 'Account registered locally. To enable cloud cross-device sync, configure Supabase credentials in .env.local',
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: 'Registration server error: ' + err.message,
    }, { status: 500 });
  }
}

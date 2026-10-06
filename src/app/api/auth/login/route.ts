import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
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

    // Local / Offline Simulation
    return NextResponse.json({
      success: true,
      source: 'simulated_local_auth',
      user: {
        id: `local-session`,
        email,
        name: splitEmail(email),
        targetExam: 'master-cadre-sst',
        state: 'punjab',
        streak: 1,
        xp: 150,
      },
      message: 'Authenticated locally. To enable cloud cross-device sync, configure Supabase credentials in .env.local',
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: 'Login server error: ' + err.message,
    }, { status: 500 });
  }
}

function splitEmail(email: string): string {
  const parts = email.split('@')[0];
  return parts.charAt(0).toUpperCase() + parts.slice(1);
}

import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { fail, jsonRoute } from '@/lib/api-route';
import { validateErrorReport, recordErrorReport } from '@/lib/error-reports';
import { clientIp } from '@/lib/rate-limit';
import { verifyBearer } from '@/lib/server-auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  return jsonRoute(req, { name: 'q-report', limit: 10, windowMs: 60 * 60 * 1000, maxBytes: 5000 }, async body => {
    const parsed = validateErrorReport(body);
    if (!parsed.ok) return fail(parsed.message, 400);

    const authUser = await verifyBearer(req);
    const reporterUserId = authUser ? authUser.id : `guest-${clientIp(req)}`;

    const { newlyEscalated, newlyHidden } = recordErrorReport({
      questionId: parsed.value.questionId,
      reason: parsed.value.reason,
      reporterUserId,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your report has been submitted to the Content QA review queue.',
      escalated: newlyEscalated,
      autoHidden: newlyHidden,
    }, { headers: { 'Cache-Control': 'no-store' } });
  });
}

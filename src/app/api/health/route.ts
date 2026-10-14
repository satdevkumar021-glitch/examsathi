import { serviceClient } from '@/lib/server-auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Check that the database is reachable. Respond 503 when it is not so load balancers
  // can pull this instance until the connection is restored.
  const db = serviceClient();
  if (db) {
    try {
      const { error } = await db.from('examsathi_content_items').select('id').limit(1).maybeSingle();
      if (error) {
        return Response.json(
          { status: 'degraded', detail: 'db_unreachable' },
          { status: 503, headers: { 'Cache-Control': 'no-store' } },
        );
      }
    } catch {
      return Response.json(
        { status: 'degraded', detail: 'db_unreachable' },
        { status: 503, headers: { 'Cache-Control': 'no-store' } },
      );
    }
  }

  return Response.json({ status: 'ok' }, { headers: { 'Cache-Control': 'no-store' } });
}

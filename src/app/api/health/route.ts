export const dynamic = 'force-dynamic';
export function GET() {
  // Liveness only: do not expose secrets or claim upstream dependencies are healthy.
  return Response.json({ status: 'ok' }, { headers: { 'Cache-Control': 'no-store' } });
}

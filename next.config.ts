import type { NextConfig } from "next";

// ExamSathi is a server-rendered app: the question bank and answer key live on the server,
// so there is no static export. Serve it from a Node host (see docs/DEPLOYMENT.md).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Only directives that cannot break existing pages are enforced. A full script/style CSP
// needs nonces because the app uses inline scripts; add it after measuring in report-only mode.
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'" },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath ? `/${basePath.replace(/^\//, '')}` : undefined,
  assetPrefix: basePath ? `/${basePath.replace(/^\//, '')}` : undefined,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      { source: '/api/:path*', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
    ];
  },
};

export default nextConfig;

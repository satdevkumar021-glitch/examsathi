import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === 'true';
// Pages needs its repository prefix; a Node-hosted backend uses its domain root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isStaticExport ? '/examsathi' : '');

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  output: isStaticExport ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath ? `/${basePath.replace(/^\//, '')}` : undefined,
  assetPrefix: basePath ? `/${basePath.replace(/^\//, '')}` : undefined,
};

export default nextConfig;

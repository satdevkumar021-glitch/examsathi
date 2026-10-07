import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/examsathi' : '');

const isStaticExport = process.env.STATIC_EXPORT === 'true';

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

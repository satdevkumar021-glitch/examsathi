import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath ? `/${basePath.replace(/^\//, '')}` : undefined,
};

export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? '/examsathi' : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath ? `/${basePath.replace(/^\//, '')}` : undefined,
  assetPrefix: basePath ? `/${basePath.replace(/^\//, '')}` : undefined,
};

export default nextConfig;

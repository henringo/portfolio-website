import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // don't block deploys on lint errors
  },};

export default nextConfig;

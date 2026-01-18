import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  async redirects() {
    return [
      {
        source: '/case-studies',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

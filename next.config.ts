import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for faster builds
  experimental: {
    // Skip type checking during build (faster builds)
    typedRoutes: false,
  },
  
  // Optimize build performance
  typescript: {
    // Skip type checking during build - run separately if needed
    ignoreBuildErrors: false,
  },
  
  eslint: {
    // Skip ESLint during build - run separately if needed
    ignoreDuringBuilds: false,
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable SWC minification (faster than Terser)
  swcMinify: true,
  
  // Optimize bundle
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

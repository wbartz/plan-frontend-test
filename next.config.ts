import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['http://localhost:3000'],
    },
  },
  images: {
    remotePatterns: [{ hostname: 'illustrations.popsy.co' }],
  },
}

export default nextConfig

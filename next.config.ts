import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    formats: ["image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // or 'DENY' if you want to block all framing
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self'", // modern frame protection
          },
        ],
      },
    ];
  },
};

export default nextConfig;

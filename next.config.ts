import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "secure.meetupstatic.com",
      },
      {
        hostname: "secure-content.meetupstatic.com",
      },
      {
        hostname: "www.tourmyindia.com",
      },
    ],
  },
};

export default nextConfig;

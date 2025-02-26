import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      "secure.meetupstatic.com",
      "secure-content.meetupstatic.com",
      "www.tourmyindia.com",
      "tripbae.com",
      "backpackersandadventurers.com",
      "sp-ao.shortpixel.ai",
      "muddietrails.com",
      "tsprodimages.s3.ap-south-1.amazonaws.com",
      "i.pinimg.com",
      "static.wixstatic.com",
      "weekendbirds.in",
    ].map((hostname) => ({ hostname })),
  },
};

export default nextConfig;

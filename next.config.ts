import { hostnames } from "@/lib/config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: hostnames.map((hostname) => ({ hostname })),
  },
};

export default nextConfig;

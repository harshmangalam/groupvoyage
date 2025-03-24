import { SITE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/api/"], // No need to block /_next/
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

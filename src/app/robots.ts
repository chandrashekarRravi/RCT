import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block Next.js internals and any private paths from crawlers
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://www.redcoastaltravels.com/sitemap.xml",
    // Explicit host declaration helps Google choose the canonical domain
    host: "https://www.redcoastaltravels.com",
  };
}

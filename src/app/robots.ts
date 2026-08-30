import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://www.redcoastaltravels.com/sitemap.xml",
    // Explicit host declaration helps Google choose the canonical domain
    host: "https://www.redcoastaltravels.com",
  };
}

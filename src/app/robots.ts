import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/_next/static/", // CSS, JS, fonts — Googlebot must fetch these to render the page
        ],
        disallow: [
          "/api/",
          "/_next/data/", // JSON route-data payloads — not needed for rendering
          "/_next/",      // catch-all: blocks remaining /_next/ internals
        ],
      },
    ],
    sitemap: "https://www.redcoastaltravels.com/sitemap.xml",
    // Explicit host declaration helps Google choose the canonical domain
    host: "https://www.redcoastaltravels.com",
  };
}

import type { MetadataRoute } from "next";
import { destinations } from "@/lib/destinations";

const SITE_URL = "https://www.redcoastaltravels.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/destinations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic destination pages
  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${SITE_URL}/destinations/${dest.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    // Image sitemap — plain string URL array (Next.js 16 shape)
    images: [`${SITE_URL}${dest.img}`],
  }));

  return [...staticRoutes, ...destinationRoutes];
}

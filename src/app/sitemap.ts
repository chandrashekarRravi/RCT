import type { MetadataRoute } from "next";
import { destinations } from "@/lib/destinations";
import { blogPosts } from "@/lib/blog-data";

const SITE_URL = "https://www.redcoastaltravels.com";

// Fixed dates for static pages — update these when page content changes meaningfully
const STATIC_DATES = {
  home: new Date("2026-08-30"),        // homepage — last structural update
  destinations: new Date("2026-08-20"), // destinations index page
  airportTaxi: new Date("2026-08-30"), // updated today (placeholder removed)
  blog: new Date(                       // blog listing — mirrors most recent post
    blogPosts.reduce((latest, p) => (p.date > latest ? p.date : latest), "2000-01-01")
  ),
  gallery: new Date("2026-08-01"),      // gallery — updated less frequently
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: STATIC_DATES.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/destinations`,
      lastModified: STATIC_DATES.destinations,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/airport-taxi`,
      lastModified: STATIC_DATES.airportTaxi,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: STATIC_DATES.blog,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: STATIC_DATES.gallery,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic destination pages — use per-destination lastModified date
  const destinationRoutes: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${SITE_URL}/destinations/${dest.slug}`,
    lastModified: new Date(dest.lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: [`${SITE_URL}${dest.img}`],
  }));

  // Dynamic blog pages — use post publish date
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${SITE_URL}${post.image}`],
  }));

  return [...staticRoutes, ...destinationRoutes, ...blogRoutes];
}

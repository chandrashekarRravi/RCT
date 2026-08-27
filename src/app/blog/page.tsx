import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

const SITE_URL = "https://www.redcoastaltravels.com";

export const metadata: Metadata = {
  title: "Travel Guides & Tips | Red Coastal Travels Mangalore",
  description: "Read our latest travel guides, tips, and articles about visiting Coastal Karnataka and booking the best taxi services from Mangalore.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Travel Guides & Tips | Red Coastal Travels Mangalore",
    description: "Read our latest travel guides, tips, and articles about visiting Coastal Karnataka and booking the best taxi services from Mangalore.",
    url: `${SITE_URL}/blog`,
    siteName: "Red Coastal Travels Mangalore",
    type: "website",
    locale: "en_IN",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="relative bg-background text-on-background">
      <Navigation />

      <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h1 className="font-headline-lg text-4xl md:text-5xl text-on-surface mb-4">Travel Guides & Blog</h1>
        <p className="font-body-lg text-secondary mb-12 max-w-2xl">
          Discover tips for your next journey, explore local destinations, and learn everything you need to know about traveling in and around Coastal Karnataka.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col bg-surface-container-low border border-on-surface/5 overflow-hidden transition-all hover:shadow-md">
              <Link href={`/blog/${post.slug}`} className="relative h-64 w-full overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </Link>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <p className="font-label-caps text-xs text-secondary mb-3">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <h2 className="font-headline-sm text-2xl text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="font-body-md text-secondary line-clamp-3 mb-6 flex-1">
                  {post.description}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-label-caps text-primary hover:text-on-surface transition-colors mt-auto">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import type { Metadata } from "next";

const SITE_URL = "https://www.redcoastaltravels.com";

// Pre-generate all blog slugs at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const revalidate = 3600; // 1 hour ISR

// Per-page SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = `${SITE_URL}${post.image}`;

  return {
    title: `${post.title} | Red Coastal Travels Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Red Coastal Travels Blog`,
      description: post.description,
      url: pageUrl,
      siteName: "Red Coastal Travels Mangalore",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      type: "article",
      locale: "en_IN",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Red Coastal Travels Blog`,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Red Coastal Travels Mangalore",
      url: SITE_URL,
    },
    description: post.description,
  };

  return (
    <main className="relative bg-background text-on-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Navigation />

      {/* ── BREADCRUMB ── */}
      <div className="pt-32 pb-6 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm text-secondary flex-wrap gap-y-1">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-primary transition-colors font-label-caps">
                Home
              </Link>
            </li>
            <li className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/blog" className="hover:text-primary transition-colors font-label-caps">
                Blog
              </Link>
            </li>
            <li className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-on-surface font-label-caps font-medium truncate max-w-[200px] md:max-w-none">{post.title}</span>
            </li>
          </ol>
        </nav>
      </div>

      <article className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto py-8 md:py-12">
        <header className="mb-10 text-center">
          <p className="font-label-caps text-secondary mb-4">
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-5xl leading-tight text-on-surface mb-6">
            {post.title}
          </h1>
        </header>

        <div className="relative w-full h-[40vh] md:h-[50vh] mb-12 overflow-hidden rounded">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div 
          className="font-body-lg text-secondary leading-relaxed blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-on-surface/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all guides
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}

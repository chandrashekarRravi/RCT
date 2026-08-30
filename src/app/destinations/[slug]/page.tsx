import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { destinations, slugToDestination, getRelatedDestinations } from "@/lib/destinations";
import { DestinationBreadcrumbSchema, TouristAttractionSchema } from "@/components/JsonLd";
import type { Metadata } from "next";

// Pre-generate all destination slugs at build time
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export const revalidate = 3600; // 1 hour ISR to fix stale metadata


const SITE_URL = "https://www.redcoastaltravels.com";

// Per-page SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = slugToDestination(slug);
  if (!dest) return {};

  const pageTitle = `${dest.seoKeyword} | ${dest.title} Travel Guide`;
  const pageDesc = dest.longDesc.slice(0, 155) + "…";
  const pageUrl = `${SITE_URL}/destinations/${dest.slug}`;
  // img is a path like "/Destinations/Foo.jpg" — URL-encode for OG
  const ogImage = `${SITE_URL}${dest.img}`;

  return {
    title: pageTitle, // root template will append "| Red Coastal Travels Mangalore"
    description: pageDesc,
    alternates: { canonical: `/destinations/${dest.slug}` },
    openGraph: {
      title: `${pageTitle} | Red Coastal Travels Mangalore`, // OG needs full title
      description: pageDesc,
      url: pageUrl,
      siteName: "Red Coastal Travels Mangalore",
      images: [{ url: ogImage, width: 1200, height: 630, alt: dest.seoKeyword }],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Red Coastal Travels Mangalore`,
      description: pageDesc,
      images: [ogImage],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = slugToDestination(slug);
  const related = getRelatedDestinations(slug);

  if (!dest) notFound();

  return (
    <main className="relative bg-background text-on-background">
      {/* JSON-LD structured data */}
      <DestinationBreadcrumbSchema title={dest.title} slug={dest.slug} />
      <TouristAttractionSchema
        title={dest.seoKeyword}
        slug={dest.slug}
        description={dest.longDesc}
        image={dest.img}
        location={dest.location}
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
              <Link href="/destinations" className="hover:text-primary transition-colors font-label-caps">
                Destinations
              </Link>
            </li>
            <li className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-on-surface font-label-caps font-medium">{dest.title}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={dest.img}
          alt={dest.seoKeyword}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        {dest.badge && (
          <div className="absolute top-6 left-6 bg-on-surface text-surface-container-lowest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            {dest.badge}
          </div>
        )}
      </div>

      {/* ── CONTENT ── */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

          {/* Left — main content */}
          <div className="lg:col-span-8">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-[60px] leading-tight text-on-surface mb-6 tracking-tight">
              {dest.seoKeyword}
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-2xl leading-relaxed">
              {dest.longDesc}
            </p>

            {/* Highlights */}
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 border-b border-on-surface/10 pb-4">
              Highlights
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {dest.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 font-body-md text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-1 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            {/* Travel Guide Content */}
            <div className="mt-8 space-y-6">
              {dest.guideContent.split('\n\n').map((paragraph, i) => (
                <p key={i} className="font-body-lg text-body-lg text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Distance & Travel Time SEO Section */}
            <h2 className="font-headline-md text-headline-md text-on-surface mt-12 mb-6 border-b border-on-surface/10 pb-4">
              Mangalore to {dest.title} Distance & Travel Time
            </h2>
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                The driving distance from Mangalore to {dest.title} is approximately <strong>{dest.distance}</strong>. 
                Depending on traffic and road conditions, the journey typically takes a comfortable drive when you book a private outstation cab with us.
                Our experienced drivers know the best routes to ensure a safe, scenic, and relaxing trip.
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/919972002436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:bg-primary/90 transition-colors duration-300"
                >
                  Book Your Taxi to {dest.title}
                </a>
              </div>
            </div>
          </div>

          {/* Right — info card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-surface-container-low border border-on-surface/10 p-8 space-y-6">
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest border-b border-on-surface/10 pb-4">
                Trip Info
              </h3>

              <div className="flex items-start gap-4">
                {/* calendar */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <div>
                  <p className="font-label-caps text-[10px] text-secondary uppercase tracking-wider mb-1">Best Time to Visit</p>
                  <p className="font-body-md text-on-surface">{dest.bestTime}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                {/* map pin */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p className="font-label-caps text-[10px] text-secondary uppercase tracking-wider mb-1">Distance from Mangalore</p>
                  <p className="font-body-md text-on-surface">{dest.distance}</p>
                </div>
              </div>

              <Link
                href="/#booking"
                className="block text-center bg-on-surface text-surface-container-lowest px-6 py-4 font-label-caps text-label-caps hover:bg-primary transition-colors duration-300 mt-4"
              >
                Book This Trip
              </Link>

              <a
                href="https://wa.me/919972002436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-on-surface/20 px-6 py-4 font-label-caps text-label-caps text-secondary hover:text-[#25D366] hover:border-[#25D366] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── BACK LINK ── */}
        <div className="mt-16 border-t border-on-surface/10 pt-8">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all destinations
          </Link>
        </div>
      </div>

      {/* ── RELATED DESTINATIONS ── */}
      {related.length > 0 && (
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-16 md:pb-24">
          <h2 className="font-headline-lg text-headline-xl text-on-surface mb-8 border-b border-on-surface/10 pb-4">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {related.map((d) => (
              <div key={d.slug} className="group flex flex-col h-full">
                <Link href={`/destinations/${d.slug}`} className="block overflow-hidden mb-4 relative h-64 bg-surface-alt">
                  {d.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-on-surface text-surface-container-lowest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                      {d.badge}
                    </div>
                  )}
                  <Image
                    src={d.img}
                    alt={d.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface-container-lowest text-on-surface px-4 py-2 font-label-caps text-[10px] flex items-center gap-2">
                      See Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
                <h3 className="font-headline-sm text-on-surface mb-1">
                  <Link href={`/destinations/${d.slug}`} className="hover:text-primary transition-colors duration-300">
                    {d.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

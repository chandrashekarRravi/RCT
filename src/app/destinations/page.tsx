import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Destinations } from "@/components/Destinations";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explore Karnataka Destinations",
  description: "Discover Red Coastal Taxi's handpicked routes across Karnataka — from Dharmasthala and Murudeshwara on the coast to Hampi, Coorg, Chikmagalur, and Mysore Palace in the heartland. Premium road journeys from Mangaluru.",
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Explore Karnataka Destinations | Red Coastal Travels Mangalore",
    description: "Handpicked road-trip routes across coastal Karnataka and beyond — pilgrimage circuits, heritage trails, and hill-station drives from Mangaluru.",
    url: "https://www.redcoastaltravels.com/destinations",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Karnataka Destinations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Karnataka Destinations | Red Coastal Travels Mangalore",
    description: "Handpicked road-trip routes across coastal Karnataka and beyond.",
    images: ["/og-image.jpg"],
  },
};

export default function DestinationsPage() {
  return (
    <main className="relative bg-background text-on-background">
      <Navigation />

      <div className="pt-32  px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <nav className="flex text-sm text-secondary mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-on-surface font-medium">Destinations</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <Destinations hideViewAll={true} />
      <Footer />
    </main>
  );
}

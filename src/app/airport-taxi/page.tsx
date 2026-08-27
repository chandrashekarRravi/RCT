import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AirportBreadcrumbSchema, AirportTaxiSchema } from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.redcoastaltravels.com";
const pageTitle = "Mangalore Airport Taxi Service | 24/7 IXE Transfers - Red Coastal Travels";
const pageDesc = "Book reliable 24/7 airport taxi transfers from Mangaluru International Airport (IXE). Real-time flight tracking, name-board pickup, covering Udupi, Manipal, and Kasaragod.";
const pageUrl = `${SITE_URL}/airport-taxi`;
const ogImage = `${SITE_URL}/Destinations/Mangalore.jpg`; // Fallback image

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  alternates: { canonical: "/airport-taxi" },
  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    siteName: "Red Coastal Travels Mangalore",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Mangalore Airport Taxi Transfer" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: [ogImage],
  },
};

export default function AirportTaxiPage() {
  return (
    <main className="relative bg-background text-on-background">
      <AirportBreadcrumbSchema />
      <AirportTaxiSchema />
      
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
              <span className="text-on-surface font-label-caps font-medium">Airport Taxi</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary max-w-full text-center">
        <div className="max-w-3xl mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-6 mx-auto" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
          <h1 className="font-headline-lg text-5xl md:text-7xl mb-6">Mangaluru Airport (IXE) Taxi Service</h1>
          <p className="font-body-lg text-on-primary/80 mb-10">
            Never miss a flight. 24/7 dedicated airport transfers with real-time flight tracking and premium vehicles.
          </p>
          <a
            href="https://wa.me/919972002436"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-label-caps hover:bg-[#20b858] transition-colors duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book via WhatsApp
          </a>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-headline-md text-3xl mb-6 text-on-surface">Premium Airport Transfers</h2>
            <p className="font-body-lg text-secondary mb-6 leading-relaxed">
              Arriving at Mangaluru International Airport (IXE)? Avoid the hassle of negotiating with unverified cabs or waiting in long queues. Our premium airport taxi service ensures a smooth, relaxing transition from the terminal to your destination.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body-md text-on-surface"><strong>Real-time flight tracking:</strong> We monitor your flight status so your driver is there even if you are delayed.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body-md text-on-surface"><strong>Name-board pickup:</strong> Our chauffeurs will meet you at the arrivals gate holding a placard with your name.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body-md text-on-surface"><strong>24/7 Availability:</strong> Late night or early morning, we are always on time.</span>
              </li>
            </ul>
            <div className="bg-surface-container-low p-6 border border-on-surface/10 rounded">
              <h3 className="font-label-caps text-sm text-secondary uppercase tracking-widest mb-2">Transparent Pricing</h3>
              <p className="font-body-md text-on-surface mb-2">We offer competitive, all-inclusive pricing for all major routes from IXE.</p>
              <p className="font-body-md text-primary font-bold">Fares starting from ₹[PRICE]</p>
              <p className="text-xs text-secondary mt-2">Contact us for exact quotes to your specific destination.</p>
            </div>
          </div>

          <div>
            <h2 className="font-headline-md text-3xl mb-6 text-on-surface">Coverage Area</h2>
            <p className="font-body-lg text-secondary mb-6 leading-relaxed">
              Our airport transfer service covers all major towns, cities, and pilgrimage destinations across the coastal region.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-alt p-4 rounded text-center">
                <h4 className="font-bold text-on-surface">Mangaluru City</h4>
                <p className="text-sm text-secondary">Hotels & Business</p>
              </div>
              <div className="bg-surface-alt p-4 rounded text-center">
                <h4 className="font-bold text-on-surface">Udupi & Manipal</h4>
                <p className="text-sm text-secondary">Campus & Beaches</p>
              </div>
              <div className="bg-surface-alt p-4 rounded text-center">
                <h4 className="font-bold text-on-surface">Kasaragod</h4>
                <p className="text-sm text-secondary">North Kerala</p>
              </div>
              <div className="bg-surface-alt p-4 rounded text-center">
                <h4 className="font-bold text-on-surface">Pilgrimage Sites</h4>
                <p className="text-sm text-secondary">Kateel, Dharmasthala</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-4xl text-center mb-10 text-on-surface">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6 rounded shadow-sm">
              <h3 className="font-bold text-on-surface mb-2">How early should I book my airport pickup?</h3>
              <p className="text-secondary text-sm">We recommend booking at least 12-24 hours in advance to guarantee your preferred vehicle, but we also accommodate last-minute requests depending on availability.</p>
            </div>
            <div className="bg-background p-6 rounded shadow-sm">
              <h3 className="font-bold text-on-surface mb-2">What if my flight is delayed?</h3>
              <p className="text-secondary text-sm">Don't worry! We track your flight in real-time. Our drivers will adjust their arrival time to match your actual landing, at no extra cost.</p>
            </div>
            <div className="bg-background p-6 rounded shadow-sm">
              <h3 className="font-bold text-on-surface mb-2">Where will the driver meet me?</h3>
              <p className="text-secondary text-sm">Your chauffeur will be waiting for you at the arrivals gate holding a placard with your name on it.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

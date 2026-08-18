import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Destinations } from "@/components/Destinations";
import Link from "next/link";

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

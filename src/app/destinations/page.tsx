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
                <span className="material-symbols-outlined mx-1 text-sm">chevron_right</span>
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

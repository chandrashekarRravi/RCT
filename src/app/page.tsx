import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { Fleet } from "@/components/Fleet";
import { AirportTransfers } from "@/components/AirportTransfers";
import { BookingForm } from "@/components/BookingForm";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background text-on-background">
      <Navigation />
      <Hero />
      <Destinations limit={3} />
      <Fleet />
      <AirportTransfers />
      <Reviews />
      <About />

      <Faq />
      <BookingForm />
      <Footer />
    </main>
  );
}

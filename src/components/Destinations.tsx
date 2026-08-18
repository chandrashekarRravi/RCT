"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Destinations({ limit, hideViewAll }: { limit?: number; hideViewAll?: boolean }) {
  const displayDestinations = limit ? destinations.slice(0, limit) : destinations;

  return (
    <section id="destinations" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1, margin: "-100px" }}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between md:items-end border-b border-on-surface/10 pb-8 gap-4"
      >
        <div>
          <h2 className="font-headline-lg text-headline-2xl md:text-headline-lg text-on-surface">
            <span className="text-5xl md:text-7xl">Explore Karnataka</span>
            <br />&<span className="text-primary text-5xl md:text-7xl ml-2">Beyond</span>
          </h2>
          <p className="font-body-md text-secondary mt-4 max-w-lg">Handpicked routes for the ultimate road trip experience.</p>
        </div>
        {!hideViewAll && (
          <Link href="/destinations" className="hidden md:flex items-center font-label-caps text-label-caps text-secondary hover:text-primary transition-colors">
            View All Routes
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {displayDestinations.map((dest, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group flex flex-col h-full"
          >
            {/* Clickable image card */}
            <Link href={`/destinations/${dest.slug}`} className="block overflow-hidden mb-6 relative h-80 bg-surface-alt">
              {dest.badge && (
                <div className="absolute top-4 left-4 z-10 bg-on-surface text-surface-container-lowest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {dest.badge}
                </div>
              )}
              <Image
                src={dest.img}
                alt={dest.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* hover overlay — "See Details" pill */}
              <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface-container-lowest text-on-surface px-4 py-2 font-label-caps text-label-caps flex items-center gap-2">
                  See Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
              <Link href={`/destinations/${dest.slug}`} className="hover:text-primary transition-colors duration-300">
                {dest.title}
              </Link>
            </h3>
            <p className="font-body-md text-body-md text-secondary line-clamp-3">{dest.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Mixed order — destinations & fleet interleaved, no category grouping
const galleryImages = [
  { src: "/Gallery/The%20Goa%20Circuit1.jpg",       alt: "The Goa Circuit",        fleet: false },
  { src: "/Fleet/crysta.png",                        alt: "Toyota Innova Crysta",   fleet: true  },
  { src: "/Gallery/Hampi%20Ruins1.jpg",             alt: "Hampi Ruins",            fleet: false },
  { src: "/Gallery/Mysore%20Palace1.jpg",           alt: "Mysore Palace",          fleet: false },
  { src: "/Gallery/All%20over%20Karnataka.jpg",     alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/Coorg%20Coffee%20Trails1.jpg",   alt: "Coorg Coffee Trails",    fleet: false },
  { src: "/Gallery/Hampi%20Ruins2.jpg",             alt: "Hampi Ruins",            fleet: false },
  { src: "/Fleet/marutisuzuki.png",                 alt: "Maruti Suzuki",          fleet: true  },
  { src: "/Gallery/The%20Goa%20Circuit2.jpg",       alt: "The Goa Circuit",        fleet: false },
  { src: "/Gallery/All%20over%20Karnataka1.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/Coorg%20Coffee%20Trails2.jpg",   alt: "Coorg Coffee Trails",    fleet: false },
  { src: "/Gallery/Mysore%20Palace2.jpg",           alt: "Mysore Palace",          fleet: false },
  { src: "/Gallery/Hampi%20Ruins3.jpg",             alt: "Hampi Ruins",            fleet: false },
  { src: "/Fleet/traveller.png",                    alt: "Force Traveller",        fleet: true  },
  { src: "/Gallery/The%20Goa%20Circuit3.jpg",       alt: "The Goa Circuit",        fleet: false },
  { src: "/Gallery/All%20over%20Karnataka2.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/Coorg%20Coffee%20Trails3.jpg",   alt: "Coorg Coffee Trails",    fleet: false },
  { src: "/Gallery/Hampi%20Ruins4.jpg",             alt: "Hampi Ruins",            fleet: false },
  { src: "/Gallery/Mysore%20Palace3.jpg",           alt: "Mysore Palace",          fleet: false },
  { src: "/Gallery/All%20over%20Karnataka3.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/The%20Goa%20Circuit4.jpg",       alt: "The Goa Circuit",        fleet: false },
  { src: "/Fleet/Ertiga.png",                       alt: "Maruti Suzuki Ertiga",   fleet: true  },
  { src: "/Gallery/Hampi%20Ruins5.jpg",             alt: "Hampi Ruins",            fleet: false },
  { src: "/Gallery/Coorg%20Coffee%20Trails4.jpg",   alt: "Coorg Coffee Trails",    fleet: false },
  { src: "/Gallery/All%20over%20Karnataka4.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/Mysore%20Palace4.jpg",           alt: "Mysore Palace",          fleet: false },
  { src: "/Gallery/The%20Goa%20Circuit5.jpg",       alt: "The Goa Circuit",        fleet: false },
  { src: "/Gallery/All%20over%20Karnataka5.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/Hampi%20Ruins6.jpg",             alt: "Hampi Ruins",            fleet: false },
  { src: "/Gallery/Coorg%20Coffee%20Trails5.jpg",   alt: "Coorg Coffee Trails",    fleet: false },
  { src: "/Gallery/All%20over%20Karnataka6.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/All%20over%20Karnataka7.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/All%20over%20Karnataka8.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/All%20over%20Karnataka9.jpg",    alt: "All over Karnataka",     fleet: false },
  { src: "/Gallery/All%20over%20Karnataka10.jpg",   alt: "All over Karnataka",     fleet: false },
];

export default function GalleryPage() {
  return (
    <div className="bg-background min-h-screen pt-24">
      <Navigation />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <nav className="flex text-sm text-secondary mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-primary transition-colors font-label-caps">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-symbols-outlined mx-1 text-sm">chevron_right</span>
                  <span className="text-on-surface font-label-caps font-medium">Gallery</span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="font-headline-lg text-4xl md:text-6xl lg:text-7xl text-on-surface mb-6">Our Gallery</h1>
          <p className="font-body-lg text-secondary max-w-2xl text-lg md:text-xl">
            A visual journey through our premium fleet and the breathtaking destinations we cover across Coastal Karnataka and the Western Ghats.
          </p>
        </motion.div>

        {/* Masonry layout — images show at natural proportions, no cropping */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "30px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className={`break-inside-avoid mb-3 md:mb-4 overflow-hidden rounded-xl group relative ${
                image.fleet ? "bg-surface-container" : ""
              }`}
            >
              <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl" />
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className={`w-full h-auto transition-transform duration-700 group-hover:scale-105 block ${
                  image.fleet ? "object-contain p-4" : "object-cover"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

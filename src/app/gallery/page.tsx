"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    alt: "Premium SUV exterior",
    span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800",
    alt: "Western Ghats scenery",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1596395819057-e37f55a8516b?auto=format&fit=crop&q=80&w=800",
    alt: "Luxury car interior",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/Fleet/crysta.png",
    alt: "Toyota Innova Crysta",
    span: "col-span-1 md:col-span-2 row-span-1 bg-surface-container object-contain p-8",
  },
  {
    src: "/Fleet/marutisuzuki.png",
    alt: "Executive sedan",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/Fleet/traveller.png",
    alt: "Coastal highway",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/Fleet/Ertiga.png",
    alt: "Maruti Suzuki Ertiga",
    span: "col-span-1 row-span-1 bg-surface-container object-contain p-6",
  },
  {
    src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800",
    alt: "Beach sunset",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/Fleet/urbania.png",
    alt: "Force Urbania",
    span: "col-span-1 md:col-span-2 row-span-1 bg-surface-container object-contain p-8",
  },
  {
    src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800",
    alt: "Mountain retreat",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    alt: "City drive",
    span: "col-span-1 row-span-1",
  }
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

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-4 grid-flow-dense">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden group rounded-xl ${image.span}`}
            >
              <div className="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`transition-transform duration-700 group-hover:scale-105 ${image.span.includes('object-contain') ? 'object-contain' : 'object-cover'}`}
              />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    title: "Kateel, Mangalore",
    desc: "The holiest temple town on the banks of river Nandini. A peaceful spiritual getaway.",
    img: "/Destinations/Kateel%2C%20Mangalore.jpg",
    badge: "Spiritual Getaway",
  },
  {
    title: "Dharmasthala",
    desc: "A renowned temple town with deep cultural and spiritual significance along the Netravati river.",
    img: "/Destinations/Dharmasthala.webp",
    badge: "Spiritual Getaway",
  }, {
    title: "Murudeshwara",
    desc: "Contains the world's third tallest Shiva statue, as well as the Murudeshwara Temple lying on the coast of the Arabian Sea.",
    img: "/Destinations/Murudeshwara.jpg",
    badge: "Spiritual Getaway",
  },
  {
    title: "The Goa Circuit",
    desc: "Coastal drive through Karwar and Gokarna into the heart of Goa.",

    img: "/Destinations/The%20Goa%20Circuit.jpg",
  },
  {
    title: "Mysore Palace",
    desc: "Experience the royal heritage, Chamundi Hills, and the vibrant Devaraja Market.",
    img: "/Destinations/Mysore%20Palace.jpg",
  },
  {
    title: "Hampi Ruins",
    desc: "A UNESCO World Heritage site featuring the majestic Virupaksha Temple and stone chariot.",
    img: "/Destinations/Hampi%20Ruins.jpg",
  },
  {
    title: "Kukke Subramanya",
    desc: "The famous pilgrimage destination nestled in the lush green Western Ghats.",
    img: "/Destinations/Kukke%20Subramanya.jpg",
  },
  {
    title: "Malpe",
    desc: "Located just 7 kilometers from Udupi, Malpe Beach is a serene coastal retreat that combines natural beauty, thrilling adventures, and a touch of history.",
    img: "/Destinations/Malpe.jpg",
  },

  {
    title: "Chikmagalur Peaks",
    desc: "High-altitude tea estates and the famous Mullayanagiri peak trek.",
    img: "/Destinations/Chikmagalur%20Peaks.jpg",
  },
  {
    title: "Coorg Coffee Trails",
    desc: "Visit Madikeri, Dubare Elephant Camp, and Namdroling Monastery.",
    img: "/Destinations/Coorg%20Coffee%20Trails.jpg",
  },
  {
    title: "Udupi",
    desc: "Explore the Sri Krishna Temple, St. Mary's Island, and beautiful beach sunsets.",
    img: "/Destinations/Udupi.jpg",
  },
  {
    title: "All over Karnataka",
    desc: "Tourist places in Karnataka spell allure and sedation. Some of these best places are well-renowned, while the others are left unappreciated.",
    img: "/Destinations/All%20over%20Karnataka.webp",
  },
];



const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Destinations({ limit, hideViewAll }: { limit?: number, hideViewAll?: boolean }) {
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
          <h2 className="font-headline-lg text-headline-2xl md:text-headline-lg text-on-surface"><span className="text-5xl md:text-7xl">Explore Karnataka</span><br />&amp;<span className="text-primary text-5xl md:text-7xl ml-2">Beyond</span> </h2>
          <p className="font-body-md text-secondary mt-4 max-w-lg">Handpicked routes for the ultimate road trip experience.</p>
        </div>
        {!hideViewAll && (
          <Link href="/destinations" className="hidden md:flex items-center font-label-caps text-label-caps text-secondary hover:text-primary transition-colors">
            View All Routes <span className="material-symbols-outlined ml-2">arrow_forward</span>
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
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="overflow-hidden mb-6 relative h-80 bg-surface-alt">
              {dest.badge && (
                <div className="absolute top-4 left-4 z-10 bg-on-surface text-surface-container-lowest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {dest.badge}
                </div>
              )}
              <Image
                src={dest.img}
                alt={dest.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{dest.title}</h3>
            <p className="font-body-md text-body-md text-secondary line-clamp-3">{dest.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

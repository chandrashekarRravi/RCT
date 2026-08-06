"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    title: "The Goa Circuit",
    desc: "Coastal drive through Karwar and Gokarna into the heart of Goa.",
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mysore Palace",
    desc: "Experience the royal heritage, Chamundi Hills, and the vibrant Devaraja Market.",
    img: "https://images.unsplash.com/photo-1600100397608-f010f419b9ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Hampi Ruins",
    desc: "A UNESCO World Heritage site featuring the majestic Virupaksha Temple and stone chariot.",
    img: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Kukke Subramanya",
    desc: "The famous pilgrimage destination nestled in the lush green Western Ghats.",
    img: "https://images.unsplash.com/photo-1596484552834-6a58f84bfc89?q=80&w=800&auto=format&fit=crop", // placeholder green
  },
  {
    title: "Malpe",
    desc: "Located just 7 kilometers from Udupi, Malpe Beach is a serene coastal retreat that combines natural beauty, thrilling adventures, and a touch of history.",
    img: "https://images.unsplash.com/photo-1590076215667-873523522f25?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Murudeshwara",
    desc: "Contains the world's third tallest Shiva statue, as well as the Murudeshwara Temple lying on the coast of the Arabian Sea.",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Chikmagalur Peaks",
    desc: "High-altitude tea estates and the famous Mullayanagiri peak trek.",
    img: "https://images.unsplash.com/photo-1626244464197-e89791471676?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Coorg Coffee Trails",
    desc: "Visit Madikeri, Dubare Elephant Camp, and Namdroling Monastery.",
    img: "https://images.unsplash.com/photo-1595180453303-37604f3780e9?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Udupi",
    desc: "Explore the Sri Krishna Temple, St. Mary's Island, and beautiful beach sunsets.",
    img: "https://images.unsplash.com/photo-1621648083812-4fb8e8eef051?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Dharmasthala",
    desc: "A renowned temple town with deep cultural and spiritual significance along the Netravati river.",
    img: "https://images.unsplash.com/photo-1601618218155-21d701ec6a98?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Kateel, Mangalore",
    desc: "The holiest temple town on the banks of river Nandini. A peaceful spiritual getaway.",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f7415e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "All over Karnataka",
    desc: "Tourist places in Karnataka spell allure and sedation. Some of these best places are well-renowned, while the others are left unappreciated.",
    img: "https://images.unsplash.com/photo-1534346765103-6258edfa39dc?q=80&w=800&auto=format&fit=crop",
  }
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
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 md:mb-24 flex justify-between items-end border-b border-on-surface/10 pb-8"
      >
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Explore Karnataka<br />&amp; Beyond</h2>
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

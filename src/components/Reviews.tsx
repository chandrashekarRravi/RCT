"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const reviews = [
  {
    quote: "It was wonderful travel from Coorg to Mangalore. The driver Gangadhar was so supporting and taking care of every small thing. It was awesome support — must take his rides.",
    author: "Avinash Kummar",
    tag: "Local Guide · Luxury vehicles",
    stars: 5,
    time: "4 years ago",
  },
  {
    quote: "Rated near-perfect for its safe driving practices, comfortable rides, and good staff behaviour at good prices.",
    author: "Mallu Mallu",
    tag: "Verified Customer",
    stars: 5,
    time: "2 months ago",
  },
  {
    quote: "Gangadhar was super awesome — patient and very friendly.",
    author: "Vijay Bose",
    tag: "Sedan ride",
    stars: 5,
    time: "4 years ago",
  },
  {
    quote: "Super driver, very good condition vehicle. Highly recommended!",
    author: "Murgesh Hubblli",
    tag: "Verified Customer",
    stars: 5,
    time: "2 months ago",
  },
  {
    quote: "Punctuality, quality, professionalism, and value — all top notch. Would definitely book again for long distance and airport transfers.",
    author: "Pandu B Hosamani",
    tag: "Airport · Long Distance",
    stars: 5,
    time: "4 years ago",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-primary text-lg">★</span>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="font-headline-lg text-on-surface">
          <span className="text-3xl md:text-4xl text-on-surface">Real</span>
          <br />
          <span className="text-5xl md:text-8xl text-primary">Traveler Stories</span>
        </h2>
        <p className="font-body-lg text-secondary mt-4 max-w-xl">
          From Coorg to the coast — here's what our passengers say about riding with Red Coastal.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 border border-on-surface/10 bg-surface-bright flex flex-col justify-between hover:border-primary/30 transition-colors duration-300"
          >
            <div>
              <StarRating count={review.stars} />
              <span className="text-primary text-4xl leading-none font-serif">&ldquo;</span>
              <p className="font-body-lg text-secondary italic mb-6 mt-2">{review.quote}</p>
            </div>
            <div>
              <p className="font-label-caps text-on-surface uppercase tracking-widest">— {review.author}</p>
              <p className="font-body-sm text-secondary/60 text-xs mt-1">{review.tag}</p>
              <p className="font-body-sm text-secondary/40 text-xs mt-1">{review.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Link to Google Reviews */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex items-center gap-3"
      >
        <Link
          href="https://maps.app.goo.gl/uDEoaPkQAWgwpgeW7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-label-caps text-secondary hover:text-primary transition-colors border border-on-surface/10 px-5 py-3 hover:border-primary/30"
        >
          {/* external link icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Read all reviews on Google Maps
        </Link>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    quote: "The car was smelling great and the driver was extremely polite. We felt very safe driving to Chikmagalur at night.",
    author: "Dr. Anjali Hegde"
  },
  {
    quote: "Highly recommend for Airport drops. They arrived 15 minutes early!",
    author: "Michael G."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface max-w-container-max mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-headline-lg text-on-surface"><span className="text-4xl text-on-surface">Real</span><br /><span className="text-8xl text-primary">Traveler Stories</span></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-8 border border-on-surface/10 bg-surface-bright flex flex-col justify-between"
          >
            <div>
              <span className="text-primary text-4xl leading-none font-serif">&ldquo;</span>
              <p className="font-body-lg text-secondary italic mb-6 mt-2">{review.quote}</p>
            </div>
            <p className="font-label-caps text-on-surface uppercase tracking-widest">- {review.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

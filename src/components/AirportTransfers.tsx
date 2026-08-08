"use client";

import { motion } from "framer-motion";

export function AirportTransfers() {
  return (
    <section id="airport" className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary max-w-full text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="material-symbols-outlined text-6xl mb-6">flight_land</span>
          <h2 className="font-headline-lg text-5xl md:text-7xl mb-6">Mangaluru Airport (IXE) Specialists</h2>
          <p className="font-body-lg text-on-primary/80 mb-10">
            Never miss a flight. We offer 24/7 dedicated airport transfers with real-time flight tracking.
            Our drivers wait for you at the arrival gate with name boards.
          </p>
          <a
            href="#booking"
            className="inline-block bg-on-primary text-primary px-8 py-4 font-label-caps hover:bg-surface-dim transition-colors duration-300"
          >
            Schedule Pickup
          </a>
        </motion.div>
      </div>
    </section>
  );
}

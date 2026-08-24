"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-alt max-w-full">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="font-label-caps text-primary tracking-widest uppercase mb-4">The Red Coastal Legacy</h4>
          <h2 className="font-headline-lg text-on-surface mb-6"><span className="text-5xl md:text-8xl text-on-surface">About Us:</span> <span className="text-5xl md:text-8xl text-primary">Your Gateway</span><span className="font-bold text-4xl md:text-7xl"> to the Coast</span></h2>
          <p className="font-body-lg text-secondary mb-6">
            Welcome to <strong className="text-on-surface font-semibold">RED COASTAL TRAVELS MANGALORE</strong>, Mangalore&apos;s premier travel partner. Based in the heart of the "Gateway to Karnataka," we specialize in providing reliable, comfortable, and affordable car rental services for travelers exploring the stunning coastal belt and the Western Ghats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center space-y-8"
        >
          <h3 className="font-headline-md font-bold text-on-surface border-b border-on-surface/10 pb-4">Why Travel With Us?</h3>
          <div>
            <h4 className="font-label-caps  text-on-surface mb-2">Local Expertise</h4>
            <p className="font-body-md text-secondary">
              As Mangalore locals, we don&apos;t just provide a car; we provide the best routes, hidden food spots, and local insights to make your trip memorable.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-on-surface mb-2">Diverse Fleet</h4>
            <p className="font-body-md text-secondary">
              From compact hatchbacks for city navigation to spacious SUVs for family pilgrimages and luxury sedans for business, our fleet is meticulously maintained for safety and comfort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

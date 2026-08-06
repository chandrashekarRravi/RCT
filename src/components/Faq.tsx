"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Are there hidden charges?",
    a: "No, we provide all-inclusive quotes (Fuel, Driver, AC)."
  },
  {
    q: "Do you provide tour guides?",
    a: "Our drivers are highly knowledgeable, but specialized guides can be arranged upon request."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container max-w-full">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline-lg text-on-surface"> <span className="text-3xl text-on-surface pr-200">Questions?</span><br /><span className="text-8xl text-primary">We&apos;ve Got Answers</span></h2>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-b border-on-surface/10 pb-8"
            >
              <h3 className="font-headline-md text-on-surface mb-4">{faq.q}</h3>
              <p className="font-body-lg text-secondary">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

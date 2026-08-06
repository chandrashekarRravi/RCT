"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container w-full py-section-gap border-t border-on-surface/10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 mb-12 md:mb-0"
        >
          <h2 className="font-headline-md text-on-surface mb-6 font-bold tracking-tighter">RED COASTAL TAXI MANGALORE.</h2>
          <p className="font-body-md text-secondary max-w-sm mb-8">
            Serving Mangaluru, Udupi, and Kasaragod with unparalleled road travel experiences.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <span className="material-symbols-outlined text-secondary">call</span>
            <span className="font-body-md text-secondary">99720 02436</span>
          </div>
          <div className="flex items-start space-x-4 mb-4">
            <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
            <span className="font-body-md text-secondary max-w-[250px]">
              Airport Road, Kunjathbail Basavanagara, Mangalore, Karnataka
            </span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <div>
            <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">Connect With Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:9972002436" className="font-body-md text-secondary hover:text-primary transition-colors">
                  Call: 99720 02436
                </a>
              </li>
              <li>
                <a href="#" className="font-body-md text-secondary hover:text-primary transition-colors">
                  Instagram: @rct_mangalore
                </a>
              </li>
              <li>
                <a href="#" className="font-body-md text-secondary hover:text-primary transition-colors flex items-center">
                  <span className="mr-2">📞W</span> Direct WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="font-body-md text-secondary hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="font-body-md text-secondary hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:col-span-12 mt-16 pt-8 border-t border-on-surface/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center"
        >
          <p className="font-label-caps text-secondary uppercase tracking-widest mb-4 md:mb-0">
            © 2026 Red Coastal Taxi Mangalore. Professional Chauffeur Services.
          </p>
          <p className="font-label-caps text-secondary uppercase tracking-widest">
            Mangaluru | Udupi | Manipal | Kasaragod
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

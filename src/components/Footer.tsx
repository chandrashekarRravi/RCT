"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-surface-container w-full py-section-gap border-t border-on-surface/10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-6 mb-12 md:mb-0"
        >
          <div className="mb-6">
            <Image
              src="/logo.jpeg"
              alt="Red Coastal Taxi Mangalore Logo"
              width={200}
              height={80}
              className="object-contain h-16 w-auto mix-blend-multiply"
            />
          </div>
          <p className="font-body-md text-secondary max-w-sm mb-8">
            Serving Mangaluru, Udupi, and Kasaragod with unparalleled road travel experiences.
          </p>
          <div className="flex items-center space-x-4 mb-4">
            <span className="material-symbols-outlined text-secondary">call</span>
            <span className="font-body-md text-secondary">99720 02436</span>
            <span className="font-body-md text-secondary">63630 35567</span>
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
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <div>
            <h4 className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">Connect With Us</h4>
            <ul className="flex space-x-6 items-center">
              <li>
                <Link href="https://instagram.com/rct_mangalore" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/919972002436" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
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
          </div> */}
          <div>
            <ul>
              <li>
                <span className="font-label-caps text-on-surface mb-6 uppercase tracking-widest">Navigation</span>
              </li>
              <li>
                <Link href="#fleet" className="font-body-md text-secondary hover:text-primary transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link href="#about" className="font-body-md text-secondary hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="font-body-md text-secondary hover:text-primary transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#contact" className="font-body-md text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:col-span-12 mt-16 pt-8 border-t border-on-surface/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-label-caps text-[10px] text-secondary uppercase tracking-widest mb-4 md:mb-0">
            © 2026 Red Coastal Taxi Mangalore. Professional Chauffeur Services.
          </p>
          <p className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">
            Mangaluru | Udupi | Manipal | Kasaragod
          </p>
          <p className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Developed By <a href="https://chandrashekar.vercel.app/" className="hover:text-primary transition-colors">Chandrashekar R</a></p>
        </motion.div>
      </div>
    </footer>
  );
}

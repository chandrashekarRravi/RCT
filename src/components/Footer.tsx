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
          <div className="flex items-start space-x-4 mb-4">
            {/* phone icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            <div className="flex flex-col gap-1">
              <a href="tel:+919972002436" className="font-body-md text-secondary hover:text-primary transition-colors">+91 99720 02436</a>
              <a href="tel:+916363035567" className="font-body-md text-secondary hover:text-primary transition-colors">+91 63630 35567</a>
            </div>
          </div>
          <div className="flex items-start space-x-4 mb-4">
            {/* location pin icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.099 3.468-4.698 3.468-8.084a6.75 6.75 0 00-13.5 0c0 3.386 1.525 5.985 3.469 8.084a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
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

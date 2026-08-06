"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destinations", href: "#destinations" },
    { name: "Fleet", href: "#fleet" },
    { name: "Airport", href: "#airport" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-on-surface/10 shadow-sm"
          : "bg-background/50 backdrop-blur-sm border-b border-on-surface/5"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-20">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary tracking-tighter"
        >
          RED COASTAL
        </Link>
        <div className="hidden lg:flex items-center space-x-8 font-label-caps text-label-caps">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="#booking"
            className="bg-on-surface text-surface-container-lowest px-6 py-3 font-label-caps text-label-caps hover:bg-primary transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
        <button
          className="lg:hidden text-on-surface p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-on-surface/10 overflow-hidden"
          >
            <div className="px-margin-mobile py-6 flex flex-col space-y-4 font-label-caps text-label-caps">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-on-surface hover:text-primary py-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-on-surface/10">
                <Link
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block bg-on-surface text-surface-container-lowest px-6 py-3 text-center w-full hover:bg-primary transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

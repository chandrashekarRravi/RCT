"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Module-level: persists for the JS session (resets only on full browser reload)
let introCompleted = false;

export function Hero() {
  // Capture at component mount whether intro was already done.
  // true  → user navigated here via breadcrumb/internal link → skip everything
  // false → genuine first load → play intro then reveal
  const isFirstLoad = useRef(!introCompleted);

  const [showIntro, setShowIntro] = useState(isFirstLoad.current);

  useEffect(() => {
    // If it's not the first load, nothing to do — just show the hero instantly
    if (!isFirstLoad.current) return;

    // Block scroll during intro
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowIntro(false);
      introCompleted = true;
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []); // ← runs only once on mount

  const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

  return (
    <>
      {/* ── INTRO OVERLAY ── full-screen splash for first load only */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro-overlay"
            className="fixed inset-0 z-[999] bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: ease, delay: 0.15 }}
          >
            <video
              src="/landing.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay + title */}
            <motion.div
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: ease }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: ease }}
                className="text-white text-5xl md:text-7xl lg:text-8xl font-display-lg tracking-tight text-center leading-[1.1]"
              >
                Beyond&nbsp;Regular&nbsp;Travel
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO SECTION ── */}
      <header className="pt-[100px] min-h-screen flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">

          {/* Left — text content */}
          <motion.div
            // Breadcrumb nav → show instantly (initial=false skips all animation)
            // First load + intro → hidden; first load + intro done → animate in
            initial={isFirstLoad.current ? { opacity: 0, y: 30 } : false}
            animate={{
              opacity: (isFirstLoad.current && showIntro) ? 0 : 1,
              y: (isFirstLoad.current && showIntro) ? 30 : 0,
            }}
            transition={{
              duration: 1,
              delay: (isFirstLoad.current && !showIntro) ? 0.6 : 0,
              ease: ease,
            }}
            className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-12 z-10 relative"
          >
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-[95px] leading-tight text-on-surface mb-6 relative tracking-wider">
              Beyond <br />{" "}
              <span className="text-6xl md:text-8xl text-primary font-light">Regular</span>
              <br />
              Travel
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-md">
              Premium Road Journeys Across Coastal Karnataka &amp; The Western Ghats.
            </p>
            <div>
              <Link
                href="#booking"
                className="inline-block bg-on-surface text-surface-container-lowest px-8 py-4 font-label-caps text-label-caps hover:bg-primary transition-colors duration-300"
              >
                Reserve a Journey
              </Link>
            </div>
          </motion.div>

          {/* Right — video with top-to-bottom reveal */}
          <div className="md:col-span-7 mt-12 md:mt-0 relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
            {!showIntro && (
              <motion.div
                className="absolute inset-0 w-full h-full"
                // First load → clip reveal top→bottom
                // Breadcrumb nav → initial=false renders at final state instantly, no transition
                initial={isFirstLoad.current ? { clipPath: "inset(0% 0% 100% 0%)" } : false}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={isFirstLoad.current ? { duration: 1.5, ease: ease, delay: 0.35 } : { duration: 0 }}
              >
                <video
                  src="/landing.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            )}
          </div>

        </div>
      </header>
    </>
  );
}

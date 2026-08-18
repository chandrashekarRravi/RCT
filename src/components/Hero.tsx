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
              {/* Decorative splash text — aria-hidden, real H1 is in the hero below */}
              <motion.span
                aria-hidden="true"
                role="presentation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: ease }}
                className="text-white text-5xl md:text-7xl lg:text-8xl font-display-lg tracking-tight text-center leading-[1.1] block"
              >
                Beyond&nbsp;Regular&nbsp;Travel
              </motion.span>
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

            {/* Contact icons row */}
            <div className="flex items-center gap-4 mt-6">
              {/* Call */}
              <a
                href="tel:+916363035567"
                aria-label="Call us"
                className="group flex items-center gap-2 text-secondary hover:text-on-surface transition-colors duration-300"
              >
                <span className="w-10 h-10 flex items-center justify-center border border-current rounded-full group-hover:bg-on-surface group-hover:text-surface-container-lowest transition-colors duration-300">
                  {/* Phone icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="font-label-caps text-label-caps tracking-wider">+91 63630 35567</span>
              </a>

              {/* Divider */}
              <span className="h-6 w-px bg-secondary/30" />

              {/* WhatsApp */}
              <a
                href="https://wa.me/916363035567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp us"
                className="group flex items-center gap-2 text-secondary hover:text-[#25D366] transition-colors duration-300"
              >
                <span className="w-10 h-10 flex items-center justify-center border border-current rounded-full group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                  {/* WhatsApp icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="font-label-caps text-label-caps tracking-wider">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right — video with top-to-bottom reveal */}
          <div className="md:col-span-7 mt-12 md:mt-0 relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
            {!showIntro && (
              <motion.div
                className="absolute inset-0 w-full h-full"
                // First load → scale reveal top→bottom (GPU composited, no CLS)
                // Breadcrumb nav → initial=false renders at final state instantly, no transition
                initial={isFirstLoad.current ? { scaleY: 0, transformOrigin: "top" } : false}
                animate={{ scaleY: 1, transformOrigin: "top" }}
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

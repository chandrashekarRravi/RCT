"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Hero() {
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    if (isIntro) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }

    const timer = setTimeout(() => {
      setIsIntro(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isIntro]);

  const premiumEase: [number, number, number, number] = [0.76, 0, 0.24, 1]; // Premium cubic-bezier for motion graphics feel

  return (
    <>
      <AnimatePresence>
        {isIntro && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: premiumEase, delay: 0.2 }}
          >
            <motion.div
              layoutId="hero-image-morph"
              className="absolute inset-0 w-full h-full"
              transition={{ duration: 1.4, ease: premiumEase }}
            >
              <video
                src="/landing.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
              <motion.div
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: premiumEase }}
                  className="text-white text-5xl md:text-7xl lg:text-8xl font-display-lg tracking-tight text-center leading-[1.1]"
                >
                  <motion.span className="">Beyond</motion.span>

                  <motion.span className="">Regular Travel</motion.span>
                </motion.h1>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="pt-[100px] min-h-screen flex items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isIntro ? 0 : 1, y: isIntro ? 30 : 0 }}
            transition={{ duration: 1, delay: isIntro ? 0 : 0.6, ease: premiumEase }}
            className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-12 z-10 relative"
          >
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-[95px] leading-tight text-on-surface mb-6 relative tracking-wider">
              Beyond <br /> <span className="  text-8xl text-primary font-light">Regular</span>
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

          <div className="md:col-span-7 mt-12 md:mt-0 relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
            {!isIntro ? (
              <motion.div
                layoutId="hero-image-morph"
                className="absolute inset-0 w-full h-full"
                transition={{ duration: 1.4, ease: premiumEase }}
              >
                <video
                  src="/landing.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full rounded-none grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}

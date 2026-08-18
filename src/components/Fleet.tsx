"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fleet = [
  {
    name: "Toyota Innova Crysta",
    category: "Premium MUV",
    desc: "The gold standard of long-distance comfort. Perfect for families.",
    img: "/Fleet/crysta.png",
  },
  {
    name: "Maruti Suzuki Ertiga",
    category: "MUV",
    desc: "Economical choice for groups of 6. High fuel efficiency and great AC.",
    img: "/Fleet/Ertiga.png",
  },
  {
    name: "Toyota Etios",
    category: "Sedan",
    desc: "Spacious, comfortable, and reliable for city and outstation travel.",
    img: "/Fleet/etios.png",
  },
  {
    name: "Maruti Suzuki Sedan",
    category: "Sedan",
    desc: "Elegant and smooth. Perfect for quick city trips and couples.",
    img: "/Fleet/marutisuzuki.png",
  },
  {
    name: "Force Traveller",
    category: "Group Travel",
    desc: "Comfortable seating for large groups with ample luggage space.",
    img: "/Fleet/traveller.png",
  },
  {
    name: "Force Urbania",
    category: "Premium Commuter",
    desc: "Next-generation premium van for luxurious group travel.",
    img: "/Fleet/urbania.png",
  },
  {
    name: "Mini Bus",
    category: "Bus",
    desc: "Ideal for corporate events and large family gatherings.",
    img: "/Fleet/mini-bus.png",
  },
  {
    name: "Midi Bus",
    category: "Bus",
    desc: "Spacious and comfortable for medium to large group excursions.",
    img: "/Fleet/midi-bus.png",
  }
];

function FleetItem({ vehicle, index, activeIndex, setActiveIndex, onSelect }: { vehicle: any, index: number, activeIndex: number, setActiveIndex: (i: number) => void, onSelect: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some", margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  const isActive = activeIndex === index;

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 cursor-pointer ${isActive ? 'opacity-100 scale-[1.02] transform' : 'opacity-40 scale-100'}`}
      onClick={() => setActiveIndex(index)}
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className={`font-headline-md text-2xl transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface'}`}>{vehicle.name}</h3>
        <span className="font-label-caps text-xs text-secondary border border-secondary px-2 py-1 ml-2">{vehicle.category}</span>
      </div>
      <p className="font-body-md text-secondary mt-2">{vehicle.desc}</p>

      {isActive && (
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
          className="mt-4 flex items-center text-primary font-label-caps text-sm hover:underline"
        >
          View Info <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5  mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export function Fleet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
  const [selectedMobileVehicle, setSelectedMobileVehicle] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const displayIndex = selectedVehicle !== null ? selectedVehicle : activeIndex;

  const handleSelect = (index: number) => {
    setSelectedVehicle(index);
    if (sectionRef.current) {
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="fleet" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container max-w-full relative">
      <div className="max-w-container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-12 md:mb-16 border-b border-on-surface/10 pb-8">Our Luxury Fleet</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative items-start">

          {/* Desktop Image Wrapper */}
          <motion.div
            className="hidden md:block md:col-span-7 lg:col-span-8 relative min-h-[400px] md:min-h-[600px] md:sticky md:top-24 rounded-2xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={displayIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={fleet[displayIndex].img}
                  alt={fleet[displayIndex].name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center bg-background md:p-12 min-h-[auto] md:min-h-[600px] rounded-2xl md:rounded-none overflow-hidden">

            {/* Desktop View */}
            <div className="hidden md:block h-full">
              <AnimatePresence mode="wait">
                {selectedVehicle === null ? (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {fleet.map((vehicle, i) => (
                      <div key={i} className={`${i !== 0 ? 'border-t border-on-surface/10 pt-6 mt-6' : ''}`}>
                        <FleetItem
                          vehicle={vehicle}
                          index={i}
                          activeIndex={activeIndex}
                          setActiveIndex={setActiveIndex}
                          onSelect={() => handleSelect(i)}
                        />
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <nav className="flex text-sm text-secondary mb-8" aria-label="Breadcrumb">
                      <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                          <button onClick={() => setSelectedVehicle(null)} className="inline-flex items-center hover:text-primary transition-colors font-label-caps">
                            Fleet
                          </button>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            <span className="text-on-surface font-medium truncate max-w-[150px]">{fleet[selectedVehicle].name}</span>
                          </div>
                        </li>
                      </ol>
                    </nav>

                    <h3 className="text-3xl font-headline-md mb-2 text-on-surface">{fleet[selectedVehicle].name}</h3>
                    <div className="mb-6">
                      <span className="font-label-caps text-xs border border-secondary text-secondary px-2 py-1 rounded inline-block">
                        {fleet[selectedVehicle].category}
                      </span>
                    </div>

                    <p className="font-body-lg text-secondary mb-8 leading-relaxed">
                      {fleet[selectedVehicle].desc}
                    </p>

                    <div className="mt-auto">
                      <h4 className="font-headline-sm mb-4 border-b border-on-surface/10 pb-2 text-on-surface">Vehicle Features</h4>
                      <ul className="space-y-3 text-secondary font-body-md list-none">
                        {[
                          "Premium Leather Seating",
                          "Advanced Climate Control",
                          "Spacious Luggage Capacity",
                          "Professional Chauffeur",
                        ].map((feat) => (
                          <li key={feat} className="flex items-center">
                            {/* check icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <Link href="#booking" className="mt-10 block text-center bg-on-surface text-surface-container-lowest px-6 py-4 font-label-caps hover:bg-primary transition-colors">
                        Reserve this Vehicle
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile View: Clean List */}
            <div className="md:hidden bg-background p-6 rounded-2xl">
              <p className="font-label-caps text-sm text-secondary mb-6 uppercase tracking-wider">Select a vehicle for details</p>
              <div className="space-y-2">
                {fleet.map((vehicle, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-4 border-b border-on-surface/5 cursor-pointer active:bg-on-surface/5 transition-colors rounded-lg px-2 -mx-2"
                    onClick={() => setSelectedMobileVehicle(i)}
                  >
                    <div>
                      <h3 className="font-headline-md text-xl text-on-surface mb-1">{vehicle.name}</h3>
                      <span className="font-label-caps text-[10px] text-secondary border border-secondary/30 px-2 py-0.5 rounded-sm">{vehicle.category}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                      {/* chevron right */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      <AnimatePresence>
        {selectedMobileVehicle !== null && (
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm"
              onClick={() => setSelectedMobileVehicle(null)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-surface rounded-t-3xl z-[101] max-h-[90vh] overflow-y-auto flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.2)]"
            >
              <div className="p-4 flex justify-center sticky top-0 bg-surface z-10 rounded-t-3xl" onClick={() => setSelectedMobileVehicle(null)}>
                <div className="w-12 h-1.5 bg-on-surface/20 rounded-full" />
              </div>
              <div className="px-6 pb-8">
                <div className="relative h-48 w-full mb-6 bg-surface-container rounded-2xl overflow-hidden">
                  <Image src={fleet[selectedMobileVehicle].img} alt={fleet[selectedMobileVehicle].name} fill className="object-cover" />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-headline-md text-on-surface leading-tight pr-4">{fleet[selectedMobileVehicle].name}</h3>
                  <span className="font-label-caps text-[10px] border border-primary text-primary px-2 py-1 rounded whitespace-nowrap shrink-0 mt-1">
                    {fleet[selectedMobileVehicle].category}
                  </span>
                </div>

                <p className="font-body-md text-secondary mb-8 leading-relaxed">
                  {fleet[selectedMobileVehicle].desc}
                </p>

                <h4 className="font-headline-sm mb-3 border-b border-on-surface/10 pb-2 text-on-surface text-sm">Key Features</h4>
                <ul className="space-y-3 text-secondary font-body-sm list-none mb-8">
                  <li className="flex items-center">
                    {/* seat icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 4a1 1 0 011-1h8a1 1 0 011 1v8H7V4zm-2 9h12l1.5 6H3.5L5 13zM8 2a3 3 0 000 6h8a3 3 0 000-6H8z"/>
                    </svg>
                    Premium Seating
                  </li>
                  <li className="flex items-center">
                    {/* snowflake / AC icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>
                      <polyline points="6 6 12 2 18 6"/><polyline points="6 18 12 22 18 18"/>
                      <polyline points="2 8 6 12 2 16"/><polyline points="22 8 18 12 22 16"/>
                    </svg>
                    Advanced Climate Control
                  </li>
                  <li className="flex items-center">
                    {/* luggage icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-3 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="7" width="12" height="14" rx="1"/><path d="M9 7V5a2 2 0 014 0v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
                    </svg>
                    Spacious Luggage Capacity
                  </li>
                </ul>

                <Link
                  href="#booking"
                  onClick={() => setSelectedMobileVehicle(null)}
                  className="block text-center bg-on-surface text-surface-container-lowest px-6 py-4 font-label-caps hover:bg-primary active:scale-[0.98] transition-all rounded-xl shadow-lg"
                >
                  Reserve this Vehicle
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

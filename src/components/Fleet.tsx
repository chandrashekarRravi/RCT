"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fleet = [
  {
    name: "Toyota Innova Hycross",
    category: "Premium SUV",
    desc: "The gold standard of long-distance comfort. Hybrid engine for smooth silent rides.",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Maruti Suzuki Ertiga",
    category: "MUV",
    desc: "Economical choice for groups of 6. High fuel efficiency and great AC.",
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Spacious SUVs",
    category: "SUV",
    desc: "Spacious, comfortable, and perfect for family getaways.",
    img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Executive Sedans",
    category: "Sedan",
    desc: "Elegant and smooth. Perfect for corporate and city travel.",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Tempo Traveller",
    category: "Group Travel",
    desc: "Elegant and smooth. Perfect for corporate and group travel.",
    img: "https://images.unsplash.com/photo-1628287719602-555e0980d9ee?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Swift",
    category: "Hatchback",
    desc: "Elegant and smooth. Perfect for quick city trips and couples.",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
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
          View Info <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
        </button>
      )}
    </div>
  );
}

export function Fleet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-16 border-b border-on-surface/10 pb-8">Our Luxury Fleet</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative items-start">
          
          <motion.div
            className="md:col-span-7 lg:col-span-8 relative min-h-[400px] md:min-h-[600px] md:sticky md:top-24 rounded-2xl overflow-hidden shadow-2xl"
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
          
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center bg-background p-8 md:p-12 min-h-[600px]">
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
                          <span className="material-symbols-outlined mx-1 text-sm">chevron_right</span>
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
                      <li className="flex items-center"><span className="material-symbols-outlined mr-2 text-primary">check_circle</span> Premium Leather Seating</li>
                      <li className="flex items-center"><span className="material-symbols-outlined mr-2 text-primary">check_circle</span> Advanced Climate Control</li>
                      <li className="flex items-center"><span className="material-symbols-outlined mr-2 text-primary">check_circle</span> Spacious Luggage Capacity</li>
                      <li className="flex items-center"><span className="material-symbols-outlined mr-2 text-primary">check_circle</span> Professional Chauffeur</li>
                    </ul>

                    <Link href="#booking" className="mt-10 block text-center bg-on-surface text-surface-container-lowest px-6 py-4 font-label-caps hover:bg-primary transition-colors">
                      Reserve this Vehicle
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

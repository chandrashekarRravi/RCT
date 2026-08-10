"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const vehicles = [
  { id: "crysta", name: "Toyota Innova Crysta", image: "/Fleet/crysta.png" },
  { id: "ertiga", name: "Maruti Suzuki Ertiga", image: "/Fleet/Ertiga.png" },
  { id: "etios", name: "Toyota Etios", image: "/Fleet/etios.png" },
  { id: "sedan", name: "Maruti Suzuki Sedan", image: "/Fleet/marutisuzuki.png" },
  { id: "traveller", name: "Force Traveller", image: "/Fleet/traveller.png" },
  { id: "urbania", name: "Force Urbania", image: "/Fleet/urbania.png" },
  { id: "minibus", name: "Mini Bus", image: "/Fleet/mini-bus.png" },
  { id: "midibus", name: "Midi Bus", image: "/Fleet/midi-bus.png" },
];

export function BookingForm() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickup: "",
    destination: "",
    date: "",
    requests: ""
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = () => {
    // Replace with the actual business WhatsApp number (with country code, e.g., 91 for India)
    const phoneNumber = "919972002436";

    // Constructing a neat professional message without emojis to avoid encoding issues
    const message = `*New Booking Enquiry*
    
*Customer Details:*
- *Name:* ${formData.name || "Not provided"}
- *Mobile:* ${formData.mobile || "Not provided"}

*Trip Details:*
- *Pickup:* ${formData.pickup || "Not provided"}
- *Destination:* ${formData.destination || "Not provided"}
- *Date:* ${formData.date || "Not provided"}
- *Vehicle:* ${selectedVehicle.name}

*Special Requests:* 
- ${formData.requests || "None"}

_Looking forward to your confirmation!_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6"><span className="text-5xl md:text-8xl text-on-surface">Schedule</span><br /><span className="text-5xl md:text-8xl text-primary">Pickup</span></h2>
          <p className="font-body-lg text-body-lg text-secondary mb-12">
            Direct WhatsApp Booking. Allow our concierge to arrange your travel with uncompromising attention to detail.
          </p>
          <div className="flex items-start space-x-4 mb-8">
            <span className="material-symbols-outlined text-primary">chat</span>
            <div>
              <h4 className="font-label-caps text-label-caps text-on-surface mb-1">Instant Confirmation</h4>
              <p className="font-body-md text-body-md text-secondary">
                Submit your details and we will confirm your trip instantly via WhatsApp.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="bg-surface p-8 md:p-12 relative z-10"
        >
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleWhatsAppRedirect(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10 Digit Number"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Pickup Address</label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="House/Hotel Name"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="City or Landmark"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Travel Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none text-secondary"
                  required
                />
              </div>
              <div className="relative" ref={dropdownRef}>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Vehicle Choice</label>
                <div
                  className="w-full bg-transparent border-b border-on-surface/20 px-0 py-2 font-body-md transition-colors duration-200 cursor-pointer flex items-center justify-between group"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-8">
                      <Image src={selectedVehicle.image} alt={selectedVehicle.name} fill className="object-contain" />
                    </div>
                    <span className="text-on-surface group-hover:text-primary transition-colors">{selectedVehicle.name}</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform duration-300" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                </div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-full mt-2 bg-surface border border-on-surface/10 shadow-xl max-h-64 overflow-y-auto z-50"
                    >
                      {vehicles.map((v) => (
                        <div
                          key={v.id}
                          className="flex items-center gap-3 p-3 hover:bg-on-surface/5 cursor-pointer transition-colors"
                          onClick={() => {
                            setSelectedVehicle(v);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <div className="relative w-16 h-10 shrink-0">
                            <Image src={v.image} alt={v.name} fill className="object-contain drop-shadow-md" />
                          </div>
                          <span className={"font-body-md " + (selectedVehicle.id === v.id ? "text-primary font-medium" : "text-on-surface")}>
                            {v.name}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div>
              <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Special Requests</label>
              <input
                type="text"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                placeholder="Baby seat, extra luggage, etc."
                className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-on-surface text-surface-container-lowest py-4 font-label-caps text-label-caps hover:bg-primary flex items-center justify-center transition-colors duration-300 group"
            >
              <span className="material-symbols-outlined mr-2 text-sm group-hover:translate-x-1 transition-transform">send</span>
              Confirm Trip on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

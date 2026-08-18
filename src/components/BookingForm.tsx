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
            <a
              href="https://wa.me/919972002436"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors"
            >
              {/* WhatsApp icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
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
                  {/* chevron down */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary transition-transform duration-300" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
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
              {/* WhatsApp icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Confirm Trip on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

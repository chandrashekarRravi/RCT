"use client";

import { motion } from "framer-motion";

export function BookingForm() {
  return (
    <section id="booking" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Schedule Pickup</h2>
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface p-8 md:p-12"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none" 
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Mobile</label>
                <input 
                  type="tel" 
                  placeholder="10 Digit Number"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Pickup Address</label>
                <input 
                  type="text" 
                  placeholder="House/Hotel Name"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none" 
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Destination</label>
                <input 
                  type="text" 
                  placeholder="City or Landmark"
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Travel Date</label>
                <input 
                  type="date" 
                  className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none text-secondary" 
                />
              </div>
              <div>
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Vehicle Choice</label>
                <select className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none text-secondary">
                  <option>Toyota Innova Hycross</option>
                  <option>Maruti Suzuki Ertiga</option>
                  <option>Premium SUV</option>
                  <option>Executive Sedan</option>
                  <option>Tempo Traveller</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase">Special Requests</label>
              <input 
                type="text" 
                placeholder="Baby seat, extra luggage, etc."
                className="w-full bg-transparent border-0 border-b border-on-surface/20 focus:ring-0 focus:border-primary px-0 py-2 font-body-md transition-colors duration-200 outline-none" 
              />
            </div>
            
            <button 
              type="button" 
              className="w-full bg-on-surface text-surface-container-lowest py-4 font-label-caps text-label-caps hover:bg-primary flex items-center justify-center transition-colors duration-300"
            >
              <span className="material-symbols-outlined mr-2 text-sm">send</span>
              Confirm Trip on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

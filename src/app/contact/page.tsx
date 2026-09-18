import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative bg-background text-on-background">
      <Navigation />
      
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-6">Contact Us</h1>
            <p className="text-lg text-secondary">
              Have a question or need to book a ride? Fill out the form below or reach out to us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-on-surface/5">
              <h2 className="text-2xl font-display font-bold text-on-surface mb-6">Send us a Message</h2>
              <form action="https://formsubmit.co/gangadharagangu70@gmail.com" method="POST" className="space-y-6">
                {/* Disable captchas or specify next page if needed. For now, default formsubmit behavior is fine. */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Red Coastal Travels" />
                <input type="hidden" name="_template" value="table" />
                <div>
                  <label htmlFor="name" className="block text-sm font-label-caps text-on-surface mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-background border border-on-surface/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-label-caps text-on-surface mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-background border border-on-surface/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-label-caps text-on-surface mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-background border border-on-surface/10 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-label-caps text-on-surface mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-on-surface/10 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-on-surface text-surface-container-lowest py-4 font-label-caps hover:bg-primary transition-colors rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold text-on-surface mb-4">Contact Information</h3>
                <p className="text-secondary mb-6">
                  We are available 24/7 to assist you with your travel needs across Coastal Karnataka & the Western Ghats.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:+919972002436" className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-label-caps text-sm text-secondary">Phone</p>
                      <p className="font-medium">+91 99720 02436</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 text-on-surface">
                    <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-label-caps text-sm text-secondary">Email</p>
                      <p className="font-medium">bookings@redcoastaltravels.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-on-surface">
                    <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-label-caps text-sm text-secondary">Location</p>
                      <p className="font-medium">Mangalore, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Event snippet for Website lead (1) conversion page */}
      <Script
        id="conversion-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-18397370523/4DUBCL3Vk_scEJuxxsRE'});
          `,
        }}
      />
    </main>
  );
}

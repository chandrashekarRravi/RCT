import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://www.redcoastaltravels.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mangalore Taxi & Premium Cab Service | Red Coastal Travels",
    template: "%s | Red Coastal Travels Mangalore",
  },
  description: "Reliable Mangalore taxi service for airport transfers, outstation cabs, and premium road journeys across Coastal Karnataka & The Western Ghats.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: "Red Coastal Travels Mangalore — Premium Road Journeys",
    description: "Premium Road Journeys Across Coastal Karnataka & The Western Ghats. Airport transfers, outstation trips, and pilgrimage routes from Mangalore.",
    url: SITE_URL,
    siteName: "Red Coastal Travels",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Red Coastal Travels Mangalore" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Coastal Travels Mangalore — Premium Road Journeys",
    description: "Premium Road Journeys Across Coastal Karnataka & The Western Ghats.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMCS5JLG');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${inter.variable} ${libreCaslon.variable} antialiased font-body-md overflow-x-hidden bg-background text-on-background`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMCS5JLG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

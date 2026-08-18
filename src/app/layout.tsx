import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
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
    default: "Red Coastal Travels Mangalore — Premium Road Journeys",
    template: "%s | Red Coastal Travels Mangalore",
  },
  description: "Premium Road Journeys Across Coastal Karnataka & The Western Ghats. Airport transfers, outstation trips, and pilgrimage routes from Mangaluru.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    title: "Red Coastal Travels Mangalore — Premium Road Journeys",
    description: "Premium Road Journeys Across Coastal Karnataka & The Western Ghats. Airport transfers, outstation trips, and pilgrimage routes from Mangaluru.",
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
      <body
        className={`${inter.variable} ${libreCaslon.variable} antialiased font-body-md overflow-x-hidden bg-background text-on-background`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

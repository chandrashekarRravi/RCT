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

export const metadata: Metadata = {
  title: "Red Coastal Taxi Mangalore - The Luxury of Motion",
  description: "Premium Road Journeys Across Coastal Karnataka & The Western Ghats.",
  icons: {
    icon: [
      { url: "/logo.png" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
  openGraph: {
    title: "Red Coastal Taxi Mangalore - The Luxury of Motion",
    description: "Premium Road Journeys Across Coastal Karnataka & The Western Ghats.",
    images: [{ url: "/logo.png", width: 800, height: 600 }],
    type: "website",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${libreCaslon.variable} antialiased font-body-md overflow-x-hidden bg-background text-on-background`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

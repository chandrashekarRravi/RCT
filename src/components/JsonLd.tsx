/**
 * LocalBusiness / TaxiService JSON-LD for the homepage.
 * Rendered as a <script type="application/ld+json"> in the <head>.
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": "https://www.redcoastaltravels.com/#business",
    name: "Red Coastal Travels Mangalore",
    url: "https://www.redcoastaltravels.com",
    logo: "https://www.redcoastaltravels.com/logo.png",
    image: "https://www.redcoastaltravels.com/og-image.jpg",
    description:
      "Premium road journeys across Coastal Karnataka and the Western Ghats. Airport transfers, outstation trips, and pilgrimage routes from Mangaluru.",
    telephone: ["+91-99720-02436", "+91-63630-35567"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Airport Road, Kunjathbail Basavanagara",
      addressLocality: "Mangalore",
      addressRegion: "Karnataka",
      postalCode: "575006",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9141,
      longitude: 74.856,
    },
    areaServed: [
      { "@type": "City", name: "Mangaluru" },
      { "@type": "City", name: "Udupi" },
      { "@type": "City", name: "Kasaragod" },
    ],
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.instagram.com/rct_mangalore",
      "https://wa.me/919972002436",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "54",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Avinash Kummar" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "It was wonderful travel from Coorg to Mangalore. The driver Gangadhar was so supporting and taking care of every small thing. It was awesome support — must take his rides.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Pandu B Hosamani" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Punctuality, quality, professionalism, and value — all top notch. Would definitely book again for long distance and airport transfers.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage JSON-LD for the FAQ section on the homepage.
 */
export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are there hidden charges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, we provide all-inclusive quotes (Fuel, Driver, AC).",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide tour guides?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our drivers are highly knowledgeable, but specialized guides can be arranged upon request.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList JSON-LD for destination detail pages.
 */
export function DestinationBreadcrumbSchema({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const base = "https://www.redcoastaltravels.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Destinations",
        item: `${base}/destinations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${base}/destinations/${slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * TouristAttraction JSON-LD for destination detail pages.
 */
export function TouristAttractionSchema({
  title,
  slug,
  description,
  image,
  location,
}: {
  title: string;
  slug: string;
  description: string;
  image: string;
  location: string;
}) {
  const base = "https://www.redcoastaltravels.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: title,
    description,
    url: `${base}/destinations/${slug}`,
    image: `${base}${image}`,
    isAccessibleForFree: true,
    // address must be a PostalAddress object, not a plain string
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList JSON-LD for Airport Taxi page.
 */
export function AirportBreadcrumbSchema() {
  const base = "https://www.redcoastaltravels.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Airport Taxi Service",
        item: `${base}/airport-taxi`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * TaxiService JSON-LD for Airport Taxi page.
 */
export function AirportTaxiSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Mangaluru Airport Taxi Service by Red Coastal Travels",
    url: "https://www.redcoastaltravels.com/airport-taxi",
    description: "24/7 Premium Airport Taxi Transfers from Mangaluru International Airport (IXE) with real-time flight tracking.",
    provider: {
      "@type": "LocalBusiness",
      name: "Red Coastal Travels Mangalore",
      telephone: "+91-99720-02436",
    },
    areaServed: [
      { "@type": "City", name: "Mangaluru" },
      { "@type": "City", name: "Udupi" },
      { "@type": "City", name: "Kasaragod" },
      { "@type": "City", name: "Manipal" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

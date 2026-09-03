// Shared destinations data — used by Destinations component + detail pages
export type Destination = {
  title: string;
  slug: string;
  desc: string;
  longDesc: string;
  img: string;
  badge?: string;
  highlights: string[];
  bestTime: string;
  distance: string; // from Mangalore
  location: string;
  guideContent: string;
  /** Primary commercial intent keyword (e.g., "Mangalore to Kateel taxi") */
  seoKeyword: string;
  /** ISO date string — used by sitemap.ts for accurate lastModified */
  lastModified: string;
};

export const destinations: Destination[] = [
  {
    title: "Kateel, Mangalore",
    slug: "kateel-mangalore",
    desc: "The holiest temple town on the banks of river Nandini. A peaceful spiritual getaway.",
    longDesc:
      "Kateel is a renowned pilgrimage centre situated on a scenic island formed by the Nandini River. The Shri Durgaparameshwari Temple here is one of the most visited shrines in coastal Karnataka, drawing thousands of devotees throughout the year. The temple's architecture and the river setting make it a uniquely serene destination.",
    img: "/Destinations/kateel-mangalore.jpg",
    badge: "Spiritual Getaway",
    highlights: ["Shri Durgaparameshwari Temple", "Nandini River boat rides", "Island setting", "Traditional rituals"],
    bestTime: "October – February",
    distance: "35 km",
    location: "Mangalore, Karnataka, India",
    seoKeyword: "Mangalore to Kateel taxi",
    lastModified: "2026-08-20",
    guideContent: "A journey to Kateel is as much about the destination as the serene path that leads there. Nestled on a lush island formed by the meandering Nandini River, this temple town offers a deeply grounding spiritual experience away from the city's bustle. The gentle sound of the river flowing around the shrine, coupled with the rhythmic temple bells, creates an atmosphere of profound tranquility.\n\nFor couples seeking a peaceful day trip, one of our premium sedans offers a smooth, quiet ride. For larger families traveling together for a temple visit, our spacious Innova Crysta ensures everyone travels in absolute comfort, with plenty of room for pooja offerings.\n\n*Practical Tip:* The best time to visit the Shri Durgaparameshwari Temple is early morning around 6:00 AM or late evening during the Mahapooja. The temperatures are cooler, and you can truly appreciate the island's ethereal mist.",
  },
  {
    title: "Dharmasthala",
    slug: "dharmasthala",
    desc: "A renowned temple town with deep cultural and spiritual significance along the Netravati river.",
    longDesc:
      "Dharmasthala is a prominent pilgrimage centre famous for the Shri Manjunatha Swamy Temple. Unique for its tradition of secular religious harmony, the temple is administered by a Jain family yet houses a Shaiva deity. The town also boasts the Bahubali statue and the Shri Kshethra Dharmasthala Rural Development Project, which has transformed thousands of lives.",
    img: "/Destinations/dharmasthala.webp",
    badge: "Spiritual Getaway",
    highlights: ["Shri Manjunatha Temple", "Bahubali Statue", "Car Museum", "Annasantharpane (free meals)"],
    bestTime: "October – March",
    distance: "75 km",
    location: "Dharmasthala, Karnataka, India",
    seoKeyword: "Mangalore to Dharmasthala taxi",
    lastModified: "2026-08-20",
    guideContent: "Steeped in centuries of tradition, Dharmasthala stands as a beacon of faith, charity, and unparalleled heritage. Beyond the sacred Shri Manjunatha Swamy Temple, the town is a masterclass in religious harmony and philanthropy. The pristine surroundings along the Netravati River make the journey deeply restorative, preparing you for the awe-inspiring sight of the monolithic Bahubali statue.\n\nThis route is perfect for family pilgrimages. Our well-appointed Innova Crysta is the vehicle of choice here, offering exceptional legroom and a plush ride for elderly family members. If you are traveling with an extended group or community members, our 12-to-17-seater Force Traveller provides a unified, comfortable journey without compromising on luxury.\n\n*Practical Tip:* Try to reach the temple before 10:00 AM to avoid the midday heat and the longest queues. Don't miss the Annasantharpane (the temple's legendary free meal), which is a humbling and spiritually fulfilling experience.",
  },
  {
    title: "Murudeshwara",
    slug: "murudeshwara",
    desc: "Contains the world's third tallest Shiva statue, as well as the Murudeshwara Temple on the coast of the Arabian Sea.",
    longDesc:
      "Murudeshwara is a coastal town in Uttara Kannada district, famous for its massive Shiva statue standing 123 feet tall overlooking the Arabian Sea. The Murudeshwara Temple, dedicated to Lord Shiva, is perched on a hillock and the gopura rises 20 floors. The beach, sea views, and the towering statue make this a visually spectacular destination.",
    img: "/Destinations/murudeshwara.jpg",
    badge: "Spiritual Getaway",
    highlights: ["123-ft Shiva Statue", "Murudeshwara Temple", "Arabian Sea views", "Murudeshwara Beach"],
    bestTime: "October – February",
    distance: "165 km",
    location: "Murudeshwara, Karnataka, India",
    seoKeyword: "Mangalore to Murudeshwara taxi",
    lastModified: "2026-08-20",
    guideContent: "Where devotion meets the boundless ocean, Murudeshwara offers a visual spectacle unlike any other. Driving along the pristine coastline to reach the towering 123-foot Shiva statue is an experience that stays with you. The sea breeze, the panoramic views of the Arabian Sea from the top of the 20-story gopura, and the golden beaches make this a multifaceted destination that appeals to both pilgrims and nature lovers alike.\n\nGiven the longer coastal drive from Mangalore, comfort is paramount. Our Innova Crysta is ideal for families, ensuring a smooth ride over highway stretches. For couples wanting a more intimate coastal road trip, our premium sedans deliver a refined, relaxing journey.\n\n*Practical Tip:* Visit the temple complex in the late afternoon. The sunset views behind the colossal Shiva statue, with the sky turning brilliant shades of orange and purple over the ocean, are an absolute photographer's dream.",
  },
  {
    title: "The Goa Circuit",
    slug: "goa-circuit",
    desc: "Coastal drive through Karwar and Gokarna into the heart of Goa.",
    longDesc:
      "The Goa Circuit is a breathtaking coastal road trip that takes you through the lush NH-66 highway, passing pristine beaches at Karwar, the sacred Om Beach at Gokarna, and onward into Goa's vibrant coast. The drive itself is an experience — azure sea on one side, Western Ghats on the other.",
    img: "/Destinations/goa-circuit.jpg",
    highlights: ["Karwar Beach", "Gokarna Om Beach", "Dudhsagar Waterfalls", "Panjim Old City"],
    bestTime: "November – February",
    distance: "350 km",
    location: "Goa, India",
    seoKeyword: "Mangalore to Goa taxi",
    lastModified: "2026-08-20",
    guideContent: "The coastal drive from Mangalore to Goa is widely regarded as one of India's most breathtaking road trips. Skirting the azure Arabian Sea on one side and the lush, rolling Western Ghats on the other, the Goa Circuit is a journey of sheer indulgence. From the untouched sands of Karwar to the sacred, laid-back shores of Gokarna, every mile brings a new, postcard-perfect vista.\n\nTo fully appreciate this extended coastal odyssey, our Innova Crysta is the gold standard for small groups and families, offering superior suspension and climate control. For larger groups of friends heading for a Goan getaway, our spacious Force Traveller ensures the journey is just as memorable as the destination, with ample room for luggage and endless conversations.\n\n*Practical Tip:* Start your drive at dawn. Not only do you beat the highway traffic, but witnessing the sunrise over the winding coastal roads near Maravanthe is an unforgettable start to your holiday.",
  },
  {
    title: "Mysore Palace",
    slug: "mysore-palace",
    desc: "Experience the royal heritage, Chamundi Hills, and the vibrant Devaraja Market.",
    longDesc:
      "Mysore, the City of Palaces, is one of India's most visited heritage destinations. The Mysore Palace, officially known as Amba Vilas, is a stunning Indo-Saracenic structure that glows with 100,000 lights on weekends and during Dasara. The city offers a rich blend of royal history, fragrant sandalwood markets, and the iconic Chamundi Hills.",
    img: "/Destinations/mysore-palace.jpg",
    highlights: ["Mysore Palace (illuminated)", "Chamundi Hills", "Devaraja Market", "Brindavan Gardens"],
    bestTime: "October – February (Dasara in Oct))",
    distance: "290 km",
    location: "Mysore, Karnataka, India",
    seoKeyword: "Mangalore to Mysore taxi",
    lastModified: "2026-08-20",
    guideContent: "Mysore is a city where history still breathes, wrapping you in an embrace of royal grandeur and aristocratic charm. The crown jewel, the magnificent Amba Vilas Palace, is a masterpiece of Indo-Saracenic architecture that transports you back to an era of unbridled opulence. But Mysore is more than just its palace; it's the fragrance of sandalwood, the vibrant energy of Devaraja Market, and the panoramic views from the sacred Chamundi Hills.\n\nThe drive to Mysore transitions beautifully from coastal plains to the elevated Deccan plateau. For a family steeped in luxury, our Innova Crysta provides the perfect sanctuary for the journey. For extended families or heritage groups, the Force Traveller ensures a comfortable, cohesive travel experience.\n\n*Practical Tip:* Plan your palace visit for a Sunday or a public holiday evening. Seeing the palace illuminated by nearly 100,000 bulbs against the night sky is a mesmerizing, once-in-a-lifetime spectacle.",
  },
  {
    title: "Hampi Ruins",
    slug: "hampi-ruins",
    desc: "A UNESCO World Heritage site featuring the majestic Virupaksha Temple and stone chariot.",
    longDesc:
      "Hampi, the capital of the Vijayanagara Empire, is a surreal landscape of giant boulders and ruins spread over 41 sq km. A UNESCO World Heritage Site, it offers over 1,600 surviving remains of the once-magnificent city. The Virupaksha Temple, the Stone Chariot, and the Royal Enclosure are must-see landmarks in this open-air museum.",
    img: "/Destinations/hampi-ruins.jpg",
    highlights: ["Virupaksha Temple", "Stone Chariot", "Vittala Temple Complex", "Elephant Stables"],
    bestTime: "November – February",
    distance: "380 km",
    location: "Hampi, Karnataka, India",
    seoKeyword: "Mangalore to Hampi taxi",
    lastModified: "2026-08-20",
    guideContent: "Stepping into Hampi is like stepping onto another planet. This UNESCO World Heritage site, once the affluent capital of the Vijayanagara Empire, is now a surreal, spellbinding landscape of colossal ochre boulders and majestic ruins. Exploring the ornate Virupaksha Temple, the intricate Stone Chariot, and the sprawling royal enclosures feels like unearthing a forgotten, mythical world.\n\nThe journey to Hampi is a longer expedition across the state, demanding exceptional travel comfort. Our Innova Crysta is heavily recommended for this route, providing a refined, fatigue-free ride for families and discerning travelers. If you're organizing a larger historical tour, our Force Traveller offers premium group travel without sacrificing personal space.\n\n*Practical Tip:* The best way to explore the ruins is early in the morning or late afternoon when the sun is gentler and the stones glow with a golden hue. Always carry comfortable walking shoes and plenty of water.",
  },
  {
    title: "Kukke Subramanya",
    slug: "kukke-subramanya",
    desc: "The famous pilgrimage destination nestled in the lush green Western Ghats.",
    longDesc:
      "Kukke Subramanya is a sacred temple town nestled deep in the Western Ghats, renowned for the Shri Subrahmanya Temple. The presiding deity, Lord Subramanya, is worshipped here in the form of Shesha (serpent god), making it a unique pilgrimage. Surrounded by thick forests and the Kumaradhara River, the journey itself is a spiritual experience.",
    img: "/Destinations/kukke-subramanya.jpg",
    badge: "Spiritual Getaway",
    highlights: ["Shri Subrahmanya Temple", "Kumaradhara River", "Western Ghats forest", "Sarpa Samskara ritual"],
    bestTime: "September – February",
    distance: "105 km",
    location: "Kukke Subramanya, Karnataka, India",
    seoKeyword: "Mangalore to Kukke Subramanya taxi",
    lastModified: "2026-08-20",
    guideContent: "Hidden deep within the emerald embrace of the Western Ghats, Kukke Subramanya is a sanctuary of profound spiritual power and natural beauty. The journey here winds through dense, misty forests and alongside the sacred Kumaradhara River, setting a contemplative tone long before you reach the revered Shri Subrahmanya Temple. The pristine environment and the devotion that permeates the air make it a truly transformative getaway.\n\nNavigating the winding Ghat roads requires both expertise and the right vehicle. Our premium sedans handle the curves with elegance, perfect for couples on a spiritual retreat. For families undertaking important rituals, our Innova Crysta offers unmatched stability and comfort on the hilly terrain.\n\n*Practical Tip:* If you are planning to perform specific poojas like the Sarpa Samskara, it requires a two-day commitment. Ensure you book your accommodations and rituals well in advance, and pack light woolens for the cool Ghat mornings.",
  },
  {
    title: "Malpe",
    slug: "malpe",
    desc: "Located just 7 km from Udupi, Malpe Beach is a serene coastal retreat combining natural beauty and adventure.",
    longDesc:
      "Malpe is a vibrant fishing harbour and beach destination near Udupi. The pristine Malpe Beach offers water sports, boat rides to the mysterious St. Mary's Island — a geological monument with unique hexagonal basalt rock formations declared a National Geological Monument. The sunsets here are spectacular.",
    img: "/Destinations/malpe.jpg",
    highlights: ["St. Mary's Island", "Water sports", "Malpe Harbour", "Hexagonal basalt rocks"],
    bestTime: "October – March",
    distance: "60 km",
    location: "Malpe, Karnataka, India",
    seoKeyword: "Mangalore to Malpe taxi",
    lastModified: "2026-08-20",
    guideContent: "Just a stone's throw from the cultural hub of Udupi, Malpe is a dynamic coastal haven that perfectly balances relaxation and adventure. Whether you are strolling along the golden sands, watching the vibrant activity at the fishing harbour, or taking a ferry to the remarkable basalt rock formations of St. Mary's Island, Malpe offers an invigorating escape.\n\nFor a quick, stylish coastal getaway from Mangalore, our premium sedans are the perfect fit for couples or solo travelers. If you are heading out for a fun-filled day at the beach with the whole family, the Innova Crysta provides ample space for beach gear and a comfortable ride back after a long day in the sun.\n\n*Practical Tip:* To visit St. Mary's Island, catch the first ferry of the day around 9:00 AM. You'll avoid the largest crowds and experience the unique geological formations in the best morning light.",
  },
  {
    title: "Chikmagalur Peaks",
    slug: "chikmagalur-peaks",
    desc: "High-altitude tea estates and the famous Mullayanagiri peak trek.",
    longDesc:
      "Chikmagalur, the birthplace of coffee in India, is a hill station nestled in the Baba Budan Giri range of the Western Ghats. Mullayanagiri is Karnataka's highest peak at 1,930 m. The region is dotted with sprawling coffee and tea estates, waterfalls like Hebbe Falls, and trekking trails through misty forests.",
    img: "/Destinations/chikmagalur-peaks.jpg",
    highlights: ["Mullayanagiri Peak", "Coffee estate tours", "Hebbe Falls", "Bhadra Wildlife Sanctuary"],
    bestTime: "September – March",
    distance: "220 km",
    location: "Chikmagalur, Karnataka, India",
    seoKeyword: "Mangalore to Chikmagalur taxi",
    lastModified: "2026-08-20",
    guideContent: "Chikmagalur is a verdant paradise where the air is eternally fragrant with the scent of fresh coffee and damp earth. Nestled in the Baba Budan Giri range, this high-altitude haven offers everything from serene plantation walks to the exhilarating trek up Mullayanagiri, Karnataka's highest peak. It is the ultimate retreat for those looking to disconnect and immerse themselves in raw, untamed nature.\n\nThe ascent into the hills calls for robust yet luxurious transport. Our Innova Crysta effortlessly navigates the steep, winding roads, ensuring a smooth journey for families and small groups. For larger groups of nature enthusiasts or corporate retreats, our Force Traveller provides a safe, powerful, and comfortable ride up the peaks.\n\n*Practical Tip:* A 4x4 vehicle is often required for the final stretch to certain peaks and remote waterfalls. Our drivers can help arrange local jeeps for these specific off-road adventures while your primary vehicle waits safely.",
  },
  {
    title: "Coorg Coffee Trails",
    slug: "coorg-coffee-trails",
    desc: "Visit Madikeri, Dubare Elephant Camp, and Namdroling Monastery.",
    longDesc:
      "Coorg, also known as Kodagu, is the Scotland of India — a misty hill district blanketed with coffee and spice plantations. The region is home to the Kodava community with a rich martial tradition. Raja's Seat viewpoint, Abbey Falls, Dubare Elephant Camp, and the golden-roofed Namdroling Tibetan Monastery make Coorg a diverse and rewarding destination.",
    img: "/Destinations/coorg-coffee-trails.jpg",
    highlights: ["Dubare Elephant Camp", "Namdroling Monastery", "Abbey Falls", "Coffee plantation stay"],
    bestTime: "October – March",
    distance: "250 km",
    location: "Coorg, Karnataka, India",
    seoKeyword: "Mangalore to Coorg taxi",
    lastModified: "2026-08-20",
    guideContent: "Affectionately known as the Scotland of India, Coorg is a mosaic of misty valleys, sprawling spice estates, and rich martial heritage. A journey here is a feast for the senses—from the majestic elephants at Dubare Camp to the thundering Abbey Falls and the serene, golden serenity of the Namdroling Tibetan Monastery. Coorg's distinct culture and culinary delights make it an endlessly fascinating destination.\n\nTraveling through Coorg's rolling hills is a pleasure in our premium fleet. Couples will appreciate the quiet luxury of our sedans, while families will find the Innova Crysta's spaciousness indispensable. For extended family vacations, our Force Traveller ensures everyone enjoys the scenic vistas together.\n\n*Practical Tip:* Coorg experiences heavy monsoons, which make the waterfalls spectacular but can limit outdoor activities. If you prefer trekking and clear views, plan your visit between October and March, and always pack an umbrella just in case.",
  },
  {
    title: "Udupi",
    slug: "udupi",
    desc: "Explore the Sri Krishna Temple, St. Mary's Island, and beautiful beach sunsets.",
    longDesc:
      "Udupi is a coastal city famous globally for its distinctive vegetarian cuisine — the Udupi thali. The Sri Krishna Math, established by philosopher-saint Madhvacharya in the 13th century, is the city's spiritual heart. The city also offers beautiful beaches, the Malpe harbour, and the natural wonder of St. Mary's Island nearby.",
    img: "/Destinations/udupi.jpg",
    highlights: ["Sri Krishna Temple", "Udupi cuisine", "Kaup Lighthouse", "Manipal Lake"],
    bestTime: "October – February",
    distance: "60 km",
    location: "Udupi, Karnataka, India",
    seoKeyword: "Mangalore to Udupi taxi",
    lastModified: "2026-08-20",
    guideContent: "Udupi is a city that nourishes both the soul and the palate. Famous globally for giving birth to the iconic Udupi cuisine, the city's heart beats around the historic Sri Krishna Math. Beyond its profound religious significance, Udupi surprises visitors with its stunning, pristine beaches and laid-back coastal charm, making it a perfectly balanced destination for devotion and relaxation.\n\nThe short, scenic drive up the coast from Mangalore is a breeze. Our premium sedans offer a swift, comfortable journey for couples seeking a day of temple visits and authentic coastal dining. Families will, as always, find the Innova Crysta to be the most relaxed way to travel along the highway.\n\n*Practical Tip:* When visiting the Sri Krishna Math, witness the enchanting evening chariot festival (Rathotsava) around the temple square. Afterward, treat yourself to an authentic, traditional meal at one of the legendary local eateries near the temple.",
  },
  {
    title: "All over Karnataka",
    slug: "all-over-karnataka",
    desc: "Tourist places in Karnataka spell allure and beauty. Some well-renowned, others left unappreciated.",
    longDesc:
      "Karnataka is a state of remarkable diversity — from the sun-drenched beaches of the coast to the ancient ruins of Hampi, from the royal palaces of Mysore to the serene temples of Sringeri and Horanadu deep in the Ghats. Our fleet can take you anywhere across this magnificent state with uncompromising comfort.",
    img: "/Destinations/all-over-karnataka.webp",
    highlights: ["Customised itinerary", "All Karnataka destinations", "Expert local drivers", "Door-to-door service"],
    bestTime: "Year-round",
    distance: "Custom",
    location: "Karnataka, India",
    seoKeyword: "Outstation taxi from Mangalore",
    lastModified: "2026-08-20",
    guideContent: "Karnataka is a state of breathtaking contrasts and boundless discoveries. From the sun-drenched, palm-fringed beaches of the Karavali coast to the ancient, mystical ruins of the Deccan, and the lush, mist-covered peaks of the Western Ghats, the possibilities are endless. Whether you are charting a multi-day heritage tour or a bespoke wildlife safari, the true luxury of exploring Karnataka lies in the journey itself.\n\nFor customized, long-duration itineraries spanning the state, comfort and reliability are non-negotiable. Our Innova Crysta is the ultimate choice for extensive touring, offering unparalleled endurance and passenger comfort. For large group excursions or destination weddings across the state, our premium Force Traveller ensures a unified, high-end travel experience.\n\n*Practical Tip:* When planning a cross-state itinerary, consult with our expert team to balance your travel days. We can recommend optimal routes that include scenic stopovers, ensuring you spend less time in transit and more time exploring.",
  },
];

export function slugToDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getRelatedDestinations(currentSlug: string): Destination[] {
  const clusters = [
    ["kateel-mangalore", "dharmasthala", "kukke-subramanya", "murudeshwara"],
    ["chikmagalur-peaks", "coorg-coffee-trails"],
    ["hampi-ruins", "mysore-palace"],
    ["malpe", "udupi", "goa-circuit"],
  ];
  const cluster = clusters.find(c => c.includes(currentSlug));
  if (!cluster) {
    // Fallback: return 3 other random destinations
    return destinations.filter(d => d.slug !== currentSlug).slice(0, 3);
  }
  const relatedSlugs = cluster.filter(s => s !== currentSlug);
  return relatedSlugs.map(slug => slugToDestination(slug)).filter((d): d is Destination => d !== undefined);
}

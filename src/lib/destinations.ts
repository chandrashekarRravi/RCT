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
};

export const destinations: Destination[] = [
  {
    title: "Kateel, Mangalore",
    slug: "kateel-mangalore",
    desc: "The holiest temple town on the banks of river Nandini. A peaceful spiritual getaway.",
    longDesc:
      "Kateel is a renowned pilgrimage centre situated on a scenic island formed by the Nandini River. The Shri Durgaparameshwari Temple here is one of the most visited shrines in coastal Karnataka, drawing thousands of devotees throughout the year. The temple's architecture and the river setting make it a uniquely serene destination.",
    img: "/Destinations/Kateel%2C%20Mangalore.jpg",
    badge: "Spiritual Getaway",
    highlights: ["Shri Durgaparameshwari Temple", "Nandini River boat rides", "Island setting", "Traditional rituals"],
    bestTime: "October – February",
    distance: "35 km",
  },
  {
    title: "Dharmasthala",
    slug: "dharmasthala",
    desc: "A renowned temple town with deep cultural and spiritual significance along the Netravati river.",
    longDesc:
      "Dharmasthala is a prominent pilgrimage centre famous for the Shri Manjunatha Swamy Temple. Unique for its tradition of secular religious harmony, the temple is administered by a Jain family yet houses a Shaiva deity. The town also boasts the Bahubali statue and the Shri Kshethra Dharmasthala Rural Development Project, which has transformed thousands of lives.",
    img: "/Destinations/Dharmasthala.webp",
    badge: "Spiritual Getaway",
    highlights: ["Shri Manjunatha Temple", "Bahubali Statue", "Car Museum", "Annasantharpane (free meals)"],
    bestTime: "October – March",
    distance: "75 km",
  },
  {
    title: "Murudeshwara",
    slug: "murudeshwara",
    desc: "Contains the world's third tallest Shiva statue, as well as the Murudeshwara Temple on the coast of the Arabian Sea.",
    longDesc:
      "Murudeshwara is a coastal town in Uttara Kannada district, famous for its massive Shiva statue standing 123 feet tall overlooking the Arabian Sea. The Murudeshwara Temple, dedicated to Lord Shiva, is perched on a hillock and the gopura rises 20 floors. The beach, sea views, and the towering statue make this a visually spectacular destination.",
    img: "/Destinations/Murudeshwara.jpg",
    badge: "Spiritual Getaway",
    highlights: ["123-ft Shiva Statue", "Murudeshwara Temple", "Arabian Sea views", "Murudeshwara Beach"],
    bestTime: "October – February",
    distance: "165 km",
  },
  {
    title: "The Goa Circuit",
    slug: "goa-circuit",
    desc: "Coastal drive through Karwar and Gokarna into the heart of Goa.",
    longDesc:
      "The Goa Circuit is a breathtaking coastal road trip that takes you through the lush NH-66 highway, passing pristine beaches at Karwar, the sacred Om Beach at Gokarna, and onward into Goa's vibrant coast. The drive itself is an experience — azure sea on one side, Western Ghats on the other.",
    img: "/Destinations/The%20Goa%20Circuit.jpg",
    highlights: ["Karwar Beach", "Gokarna Om Beach", "Dudhsagar Waterfalls", "Panjim Old City"],
    bestTime: "November – February",
    distance: "350 km",
  },
  {
    title: "Mysore Palace",
    slug: "mysore-palace",
    desc: "Experience the royal heritage, Chamundi Hills, and the vibrant Devaraja Market.",
    longDesc:
      "Mysore, the City of Palaces, is one of India's most visited heritage destinations. The Mysore Palace, officially known as Amba Vilas, is a stunning Indo-Saracenic structure that glows with 100,000 lights on weekends and during Dasara. The city offers a rich blend of royal history, fragrant sandalwood markets, and the iconic Chamundi Hills.",
    img: "/Destinations/Mysore%20Palace.jpg",
    highlights: ["Mysore Palace (illuminated)", "Chamundi Hills", "Devaraja Market", "Brindavan Gardens"],
    bestTime: "October – February (Dasara in Oct))",
    distance: "290 km",
  },
  {
    title: "Hampi Ruins",
    slug: "hampi-ruins",
    desc: "A UNESCO World Heritage site featuring the majestic Virupaksha Temple and stone chariot.",
    longDesc:
      "Hampi, the capital of the Vijayanagara Empire, is a surreal landscape of giant boulders and ruins spread over 41 sq km. A UNESCO World Heritage Site, it offers over 1,600 surviving remains of the once-magnificent city. The Virupaksha Temple, the Stone Chariot, and the Royal Enclosure are must-see landmarks in this open-air museum.",
    img: "/Destinations/Hampi%20Ruins.jpg",
    highlights: ["Virupaksha Temple", "Stone Chariot", "Vittala Temple Complex", "Elephant Stables"],
    bestTime: "November – February",
    distance: "380 km",
  },
  {
    title: "Kukke Subramanya",
    slug: "kukke-subramanya",
    desc: "The famous pilgrimage destination nestled in the lush green Western Ghats.",
    longDesc:
      "Kukke Subramanya is a sacred temple town nestled deep in the Western Ghats, renowned for the Shri Subrahmanya Temple. The presiding deity, Lord Subramanya, is worshipped here in the form of Shesha (serpent god), making it a unique pilgrimage. Surrounded by thick forests and the Kumaradhara River, the journey itself is a spiritual experience.",
    img: "/Destinations/Kukke%20Subramanya.jpg",
    badge: "Spiritual Getaway",
    highlights: ["Shri Subrahmanya Temple", "Kumaradhara River", "Western Ghats forest", "Sarpa Samskara ritual"],
    bestTime: "September – February",
    distance: "105 km",
  },
  {
    title: "Malpe",
    slug: "malpe",
    desc: "Located just 7 km from Udupi, Malpe Beach is a serene coastal retreat combining natural beauty and adventure.",
    longDesc:
      "Malpe is a vibrant fishing harbour and beach destination near Udupi. The pristine Malpe Beach offers water sports, boat rides to the mysterious St. Mary's Island — a geological monument with unique hexagonal basalt rock formations declared a National Geological Monument. The sunsets here are spectacular.",
    img: "/Destinations/Malpe.jpg",
    highlights: ["St. Mary's Island", "Water sports", "Malpe Harbour", "Hexagonal basalt rocks"],
    bestTime: "October – March",
    distance: "60 km",
  },
  {
    title: "Chikmagalur Peaks",
    slug: "chikmagalur-peaks",
    desc: "High-altitude tea estates and the famous Mullayanagiri peak trek.",
    longDesc:
      "Chikmagalur, the birthplace of coffee in India, is a hill station nestled in the Baba Budan Giri range of the Western Ghats. Mullayanagiri is Karnataka's highest peak at 1,930 m. The region is dotted with sprawling coffee and tea estates, waterfalls like Hebbe Falls, and trekking trails through misty forests.",
    img: "/Destinations/Chikmagalur%20Peaks.jpg",
    highlights: ["Mullayanagiri Peak", "Coffee estate tours", "Hebbe Falls", "Bhadra Wildlife Sanctuary"],
    bestTime: "September – March",
    distance: "220 km",
  },
  {
    title: "Coorg Coffee Trails",
    slug: "coorg-coffee-trails",
    desc: "Visit Madikeri, Dubare Elephant Camp, and Namdroling Monastery.",
    longDesc:
      "Coorg, also known as Kodagu, is the Scotland of India — a misty hill district blanketed with coffee and spice plantations. The region is home to the Kodava community with a rich martial tradition. Raja's Seat viewpoint, Abbey Falls, Dubare Elephant Camp, and the golden-roofed Namdroling Tibetan Monastery make Coorg a diverse and rewarding destination.",
    img: "/Destinations/Coorg%20Coffee%20Trails.jpg",
    highlights: ["Dubare Elephant Camp", "Namdroling Monastery", "Abbey Falls", "Coffee plantation stay"],
    bestTime: "October – March",
    distance: "250 km",
  },
  {
    title: "Udupi",
    slug: "udupi",
    desc: "Explore the Sri Krishna Temple, St. Mary's Island, and beautiful beach sunsets.",
    longDesc:
      "Udupi is a coastal city famous globally for its distinctive vegetarian cuisine — the Udupi thali. The Sri Krishna Math, established by philosopher-saint Madhvacharya in the 13th century, is the city's spiritual heart. The city also offers beautiful beaches, the Malpe harbour, and the natural wonder of St. Mary's Island nearby.",
    img: "/Destinations/Udupi.jpg",
    highlights: ["Sri Krishna Temple", "Udupi cuisine", "Kaup Lighthouse", "Manipal Lake"],
    bestTime: "October – February",
    distance: "60 km",
  },
  {
    title: "All over Karnataka",
    slug: "all-over-karnataka",
    desc: "Tourist places in Karnataka spell allure and beauty. Some well-renowned, others left unappreciated.",
    longDesc:
      "Karnataka is a state of remarkable diversity — from the sun-drenched beaches of the coast to the ancient ruins of Hampi, from the royal palaces of Mysore to the serene temples of Sringeri and Horanadu deep in the Ghats. Our fleet can take you anywhere across this magnificent state with uncompromising comfort.",
    img: "/Destinations/All%20over%20Karnataka.webp",
    highlights: ["Customised itinerary", "All Karnataka destinations", "Expert local drivers", "Door-to-door service"],
    bestTime: "Year-round",
    distance: "Custom",
  },
];

export function slugToDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

// --- 1. SETUP PRISMA CLIENT WITH ADAPTER ---
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("Error: DATABASE_URL is not defined in .env");
  process.exit(1);
}

// Create the pool and adapter
const pool = new Pool({
  connectionString,
  ssl: connectionString.includes("localhost") ? false : true,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// --- DATA DEFINITIONS ---

const noticesData = [
  {
    title: "New Course Structure of BCA 2025 Batch",
    date: new Date("2025-11-22"),
    category: "Academic",
    description:
      "The final course for the Spring 2025 semester has been published. Please check for your update",
    mediaType: "pdf",
    mediaUrl:
      "https://portal.tu.edu.np/downloads/BCA_Syllabus-compressed_compre_2024_01_30_18_33_22.pdf",
    accent: "bg-rose-600",
  },
  {
    title: "Udhauli Festival / Yomari punhe Holiday",
    date: new Date("2025-12-04"),
    category: "Holiday",
    description: "The campus will remain closed on December 4th.",
    mediaType: "image",
    mediaUrl: "/bida.png",
    accent: "bg-amber-500",
  },
];

// 1. The Featured Post Data
const featuredPostData = {
  title: "The Renaissance of Analog: Why Print Matters in a Digital Age",
  excerpt:
    "As digital saturation reaches its peak, designers and consumers alike are returning to the tactile permanence of paper. We explore the new wave of independent publishing.",
  author: "Elena Rossi",
  date: new Date("2025-10-24"),
  readTime: "8 min read",
  category: "Culture",
  image:
    "https://images.unsplash.com/photo-1507842217121-9e93a586b7b0?q=80&w=2071&auto=format&fit=crop",
  accent: "bg-orange-500",
  featured: true,
  trending: false,
};

// 2. The Standard Posts
const postsData = [
  {
    title: "EU Proposes New AI Regulations to Protect Privacy",
    excerpt:
      "The European Commission has introduced a stricter regulatory framework for artificial intelligence to safeguard user data and prevent algorithmic bias. Experts welcome the move but warn of innovation slowdowns.",
    author: "Marina Schmidt",
    date: new Date("2025-11-18"),
    readTime: "7 min read",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1581091012184-6a18814b2ed4?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
  {
    title: "Global Markets Rally on Green Infrastructure Investment",
    excerpt:
      "Stock markets across Europe and Asia surged today after a series of green infrastructure bonds were announced, signaling a strong push for sustainable development.",
    author: "David Huang",
    date: new Date("2025-11-17"),
    readTime: "6 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1567428482350-9da43b2c8cb2?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
  {
    title: "Rooftop Farms: The New Urban Revolution",
    excerpt:
      "Cities are transforming unused rooftops into verdant farms, providing fresh produce locally while reducing heat island effects and improving air quality.",
    author: "Leila Ahmed",
    date: new Date("2025-11-15"),
    readTime: "8 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1606813900114-046b150a6ddf?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
  {
    title: "Tokyo’s New Micro-Apartments Redefine Minimal Living",
    excerpt:
      "Architects in Tokyo have unveiled micro-apartments that use modular furniture and smart home design to maximize space without compromising style.",
    author: "Naoki Tanaka",
    date: new Date("2025-11-12"),
    readTime: "5 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1586023492122-2b15c7d604df?q=80&w=2000&auto=format&fit=crop",
    trending: false,
  },
  {
    title: "Virtual Concerts Surge as Artists Go Digital-Only",
    excerpt:
      "In response to shifting consumer habits, more artists are skipping physical venues and opting for high-production virtual shows that reach global audiences instantly.",
    author: "Sofia Martinez",
    date: new Date("2025-11-11"),
    readTime: "6 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000&auto=format&fit=crop",
    trending: false,
  },
  {
    title: "Breakthrough in Cancer Research Using Nanotechnology",
    excerpt:
      "A new nanotech-based therapy shows promise in early trials for targeting cancer cells more precisely, potentially reducing harmful side effects of traditional chemotherapy.",
    author: "Rajesh Patel",
    date: new Date("2025-11-08"),
    readTime: "9 min read",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1580281657529-7c1db1fdf6d0?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
  {
    title: "Designers Push Back Against ‘Ultra-Flat’ UI Trend",
    excerpt:
      "A growing number of designers argue that ultra-flat UI strips away usability — they advocate for depth, shadows, and subtle texture in modern interfaces.",
    author: "Elena Rossi",
    date: new Date("2025-11-05"),
    readTime: "5 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1581091012184-6a18814b2ed4?q=80&w=2000&auto=format&fit=crop",
    trending: false,
  },
  {
    title: "Quantum Computing Reaches a New Milestone",
    excerpt:
      "Researchers have achieved stable quantum entanglement on a 256-qubit system, a landmark that could dramatically accelerate problem-solving in cryptography and simulations.",
    author: "Catherine Liu",
    date: new Date("2025-11-02"),
    readTime: "8 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1581093588401-6e49d4e9e3f4?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
  {
    title: "Remote Work Is Reshaping Suburban Real Estate",
    excerpt:
      "As more companies adopt permanent remote-work policies, suburban housing markets are booming — and home design is following suit with built-in offices and studio spaces.",
    author: "Mark Jensen",
    date: new Date("2025-10-30"),
    readTime: "6 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
  {
    title: "Major City Imposes Carbon Tax to Fight Air Pollution",
    excerpt:
      "In a bold policy move, the city of São Paulo has announced a high carbon tax on industrial emissions, aiming to reduce smog and accelerate green energy shifts.",
    author: "Ana Costa",
    date: new Date("2025-10-28"),
    readTime: "7 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
    trending: false,
  },
  {
    title: "How Cultural Heritage Sites Are Being Digitally Preserved",
    excerpt:
      "Using 3D scanning and AR, organizations are creating immersive digital replicas of endangered monuments — preserving them for future generations and global audiences.",
    author: "Leila Ahmed",
    date: new Date("2025-10-25"),
    readTime: "8 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
  {
    title: "Startup Develops Biodegradable Packaging From Seaweed",
    excerpt:
      "A biotech startup has created seaweed-based plastic alternatives. The material decomposes in weeks and could dramatically cut oceanic plastic waste.",
    author: "Mia Wong",
    date: new Date("2025-10-22"),
    readTime: "7 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1581995795211-1db86b61ae4e?q=80&w=2000&auto=format&fit=crop",
    trending: true,
  },
];

const eventsData = [
  {
    title: "BCA Semester kick-off",
    date: "2025-12-08",
    category: "Admissions",
    description:
      "2025 batch of students begin their journey at Yeti International College with an orientation program and campus tour.",
    location: "Main Quad",
    time: "07:00 AM",
    accent: "bg-[#FF4F00]",
    textAccent: "text-[#FF4F00]",
  },
  {
    title: "Orientation day for New Students",
    date: "2025-12-16",
    category: "Academic",
    description:
      "A gathering of minds exploring the future of sustainable architecture. Keynote speakers from Zurich and Tokyo.",
    location: "Auditorium A",
    time: "01:00 PM",
    accent: "bg-[#0057FF]",
    textAccent: "text-[#0057FF]",
  },
];

const galleryItemsData = [
  {
    id: 1,
    type: "video",
    src: "/gallery/cake_mixing/file1.mp4",
    poster: "/gallery/cake_mixing/file8.jpeg",
    title: "Cake Mixing Process",
    category: "Process",
    year: "2024",
    width: 960,
    height: 1280,
  },
  {
    id: 4,
    type: "video",
    src: "/gallery/cake_mixing/file2.mp4",
    poster: "/gallery/cake_mixing/file2.png",
    title: "Cake Mixing Demo",
    category: "Events",
    year: "2024",
    width: 720,
    height: 1280,
  },
  {
    id: 7,
    type: "video",
    src: "/gallery/cake_mixing/file3.mp4",
    poster: "/gallery/cake_mixing/file3.png",
    title: "Cake Mixing Techniques",
    category: "Events",
    year: "2024",
    width: 1080,
    height: 1920,
  },
  {
    id: 8,
    type: "image",
    src: "/gallery/cake_mixing/file11.jpeg",
    title: "Mixing Equipment",
    category: "Process",
    year: "2024",
    width: 1200,
    height: 1200,
  },
  {
    id: 9,
    type: "image",
    src: "/gallery/cake_mixing/file12.jpeg",
    title: "Ingredient Preparation",
    category: "Architecture",
    year: "2023",
    width: 874,
    height: 1280,
  },
  {
    id: 10,
    type: "image",
    src: "/gallery/cake_mixing/file13.jpeg",
    title: "Batter Consistency",
    category: "Architecture",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 11,
    type: "image",
    src: "/gallery/cake_mixing/file14.jpeg",
    title: "Mixing Station",
    category: "Architecture",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 12,
    type: "image",
    src: "/gallery/cake_mixing/file15.jpeg",
    title: "Texture Detail",
    category: "Architecture",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 13,
    type: "image",
    src: "/gallery/cake_mixing/file16.jpeg",
    title: "Quality Control",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 21,
    type: "image",
    src: "/gallery/cake_mixing/file31.jpeg",
    title: "Mixing Process",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 22,
    type: "image",
    src: "/gallery/cake_mixing/file32.jpeg",
    title: "Final Blend",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 23,
    type: "image",
    src: "/gallery/cake_mixing/file33.jpeg",
    title: "Ready for Baking",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 24,
    type: "image",
    src: "/gallery/cake_mixing/file34.jpeg",
    title: "Cake Mix Complete",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 14,
    type: "image",
    src: "/gallery/cake_mixing/file35.jpeg",
    title: "Batch Preparation",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 15,
    type: "image",
    src: "/gallery/cake_mixing/file36.jpeg",
    title: "Professional Setup",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 16,
    type: "image",
    src: "/gallery/cake_mixing/file37.jpeg",
    title: "Mixing Details",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 17,
    type: "image",
    src: "/gallery/cake_mixing/file20.jpeg",
    title: "Ingredient Mix",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 18,
    type: "image",
    src: "/gallery/cake_mixing/file21.jpeg",
    title: "Homogenized Blend",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 19,
    type: "image",
    src: "/gallery/cake_mixing/file22.jpeg",
    title: "Smooth Mixture",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 20,
    type: "image",
    src: "/gallery/cake_mixing/file23.jpeg",
    title: "Production Line",
    category: "Process",
    year: "2024",
    width: 1000,
    height: 1500,
  },
  {
    id: 25,
    type: "image",
    src: "/gallery/1.jpeg",
    title: "Urban Verticality",
    category: "Architecture",
    year: "2023",
    width: 1000,
    height: 1500,
  },
  {
    id: 26,
    type: "image",
    src: "/gallery/2.jpeg",
    title: "Campus Life",
    category: "Campus",
    year: "2024",
    width: 1280,
    height: 1440,
  },
  {
    id: 27,
    type: "image",
    src: "/gallery/3.jpeg",
    title: "Ceramics Workshop",
    category: "Process",
    year: "2023",
    width: 853,
    height: 1280,
  },
  {
    id: 28,
    type: "image",
    src: "/gallery/cake_mixing/file38.jpeg",
    title: "Abstract Objects",
    category: "Architecture",
    year: "2022",
    width: 1600,
    height: 900,
  },
];

async function main() {
  console.log("Start seeding...");

  try {
    // 1. CLEAR EXISTING DATA
    // We add 'await' to ensure tables are cleared before refilling
    await prisma.galleryItem.deleteMany();
    await prisma.event.deleteMany();
    await prisma.post.deleteMany();
    await prisma.notice.deleteMany();

    // 2. SEED NOTICES (Fixed the 'pris111ma' typo here)
    for (const notice of noticesData) {
      await prisma.notice.create({ data: notice });
    }

    // 3. SEED FEATURED POST (Added this step!)
    await prisma.post.create({ data: featuredPostData });

    // 4. SEED STANDARD POSTS
    for (const post of postsData) {
      await prisma.post.create({
        data: { ...post, date: new Date(post.date) },
      });
    }

    // 5. SEED EVENTS
    for (const event of eventsData) {
      await prisma.event.create({
        data: { ...event, date: new Date(event.date) },
      });
    }

    // 6. SEED GALLERY
    for (const item of galleryItemsData) {
      await prisma.galleryItem.create({ data: item });
    }

    console.log("Seeding finished.");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();

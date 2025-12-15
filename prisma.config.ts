// import { PrismaClient, Prisma } from "prisma-client-js";
import { PrismaClient, Prisma } from "./app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

// --- Prisma Adapter Setup ---
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ adapter });

// --- USER SEED DATA ---
const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
  },
];

// --- BLOG SEED DATA (from blog.ts) ---

// Featured Post
const featuredPost = {
  title: "The Renaissance of Analog: Why Print Matters in a Digital Age",
  excerpt:
    "As digital saturation reaches its peak, designers and consumers alike are returning to the tactile permanence of paper. We explore the new wave of independent publishing.",
  author: "Elena Rossi",
  date: new Date("2025-10-24"),
  readTime: "8 min read",
  category: "Culture",
  image:
    "https://images.unsplash.com/photo-1507842217121-9e93a586b7b0?q=80&w=2071&auto=format&fit=crop",
};

// Posts List
const posts = [
  {
    id: 1,
    title: "EU Proposes New AI Regulations to Protect Privacy",
    excerpt:
      "The European Commission has introduced a stricter regulatory framework...",
    author: "Marina Schmidt",
    date: new Date("2025-11-18"),
    readTime: "7 min read",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1581091012184-6a18814b2ed4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Global Markets Rally on Green Infrastructure Investment",
    excerpt:
      "Stock markets across Europe and Asia surged today after new green bonds...",
    author: "David Huang",
    date: new Date("2025-11-17"),
    readTime: "6 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1567428482350-9da43b2c8cb2?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Rooftop Farms: The New Urban Revolution",
    excerpt:
      "Cities are transforming unused rooftops into green food-producing spaces...",
    author: "Leila Ahmed",
    date: new Date("2025-11-15"),
    readTime: "8 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1606813900114-046b150a6ddf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Tokyo’s New Micro-Apartments Redefine Minimal Living",
    excerpt:
      "Architects in Tokyo have unveiled ultra-efficient micro-living spaces...",
    author: "Naoki Tanaka",
    date: new Date("2025-11-12"),
    readTime: "5 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1586023492122-2b15c7d604df?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Virtual Concerts Surge as Artists Go Digital-Only",
    excerpt:
      "Artists worldwide are shifting to virtual concerts with massive audiences...",
    author: "Sofia Martinez",
    date: new Date("2025-11-11"),
    readTime: "6 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Breakthrough in Cancer Research Using Nanotechnology",
    excerpt:
      "A new nano-therapy targets cancer with unprecedented precision...",
    author: "Rajesh Patel",
    date: new Date("2025-11-08"),
    readTime: "9 min read",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1580281657529-7c1db1fdf6d0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Designers Push Back Against ‘Ultra-Flat’ UI Trend",
    excerpt:
      "Designers argue that ultra-flat UI harms usability — textures are returning...",
    author: "Elena Rossi",
    date: new Date("2025-11-05"),
    readTime: "5 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1581091012184-6a18814b2ed4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Quantum Computing Reaches a New Milestone",
    excerpt:
      "A stable 256-qubit entanglement achieved — a huge step for cryptography...",
    author: "Catherine Liu",
    date: new Date("2025-11-02"),
    readTime: "8 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1581093588401-6e49d4e9e3f4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Remote Work Is Reshaping Suburban Real Estate",
    excerpt:
      "Remote work trends push suburban housing demand to new heights...",
    author: "Mark Jensen",
    date: new Date("2025-10-30"),
    readTime: "6 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Major City Imposes Carbon Tax to Fight Air Pollution",
    excerpt:
      "São Paulo enforces a bold carbon tax to clean up industrial emissions...",
    author: "Ana Costa",
    date: new Date("2025-10-28"),
    readTime: "7 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "How Cultural Heritage Sites Are Being Digitally Preserved",
    excerpt:
      "3D scanning & AR preserve endangered cultural sites for the future...",
    author: "Leila Ahmed",
    date: new Date("2025-10-25"),
    readTime: "8 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Startup Develops Biodegradable Packaging From Seaweed",
    excerpt:
      "New seaweed-based materials decompose in weeks — a plastic alternative...",
    author: "Mia Wong",
    date: new Date("2025-10-22"),
    readTime: "7 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1581995795211-1db86b61ae4e?q=80&w=2000&auto=format&fit=crop",
  },
];

// --- EVENT SEED DATA ---
const events = [
  {
    title: "BCA Semester kick-off",
    date: new Date("2025-12-08"),
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
    date: new Date("2025-12-16"),
    category: "Academic",
    description:
      "A gathering of minds exploring the future of sustainable architecture. Keynote speakers from Zurich and Tokyo.",
    location: "Auditorium A",
    time: "01:00 PM",
    accent: "bg-[#0057FF]",
    textAccent: "text-[#0057FF]",
  },
];

// --- MAIN SEED FUNCTION ---
export async function main() {
  console.log("🌱 Seeding database...");

  // Seed Users
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  // Seed Featured Blog Post
  await prisma.blogs.create({
    data: featuredPost,
  });

  // Seed All Blog Posts
  for (const b of posts) {
    await prisma.blogs.create({ data: b });
  }

  // Seed Events
  for (const e of events) {
    await prisma.events.create({ data: e });
  }

  console.log("✅ Seeding complete!");
}

// Run main()
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

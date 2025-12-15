export const featuredPost = {
  id: 0,
  title: "The Renaissance of Analog: Why Print Matters in a Digital Age",
  excerpt:
    "As digital saturation reaches its peak, designers and consumers alike are returning to the tactile permanence of paper. We explore the new wave of independent publishing.",
  author: "Elena Rossi",
  date: "Oct 24, 2025",
  readTime: "8 min read",
  category: "Culture",
  image:
    "https://images.unsplash.com/photo-1507842217121-9e93a586b7b0?q=80&w=2071&auto=format&fit=crop",
  accent: "bg-orange-500",
};
// /data/blog.ts

export const categories = [
  "All",
  "Design",
  "Technology",
  "Culture",
  "Architecture",
  "Sustainability",
  "Business",
  "AI",
  "World",
  "Health",
];

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "EU Proposes New AI Regulations to Protect Privacy",
    excerpt:
      "The European Commission has introduced a stricter regulatory framework for artificial intelligence to safeguard user data and prevent algorithmic bias. Experts welcome the move but warn of innovation slowdowns.",
    author: "Marina Schmidt",
    date: "Nov 18, 2025",
    readTime: "7 min read",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1581091012184-6a18814b2ed4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Global Markets Rally on Green Infrastructure Investment",
    excerpt:
      "Stock markets across Europe and Asia surged today after a series of green infrastructure bonds were announced, signaling a strong push for sustainable development.",
    author: "David Huang",
    date: "Nov 17, 2025",
    readTime: "6 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1567428482350-9da43b2c8cb2?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Rooftop Farms: The New Urban Revolution",
    excerpt:
      "Cities are transforming unused rooftops into verdant farms, providing fresh produce locally while reducing heat island effects and improving air quality.",
    author: "Leila Ahmed",
    date: "Nov 15, 2025",
    readTime: "8 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1606813900114-046b150a6ddf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Tokyo’s New Micro-Apartments Redefine Minimal Living",
    excerpt:
      "Architects in Tokyo have unveiled micro-apartments that use modular furniture and smart home design to maximize space without compromising style.",
    author: "Naoki Tanaka",
    date: "Nov 12, 2025",
    readTime: "5 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1586023492122-2b15c7d604df?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Virtual Concerts Surge as Artists Go Digital-Only",
    excerpt:
      "In response to shifting consumer habits, more artists are skipping physical venues and opting for high-production virtual shows that reach global audiences instantly.",
    author: "Sofia Martinez",
    date: "Nov 11, 2025",
    readTime: "6 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Breakthrough in Cancer Research Using Nanotechnology",
    excerpt:
      "A new nanotech-based therapy shows promise in early trials for targeting cancer cells more precisely, potentially reducing harmful side effects of traditional chemotherapy.",
    author: "Rajesh Patel",
    date: "Nov 08, 2025",
    readTime: "9 min read",
    category: "Health",
    image:
      "https://images.unsplash.com/photo-1580281657529-7c1db1fdf6d0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Designers Push Back Against ‘Ultra-Flat’ UI Trend",
    excerpt:
      "A growing number of designers argue that ultra-flat UI strips away usability — they advocate for depth, shadows, and subtle texture in modern interfaces.",
    author: "Elena Rossi",
    date: "Nov 05, 2025",
    readTime: "5 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1581091012184-6a18814b2ed4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Quantum Computing Reaches a New Milestone",
    excerpt:
      "Researchers have achieved stable quantum entanglement on a 256-qubit system, a landmark that could dramatically accelerate problem-solving in cryptography and simulations.",
    author: "Catherine Liu",
    date: "Nov 02, 2025",
    readTime: "8 min read",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1581093588401-6e49d4e9e3f4?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Remote Work Is Reshaping Suburban Real Estate",
    excerpt:
      "As more companies adopt permanent remote-work policies, suburban housing markets are booming — and home design is following suit with built-in offices and studio spaces.",
    author: "Mark Jensen",
    date: "Oct 30, 2025",
    readTime: "6 min read",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Major City Imposes Carbon Tax to Fight Air Pollution",
    excerpt:
      "In a bold policy move, the city of São Paulo has announced a high carbon tax on industrial emissions, aiming to reduce smog and accelerate green energy shifts.",
    author: "Ana Costa",
    date: "Oct 28, 2025",
    readTime: "7 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "How Cultural Heritage Sites Are Being Digitally Preserved",
    excerpt:
      "Using 3D scanning and AR, organizations are creating immersive digital replicas of endangered monuments — preserving them for future generations and global audiences.",
    author: "Leila Ahmed",
    date: "Oct 25, 2025",
    readTime: "8 min read",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Startup Develops Biodegradable Packaging From Seaweed",
    excerpt:
      "A biotech startup has created seaweed-based plastic alternatives. The material decomposes in weeks and could dramatically cut oceanic plastic waste.",
    author: "Mia Wong",
    date: "Oct 22, 2025",
    readTime: "7 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1581995795211-1db86b61ae4e?q=80&w=2000&auto=format&fit=crop",
  },
];

export const trending = [
  { id: 1, title: "EU’s Latest AI Policy Sparks Debate" },
  { id: 2, title: "Quantum Computing’s Next Frontier" },
  { id: 3, title: "Green Bonds Hit Record High" },
  { id: 4, title: "Suburb Home Prices Soar With Remote Work" },
  { id: 5, title: "Nanotech Cancer Therapy Breakthrough" },
  { id: 6, title: "Digital Preservation of Heritage Sites" },
  { id: 7, title: "Biodegradable Packaging Revolution" },
  { id: 8, title: "Rooftop Farming Scales Up in Cities" },
];

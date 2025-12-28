// app/gallery/page.tsx
import { prisma } from "@/lib/prisma";
import SwissGallery from "./gallery-client"; // Importing the client component below

// Define the shape of data we expect from DB to match UI types
interface GalleryItem {
  id: number;
  type: string; // Prisma returns string, UI expects "video" | "image"
  src: string;
  poster: string | null;
  title: string;
  category: string;
  year: string;
  width: number;
  height: number;
}

export const dynamic = "force-dynamic"; // Ensure fresh data on every request (optional)

export default async function GalleryPage() {
  // 1. Fetch data from Database
  const rawItems = await prisma.galleryItem.findMany({
    orderBy: {
      id: "desc", // Latest items first
    },
  });

  // 2. Transform/Validate data if necessary to match Client Types
  // (Casting here assumes your seeded data matches your UI Enum strictly)
  const items = rawItems.map((item) => ({
    ...item,
    type: item.type as "video" | "image",
    category: item.category,
    poster: item.poster || undefined, // Handle null vs undefined
  }));

  // 3. Pass data to Client Component
  return <SwissGallery initialItems={items} />;
}

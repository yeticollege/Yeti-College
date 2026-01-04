import { prisma } from "@/lib/prisma";
import SwissGallery from "./gallery-client";

// This helps Next.js not cache the data too aggressively
export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  console.log("Fetching gallery items...");

  // 1. Fetch data from Database
  const rawItems = await prisma.galleryItem.findMany({
    orderBy: {
      id: "desc",
    },
  });

  console.log(`Found ${rawItems.length} items`);

  // 2. Transform data for the Client
  const items = rawItems.map((item) => ({
    id: item.id,

    // --- CRITICAL FIX HERE ---
    // The DB calls it 'imageUrl', but your UI calls it 'src'.
    src: item.imageUrl,
    // ------------------------

    // Handle the rest
    type: (item.type as "video" | "image") || "image",
    poster: item.poster || undefined,
    title: item.title,
    category: item.category || "All",
    year: item.year || "2024",
    // Ensure we have numbers for width/height (defaults provided just in case)
    width: item.width || 1000,
    height: item.height || 1000,
  }));

  // 3. Render
  return <SwissGallery initialItems={items} />;
}

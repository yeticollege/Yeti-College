import { prisma } from "@/lib/prisma";
import NoticesClient, { Notice } from "./notices-client";

export const dynamic = "force-dynamic"; // Ensures fresh data

export default async function NoticesPage() {
  // 1. Fetch data from DB
  const rawNotices = await prisma.notice.findMany({
    orderBy: {
      date: "desc",
    },
  });

  // 2. Transform data to match UI types
  const notices: Notice[] = rawNotices.map((notice) => ({
    id: notice.id,
    title: notice.title,
    date: notice.date.toISOString().split("T")[0], // Convert Date to YYYY-MM-DD
    category: notice.category as Notice["category"],
    description: notice.description,
    mediaType: notice.mediaType as Notice["mediaType"],
    mediaUrl: notice.mediaUrl || undefined,
    accent: notice.accent || "bg-zinc-600",
  }));

  // 3. Pass data to the Client Component
  return <NoticesClient initialNotices={notices} />;
}

// pages/events.tsx (or wherever this file is)
import EventsClient from "./events-client";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; // Ensures fresh data

// --- Types ---
export interface Event {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  location: string;
  time: string;
  accent: string;
  textAccent: string;
}

// --- Fetch Function ---
export async function getEvents(): Promise<Event[]> {
  const rawEvents = await prisma.event.findMany({
    orderBy: {
      date: "asc",
    },
  });

  return rawEvents.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date.toISOString().split("T")[0],
    category: event.category,
    description: event.description,
    location: event.location,
    time: event.time,
    accent: event.accent,
    textAccent: event.textAccent,
  }));
}

// --- Page Component ---
export default async function EventsPage() {
  const events = await getEvents();
  return <EventsClient events={events} />;
}

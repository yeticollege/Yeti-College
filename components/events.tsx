import { prisma } from "@/lib/prisma";
import EventsSnippetClient from "./events-client";

export default async function EventsSnippet() {
  // Fetch top 3 upcoming events
  const rawEvents = await prisma.event.findMany({
    take: 3,
    orderBy: {
      date: "asc",
    },
    where: {
      // Optional: Filter for future events only
      date: {
        gte: new Date(),
      },
    },
  });

  // Fallback: If no future events, just show the latest 3 (Optional logic)
  const eventsToDisplay =
    rawEvents.length > 0
      ? rawEvents
      : await prisma.event.findMany({ take: 3, orderBy: { date: "desc" } });

  // Convert Date objects to strings for the client
  const events = eventsToDisplay.map((event) => ({
    ...event,
    date: event.date.toISOString().split("T")[0],
  }));

  return <EventsSnippetClient events={events} />;
}

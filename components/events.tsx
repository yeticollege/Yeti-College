import { prisma } from "@/lib/prisma";
import EventsSnippetClient from "./events-client";
import { stripHtml } from "string-strip-html"; // Import the library

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

  // Convert Date objects to strings for the client AND strip HTML
  const events = eventsToDisplay.map((event) => ({
    ...event,
    date: event.date.toISOString().split("T")[0],

    // Apply stripHtml to the fields that might contain <&nbsp> or other tags.
    // Replace 'description' or 'title' with the actual field names from your DB.
    // .result gives you the clean string.
    description: event.description ? stripHtml(event.description).result : "",
    title: event.title ? stripHtml(event.title).result : "",
  }));

  return <EventsSnippetClient events={events} />;
}

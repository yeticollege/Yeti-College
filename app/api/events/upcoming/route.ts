// app/api/events/upcoming/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const upcomingEvents = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date(), // Only future events
        },
      },
      orderBy: {
        date: "asc",
      },
      take: 1, // We only need the next one for the card
    });

    // If no future events, maybe fallback to the latest one
    const events =
      upcomingEvents.length > 0
        ? upcomingEvents
        : await prisma.event.findMany({ orderBy: { date: "desc" }, take: 1 });

    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

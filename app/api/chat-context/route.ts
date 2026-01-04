import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust to your prisma client location

export async function GET() {
  try {
    // 1. Get Upcoming Events
    const events = await prisma.event.findMany({
      where: { date: { gte: new Date() } },
      orderBy: { date: "asc" },
      take: 3,
      select: { title: true, date: true, time: true },
    });

    // 2. Get Recent Notices
    const notices = await prisma.notice.findMany({
      orderBy: { date: "desc" },
      take: 3,
      select: { title: true, date: true, category: true },
    });

    return NextResponse.json({ events, notices });
  } catch (error) {
    return NextResponse.json({ events: [], notices: [] });
  }
}

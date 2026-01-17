import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 1. Force this route to be dynamic so it checks the DB on every request
//    instead of serving a cached version from build time.
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const activePopups = await prisma.popup.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        updatedAt: "desc", // Newest popups first
      },
      // 2. Safety limit: prevent UI clutter if too many are active by mistake
      take: 3,
    });

    return NextResponse.json(activePopups);
  } catch (error) {
    console.error("Error fetching popup:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

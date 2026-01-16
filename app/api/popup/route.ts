import { NextResponse } from "next/server";
// Adjust this import path to where your Prisma client instance is located
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const activePopup = await prisma.popup.findFirst({
      where: {
        isActive: true,
      },
      orderBy: {
        updatedAt: "desc", // Gets the most recently modified active one
      },
    });

    return NextResponse.json(activePopup);
  } catch (error) {
    console.error("Error fetching popup:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

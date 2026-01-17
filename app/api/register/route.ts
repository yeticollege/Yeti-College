export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

// GET: Fetch all registrations
export async function GET() {
  try {
    const registrations = await prisma.sportsRegistration.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(registrations, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// POST: Create Registration with Formatted Message
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      sport,
      participationType,
      teamName,
      message, // This contains the list of players from the frontend
    } = body;

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !sport ||
      !participationType
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (participationType === "Team" && !teamName) {
      return NextResponse.json(
        { error: "Team Name is required" },
        { status: 400 }
      );
    }

    // --- LOGIC CHANGE: Format the message ---
    let finalFormattedMessage = message || "";

    if (participationType === "Team") {
      // Combine Team Name and Player List into one formatted block
      finalFormattedMessage = `\nROSTER / PLAYERS:\n${
        message || "No player list provided"
      }`;
    }
    // ----------------------------------------

    const registration = await prisma.sportsRegistration.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        participationType,
        sport,
        teamName: teamName || "",
        // We save the formatted data into the 'message' column
        message: finalFormattedMessage,
      },
    });

    return NextResponse.json(
      { message: "Success", data: registration },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

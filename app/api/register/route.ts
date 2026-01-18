// export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

async function getPrisma() {
  const { prisma } = await import("@/app/lib/db");
  return prisma;
}
jj;
// GET: Fetch all registrations
export async function GET() {
  try {
    const prisma = await getPrisma();

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
    const prisma = await getPrisma();
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      sport,
      participationType,
      teamName,
      message,
    } = body;

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
        { status: 400 },
      );
    }

    if (participationType === "Team" && !teamName) {
      return NextResponse.json(
        { error: "Team Name is required" },
        { status: 400 },
      );
    }

    const finalFormattedMessage =
      participationType === "Team"
        ? `\nROSTER / PLAYERS:\n${message || "No player list provided"}`
        : message || "";

    const registration = await prisma.sportsRegistration.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        participationType,
        sport,
        teamName: teamName || "",
        message: finalFormattedMessage,
      },
    });

    return NextResponse.json(
      { message: "Success", data: registration },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

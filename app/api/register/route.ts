// app/api/register/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
      message,
    } = body;

    // 1. Basic Validation
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

    // 2. Conditional Validation
    if (participationType === "Team" && !teamName) {
      return NextResponse.json(
        { error: "Team Name is required for team registration" },
        { status: 400 }
      );
    }

    // 3. Save to Database
    const registration = await prisma.sportsRegistration.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        sport,
        participationType,
        teamName: participationType === "Team" ? teamName : "",
        message: message || "",
      },
    });

    return NextResponse.json(
      { message: "Registration successful", data: registration },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Register API is working!" });
}

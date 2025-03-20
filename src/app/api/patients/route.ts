import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Assuming you have a Prisma instance setup

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { name, email, imageURL } = await req.json();

    // Check if all required fields are present
    if (!name || !email || !imageURL) {
      return NextResponse.json(
        { message: "Name, email, and imageURL are required." },
        { status: 400 }
      );
    }

    // Insert the new patient into the database using Prisma
    const newPatient = await prisma.patient.create({
      data: {
        name,
        email,
        imageURL,
      },
    });

    // Respond with the newly created patient
    return NextResponse.json(
      { message: "Patient created successfully", patient: newPatient },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting patient:", error);
    return NextResponse.json(
      { message: "Failed to create patient" },
      { status: 500 }
    );
  }
}

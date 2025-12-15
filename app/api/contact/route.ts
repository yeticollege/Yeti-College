import nodemailer from "nodemailer";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type Body = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    const { firstName, lastName, email, subject, message } = body || {};

    // Basic validation: all fields required
    if (
      !firstName ||
      !lastName ||
      !email ||
      !subject ||
      !message
    ) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });

    // Send email using nodemailer
    // NOTE: Configure SMTP credentials in environment variables for production.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fixedEmail = "yeticollegenp@gmail.com"; // both sender and receiver per requirement

    const mailOptions = {
      from: fixedEmail,
      to: fixedEmail,
      subject: `Website Enquiry: ${subject}`,
      text: `You have a new enquiry from ${firstName} ${lastName} <${email}>\n\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<p>You have a new enquiry from <strong>${firstName} ${lastName}</strong> &lt;${email}&gt;</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    };

    // Try to send mail but don't fail the whole request if email sending fails.
    let mailError: string | null = null;
    try {
      await transporter.sendMail(mailOptions);
    } catch (mailErr: any) {
      console.error("Failed to send contact email:", mailErr);
      mailError = mailErr?.message || String(mailErr);
    }

    return NextResponse.json({ ok: true, contact, mailError }, { status: 201 });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

// type definitions remain the same
type FilePayload = {
  name: string;
  type: string;
  data: string;
};

type Body = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  courseId: string;
  gpa: string;
  prevInstitute: string;
  board: string;
  marksheet: FilePayload;
  character: FilePayload;
  citizenship: FilePayload;
  photo: FilePayload;
};

function bufferFromBase64(data: string) {
  const idx = data.indexOf("base64,");
  const b64 = idx >= 0 ? data.slice(idx + 7) : data;
  return Buffer.from(b64, "base64");
}

async function generatePdfBuffer(body: Body) {
  return new Promise<Buffer>((resolve, reject) => {
    try {
      // Dynamic import for pdfkit
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      // @ts-ignore
      const PDFDocument = eval("require")("pdfkit");

      const doc: any = new PDFDocument({
        size: "A4",
        margin: 40, // Slightly smaller margin to fit content
        info: {
          Title: `Application - ${body.firstName} ${body.lastName}`,
          Author: "Yeti International College",
        },
      });

      const chunks: Buffer[] = [];
      doc.on("data", (chunk: Buffer) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));

      // --- COLORS & STYLES ---
      const colors = {
        primary: "#1e3a8a", // Dark Blue
        secondary: "#64748b", // Slate Gray
        accent: "#f1f5f9", // Light Gray BG
        text: "#334155", // Dark Gray Text
        border: "#e2e8f0",
      };

      // --- PAGE 1: APPLICATION FORM ---

      // 1. Header Background
      doc.rect(0, 0, 595.28, 90).fill(colors.primary);

      // 2. College Title
      doc
        .fillColor("white")
        .fontSize(20)
        .font("Helvetica-Bold")
        .text("YETI INTERNATIONAL COLLEGE", 40, 30);

      doc
        .fontSize(10)
        .font("Helvetica")
        .text("ADMISSION APPLICATION FORM", 40, 58);

      // 3. Application ID / Date (Top Right overlay on blue)
      const dateStr = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      doc.text(`Date: ${dateStr}`, 400, 30, { align: "right" });
      doc.text(`Status: Pending`, 400, 45, { align: "right" });

      // Move down to body
      let yPos = 120;

      // --- PASSPORT PHOTO (Top Right of Page 1) ---
      // We draw this first so we know where to wrap text
      const photoWidth = 110;
      const photoHeight = 130;
      const photoX = 445; // Far right
      const photoY = 110;

      // Draw Photo Placeholder/Frame
      doc
        .rect(photoX, photoY, photoWidth, photoHeight)
        .strokeColor(colors.secondary)
        .lineWidth(1)
        .stroke();
      doc
        .fillColor(colors.secondary)
        .fontSize(8)
        .text("PHOTO", photoX, photoY + 60, {
          width: photoWidth,
          align: "center",
        });

      // Try to render actual photo
      if (body.photo?.data) {
        try {
          const photoBuf = bufferFromBase64(body.photo.data);
          doc.image(photoBuf, photoX, photoY, {
            fit: [photoWidth, photoHeight],
            align: "center",
            valign: "center",
          });
        } catch (e) {
          // Keep placeholder if fail
        }
      }

      // --- SECTION 1: PERSONAL DETAILS ---
      // We limit the text width to 380 so it doesn't hit the photo
      const textMaxWidth = 380;

      doc
        .fillColor(colors.primary)
        .fontSize(14)
        .font("Helvetica-Bold")
        .text("PERSONAL DETAILS", 40, yPos);

      doc.rect(40, yPos + 18, textMaxWidth, 2).fill(colors.accent); // Underline
      yPos += 35;

      const drawField = (
        label: string,
        value: string,
        x: number,
        y: number
      ) => {
        doc
          .fillColor(colors.secondary)
          .fontSize(9)
          .font("Helvetica-Bold")
          .text(label.toUpperCase(), x, y);
        doc
          .fillColor(colors.text)
          .fontSize(11)
          .font("Helvetica")
          .text(value || "N/A", x, y + 12);
      };

      // Row 1
      drawField("First Name", body.firstName, 40, yPos);
      drawField("Last Name", body.lastName, 220, yPos);
      yPos += 40;

      // Row 2
      drawField("Email Address", body.email, 40, yPos);
      drawField("Phone Number", body.phone, 220, yPos);
      yPos += 40;

      // Row 3
      drawField("Date of Birth", body.dob, 40, yPos);
      drawField("Address", body.address, 220, yPos);

      // Move past the photo area now
      yPos = Math.max(yPos + 50, 260);

      // --- SECTION 2: ACADEMIC DETAILS ---
      doc
        .fillColor(colors.primary)
        .fontSize(14)
        .font("Helvetica-Bold")
        .text("ACADEMIC BACKGROUND", 40, yPos);
      doc.rect(40, yPos + 18, 515, 2).fill(colors.accent); // Full width underline
      yPos += 35;

      // Row 1
      drawField("Program Applied For", body.courseId, 40, yPos);
      drawField("Previous Institute", body.prevInstitute, 300, yPos);
      yPos += 40;

      // Row 2
      drawField("Board / University", body.board, 40, yPos);
      drawField("GPA / Percentage", body.gpa, 300, yPos);
      yPos += 50;

      // --- SECTION 3: DECLARATION ---
      doc.rect(40, yPos, 515, 80).fill(colors.accent); // Gray box
      doc
        .fillColor(colors.primary)
        .fontSize(10)
        .font("Helvetica-Bold")
        .text("DECLARATION", 50, yPos + 15);
      doc
        .fillColor(colors.text)
        .fontSize(9)
        .font("Helvetica")
        .text(
          "I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that any incorrect information may lead to the rejection of my application.",
          50,
          yPos + 35,
          { width: 495 }
        );

      // --- FOOTER PAGE 1 ---
      doc
        .fontSize(8)
        .fillColor(colors.secondary)
        .text("Generated by Yeti International College Portal", 40, 780, {
          align: "center",
        });

      // --- HELPER FOR APPENDIX PAGES ---
      const addAttachmentPage = (
        title: string,
        dataStr: string,
        index: number
      ) => {
        if (!dataStr) return;
        try {
          const buf = bufferFromBase64(dataStr);
          doc.addPage();

          // Header Bar
          doc.rect(0, 0, 595.28, 50).fill(colors.accent);
          doc
            .fillColor(colors.primary)
            .fontSize(12)
            .font("Helvetica-Bold")
            .text(`APPENDIX ${index}:  ${title.toUpperCase()}`, 0, 20, {
              align: "center",
            });

          // Draw Border for Image Area
          doc
            .rect(40, 70, 515, 700)
            .strokeColor(colors.border)
            .lineWidth(2)
            .stroke();

          // Image
          doc.image(buf, 42, 72, {
            fit: [511, 696],
            align: "center",
            valign: "center",
          });

          // Footer
          doc
            .fontSize(8)
            .fillColor(colors.secondary)
            .text(
              `Document: ${title} - Applicant: ${body.firstName} ${body.lastName}`,
              40,
              780,
              { align: "center" }
            );
        } catch (e) {
          console.error(`Error rendering ${title}`, e);
        }
      };

      // --- GENERATE ATTACHMENTS ---
      // Note: Photo is already on Page 1, so we don't print it again unless desired.
      // We print the other docs as full-page appendices.

      const attachments = [
        { label: "Marksheet / Transcript", data: body.marksheet?.data },
        { label: "Character Certificate", data: body.character?.data },
        { label: "Citizenship / ID", data: body.citizenship?.data },
      ];

      let appendixCount = 1;
      attachments.forEach((att) => {
        if (att.data) {
          addAttachmentPage(att.label, att.data, appendixCount);
          appendixCount++;
        }
      });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

// ... existing POST function remains the same ...
export async function POST(req: Request) {
  try {
    const raw = await req.text();
    let parsed: any = null;
    try {
      parsed = raw ? JSON.parse(raw) : null;
    } catch (parseErr: any) {
      return NextResponse.json(
        { error: "Invalid JSON payload", details: parseErr?.message },
        { status: 400 }
      );
    }

    const body: Body = parsed as Body;

    // Validate required fields
    const required = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dob",
      "address",
      "courseId",
      "gpa",
      "prevInstitute",
      "board",
      "marksheet",
      "character",
      "citizenship",
      "photo",
    ];

    for (const key of required) {
      if (!((body as any)[key] || (body as any)[key] === 0)) {
        return NextResponse.json(
          { error: `${key} is required.` },
          { status: 400 }
        );
      }
    }

    const app = await prisma.application.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        dob: body.dob,
        address: body.address,
        courseId: body.courseId,
        gpa: body.gpa,
        prevInstitute: body.prevInstitute,
        board: body.board,
        marksheet: body.marksheet.name,
        character: body.character.name,
        citizenship: body.citizenship.name,
        photo: body.photo.name,
      },
    });

    // Background Process
    (async () => {
      try {
        const pdfBuffer = await generatePdfBuffer(body);

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT || 587),
          secure: Number(process.env.SMTP_PORT || 587) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const fixedEmail = "yeticollegenp@gmail.com";

        await transporter.sendMail({
          from: fixedEmail,
          to: fixedEmail,
          subject: `New Application: ${body.firstName} ${body.lastName}`,
          text: `Application received for ${body.courseId}. See attached PDF.`,
          attachments: [
            {
              filename: `Application_${body.firstName}.pdf`,
              content: pdfBuffer,
            },
          ],
        });

        console.log("Email sent for", app.id);
      } catch (bgErr) {
        console.error("Background error:", bgErr);
      }
    })();

    return NextResponse.json({ ok: true, application: app }, { status: 201 });
  } catch (err: any) {
    console.error("Apply API error:", err);
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}

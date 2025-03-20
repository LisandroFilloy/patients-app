import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "2525"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Patients app" <no-reply@patientsapp.com>',
      to,
      subject,
      text,
    });

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}

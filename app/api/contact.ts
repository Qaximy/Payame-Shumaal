// /app/api/contact.ts
import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import nodemailer from 'nodemailer';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const twilioClient = twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const fullMessage = `📨 New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    // --- WhatsApp via Twilio ---
    await twilioClient.messages.create({
      body: fullMessage,
      from: 'whatsapp:+14155238886', // Twilio sandbox number
      to: 'whatsapp:+923488134572',
    });

    // --- Email via Nodemailer ---
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER!,
      to: 'yourinbox@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: fullMessage,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

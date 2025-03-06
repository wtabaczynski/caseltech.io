import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json(); // Odbiór danych w formacie JSON
    const { senderName, senderEmail, message } = formData;

    // Walidacja danych wejściowych
    if (!validateString(senderEmail, 500)) {
      return NextResponse.json(
        { error: "Invalid sender email" },
        { status: 400 }
      );
    }
    if (!validateString(message, 5000)) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }
    if (!validateString(senderName, 150)) {
      return NextResponse.json(
        { error: "Invalid sender name" },
        { status: 400 }
      );
    }

    // Wysyłka e-maila
    const data = await resend.emails.send({
      from: "production@resend.dev",
      to: "info@caseltech.com",
      subject: "Email sent from contact form",
      replyTo: senderEmail,
      react: ContactFormEmail({ senderEmail, message, senderName }),
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}

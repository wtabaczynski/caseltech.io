import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);
//const resend = process.env.NEXT_PUBLIC_RESEND_API_KEY;
console.log("Resend API Key:", resend);

export async function POST(req: Request) {
  try {
    // Pobieramy surowy tekst requesta
    const bodyText = await req.text();
    console.log("RAW REQUEST BODY:", bodyText); // 🔍 Log surowych danych

    // Parsujemy JSON ręcznie, aby uniknąć problemów w AWS
    const formData = JSON.parse(bodyText);
    console.log("PARSED FORM DATA:", formData); // 🔍 Log sparsowanych danych

    // Sprawdzamy, czy wszystkie wymagane dane są obecne
    if (
      !formData ||
      !formData.senderEmail ||
      !formData.senderName ||
      !formData.message
    ) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const { senderName, senderEmail, message } = formData;

    // Walidacja danych
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
      subject: "New Contact Form Submission",
      replyTo: senderEmail,
      react: ContactFormEmail({ senderEmail, message, senderName }),
    });

    return NextResponse.json(
      { data },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}

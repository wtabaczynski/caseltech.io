import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "prod/app/website";

const client = new SecretsManagerClient({
  region: process.env.AWS_REGION || "eu-west-1",
  credentials: process.env.AWS_ACCESS_KEY_ID
    ? {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      }
    : undefined,
});

// Funkcja asynchroniczna do pobierania sekretu z AWS Secrets Manager
async function getResendApiKey() {
  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT",
      })
    );

    if (!response.SecretString) {
      throw new Error("No secret value found");
    }

    // Parsowanie sekretu jako JSON
    const secretData = JSON.parse(response.SecretString);
    console.log("API Key retrieved:", secretData.RESEND_API_KEY);

    return secretData.RESEND_API_KEY;
  } catch (error) {
    console.error("Error fetching secret from AWS:", error);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const apiKey = await getResendApiKey();
    if (!apiKey) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    console.log("API Key retrieved:", apiKey);

    const resend = new Resend(apiKey);

    // Pobieramy surowy tekst requesta
    const bodyText = await req.text();
    console.log("RAW REQUEST BODY:", bodyText);

    // Parsowanie JSON
    const formData = JSON.parse(bodyText);
    console.log("PARSED FORM DATA:", formData);

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

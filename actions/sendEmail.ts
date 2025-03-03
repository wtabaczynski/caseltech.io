"use server";
import React from "react";

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email: " + formData.get("senderEmail"),
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(senderName, 150)) {
    return {
      error: "Invalid sender name: " + formData.get("senderName"),
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@caseltech.com",
      subject: "Email sent from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail,
        message: message,
        senderName: senderName,
      }),
    });
    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

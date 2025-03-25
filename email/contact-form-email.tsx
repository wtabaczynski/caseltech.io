import React from "react";
import { Html } from "@react-email/html";
import { Body } from "@react-email/body";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Container } from "@react-email/container";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderEmail: string;
  message: string;
  senderName: string;
};

export default function ContactFormEmail({
  senderEmail,
  message,
  senderName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from contact form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-gray-300 my-10 px-10 py-4 rounded-md shadow">
              <Heading className="leading-tight">
                New Contact Form Submission
              </Heading>
              <Text>
                <strong>From:</strong> {senderName} ({senderEmail})
              </Text>
              <Text>
                <strong>Message:</strong>
              </Text>
              <Text>{message}</Text>
              <Hr />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

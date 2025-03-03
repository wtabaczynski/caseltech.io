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
      <Preview>New message</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New contact from main website.
              </Heading>
              <Text>{senderEmail}</Text>
              <Text>{message}</Text>
              <Text>{senderName}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
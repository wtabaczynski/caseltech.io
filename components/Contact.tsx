"use client";

import React, { useRef, useState, useEffect } from "react";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import clsx from "clsx";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const controlsText = useAnimation();
  const controlsForm = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: formRefInView, inView: formInView } = useInView({ triggerOnce: false });

  const [loading, setLoading] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    if (textInView) controlsText.start("visible");
    else controlsText.start("hidden");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (formInView) controlsForm.start("visible");
    else controlsForm.start("hidden");
  }, [formInView, controlsForm]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const senderName = formData.get("senderName") as string;
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderName, senderEmail, message }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong.");
      }

      toast.success("Email has been sent successfully!");
      formRef.current?.reset();
      setMessageLength(0);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollReveal>
      <section
        id="contact-us"
        className="parallax-section max-container padding-container gap-20 py-10 pb-32 md:gap-28 md:py-20 bg-white text-center flex flex-col items-center justify-center"
      >
        <motion.h1
          className="text-gray-600 text-4xl font-poppins font-bold mb-10"
          variants={textVariants}
          initial="hidden"
          animate={controlsText}
          ref={textRef}
        >
          Make sure to contact us
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-16 items-start justify-center w-full">
          <motion.div
            className="w-full md:w-1/2 md:ml-6"
            variants={formVariants}
            initial="hidden"
            animate={controlsForm}
            ref={formRefInView}
          >
            <form
              ref={formRef}
              className="flex flex-col dark:text-black gap-5"
              onSubmit={handleSubmit}
            >
              <input
                className="h-14 px-4 rounded-lg border border-gray-600 dark:bg-white dark:bg-opacity-80 transition-all text-black"
                name="senderEmail"
                required
                placeholder="Your e-mail address"
              />
              <input
                className="h-14 px-4 rounded-lg border border-gray-600 dark:bg-white dark:bg-opacity-80 transition-all text-black"
                name="senderName"
                required
                placeholder="Your name"
              />
              <textarea
                className="h-52 my-3 rounded-lg border border-gray-600 p-4 dark:bg-white dark:bg-opacity-80 transition-all text-black"
                name="message"
                required
                placeholder="Message"
                maxLength={5000}
                onChange={(e) => setMessageLength(e.target.value.length)}
              />
              <div className="mt-2">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={clsx(
                      "h-full transition-all duration-300",
                      messageLength >= 5000
                        ? "bg-red-500"
                        : messageLength >= 4000
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    )}
                    style={{
                      width: `${Math.min((messageLength / 5000) * 100, 100)}%`,
                    }}
                  />
                </div>
                <p className="text-sm mt-1 text-right text-gray-600">
                  {messageLength}/5000
                </p>
              </div>

              <SubmitBtn
                className="ml-6 bg-indigo-800 hover:bg-indigo-900"
                disabled={loading}
              />
              <p className="mt-4 text-xs text-gray-400 text-left">
                By clicking the 'Send message' button you consent to processing
                your data and contacting you to fulfill your request according
                to our{" "}
                <a
                  href="/policy.html"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                , which you acknowledge as being read. We may contact you in the
                future but you have the right to opt-out of further communications.
              </p>
            </form>
          </motion.div>

          <motion.div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <Image
              src="/contact.png"
              alt="Medical Illustration"
              width={400}
              height={400}
            />
            <div className="flex flex-col items-center gap-2 mt-6 text-lg text-gray-400">
              <p className="font-poppins font-semibold">Caseltech Sp z o.o.</p>
              <p className="font-poppins font-semibold">Ul. Św. Filipa 23/4,</p>
              <p className="font-poppins font-semibold">31-150 Kraków</p>
              <p className="font-poppins font-semibold">+48 797 448 799</p>
              <p className="font-poppins font-semibold">info@caseltech.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;

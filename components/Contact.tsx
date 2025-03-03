"use client";
import React, { useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

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
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });
  const { ref: formRefInView, inView: formInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (textInView) controlsText.start("visible");
    else controlsText.start("hidden");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (formInView) controlsForm.start("visible");
    else controlsForm.start("hidden");
  }, [formInView, controlsForm]);

  return (
    <ScrollReveal>
      <section
        id="contact-us"
        className="parallax-section max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-cover bg-center bg-white text-center items-center justify-center pl-6"
      >
        <motion.h1
          className="text-black text-4xl font-bold text-center mb-10"
          variants={textVariants}
          initial="hidden"
          animate={controlsText}
          ref={textRef}
        >
          Make sure to contact us
        </motion.h1>
        <div className="flex flex-row gap-16 items-start justify-center">
          <motion.div
            className="w-1/2 ml-6"
            variants={formVariants}
            initial="hidden"
            animate={controlsForm}
            ref={formRefInView}
          >
            <form
              ref={formRef}
              className="flex flex-col dark:text-black gap-5"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Email has been sent successfully!");
                if (formRef.current) formRef.current.reset();
              }}
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
                style={{ color: "#000000" }}
                name="message"
                required
                placeholder="Message"
              />
              <SubmitBtn className="ml-6 bg-indigo-800 hover:bg-indigo-900" />
              <p className="mt-4 text-xs text-gray-400">
                By clicking the 'Send message' button you consent to processing
                your data and contacting you to fulfill your request according
                to our{" "}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>
                , which you acknowledge as being read. We may contact you in the
                future but you have the right to opt-out of further
                communications.
              </p>
            </form>
          </motion.div>
          <motion.div className="w-1/2 flex flex-col justify-center items-center">
            <Image
              src="/contact.png"
              alt="Medical Illustration"
              width={400}
              height={400}
            />

            <div className="flex flex-col items-center gap-2 mt-6 text-xs text-gray-400">
              <p className="font-semibold">Caseltech Sp z o.o.</p>
              <p className="font-semibold">Ul. Św. Filipa 23/4,</p>
              <p className="font-semibold">31-150 Kraków</p>
              <p className="font-semibold">+48 797 448 799</p>
              <p className="font-semibold">info@caseltech.com</p>
              <div className="flex gap-4 mt-2"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;

"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Features = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (textInView) controlsText.start("visible");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (imageInView) controlsImage.start("visible");
  }, [imageInView, controlsImage]);

  return (
    <section className="parallax-section max-container padding-container flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-20 py-10 md:py-20 bg-indigo-700">
      {/* Text Section */}
      <div className="w-full md:w-1/2 px-6 md:px-20 text-white flex items-center justify-center">
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={controlsText}
          variants={textVariants}
          className="w-full"
        >
          <h1 className="text-3xl md:text-[40px] font-poppins font-semibold text-white mb-6 text-center md:text-left">
            Features
          </h1>
          <ul className="list-disc pl-6 mb-6 text-lg md:text-[30px] font-poppins font-medium space-y-4 text-left">
            <li>Personalized offers – tailored to customer behaviors and preferences.</li>
            <li>Automatic reward calculation – points, discounts, freebies, and cashback without the hassle.</li>
            <li>Seamless integration – works with your POS, e-commerce, CRM, and mobile apps.</li>
            <li>Advanced analytics – track promotion effectiveness and optimize your strategy.</li>
          </ul>
          <p className="mb-6 text-lg md:text-[30px] font-poppins font-medium text-center md:text-left">
            Maximize the impact of your loyalty program and keep customers coming back for more! Contact us today to see how we can help your brand grow!
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/#contact-us">
              <button className="rounded bg-orange-500 px-8 py-3 text-sm md:text-lg font-semibold uppercase text-white transition-colors duration-300 hover:bg-orange-600">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 px-6 flex justify-center items-center">
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={controlsImage}
          variants={imageVariants}
          className="w-full h-full max-w-[600px]"
        >
          <Image
            src="/lo2.jpeg"
            alt="Loyalty Program"
            width={800}
            height={1000}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

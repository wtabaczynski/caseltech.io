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
    <section className="parallax-section max-container padding-container flex flex-col md:flex-row gap-20 py-10 md:py-20 bg-indigo-700">
      <div className="flex flex-col md:flex-row w-full items-stretch">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-20 text-white flex items-center">
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={controlsText}
            variants={textVariants}
            className="w-full"
          >
            <h1 className="text-[40px] font-poppins font-semibold text-white mb-6">
              Features
            </h1>
            <ul className="list-disc pl-5 mb-6 text-[30px] font-poppins font-medium text-white space-y-4">
              <li>Personalized offers – tailored to customer behaviors and preferences.</li>
              <li>Automatic reward calculation – points, discounts, freebies, and cashback without the hassle.</li>
              <li>Seamless integration – works with your POS, e-commerce, CRM, and mobile apps.</li>
              <li>Advanced analytics – track promotion effectiveness and optimize your strategy.</li>
            </ul>
            <p className="mb-6 text-[30px] font-poppins font-medium text-white">
              Maximize the impact of your loyalty program and keep customers coming back for more! Contact us today to see how we can help your brand grow!
            </p>
            <div>
              <Link href="/#contact-us">
                <button className="rounded border border-transparent bg-orange-500 px-12 py-4 text-lg font-semibold uppercase leading-normal text-white transition-colors duration-300 hover:bg-orange-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-6 flex justify-center items-stretch">
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={controlsImage}
            variants={imageVariants}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/lo2.jpeg"
              alt="Loyalty Program"
              width={800}
              height={1000}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;

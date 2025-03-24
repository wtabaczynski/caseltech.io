"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ProductsOffer = () => {
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
    <section className="parallax-section max-container padding-container flex flex-col md:flex-row gap-20 py-10 md:py-20 bg-white">
      <div className="flex flex-col md:flex-row w-full items-stretch">
      <div className="h-8"></div>
      <div className="h-8"></div>
      <div className="h-8"></div>
        {/* Image Section (instead of card) */}
        <div className="w-full md:w-1/2 flex justify-center items-stretch p-6">
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={controlsImage}
            variants={imageVariants}
            className="w-full h-full flex items-center justify-center"
          >
            <Image
              src="/lo1.jpeg"
              alt="Loyalty Visual"
              width={800}
              height={1000}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-20 text-gray-600 flex items-center">
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={controlsText}
            variants={textVariants}
            className="w-full"
          >
            <h1 className="text-[40px] text-gray-600 font-poppins font-semibold">
              Our Loyalty
            </h1>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600">
              Boost Sales and Customer Loyalty with an Intelligent Promotion Engine!
            </p>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600">
              Want to attract customers, increase engagement, and drive sales?
            </p>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600">
              Our promotion engine automates and personalizes your loyalty campaigns, turning casual shoppers into devoted brand ambassadors!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOffer;

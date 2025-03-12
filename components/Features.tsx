"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

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
      <div className="flex flex-col md:flex-row w-full">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-20 text-white">
          <motion.div ref={textRef} initial="hidden" animate={controlsText} variants={textVariants}>
            <p className="mb-3 text-[30px] font-poppins font-medium text-white text-center md:text-justify">
              Personalized offers – tailored to customer behaviors and preferences.
              Automatic reward calculation – points, discounts, freebies, and cashback without the hassle.  
              Seamless integration – works with your POS, e-commerce, CRM, and mobile apps.
              Advanced analytics – track promotion effectiveness and optimize your strategy. 
              Maximize the impact of your loyalty program and keep customers coming back for more!
              Contact us today to see how we can help your brand grow!
            </p>
            <Link href="/#contact-us">
              <button className="inline-block rounded border border-black bg-white px-6 py-2 text-xs font-medium uppercase leading-normal text-black text-center transition-colors duration-300 hover:bg-orange-500 hover:text-white hover:border-transparent">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center p-6">
          <motion.div ref={imageRef} initial="hidden" animate={controlsImage} variants={imageVariants}>
            <Image
              src="/loy2.jpeg"
              alt="Loyalty Program"
              width={500}
              height={500}
              className="w-full md:w-[500px] h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;

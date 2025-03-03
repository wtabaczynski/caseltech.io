"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
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

const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Features = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const controlsButton = useAnimation();

  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: false });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    textInView ? controlsText.start("visible") : controlsText.start("hidden");
  }, [textInView, controlsText]);

  useEffect(() => {
    imageInView ? controlsImage.start("visible") : controlsImage.start("hidden");
  }, [imageInView, controlsImage]);

  useEffect(() => {
    buttonInView ? controlsButton.start("visible") : controlsButton.start("hidden");
  }, [buttonInView, controlsButton]);

  return (
    <section
      id="features"
      className="parallax-section max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-cover bg-center bg-gray-900"
    >
      <div className="flex flex-row w-screen h-screen">
        {/* Text Section */}
        <div className="flex items-center justify-start w-1/2 h-full">
          <motion.div
            ref={textRef}
            className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[30] max-w-[750px] text-white items-center text-justify"
            initial="hidden"
            animate={controlsText}
            variants={textVariants}
          >
            <p className="mb-3 text-[20px] text-white">
              Personalized offers – tailored to customer behaviors and preferences.
              Automatic reward calculation – points, discounts, freebies, and cashback without the hassle.  
              Seamless integration – works with your POS, e-commerce, CRM, and mobile apps.
              Advanced analytics – track promotion effectiveness and optimize your strategy. 
              Maximize the impact of your loyalty program and keep customers coming back for more!
              Contact us today to see how we can help your brand grow!
            </p>
            <Link href="/#contact-us">
              <button className="inline-block rounded border border-black bg-amber-500 px-6 py-2 text-xs font-medium uppercase leading-normal text-white text-center transition-colors duration-300 hover:bg-amber-500 hover:text-white hover:border-transparent">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-end w-1/2 h-full">
          <motion.div
            ref={imageRef}
            className="pr-20 md:pr-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] text-white items-center"
            initial="hidden"
            animate={controlsImage}
            variants={imageVariants}
          >
            <Image
              src="/loy2.jpeg"
              alt="Loyalty Program"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <motion.div ref={buttonRef} initial="hidden" animate={controlsButton} variants={buttonVariants} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;

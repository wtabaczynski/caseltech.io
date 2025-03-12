"use client";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const OfferCard = dynamic(() => import("@/components/OfferCard"), {
  ssr: false,
});

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ProductsOffer = () => {
  const controlsText = useAnimation();
  const controlsCard = useAnimation();
  const controlsButton = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false,
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (textInView) controlsText.start("visible");
    else controlsText.start("hidden");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (cardInView) controlsCard.start("visible");
    else controlsCard.start("hidden");
  }, [cardInView, controlsCard]);

  useEffect(() => {
    if (buttonInView) controlsButton.start("visible");
    else controlsButton.start("hidden");
  }, [buttonInView, controlsButton]);

  return (
    <section
      id="product-offer"
      className="parallax-section max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-cover bg-center bg-white"
    >
      <div className="flex flex-row w-screen h-screen">
        <div className="flex items-center justify-start w-1/2 h-full">
          <motion.div
            ref={cardRef}
            className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[30] max-w-[750px] text-white items-center"
            initial="hidden"
            animate={controlsCard}
            variants={cardVariants}
          >
            <OfferCard />
            <motion.div
              ref={buttonRef}
              initial="hidden"
              animate={controlsButton}
              variants={buttonVariants}
            ></motion.div>
          </motion.div>
        </div>

        <div className="flex items-center justify-end w-1/2 h-full">
          <motion.div
            ref={textRef}
            className="pr-20 md:pr-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] text-white items-center"
            initial="hidden"
            animate={controlsText}
            variants={textVariants}
          >
            <h1 className="text-[40px] text-gray-600 font-poppins font-semibold">
              {" "}
              Our Loyalty
            </h1>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600 ">
              Boost Sales and Customer Loyalty with an Intelligent Promotion
              Engine!
            </p>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600 ">
              Want to attract customers, increase engagement, and drive sales?
              Our promotion engine automates and personalizes your loyalty
              campaigns, turning casual shoppers into devoted brand ambassadors!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOffer;

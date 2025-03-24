"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
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

const ProductsOffer = () => {
  const controlsText = useAnimation();
  const controlsCard = useAnimation();

  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: cardRef, inView: cardInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (textInView) controlsText.start("visible");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (cardInView) controlsCard.start("visible");
  }, [cardInView, controlsCard]);

  return (
    <section className="parallax-section max-container padding-container flex flex-col md:flex-row gap-20 py-10 md:py-20 bg-white">
      <div className="flex flex-col md:flex-row w-full">
        {/* Offer Card */}
        <div className="w-full md:w-1/2 flex justify-center p-6">
          <motion.div
            ref={cardRef}
            initial="hidden"
            animate={controlsCard}
            variants={cardVariants}
          >
            <OfferCard />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-20 text-gray-600">
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={controlsText}
            variants={textVariants}
          >
            <h1 className="text-[40px] text-gray-600 font-poppins font-semibold">
              Our Loyalty
            </h1>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600">
              Boost Sales and Customer Loyalty with an Intelligent Promotion
              Engine!
            </p>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600">
              Want to attract customers, increase engagement, and drive sales?
            </p>
            <p className="mb-3 text-[30px] font-poppins font-medium text-gray-600">
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

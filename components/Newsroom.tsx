/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/components/ScrollReveal";

const NewsCards = dynamic(() => import("@/components/NewsCards"), {
  ssr: false,
});

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const newsCardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Newsroom = () => {
  const controlsText = useAnimation();
  const controlsNewsCards = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });
  const { ref: newsCardsRef, inView: newsCardsInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (textInView) controlsText.start("visible");
    else controlsText.start("hidden");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (newsCardsInView) controlsNewsCards.start("visible");
    else controlsNewsCards.start("hidden");
  }, [newsCardsInView, controlsNewsCards]);

  return (
    <ScrollReveal>
      <section
        id="newsroom"
        className="parallax-section max-container padding-container flex flex-col items-center gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-cover bg-center bg-indigo-900"
      >
        <motion.h1
          className="text-[50px] text-white font-semibold font-poppins text-center"
          variants={textVariants}
          initial="hidden"
          animate={controlsText}
          ref={textRef}
        >
          Customer success stories
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 w-full max-w-[1200px]"
          variants={newsCardVariants}
          initial="hidden"
          animate={controlsNewsCards}
          ref={newsCardsRef}
        >
          <NewsCards />
        </motion.div>
        <motion.h2
          className="text-[50px] text-white font-semibold font-poppins text-center"
          variants={textVariants}
          initial="hidden"
          animate={controlsText}
        >
          Check out the latest news about Caseltech and project realizations
        </motion.h2>
      </section>
    </ScrollReveal>
  );
};

export default Newsroom;

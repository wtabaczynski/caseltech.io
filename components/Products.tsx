/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/Components/ScrollReveal";
import PulsingButton from '@/Components/PulsingButton';

const ProductCard = dynamic(() => import("@/Components/ProductCard"), { ssr: false });

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const productCardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Products = () => {
  const controlsText = useAnimation();
  const controlsButton = useAnimation();
  const controlsProduct = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: false });
  const { ref: productRef, inView: productInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (textInView) controlsText.start("visible");
    else controlsText.start("hidden");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (buttonInView) controlsButton.start("visible");
    else controlsButton.start("hidden");
  }, [buttonInView, controlsButton]);

  useEffect(() => {
    if (productInView) controlsProduct.start("visible");
    else controlsProduct.start("hidden");
  }, [productInView, controlsProduct]);

  return (
    <ScrollReveal>
      <section id="loyalty" className="parallax-section max-container padding-container flex flex-col md:flex-row gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-cover bg-center bg-white">
        <div className='pl-10 md:pl-20 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[650px]'>
          <motion.h1 
            className='text-[40px] text-black font-sans font-medium leading-snug'
            variants={textVariants}
            initial="hidden"
            animate={controlsText}
            ref={textRef}
          >
            Leverage our loyalty program to make your customer a greater beneficiary of your own services
          </motion.h1>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={controlsButton}
            ref={buttonRef}
            className="mt-6"
          >
            <PulsingButton />
          </motion.div>
        </div>
        <motion.div
          variants={productCardVariants}
          initial="hidden"
          animate={controlsProduct}
          ref={productRef}
          className="mr-10"
        >
          <ProductCard />
        </motion.div>
      </section>
    </ScrollReveal>
  );
};

export default Products;

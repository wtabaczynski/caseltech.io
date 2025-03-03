"use client";
import Link from 'next/link';
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import '../app/globals.css';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Intro = () => {
  const controlsText = useAnimation();
  const controlsButton = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (textInView) controlsText.start("visible");
    else controlsText.start("hidden");
  }, [textInView, controlsText]);

  useEffect(() => {
    if (buttonInView) controlsButton.start("visible");
    else controlsButton.start("hidden");
  }, [buttonInView, controlsButton]);

  return (
    <section id="intro" style={{
      backgroundImage: "url('/main.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
    }} className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
     
      
      <div className='flex items-center w-screen h-screen'>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] font-poppins'>
          {/* Animacja tekstu */}
          <motion.h1 
            className='text-[50px] text-gray-600 font-semibold font-poppins'
            variants={textVariants}
            initial="hidden"
            animate={controlsText}
            ref={textRef}
          >
            Caseltech {" "}
            Smart Solutions
          </motion.h1>

          {/* Tekst pod nagłówkiem */}
          <motion.p 
            className='text-gray-500 text-lg font-poppins'
            variants={textVariants}
            initial="hidden"
            animate={controlsText}
          >
            Take the first step towards new technological opportunities
          </motion.p>

          {/* Animacja przycisków */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={controlsButton}
            ref={buttonRef}
            className="flex gap-4"
          >
            <Link 
              href="/about-us" 
              className="inline-block rounded-[20px] bg-white text-black font-bold px-9 pb-[9px] pt-3 text-xs uppercase leading-normal transition duration-150 ease-in-out border border-black hover:bg-indigo-600 hover:text-white hover:border-transparent focus:bg-indigo-600 focus:text-white focus:outline-none focus:ring-0 active:bg-indigo-600 font-poppins"
            >
              About us
            </Link>
            <Link 
              href="/#contact-us" 
              className="inline-block rounded-[20px] bg-indigo-600 text-white font-bold px-9 pb-[9px] pt-3 text-xs uppercase leading-normal transition duration-150 ease-in-out hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-0 active:bg-indigo-800 font-poppins"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

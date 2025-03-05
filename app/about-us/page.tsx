"use client"
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 text-white p-10">
      {/* Header at the top center */}
      <h1 className="text-4xl font-poppins font-bold mb-10 text-center">Who we are</h1>
      
      <section className="max-w-6xl flex flex-col md:flex-row items-center gap-10">
        {/* Left side with image and button */}
        <motion.div 
          className="flex flex-col items-center md:items-start w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/about.jpeg"
            alt="About Us"
            className="w-full rounded-lg"
          />
        </motion.div>
        
        {/* Right side with text */}
        <div className="w-full md:w-1/2 text-white font-poppins text-lg">
          <p className="mb-3">
          Our team consists of experienced professionals who have been successfully delivering commercial projects worldwide for years. We have worked with Fortune 500 companies, providing innovative solutions tailored to the dynamically evolving market.
          </p>
          <p className="mb-3">
          We successfully implement AI/ML algorithms in both commercial and scientific projects, helping our clients gain a competitive edge. Over the past three years, we have completed projects in the retail, financial, and industrial sectors, delivering advanced technologies that drive business growth.
          </p>
          <p className="mb-3">
          We would be happy to support your company as well – we execute projects that make a real impact on business growth and innovation.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

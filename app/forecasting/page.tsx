"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Forecasting = () => {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-10"
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="max-w-6xl flex flex-col md:flex-row items-start gap-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {/* Lewa strona z tekstem */}
        <motion.div
          className="w-full md:w-1/2 text-black font-poppins text-lg md:pl-10"
          variants={textVariants}
        >
          <p className="font-bold text-xl">
            Data-Driven Insights: Advanced Reporting & Sales Analytics for
            Business Growth
          </p>
          <div className="h-8"></div>
          <p className="font-bold underline text-lg">Sector: Retail</p>
          <div className="h-8"></div>
          <p>
            We develop automated reporting systems and customer behavior
            analysis tools to support strategic decisions. By integrating data
            from cloud platforms (Google Cloud, AWS, Azure, Microsoft DWH), we
            provide insights into sales, marketing effectiveness, and customer
            loyalty.
          </p>
          <div className="h-8"></div>
          <ul className="list-disc pl-5">
            <p>Our solutions include:</p>
            <li>Sales forecasting with trend and seasonality analysis.</li>
            <li>Demand prediction and inventory optimization.</li>
            <li>
              Marketing performance analysis to identify high-value campaigns.
            </li>
            <li>Cost efficiency insights for maximizing ROI.</li>
            <li>
              Customer behavior analytics (retention, churn, RFM, basket
              analysis).
            </li>
          </ul>
          <div className="h-8"></div>
          <p>
            Our solutions help businesses optimize budgets, boost profitability,
            and build long-term customer relationships.
          </p>
        </motion.div>

        {/* Prawa strona z obrazkiem oraz przyciskiem */}
        <motion.div
          className="flex flex-col items-center w-full md:w-1/2"
          variants={textVariants}
        >
          <motion.div variants={imageVariants}>
            <Image
              src="/otcf.jpeg"
              alt="forecasting"
              width={600}
              height={350}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="mt-10 flex justify-center w-full"
            variants={buttonVariants}
          >
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-poppins font-bold uppercase rounded-md hover:bg-blue-900 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Forecasting;

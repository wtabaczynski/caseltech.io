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
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Forecasting = () => {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-10"
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-black text-center"
        variants={textVariants}
      >
        {/* "Data-Driven Insights: Advanced Reporting & Sales Analytics for Business Growth" */}
      </motion.h1>

      <motion.section
        className="max-w-6xl flex flex-col md:flex-row items-start gap-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {/* Lewa strona z obrazkiem oraz przyciskami */}
        <motion.div
          className="flex flex-col items-center md:items-start w-full md:w-1/2"
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
          <motion.div className="mt-10 flex gap-5" variants={buttonVariants}>
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-bold uppercase rounded-md hover:bg-blue-900 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Prawa strona z tekstem */}
        <motion.div
          className="w-full md:w-1/2 text-black text-lg md:pl-10"
          variants={textVariants}
        >
          <p className="font-bold underline text-lg">Sector: Retail</p>
          <div className="h-6"></div>
          <p>
            <strong>
              "Data-Driven Insights: Advanced Reporting & Sales Analytics for
              Business Growth"
            </strong>
            <br />
            We create and implement automated reporting systems and customer
            behavior analysis tools that support strategic business decisions.
            We integrate data from cloud platforms (Google Cloud, AWS, Azure,
            Microsoft DWH) and develop reports that analyze sales, marketing
            campaign effectiveness, and customer loyalty. Our solutions include:
            <ul>
              <li>
                1. Automated sales forecasting considering trends, seasonality,
                and external factors.
              </li>
              <li>
                2. Advanced sales modeling to predict future demand and optimize
                inventory management.
              </li>
              <li>
                3. Marketing effectiveness analysis and identification of
                campaigns that attract loyal users.
              </li>
              <li>
                4. Cost analysis of marketing strategies to maximize ROI and
                budget efficiency.
              </li>
              <li>
                5. MVP of a discount analysis mechanism optimizing pricing
                strategies while maintaining profitability.
              </li>
              <li>
                6. Customer Behavior Analysis:
                <ul>
                  <li>User retention</li>
                  <li>Churn prediction</li>
                  <li>RFM analysis</li>
                  <li>Basket analysis</li>
                </ul>
              </li>
            </ul>
            With our tools, companies can better manage marketing budgets,
            increase profitability, and build long-term customer relationships.
          </p>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Forecasting;

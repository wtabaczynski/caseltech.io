"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
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
        Sales Forecasting Solutions for OTCF S.A.
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
            <Image src="/otcf.jpeg" alt="forecasting" width={600} height={350} className="rounded-lg" />
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
            <strong>Implementation and Deployment of Reporting Mechanisms and Automated Customer Behavior Analysis:</strong>
            <br />
            Implementation and deployment of data pipelines for sales reports (integrations with Google Cloud, AWS, Azure, Microsoft DWH).
            Development of reports supporting automated analysis of results and achieved margin levels.
            Creation of reports evaluating the effectiveness of marketing activities, identifying which campaigns attract the most loyal users.
            MVP of a discount analysis mechanism for campaigns with various discounting strategies while maintaining an appropriate margin level.
            Automated sales forecasting, taking into account trends, seasonality, and holidays.
            Evaluation of marketing effectiveness, identifying which campaigns attract the most loyal users.
          </p>
          
            <strong>Customer Behavior Analysis:</strong>
              <ul className="list-disc pl-5">
                <li>User retention analysis</li>
                <li>Churn analysis</li>
                <li>RFM analysis</li>
                <li>Basket analysis</li>
              </ul>
              
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Forecasting;

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

const Skyspark = () => {
  return (
    <motion.main 
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-10"
      initial="hidden"
      animate="visible"
    >
      <motion.section 
        className="max-w-6xl flex flex-col md:flex-row items-center gap-10"
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
            <Image src="/Skyspark.webp" alt="Skyspark" width={600} height={350} className="rounded-lg" />
          </motion.div>
          <motion.div className="mt-10 flex gap-5" variants={buttonVariants}>
            <Link href="/#contact-us">
              <button className="px-6 py-3 bg-blue-800 text-white font-poppins font-bold uppercase rounded-md hover:bg-blue-900 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Prawa strona z nagłówkiem oraz tekstem */}
        <motion.div 
          className="w-full md:w-1/2 text-black text-lg"
          variants={textVariants}
        >
          <h1 className="text-4xl font-poppins font-bold mb-6 text-black">
            NOTOS Project
          </h1>
          <p className="font-poppins font-bold underline">Sector: Industry</p>
          <div className="font-poppins h-6"></div>
          <p>
            Migration of the SkySpark system with the Energy Twin plugin for the NOTOS project to a new infrastructure. Provision of an access service to the SkySpark system from the Energy Twin plugin, including communication with external hwac system and IoT devices using the MQTT protocol.
          </p>
        </motion.div>
      </motion.section>
    </motion.main>
  );
};

export default Skyspark;

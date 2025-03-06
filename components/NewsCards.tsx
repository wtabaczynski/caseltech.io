"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NewsCards = ({ img, title, link, buttonText }: { img: string, title: string, link: string, buttonText: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="flex justify-center w-full max-w-[400px]"
    >
      <div className="flex flex-col rounded-2xl bg-white shadow-secondary-1 w-full max-w-[400px]">
        {/* Obrazek – teraz większy */}
        <div className="relative overflow-hidden bg-cover bg-no-repeat h-[300px] w-full flex items-center justify-center">
          <img className="h-full w-full object-cover" src={img} alt={title} />
        </div>

        {/* Tekst i przycisk niżej */}
        <div className="p-6 bg-white text-gray-700 text-center">
          <h5 className="mb-4 text-xl font-poppins font-medium leading-tight">
            {title}
          </h5>
          <div className="flex justify-center mt-4">
            <Link href={link}>
              <button className="inline-block rounded border border-black bg-white px-6 py-2 text-xs font-poppins font-medium uppercase leading-normal text-black text-center transition-colors duration-300 hover:bg-indigo-900 hover:text-white hover:border-transparent">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCards;

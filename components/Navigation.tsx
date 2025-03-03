"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export const NavLinks = [
  { name: "Home", link: "/#intro" },
  { name: "About us", link: "/about-us" },
  { name: "Loyalty", link: "/loyalty" },
  { name: "Case studies", link: "/#newsroom" },
  { name: "Contact us", link: "/#contact-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // Zamknij menu po kliknięciu
  };

  return (
    <div className="w-full h-[65px] fixed flex flex-row items-center top-0 bg-transparent z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/#intro" scroll={true} className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[1px] hidden md:block text-white">
            Caseltech
          </span>
        </Link>
      </div>
      <div>
        {/* Przycisk hamburger menu */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            className="w-10 h-1 bg-white rounded origin-left"
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          ></motion.div>
          <motion.div
            className="w-6 h-1 bg-white rounded"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-white rounded origin-left"
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          ></motion.div>
        </button>

        {/* Menu nawigacji */}
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: open ? "0" : "100vw" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-[75%] md:w-[50%] h-screen bg-black text-white flex flex-col items-center justify-center space-y-8 text-2xl z-40"
        >
          {NavLinks.map((link) => (
            <Link key={link.name} href={link.link} onClick={handleLinkClick} className="hover:text-gray-400 transition duration-300">
              {link.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

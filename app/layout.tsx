"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStartTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <html lang="en">
      <head>
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="268031a5-99a2-4c10-abbe-2f4e2ac1c010"
          data-blockingmode="auto"
          type="text/javascript"
        ></script>
      </head>
      <body className="bg-white font-poppins">
        <Navbar />
        <AnimatePresence mode="wait">
          <main key={pathname} className="relative overflow-hidden">
            {children}
          </main>
        </AnimatePresence>
        <Navigation />
      </body>
    </html>
  );
}

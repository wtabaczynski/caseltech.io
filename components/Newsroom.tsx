/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";

const NewsCards = dynamic(() => import("@/components/NewsCards"), { ssr: false });

const newsData = [
  {
    img: "/otcf1.jpeg",
    title: "Caseltech's Innovative Sales Forecasting Solutions with OTCF SA",
    link: "/forecasting",
    buttonText: "Show more",
  },
  {
    img: "/4f1.jpeg",
    title: "Automated Stocking of Assortment in Physical Stores with 4F",
    link: "/logistic",
    buttonText: "Show more",
  },
  {
    img: "/okko.jpeg",
    title: "Fraud detection in the transaction data of the loyalty system - Galnaftogaz.",
    link: "/galnaftogaz",
    buttonText: "Show more",
  },
  {
    img: "/healthcare.jpeg",
    title: "Revolutionizing Medical Diagnostics with George Mason University",
    link: "/GMU",
    buttonText: "Show more",
  },
  {
    img: "/Skyspark.webp",
    title: "SkySpark environment with the Energy Twin extension for the industry - Naurotermika Spzoo.",
    link: "/skyspark",
    buttonText: "Show more",
  },
  {
    img: "/audit.jpeg",
    title: "Audit of the billing system performance and customer settlement process - BIK SA",
    link: "/Tmatic",
    buttonText: "Show more",
  },
];

const Newsroom = () => {
  return (
    <ScrollReveal>
      <section
        id="newsroom"
        className="max-container padding-container flex flex-col items-center gap-10 py-10 pb-32 bg-gradient-to-br from-indigo-900 to-blue-500 relative"
      >
        <h1 className="text-[50px] text-white font-semibold font-poppins text-center">
          Check out the latest Caseltech projects realizations
        </h1>

        {/* Karuzela Swiper */}
        <div className="relative w-full max-w-[1200px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3} // Domyślnie 3 slajdy na dużych ekranach
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Na telefonach 1 karta
              768: { slidesPerView: 2, spaceBetween: 15 }, // Na tabletach 2 karty
              1024: { slidesPerView: 3, spaceBetween: 20 }, // Na komputerach 3 karty
            }}
            className="w-full"
          >
            {newsData.map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center min-h-[500px]">
                <NewsCards {...card} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Strzałki do nawigacji */}
          <div className="swiper-button-prev-custom absolute left-[-80px] top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-4xl">
            &#10094;
          </div>
          <div className="swiper-button-next-custom absolute right-[-80px] top-1/2 transform -translate-y-1/2 cursor-pointer text-white text-4xl">
            &#10095;
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Newsroom;

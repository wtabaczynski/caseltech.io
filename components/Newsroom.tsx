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
    img: "/otcf1.jpeg",
    title: "Automated Stocking of Assortment in Physical Stores with 4F",
    link: "/logistic",
    buttonText: "Show more",
  },
  {
    img: "/Galnaftogaz.jpg",
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
        className="max-container padding-container flex flex-col items-center gap-10 py-10 pb-32 bg-indigo-900 relative"
      >
        <h1 className="text-[50px] text-white font-semibold text-center">
          Customer success stories
        </h1>

        {/* Karuzela Swiper */}
        <div className="relative w-full max-w-[1200px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
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

        <h2 className="text-[50px] text-white font-semibold text-center">
          Check out the latest news about Caseltech and project realizations
        </h2>
      </section>
    </ScrollReveal>
  );
};

export default Newsroom;

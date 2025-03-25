"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  "/otcf.png",
  "/GMU.png",
  "/BIK.png",
  "/okko.png",
  // "/T-matic.png",
];

const PartnersCarousel = () => {
  return (
    <div className="w-full bg-indigo-900 py-8 flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-4">They trusted us</h2>
      <div className="w-3/4">
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          modules={[Autoplay]}
          className="flex items-center"
        >
          {[...partners, ...partners].map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={logo}
                alt={`Partner ${index}`}
                width={150}
                height={50}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="mt-6 text-center text-lg w-3/4">
        Caseltech jako pionier w swojej dziedzinie rozpoczął współpracę z
        powyższymi partnerami.
      </p>
    </div>
  );
};

export default PartnersCarousel;

"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const TWE = dynamic(() => import("tw-elements"), { ssr: false });

const ProductCard = () => {
  useEffect(() => {
    const init = async () => {
      const { ProductCard, initTWE } = await import("tw-elements");
      initTWE({ ProductCard });
    };
    init();
  }, []);
  return (
    <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img className="rounded-t-lg" src="loy.jpeg" alt="" />
        <a href="#">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6 text-gray-700 dark:text-white">
        <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">
          Our Loyalty Program
        </h5>
        <p className="mb-4 text-base text-gray-700">
          Grow your business by creating relationships with your customers.
        </p>
        <Link
          href="/loyalty"
          type="button"
          className="inline-block rounded border-2 border-black text-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-transparent hover:bg-violet-600 hover:text-white focus:bg-violet-600 focus:text-white focus:outline-none focus:ring-0 active:bg-violet-600"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

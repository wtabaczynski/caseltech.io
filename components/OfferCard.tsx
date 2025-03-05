"use client"
import { useEffect } from "react"
import dynamic from 'next/dynamic';

const TWE = dynamic(() => import('tw-elements'), { ssr: false });

const OfferCard = () => {
    useEffect(() => {
        const init = async () => {
            const { OfferCard, initTWE } = await import("tw-elements");
            initTWE({ OfferCard});
        };
        init();
    }, []);
  return (
    <div
      className="block max-w-[30rem] rounded-lg bg-white text-black shadow-secondary-1 dark:bg-surface-dark dark:text-black">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="loy1.jpeg"
          alt="" />
      </div>
      <div className="p-6">
        <p className="text-base font-poppins text-black">
          Analyze data on active campaigns and keep margins at appropriate levels.
        </p>
      </div>
    </div>
  );
};

export default OfferCard;

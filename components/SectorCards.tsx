"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type SectorCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  isMiddle?: boolean;
};

const SectorCard = ({
  title,
  description,
  image,
  link,
  isMiddle,
}: SectorCardProps) => {
  return (
    <div
      className={`block rounded-2xl bg-white shadow-secondary-1 dark:bg-surface-dark ${
        isMiddle ? "w-70 h-96" : "w-70 h-126"
      } flex flex-col`}
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat flex-1">
        <img
          className="rounded-t-2xl w-full h-40 object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-6 text-gray-700 dark:text-white text-center flex flex-col flex-1 justify-between">
        <div>
          <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800 dark:text-white">
            {title}
          </h5>
          <p className="mb-4 text-base text-gray-700 dark:text-gray-500">
            {description}
          </p>
        </div>
        <Link href={link}>
          <button className="mt-4 flex mx-auto items-center justify-center gap-2 rounded border border-black bg-white px-6 py-2 text-black font-medium text-base transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:border-transparent">
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectorCard;

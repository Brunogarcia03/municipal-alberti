"use client";

import Person from "@/assets/images/Person.webp";
import Image from "next/image";

const CardPerson = () => {
  return (
    <div className="relative w-full cursor-pointer group">
      <picture className="">
        <Image
          src={Person}
          width={1000}
          height={500}
          alt="Imagen de: "
          className="w-full h-full object-cover rounded-md md:grayscale-75 group-hover:grayscale-0 transition-discrete duration-500"
        />
        <div className="mt-[1vw] flex items-center justify-between">
          <div>
            <h6 className="font-bold text-base md:text-[1.25rem] leading-[1.3]">
              Andres Norambuena
            </h6>
            <span className="uppercase text-sm md:text-base">
              Ceo - partner
            </span>
          </div>
          <span className="p-2 border-2 border-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#f3f1ed"
            >
              <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
            </svg>
          </span>
        </div>
      </picture>
    </div>
  );
};

export default CardPerson;

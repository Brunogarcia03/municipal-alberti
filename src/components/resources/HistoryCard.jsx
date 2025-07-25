"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const HistoryCard = ({ left = false }) => {
  return (
    <Link
      href="#"
      className={twMerge(
        "relative group min-h-[350px] max-h-[350px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] h-full w-[90vw] md:w-[35vw] lg:w-[30vw] mt-[5vh] md:mt-[-20vh] lg:mt-[-25vh]    ",
        left ? "md:mr-[38vw] lg:mr-[34vw]" : "md:ml-[38vw] lg:ml-[34vw]"
      )}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-md border border-white"
        alt=""
        src="https://witnessestohistory.museeholocauste.ca/app/uploads/2020/08/arthur_schwartz_photo_7616.jpg"
      />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 border border-white"
        alt=""
        src="https://witnessestohistory.museeholocauste.ca/app/uploads/2020/08/arthur_schwartz_portrait_7591.jpg"
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-1 px-3 w-full text-center text-white text-lg bg-black/10 backdrop-blur-[1px] font-bold">
        <h2>A unifying photomontage</h2>
        <h2 className="opacity-0 group-hover:opacity-100 transition-all duration-500">
          Arthur Schwartz
        </h2>
      </div>
    </Link>
  );
};

export default HistoryCard;

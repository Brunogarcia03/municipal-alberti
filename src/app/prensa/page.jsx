"use client";

import React, { useState } from "react";

import Button from "@/components/ui/Button";
import Article from "@/components/ui/Article";
import Footer from "@/components/resources/Footer";

const categories = [
  "Salud",
  "Obras Públicas",
  "Cultura",
  "Educación",
  "Deportes",
  "Seguridad",
  "Ambiente",
  "Desarrollo Social",
  "Economía",
];

const page = () => {
  const [selected, setSelected] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem+40px)] md:pt-[calc(13rem+40px)] w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold leading-[1.15] text-center relative">
            <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
              Alberti al Día
            </span>
          </h1>
          <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4">
            Enterate de las últimas novedades, comunicados oficiales, eventos y
            acciones del gobierno local.
          </p>
        </div>
      </section>

      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[3.5rem] md:mt-[7.5rem] mx-auto">
        <div className="flex items-center gap-1 md:gap-3 relative overflow-x-scroll pb-1.5">
          <Button
            className={`text-base sm:text-lg md:text-[1.5rem] leading-[1.3] px-2 py-1 rounded-md ${
              selected === 0 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(0)}
          >
            Todas
          </Button>
          {categories.map((category, index) => (
            <Button
              className={`text-base sm:text-lg md:text-[1.5rem] leading-[1.3] px-2 py-1 rounded-md ${
                selected === index + 1 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(index + 1)}
              key={index}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="mt-[1.56em] w-full h-[1px] bg-gray" />
        <div className="pt-[1.5em] px-[1rem] sm:px-[1.75rem] grid grid-cols-1 auto-cols-fr">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </section>
      <Footer dark />
    </main>
  );
};

export default page;

"use client";

import React, { useState } from "react";

import Button from "@/components/ui/Button";
import Article from "@/components/ui/Article";
import Footer from "@/components/resources/Footer";

const page = () => {
  const [selected, setSelected] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-white text-black white-container">
      <section className="pt-[7.5rem] md:pt-[10rem] max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-[3.3em] md:text-[4.9em] lg:text-[6.25rem] z-40 text-center leading-[1.1] font-bold">
            <span className="my-4 px-4 bg-gray rounded-2xl">Prensa</span> y{" "}
            <br />
            Comunicación
          </h1>
        </div>
      </section>
      <section className="relative w-[95vw] md:w-[98vw] max-w-full md:max-w-[1560px] mt-[3.5rem] md:mt-[7.5rem] mx-auto">
        <div className="absolute top-[86px] left-0 w-full h-[1px] bg-gray" />
        <div className="flex items-center gap-1 md:gap-3 relative overflow-x-scroll pb-1">
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 0 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(0)}
          >
            Todas
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 1 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(1)}
          >
            Salud
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 2 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(2)}
          >
            Obras Públicas
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 3 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(3)}
          >
            Cultura
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 1 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(1)}
          >
            Salud
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 2 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(2)}
          >
            Obras Públicas
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 3 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(3)}
          >
            Cultura
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 1 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(1)}
          >
            Salud
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 2 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(2)}
          >
            Obras Públicas
          </Button>
          <Button
            className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
              selected === 3 && "bg-white text-black border-black"
            }`}
            onClick={() => setSelected(3)}
          >
            Cultura
          </Button>
        </div>
        <div className="mt-[1.56em] pt-[1.5em] px-[1rem] sm:px-[1.75rem] grid grid-cols-1 auto-cols-fr">
          <Article />
          <Article />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;

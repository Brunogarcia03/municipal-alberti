"use client";

import CardPerson from "@/components/resources/CardPerson";
import Footer from "@/components/resources/Footer";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { useState } from "react";

const page = () => {
  const [selected, setSelected] = useState(0);
  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black/90">
      <section className="pt-[10rem] md:pt-[13rem] w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold leading-[1.15] text-center relative">
            <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl uppercase text-blue">
              Nuestro gobierno
            </span>
          </h1>
          <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4">
            Conoce las diferentes caras detrás del municipio de Alberti
          </p>
        </div>
      </section>
      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[3.5rem] md:mt-[7.5rem] mx-auto">
        <div className="relative">
          <div className="flex items-center gap-3 pb-1 relative overflow-x-scroll sm:overflow-hidden overflow-y-hidden">
            <Button
              className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-2 py-1 rounded-md ${
                selected === 0 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(0)}
            >
              Todos
            </Button>
            <Button
              className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-2 py-1 rounded-md ${
                selected === 1 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(1)}
            >
              Secretarías
            </Button>
            <Button
              className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-2 py-1 rounded-md ${
                selected === 2 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(2)}
            >
              Direcciones
            </Button>
          </div>

          <div className="mt-[1.56em] w-full h-[1px] bg-gray" />
          <div className="pt-[1.5em]">
            <div className="grid gap-5 w-[80vw] mx-auto sm:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-fr content-start items-start">
              <CardPerson />
              <CardPerson />
              <CardPerson />
              <CardPerson />
              <CardPerson />
            </div>
          </div>
        </div>
      </section>
      <Footer dark />
    </main>
  );
};

export default page;

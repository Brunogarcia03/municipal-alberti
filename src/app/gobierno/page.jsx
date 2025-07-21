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
      <Title
        title1={"Conocé nuestro"}
        title2={"Gobierno"}
        subTitle={"Conoce las diferentes caras detrás del municipio de Alberti"}
      />
      <section className="relative w-[95vw] md:w-[98vw] max-w-full md:max-w-[1560px] mx-auto mb-[1.56em] pb-[1.5em]">
        <div className="absolute top-[86px] left-0 w-full h-[1px] bg-gray" />
        <div className="relative">
          <div className="flex items-center gap-3 pb-1 relative overflow-x-scroll sm:overflow-hidden overflow-y-hidden">
            <Button
              className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
                selected === 0 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(0)}
            >
              Todos
            </Button>
            <Button
              className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
                selected === 1 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(1)}
            >
              Intendente
            </Button>
            <Button
              className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
                selected === 2 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(2)}
            >
              Secretarías
            </Button>
            <Button
              className={`text-base sm:text-lg md:text-[1.75rem] leading-[1.3] px-6 py-3 rounded-md ${
                selected === 3 && "bg-white text-black border-black"
              }`}
              onClick={() => setSelected(3)}
            >
              Direcciones
            </Button>
          </div>
          <div className="mt-[1.56em] pt-[1.5em]">
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

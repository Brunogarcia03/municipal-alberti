import Contact from "@/components/resources/Contact";
import Footer from "@/components/resources/Footer";
import Title from "@/components/ui/Title";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black/90">
      <section className="pt-[10rem] md:pt-[13rem] w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1
            className="font-bold leading-[1.15] text-center relative text-2xl md:text-4xl lg:text-5xl"
            style={{
              lineHeight: "1.15",
              fontWeight: 700,
              textWrap: "balance",
            }}
          >
            <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl leading-[] uppercase text-blue">
              Contanos Algo
            </span>
            <span className="text-gray"></span>
          </h1>
          <p className="leading-[1.1] text-base md:text-lg lg:text-xl max-w-3xl text-center mt-4">
            Estamos para ayudarte podes visitarnos, comunicarte vía teléfono o
            con nuestro formulario online
          </p>
        </div>
        <div className="h-[7.5rem]"></div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default page;

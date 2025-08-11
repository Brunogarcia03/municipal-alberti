import Footer from "@/components/resources/Footer";
import HistoryCard from "@/components/resources/HistoryCard";
import Lines from "@/components/ui/anim/Lines";
import Words from "@/components/ui/anim/Words";

import { getAllHeritage } from "@/utils/api/global.api";

export default async function page() {
  const patrimonies = await getAllHeritage();

  return (
    <main className="flex flex-col items-center w-full h-full bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem+40px)] md:pt-[calc(13rem+40px)] w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto white-container">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Words yPercent={110}>
            <h1 className="font-bold leading-[1.15] text-center relative overflow-hidden">
              <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
                Alberti y su Historia
              </span>
            </h1>
          </Words>

          <Lines yPercent={300}>
            <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4 overflow-hidden">
              La historia de nuestra ciudad desde su fundación, su gente, las
              localidades que integran el Partido, sus edificios, Intendentes a
              lo largo de la historia y todo lo que tenes que saber de nuestro
              querido ALBERTI.
            </p>
          </Lines>
        </div>
      </section>

      <section className="relative flex flex-col justify-start gap-8 mt-[8vh] md:mt-[10vh] py-[5vh] before:absolute before:left-[10%] md:before:left-[calc(50%-1px)] before:top-0 before:content-[''] before:w-0.5 before:bg-black/50 before:rounded-md before:h-full before:z-0 white-container">
        <div className="py-8 md:py-24" />
        <div className="flex flex-col gap-y-5 px-5 items-center z-10">
          {patrimonies.map((patrimony, index) => (
            <HistoryCard
              key={index}
              left={index % 2 === 0 ? false : true}
              data={patrimony}
            />
          ))}
        </div>
      </section>
      <Footer dark />
    </main>
  );
}

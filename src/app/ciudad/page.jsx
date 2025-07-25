import Footer from "@/components/resources/Footer";
import HistoryCard from "@/components/resources/HistoryCard";

export default function page() {
  return (
    <main className="flex flex-col items-center w-full h-full overflow-hidden bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem+40px)] md:pt-[calc(13rem+40px)] w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold leading-[1.15] text-center relative">
            <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
              Alberti y su Historia
            </span>
          </h1>
          <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4">
            La historia de nuestra ciudad desde su fundación, su gente, las
            localidades que integran el Partido, sus edificios, Intendentes a lo
            largo de la historia y todo lo que tenes que saber de nuestro
            querido ALBERTI.
          </p>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-start gap-8 mt-[8vh] md:mt-[10vh] py-[5vh] before:absolute before:left-[10%] md:before:left-[calc(50%-1px)] before:top-0 before:content-[''] before:w-0.5 before:bg-black/50 before:rounded-md before:h-full before:z-0">
        <div className="ml-[18%] md:ml-[52%] mr-[5vw] md:mr-[1vw] lg:mr-[8vw]">
          <p className="text-black/80 leading-[1.3] md:leading-[1.5] lg:leading-[1.6] text-base md:text-xl lg:text-2xl">
            According to survivors, vestiges of life before the Holocaust are
            hard to find. The few carefully guarded objects, documents, and
            photographs that were smuggled out or narrowly escaped destruction
            represent some of the most personal of memories: their origins.
            Family, particularly parents who were lost, occupy a special place
            among those memories. Their homelands, their houses, and their
            villages are also at the heart of cherished recollections.
          </p>
        </div>
        <div className="flex flex-col gap-y-5 px-5 items-center z-10">
          <HistoryCard left />
          <HistoryCard />
        </div>
      </section>
      <Footer dark />
    </main>
  );
}

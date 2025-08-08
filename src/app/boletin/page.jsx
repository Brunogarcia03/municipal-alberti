import Footer from "@/components/resources/Footer";
import SliderDraggable from "@/components/resources/SliderDraggable";
import Lines from "@/components/ui/anim/Lines";
import Words from "@/components/ui/anim/Words";
import Button from "@/components/ui/Button";
import {
  getAllDecrees,
  getAllOrdinances,
  getAllPublication,
  getAllDDJJ,
} from "@/utils/api/global.api";
import { renderContent, formatDate } from "@/utils/tools";
import Link from "next/link";

const page = async ({ params }) => {
  const ordinances = await getAllOrdinances();
  const decrees = await getAllDecrees();
  const ddjj = await getAllDDJJ();
  const publication = await getAllPublication();

  return (
    <main className="flex flex-col items-center w-full h-full overflow-hidden bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem+40px)] md:pt-[calc(13rem+40px)] w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Words yPercent={110}>
            <h1 className="font-bold leading-[1.15] text-center relative overflow-hidden">
              <span className="md:blocvk w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
                Boletín Municipal
              </span>
            </h1>
          </Words>

          <Lines yPercent={300}>
            <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4 overflow-hidden">
              Aquí podés acceder de forma rápida a todas las publicaciones
              oficiales de la Municipalidad de Alberti. Para que siempre estés
              al día con la normativa y la gestión pública.
            </p>
          </Lines>
        </div>
      </section>
      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[3.5rem] md:mt-[7.5rem] mx-auto overflow-hidden">
        <SliderDraggable
          title={"Ordenanzas"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00438b"
              className="size-[20px] md:size-[22px] lg:size-[24px]"
            >
              <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
            </svg>
          }
          data={ordinances}
          classNameCard="min-h-[18rem] md:min-h-[20rem] lg:min-h-[22rem] max-w-[65vw] md:max-w-[50vw] lg:max-w-[35vw]"
        />
      </section>
      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[1.5rem] md:mt-[5.5rem] mx-auto overflow-hidden">
        <SliderDraggable
          title={"Decretos"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00438b"
            >
              <path d="M80-120v-66.67h366.67v-471.66q-26-9-46-29t-29-46H223.33l123.34 294.66Q346-392 307.33-359.33q-38.66 32.66-94 32.66-55.33 0-94-32.66Q80.67-392 80-438.67l123.33-294.66H120V-800h251.67q12-35 41.66-57.5Q443-880 480-880t66.67 22.5q29.66 22.5 41.66 57.5H840v66.67h-83.33L880-438.67q-.67 46.67-39.33 79.34-38.67 32.66-94 32.66-55.34 0-94-32.66Q614-392 613.33-438.67l123.34-294.66H588.33q-9 26-29 46t-46 29v471.66H880V-120H80Zm591.67-320h150l-75-180.67-75 180.67Zm-533.34 0h150l-75-180.67-75 180.67ZM480-720q19.67 0 33.17-13.83 13.5-13.84 13.5-32.84 0-19.66-13.5-33.16-13.5-13.5-33.17-13.5-19 0-32.83 13.5-13.84 13.5-13.84 33.16 0 19 13.84 32.84Q461-720 480-720Z" />
            </svg>
          }
          data={decrees}
        />
      </section>

      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[1.5rem] md:mt-[5.5rem] mx-auto overflow-hidden">
        <SliderDraggable
          title={"Declaraciones Juradas"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#00438b"
            >
              <path d="M186.67-813.33V-537.67-540v393.33-666.66 190.66-190.66Zm0 733.33q-27 0-46.84-19.83Q120-119.67 120-146.67v-666.66q0-27 19.83-46.84Q159.67-880 186.67-880H534l226 226v136q-15.67-7.33-32.33-12.17-16.67-4.83-34.34-7.5v-85H500.67v-190.66h-314v666.66H477q18.67 22 41.67 38.84Q541.67-91 569-80H186.67ZM660-193.33q45.33 0 76-30.67t30.67-76q0-45.33-30.67-76t-76-30.67q-45.33 0-76 30.67t-30.67 76q0 45.33 30.67 76t76 30.67Zm204 144L756.56-156.67q-20.89 14-45.39 22t-51.17 8q-72.22 0-122.78-50.58-50.55-50.57-50.55-122.83 0-72.25 50.58-122.75 50.57-50.5 122.83-50.5 72.25 0 122.75 50.55 50.5 50.56 50.5 122.78 0 26.67-8 51.17t-22 45.39L910.67-96 864-49.33Z" />
            </svg>
          }
          data={ddjj}
          classNameCard="min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] min-w-[45vw] md:min-w-[50vw] lg:min-w-[35vw]"
        />
      </section>

      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[1.5rem] md:mt-[5.5rem] mx-auto overflow-hidden">
        <Words>
          <h3 className="text-base sm:text-lg md:text-[1.5rem] font-bold leading-[1.3] px-2 py-1 overflow-hidden">
            Publicaciones de Ley
          </h3>
        </Words>
        <div className="w-full h-[1px] bg-gray" />
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-[1.56em] pb-2 gap-4 w-full px-2 sm:px-4">
          {publication.map((p, index) => (
            <div
              key={index}
              className="relative flex flex-col p-[1.5em] sm:p-[2.5em] items-start gap-4 h-full bg-white rounded-md shadow-sm shadow-blue group w-full"
            >
              <div className="flex items-center justify-between w-full mb-[1.5em]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#00438b"
                >
                  <path d="M160-120v-66.67h480V-120H160Zm223.33-206L160-549.33 234.67-626 460-402.67 383.33-326Zm254-254L414-805.33 490.67-880 714-656.67 637.33-580Zm196 420L302-691.33 348.67-738 880-206.67 833.33-160Z" />
                </svg>
                <p className="italic text-xs md:text-sm lg:text-base">
                  {formatDate(p.fecha)}
                </p>
              </div>
              <h6 className="text-base sm:text-lg md:text-[1.25rem] font-bold mb-[1em] w-full">
                {p.titulo}
              </h6>
              <div className="flex flex-col gap-y-1 w-full md:max-w-[90%]">
                {renderContent(p.contenido)}
              </div>
              {p.archivo && (
                <Link
                  className="w-full mt-4"
                  href={process.env.NEXT_PUBLIC_BACKEND_URL + p.archivo.url}
                  target="_blank"
                >
                  <Button
                    className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                    children="Ver archivo"
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer dark />
    </main>
  );
};

export default page;

import Footer from "@/components/resources/Footer";
import Lines from "@/components/ui/anim/Lines";
import Words from "@/components/ui/anim/Words";
import Button from "@/components/ui/Button";
import { getAllDecrees } from "@/utils/api/global.api";
import { formatDate } from "@/utils/tools";
import Link from "next/link";
import DocumentsGrid from "../_components/DocumentsGrid";

const page = async () => {
  const decrees = await getAllDecrees();
  return (
    <main className="flex flex-col items-center w-full h-full overflow-hidden bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem+40px)] md:pt-[calc(13rem+40px)] w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Words yPercent={110}>
            <h1 className="font-bold leading-[1.15] text-center relative overflow-hidden max-w-5xl">
              <span className="md:blocvk w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
                Boletín Municipal - Decretos
              </span>
            </h1>
          </Words>

          <Lines yPercent={300}>
            <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-3xl text-center mt-4 overflow-hidden">
              Aquí podés acceder de forma rápida a todas las publicaciones
              oficiales de la Municipalidad de Alberti. Para que siempre estés
              al día con la normativa y la gestión pública.
            </p>
          </Lines>
        </div>
      </section>
      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] my-[3.5rem] md:my-[7.5rem] mx-auto">
        <DocumentsGrid
          items={decrees}
          emptyText="No hay decretos para este período"
        />
      </section>
      <Footer dark />
    </main>
  );
};

export default page;

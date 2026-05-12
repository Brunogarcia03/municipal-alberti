import Footer from "@/components/resources/Footer";
import Lines from "@/components/ui/anim/Lines";
import Words from "@/components/ui/anim/Words";
import { getAllDecrees } from "@/utils/api/global.api";
import DocumentsGrid from "../_components/DocumentsGrid";

const page = async () => {
  const res = await getAllDecrees(1, 12);

  return (
    <main className="flex flex-col items-center w-full h-full overflow-hidden bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem+40px)] md:pt-[calc(13rem+40px)] w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Words yPercent={110}>
            <h1 className="font-bold text-center relative overflow-hidden max-w-5xl">
              <span className="md:block w-full text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1] italic uppercase text-blue">
                Boletín Municipal - Decretos
              </span>
            </h1>
          </Words>

          <Lines yPercent={300}>
            <p
              className="leading-[1.1] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl text-center mt-4 w-full text-pretty overflow-hidden"
              aria-hidden="true"
            >
              Aquí podés acceder de forma rápida a todas las publicaciones
              oficiales de la Municipalidad de Alberti. Para que siempre estés
              al día con la normativa y la gestión pública.
            </p>
          </Lines>
        </div>
      </section>
      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] my-[3.5rem] md:my-[7.5rem] mx-auto">
        <DocumentsGrid
          initialItems={res.data}
          initialPage={1}
          // pageCount={res.meta.pagination.pageCount}
          emptyText="No hay decretos para este período"
        />
      </section>
      <Footer dark />
    </main>
  );
};

export default page;

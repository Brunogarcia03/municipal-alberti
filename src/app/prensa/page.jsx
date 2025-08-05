import Footer from "@/components/resources/Footer";
import { getAllCategories, getAllNews } from "@/utils/api/global.api";
import FilterProvider from "@/providers/Filter-provider";
import Words from "@/components/ui/anim/Words";
import Lines from "@/components/ui/anim/Lines";

const page = async () => {
  const categories = await getAllCategories();
  const news = await getAllNews();

  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem+40px)] md:pt-[calc(13rem+40px)] w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Words yPercent={110}>
            <h1 className="font-bold leading-[1.15] text-center relative overflow-hidden">
              <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
                Alberti al Día
              </span>
            </h1>
          </Words>

          <Lines yPercent={300}>
            <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4 overflow-hidden">
              Enterate de las últimas novedades, comunicados oficiales, eventos
              y acciones del gobierno local.
            </p>
          </Lines>
        </div>
      </section>

      <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[3.5rem] md:mt-[7.5rem] mx-auto">
        <FilterProvider categories={categories} news={news} />
      </section>
      <Footer dark />
    </main>
  );
};

export default page;

import { getOneNews } from "@/utils/api/global.api";
import NewsContentRenderer from "@/providers/NewsContentRenderer";
import { formatDate } from "@/utils/tools";
import Image from "next/image";
import Footer from "@/components/resources/Footer";
import LastNews from "@/components/resources/LastNews";

import Words from "@/components/ui/anim/Words";

export default async function Page({ params }) {
  const news = await getOneNews(params.slug);

  const fecha = formatDate(news[0].createdAt);

  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-white text-black white-container -mt-10">
      <section className="pt-[calc(10rem)] md:pt-[calc(13rem)] w-[90vw] sm:w-[85vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between w-full text-gray mb-4">
            <p>{fecha}</p>
            <span className="inline-flex gap-x-2">Compartir</span>
          </div>
          <Words yPercent={110}>
            <h1 className="font-light leading-[1.15] relative w-full md:w-[80vw] mb-4 text-2xl md:text-4xl lg:text-5xl italic uppercase text-blue overflow-hidden">
              {news[0].titulo}
            </h1>
          </Words>
          <picture className="w-full">
            <Image
              src={process.env.NEXT_PUBLIC_BACKEND_URL + news[0].imagen.url}
              alt={`Imagen principal de la noticia ${news[0].titulo}`}
              width={news[0].imagen.width}
              height={news[0].imagen.height}
              className="w-full max-h-[calc(0.25rem*140)] rounded-md object-cover mt-3"
            />
          </picture>
        </div>

        <div className="w-full px-2 h-[1px] bg-gray rounded-md my-[1rem]" />

        <div className="prose prose-p:prose-lg prose-h2:prose-xl prose-h1:prose-2xl max-w-5xl mx-auto my-5">
          <NewsContentRenderer content={news[0].contenido} />
        </div>
      </section>

      <section className="w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto my-12 md:my-16">
        <LastNews currentSlug={params.slug} />
      </section>

      <Footer dark />
    </main>
  );
}

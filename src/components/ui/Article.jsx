import Image from "next/image";
import Link from "next/link";

import { formatDate, getFullUrl, getReadingTime } from "@/utils/tools";
import BlurOut from "./anim/BlurOut";

function Article({ news = "" }) {
  const tiempoLectura = getReadingTime(news.contenido);
  const fecha = formatDate(news.createdAt);
  const categoria = news.categorias[0]?.nombre || "Sin categoría";

  return (
    <BlurOut>
      <Link
        href={`/prensa/${news.slug}`}
        className="relative flex flex-col md:flex-row items-stretch justify-between w-full pb-[2.5em] mb-[2.5em] border-b border-gray group"
      >
        <div className="flex flex-col items-stretch justify-between w-full md:w-[50%]">
          <h2 className="font-bold text-[1.3em] sm:text-[2.25rem] leading-[1.1] tracking-[-.5px]">
            {news.titulo}
          </h2>
          <div className="flex items-center mt-2">
            <p className="text-base sm:text-[1rem] text-gray">{fecha}</p>
            <div className="w-1.5 h-1.5 mx-2 rounded-full bg-blue" />
            <p className="text-base sm:text-[1rem] text-gray">
              {tiempoLectura} Min
            </p>
          </div>
        </div>

        <div className="w-full md:w-[32%] lg:w-[35%] h-auto md:h-[230px] my-[1.5em] md:my-0">
          <div className="relative w-full h-[100%] overflow-hidden rounded-md group-hover:rounded-2xl transition-discrete duration-500">
            <Image
              width={1000}
              height={667}
              src={getFullUrl(news.imagen.url)}
              alt="Imagen de ejemplo"
              className="w-full h-full md:scale-105 group-hover:scale-100 transition-discrete duration-500 object-cover"
            />
            <div className="hidden absolute md:flex items-center justify-center gap-2 inset-0 w-full h-full bg-black/0 group-hover:bg-black/40 text-white backdrop-blur-none group-hover:backdrop-blur-[1px] z-10 transition-all duration-300">
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[1.375rem] leading-[1.4]">Leer</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#f3f1ed"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[10%] flex md:flex-col-reverse items-center md:text-end md:items-end justify-between">
          <p className="flex flex-col text-base sm:text-[1rem] leading-[1.4] text-gray">
            Categoría: <span className="font-bold">{categoria}</span>
          </p>
          <span className="p-1 border-2 border-gray group-hover:bg-black group-hover:border-white transition-colors duration-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-gray group-hover:fill-white transition-colors duration-300"
            >
              <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
            </svg>
          </span>
        </div>
      </Link>
    </BlurOut>
  );
}

export default Article;

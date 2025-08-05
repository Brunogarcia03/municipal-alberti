import { getAllNews } from "@/utils/api/global.api";
import { formatDate } from "@/utils/tools";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import BlurOut from "../ui/anim/BlurOut";

const LastNews = async ({ currentSlug }) => {
  const { data } = await getAllNews();

  const filtered = data.filter((n) => n.slug !== currentSlug).slice(0, 3);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
        <div className="flex flex-row md:flex-col items-center md:items-start justify-between w-full md:w-[22%] mb-4 md:mb-0 h-full">
          <h2 className="text-[2.5rem] md:text-[4.5rem] leading-[.93] tracking-[-1.5px] w-full">
            Descrubrí más
          </h2>
          <div className="flex items-center md:mt-[1.5em]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#212121"
              className="w-[3.75em] h-[3.75em]"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-8 md:gap-4">
          {filtered.map((item, i) => (
            <BlurOut key={item.slug}>
              <Link
                href={`/prensa/${item.slug}`}
                className={twMerge(
                  "relative w-full group overflow-hidden",
                  i === 0 ? "md:w-[38%]" : "md:w-[20%]"
                )}
              >
                <picture className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-2">
                  <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_URL + item.imagen.url}
                    alt={`Imagen principal de la noticia ${item.titulo}`}
                    width={item.imagen.width}
                    height={item.imagen.height}
                    className="object-cover rounded-md"
                  />
                  <div className="hidden absolute md:flex items-center justify-center gap-2 inset-0 w-full h-full bg-black/0 group-hover:bg-black/40 text-white backdrop-blur-none group-hover:backdrop-blur-[1px] z-10 transition-all duration-300 rounded-md">
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
                </picture>
                <h3 className="text-[1.375rem] leading-[1.4]">{item.titulo}</h3>
                <div className="flex flex-row md:flex-col items-center md:items-start justify-between gap-1 border-t-black md:mt-4 md:pt-4">
                  <p className="text-gray text-[.8rem]">
                    {formatDate(item.createdAt)}
                  </p>
                  <p className="text-black">{item.categorias[0]?.nombre}</p>
                </div>
              </Link>
            </BlurOut>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastNews;

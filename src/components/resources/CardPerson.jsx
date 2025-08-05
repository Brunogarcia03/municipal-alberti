"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/dist/lenis-react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { renderContent } from "@/utils/tools";

const CardPerson = ({ official, meta, index }) => {
  const [open, setOpen] = useState(null);

  const Lenis = useLenis();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (open) {
      // Agregar clases que bloquean el scroll
      html.classList.add("lenis-stopped", "-no-scroll");
      body.style.overflow = "hidden";

      Lenis?.stop();
    } else {
      // Remover las clases y restaurar scroll
      html.classList.remove("lenis-stopped", "-no-scroll");
      body.style.overflow = "";

      Lenis?.start();
    }
  }, [open]);

  return (
    <>
      <div className="relative w-full cursor-pointer group">
        <picture
          className={`${open ? "pointer-events-none" : "pointer-events-auto"}`}
          onClick={() => setOpen(true)}
        >
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_URL + official.imagen.url}
            width={1000}
            height={500}
            alt="Imagen de: "
            className="w-full h-full object-cover rounded-md md:grayscale-75 group-hover:grayscale-0 transition-discrete duration-500"
          />
          <div className="mt-[1vw] flex items-center justify-between">
            <div>
              <h6 className="font-bold text-base md:text-[1.25rem] leading-[1.3]">
                {official.nombre}
              </h6>
              <span className="uppercase text-sm">{official.cargo}</span>
            </div>
            <span className="p-2 border-2 border-white group-hover:bg-white transition-colors duration-300 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-white group-hover:fill-black transition-colors duration-300"
              >
                <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
              </svg>
            </span>
          </div>
        </picture>
      </div>
      {open && (
        <section
          className={
            "fixed top-0 left-0 flex items-center justify-center md:justify-end w-full h-full z-[999] transition-all duration-500 p-[2.5vw] md:p-2"
          }
          onClick={() => setOpen(false)}
        >
          <div
            id="scroller-modal"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              "relative w-full max-h-[95vh] md:w-[65vw] lg:w-[50vw] rounded-md bg-black p-[5vw] md:p-[2vw] overflow-y-auto overscroll-y-auto z-[1000]",
              open ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            {/* Header modal */}
            <div className="grid grid-cols-3 items-center justify-between w-full border-b pb-[5vw] md:pb-[2vw] border-white z-10">
              <div className="flex gap-1">
                <button className="p-2 border-2 border-white rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e3e3e3"
                  >
                    <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
                  </svg>
                </button>
              </div>
              <span className="text-center font-bold w-full">
                {index + 1} - {meta.pagination.total}
              </span>
              <div className="flex items-center justify-end w-full">
                <button
                  className="p-2 border-2 border-white group hover:bg-white transition-colors duration-300 rounded-md cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-white group-hover:fill-black"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Hero modal */}
            <div className="flex flex-col md:flex-row gap-[10vw] md:gap-[2vw] my-[10vw] md:my-[2.5vw] pb-[2vw] border-b border-white overflow-hidden">
              <div className="flex flex-col items-center justify-between md:gap-y-[5vw] md:w-1/2">
                <h4 className="text-[10vw] md:text-[2.5vw] text-center md:text-start w-full font-bold leading-[1.1]">
                  {official.nombre}
                </h4>
                <div className="hidden md:flex items-end justify-start h-full gap-2.5">
                  {official.instagram && (
                    <Link
                      href={official.instagram}
                      className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                    >
                      Instagram
                    </Link>
                  )}
                  {official.email && (
                    <Link
                      href={official.email}
                      className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                    >
                      Email
                    </Link>
                  )}
                </div>
              </div>

              <picture className="flex flex-col items-center justify-center w-full h-full">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_URL + official.imagen.url
                  }
                  width={1000}
                  height={500}
                  alt="Imagen de: "
                  className="w-full h-full object-cover rounded-md grayscale-0 transition-discrete duration-500"
                />
              </picture>
              <div className="flex md:hidden items-end justify-start w-full gap-2.5">
                {official.instagram && (
                  <Link
                    href={official.instagram}
                    className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                  >
                    Instagram
                  </Link>
                )}
                {official.email && (
                  <Link
                    href={official.email}
                    className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                  >
                    Email
                  </Link>
                )}
              </div>
            </div>

            {/* Body modal */}
            <div className="text-[1em] leading-[1.5] w-full">
              <h2 className="text-xl font-bold mt-4 mb-2">{official.cargo}</h2>
              {renderContent(official.contenido)}
            </div>

            <div className="mt-[1em] text-[1em] leading-[1.3] w-full">
              <Link
                href={
                  process.env.NEXT_PUBLIC_BACKEND_URL +
                  official.declaracion_jurada.archivo.url
                }
                target="_blank"
                className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
              >
                Declaración Jurada
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CardPerson;

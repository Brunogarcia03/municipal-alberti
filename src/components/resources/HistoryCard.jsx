"use client";

import { twMerge } from "tailwind-merge";
import BlurOut from "../ui/anim/BlurOut";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/dist/lenis-react";
import Image from "next/image";
import { renderContent } from "@/utils/tools";
import Link from "next/link";

const HistoryCard = ({ left = false, data }) => {
  const [openModal, setOpenModal] = useState(false);

  const Lenis = useLenis();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const header = document.getElementById("main-header");

    if (openModal) {
      html.classList.add("lenis-stopped", "-no-scroll");
      body.style.overflow = "hidden";
      Lenis?.stop();
      if (header) header.classList.add("hidden");
    } else {
      html.classList.remove("lenis-stopped", "-no-scroll");
      body.style.overflow = "";
      Lenis?.start();
      if (header) header.classList.remove("hidden");
    }
  }, [openModal, Lenis]);

  return (
    <>
      <BlurOut delay={0.75}>
        <div
          className={twMerge(
            "relative group min-h-[350px] max-h-[350px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[550px] lg:max-h-[550px] h-full w-[90vw] md:w-[35vw] lg:w-[30vw] mt-[0vh] md:mt-[-20vh] lg:mt-[-25vh] cursor-pointer",
            left ? "md:mr-[38vw] lg:mr-[34vw]" : "md:ml-[38vw] lg:ml-[34vw]"
          )}
          onClick={() => setOpenModal(true)}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-md border border-black cursor-pointer"
            alt={data.titulo}
            src={process.env.NEXT_PUBLIC_BACKEND_URL + data.imagen.url}
          />
          <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full object-cover rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 border border-black bg-white cursor-pointer">
            <p className="italic font-light text-center">{data.fuente}</p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-1 px-3 w-full text-center text-black text-lg bg-white/10 backdrop-blur-[1px] font-bold">
            <h2>{data.titulo}</h2>
          </div>
        </div>
      </BlurOut>
      {openModal && (
        <section
          className="fixed top-0 left-0 flex items-start lg:items-center justify-center w-[100vw] h-[100vh] z-[1000] transition-all duration-500 p-[2.5vw] md:p-2"
          onClick={() => setOpenModal(false)}
        >
          <div
            id="scroller-modal"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              "relative flex flex-col lg:flex-row gap-5 justify-center lg:justify-between w-full h-full rounded-md bg-black p-[4vw] md:p-[2vw] z-[1001]",
              openModal ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            <div className="overflow-y-auto w-full h-full lg:hidden">
              <div className="grid lg:hidden grid-cols-3 items-center justify-between w-full border-b pb-[5vw] md:pb-[2vw] border-white z-10">
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
                <span className="text-center font-bold w-full text-white">
                  1 - 2
                </span>
                <div className="flex items-center justify-end w-full">
                  <button
                    className="p-2 border-2 border-white group hover:bg-white transition-colors duration-300 rounded-md cursor-pointer"
                    onClick={() => setOpenModal(false)}
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
              <Image
                className="w-auto mx-auto h-full max-h-[50%] md:max-h-[70%] lg:hidden rounded-md object-cover mt-[5vw] md:mt-[2vw] lg:mt-0"
                alt={data.titulo}
                src={process.env.NEXT_PUBLIC_BACKEND_URL + data.imagen.url}
                width={data.imagen.width}
                height={data.imagen.height}
              />
              <div className="lg:hidden text-[1em] leading-[1.5] w-full text-white md:w-[70vw] mx-auto">
                <h2 className="text-xl font-bold mt-4 mb-2">{data.titulo}</h2>
                {renderContent(data.contenido)}
              </div>
              <div className="mt-[1em] text-[1em] leading-[1.3] w-full md:w-[70vw] mx-auto text-white text-center lg:pb-10">
                <Link
                  href={data.link}
                  target="_blank"
                  className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                >
                  Ver publicación completa
                </Link>
              </div>
            </div>

            <Image
              className="hidden lg:block w-auto h-full rounded-md object-contain mt-[5vw] md:mt-[2vw] lg:mt-0"
              alt={data.titulo}
              src={process.env.NEXT_PUBLIC_BACKEND_URL + data.imagen.url}
              width={data.imagen.width}
              height={data.imagen.height}
            />

            <div className="w-full lg:w-[50%] hidden lg:block overflow-y-auto overscroll-y-auto lg:pr-5">
              <div className="hidden lg:grid grid-cols-3 items-center justify-between w-full border-b pb-[5vw] md:pb-[2vw] border-white z-10">
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
                <span className="text-center font-bold w-full text-white">
                  1 - 2
                </span>
                <div className="flex items-center justify-end w-full">
                  <button
                    className="p-2 border-2 border-white group hover:bg-white transition-colors duration-300 rounded-md cursor-pointer"
                    onClick={() => setOpenModal(false)}
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
              <div className="text-[1em] leading-[1.5] w-full text-white">
                <h2 className="text-xl font-bold mt-4 mb-2">{data.titulo}</h2>
                {renderContent(data.contenido)}
              </div>
              <div className="mt-[1em] text-[1em] leading-[1.3] w-full text-white text-center lg:pb-8">
                <Link
                  href={data.link}
                  target="_blank"
                  className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                >
                  Ver publicación completa
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HistoryCard;

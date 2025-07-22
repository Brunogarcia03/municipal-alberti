"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/dist/lenis-react";

import Person from "@/assets/images/Person.webp";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const CardPerson = () => {
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
            src={Person}
            width={1000}
            height={500}
            alt="Imagen de: "
            className="w-full h-full object-cover rounded-md md:grayscale-75 group-hover:grayscale-0 transition-discrete duration-500"
          />
          <div className="mt-[1vw] flex items-center justify-between">
            <div>
              <h6 className="font-bold text-base md:text-[1.25rem] leading-[1.3]">
                Andres Norambuena
              </h6>
              <span className="uppercase text-sm md:text-base">
                Ceo - partner
              </span>
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
            "fixed top-0 left-0 flex items-center justify-center w-full h-full z-[999] transition-all duration-500 p-[2.5vw]"
          }
        >
          <div
            id="scroller-modal"
            data-lenis-prevent
            className={twMerge(
              "relative w-full max-h-[95vh] rounded-md bg-black p-[5vw] overflow-y-auto overscroll-y-auto",
              open ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            {/* Header modal */}
            <div className="grid grid-cols-3 items-center justify-between w-full border-b pb-[5vw] border-white">
              <div className="flex gap-1">
                <button className="p-2 border-2 border-white group-hover:bg-white transition-colors duration-300 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-white group-hover:fill-black transition-colors duration-300"
                  >
                    <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
                  </svg>
                </button>
                <button className="p-2 border-2 border-white group-hover:bg-white transition-colors duration-300 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-white group-hover:fill-black transition-colors duration-300"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </button>
              </div>
              <span className="text-center font-bold w-full">03 - 04</span>
              <div className="flex items-center justify-end w-full">
                <button
                  className="p-2 border-2 border-white group-hover:bg-white transition-colors duration-300 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#f3f1ed"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Hero modal */}
            <div className="flex flex-col gap-[10vw] my-[10vw] pb-[5vw] border-b border-white overflow-hidden">
              <div className="flex flex-col items-center justify-between">
                <h4 className="text-[10vw] font-bold leading-[1.1]">
                  Andres Norambuena
                </h4>
                <div className="hidden md:flex items-end justify-start w-full gap-2.5">
                  <Link
                    href={"#"}
                    className="inline-flex items-center justify-center uppercase border border-white rounded-md px-3 py-1 bg-transparent hover:text-black hover:bg-white transition-colors duration-300"
                  >
                    Instagram
                  </Link>
                  <Link
                    href={"#"}
                    className="inline-flex items-center justify-center uppercase border border-white rounded-md px-3 py-1 bg-transparent hover:text-black hover:bg-white transition-colors duration-300"
                  >
                    Email
                  </Link>
                </div>
              </div>

              <picture className="flex flex-col items-center justify-center w-full">
                <Image
                  src={Person}
                  width={1000}
                  height={500}
                  alt="Imagen de: "
                  className="w-full h-auto object-cover rounded-md grayscale-0 transition-discrete duration-500"
                />
              </picture>
              <div className="flex md:hidden items-end justify-start w-full gap-2.5">
                <Link
                  href={"#"}
                  className="inline-flex items-center justify-center uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:border-white hover:bg-transparent transition-colors duration-300"
                >
                  Instagram
                </Link>
                <Link
                  href={"#"}
                  className="inline-flex items-center justify-center uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:border-white hover:bg-transparent transition-colors duration-300"
                >
                  Email
                </Link>
              </div>
            </div>

            {/* Body modal */}
            <div className="text-[1em] leading-[1.3] w-full">
              <p>
                With almost 30 years of experience in the sound studios and
                post-production industry, Andres Norambuena is a human leader
                who thrives on creating a collaborative environment founded on
                his personal values. Honesty, trust, own your expertise, and
                enjoy the journey of achieving success, collectively as a team.
              </p>
              <p className="mt-[1em]">
                A true visionary, Andres successfully transformed BoogieSound
                studio, a sound studio, into BLVD-MTL, multidisciplinary,
                one-stop-shop studio that housed Sound, Post-Prod Video,
                Filming, and Multimedia installation under one roof, growing
                business by 400% in sales from its beginnings to its sale in
                2021. A charismatic leader, Andres has built core executive
                teams, led employees with various expertise, and grew his
                workforce of niche experts to feed the growing demands of
                hundreds of clients with projects all over North America.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CardPerson;

"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import Words from "../ui/anim/Words";
import Link from "next/link";

import Button from "../ui/Button";
import { useRef } from "react";
import { formatDate } from "@/utils/tools";
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(Draggable);

const SliderDraggable = ({
  title,
  icon,
  data,
  classNameCard = "min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem] max-w-[85vw] md:max-w-[50vw] lg:max-w-[35vw]",
}) => {
  const containerRef = useRef(null);

  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  useGSAP(() => {
    const container = containerRef.current;

    Draggable.create(container, {
      type: "x",
      bounds: container.parentElement,
      inertia: true,
      edgeResistance: 0.85,
      cursor: "grab",
    });
  }, []);

  return (
    <div className="relative pb-1.5 select-none">
      <Words>
        <Link href={`/boletin/${slug}`} className="flex items-center group">
          <h3 className="text-base sm:text-lg md:text-[1.5rem] font-bold leading-[1.3] pl-2 py-1 overflow-hidden">
            {title}
          </h3>
          <div className="flex flex-none items-center justify-center w-0 group-hover:w-6 ml-1 translate-0 overflow-hidden h-4 transition-all duration-150 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#00438b"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </div>
        </Link>
      </Words>

      <div className="w-full h-[1px] bg-gray" />

      <div
        ref={containerRef}
        className="flex items-start justify-center mt-[1.56em] pb-2 gap-4 w-max px-4 h-full"
      >
        {data?.map((d, index) => (
          <div
            key={index}
            className={twMerge(
              "relative flex flex-col p-[1.5em] items-start justify-between gap-4 bg-white rounded-md shadow-sm shadow-blue group w-full overflow-hidden",
              classNameCard
            )}
          >
            <div className="flex items-center justify-between w-full mb-[1.5em]">
              {icon}
              <p className="italic text-xs md:text-sm lg:text-base">
                {formatDate(d.fecha)}
              </p>
            </div>
            <h6 className="text-base sm:text-lg md:text-[1.25rem] font-bold mb-[1em] w-full">
              {d.titulo || d.nombre}
            </h6>
            <Link
              className="w-full mt-auto"
              href={d.archivo.url}
              target="_blank"
            >
              <Button
                className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300"
                children="Ver archivo"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderDraggable;

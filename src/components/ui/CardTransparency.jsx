"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import Button from "@/components/ui/Button"; // Asegurate de que este sea tu componente

const CardTransparency = ({ item, title = "Documento", icon = "" }) => {
  const [openCard, setOpenCard] = useState(false);
  const contentRef = useRef(null);

  // Animación GSAP
  useEffect(() => {
    if (contentRef.current) {
      if (openCard) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [openCard]);

  // Determinar si es un PDF único (string) o un bloque trimestral (object)
  const isSingleFile = typeof item === "string";

  return (
    <div className="h-auto w-full rounded-md relative overflow-hidden bg-white mx-auto p-6 flex flex-col justify-stretch gap-5 shadow-sm shadow-blue group">
      {/* HEADER */}
      <div className="flex items-start justify-between w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#212121"
          className="opacity-80"
        >
          <path d="M480-120 352-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T79-621q0-94 63-156.5T299-840q52 0 99 22t82 62q35-40 82-62t99-22q94 0 157 62.5T881-621q0 46-15.5 88t-49 87q-33.5 45-85 96T608-234L480-120ZM171-560h618q6-16 9-31t3-30q0-60-41.5-99.5T661-760q-47 0-86.5 27.5T504-660h-48q-31-45-70.5-72.5T299-760q-57 0-98.5 39.5T159-621q0 15 3 30t9 31Zm102 140h414q16-17 29-31.5t24-28.5H220q11 14 24 28.5t29 31.5Zm207 192q36-32 67.5-59.5T605-340H355q26 25 57.5 52.5T480-228Zm0-332Z" />
        </svg>

        <button onClick={() => setOpenCard((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#212121"
          >
            <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
          </svg>
        </button>
      </div>

      <div className="pt-16">
        <h3 className="text-[2.5rem] leading-[1] tracking-[-1.5px] font-light italic w-2/3">
          {title}
        </h3>

        <div
          ref={contentRef}
          className={twMerge("overflow-hidden opacity-0 h-0 transition-all")}
        >
          <div className="h-[1px] bg-black w-full my-[1.5rem]" />

          {isSingleFile ? (
            <div className="flex justify-start">
              <Button
                as="a"
                href={item}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver documento
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(item).map(([key, value]) => {
                const trimestreLabel = key
                  .replace("_", " ")
                  .replace(/^\w/, (l) => l.toUpperCase());

                return (
                  <Button
                    key={key}
                    as="a"
                    href={value.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {trimestreLabel}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTransparency;

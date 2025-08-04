"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import Button from "@/components/ui/Button";

const CardTransparency = ({ item, title = "Documento", icon = "" }) => {
  const [openCard, setOpenCard] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (openCard) {
        // Set height to auto before animating
        gsap.set(contentRef.current, { height: "auto" });
        gsap.fromTo(
          contentRef.current,
          { height: 0, autoAlpha: 0 },
          {
            height: contentRef.current.scrollHeight,
            autoAlpha: 1,
            duration: 0.1,
            ease: "power1.out",
          }
        );
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          autoAlpha: 0,
          duration: 0.1,
          ease: "power1.in",
        });
      }
    }
  }, [openCard]);

  // Determinar si es un PDF único (string) o un bloque trimestral (object)
  const isSingleFile = typeof item === "string";

  return (
    <div className="h-auto w-full rounded-md relative overflow-hidden bg-white mx-auto p-6 flex flex-col justify-stretch gap-5 shadow-sm shadow-blue group">
      <div className="flex items-center justify-between w-full h-full">
        <div className="size-8 md:size-12">{icon}</div>

        <button onClick={() => setOpenCard((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#212121"
            className="size-4 md:size-full"
          >
            <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
          </svg>
        </button>
      </div>

      <div className="pt-16">
        <h3 className="text-[1.5rem] md:text-[2.5rem] leading-[1] tracking-[-1.5px] font-light italic w-full md:w-2/3">
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
                className={
                  "text-xs sm:text-sm md:text-base leading-[1.3] rounded-md bg-blue cursor-pointer"
                }
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
                    className={
                      "text-xs sm:text-sm md:text-base leading-[1.3] rounded-md bg-blue cursor-pointer"
                    }
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

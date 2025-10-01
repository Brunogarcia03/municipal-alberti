"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import Link from "next/link";

const CardTransparency = ({ item, title = "Documento", icon = "" }) => {
  const [openCard, setOpenCard] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (openCard) {
        gsap.set(contentRef.current, { height: "auto" });
        gsap.fromTo(
          contentRef.current,
          { height: 0, autoAlpha: 0 },
          {
            height: contentRef.current.scrollHeight,
            autoAlpha: 1,
            duration: 0.2,
            ease: "power1.out",
          }
        );
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          autoAlpha: 0,
          duration: 0.2,
          ease: "power1.in",
        });
      }
    }
  }, [openCard]);

  const isSingleFile = typeof item === "string";

  return (
    <div className="h-auto w-full rounded-md relative overflow-hidden bg-white mx-auto p-6 flex flex-col justify-stretch gap-5 shadow-sm shadow-blue group">
      <svg
        id="visual"
        viewBox="0 0 200 200"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        version="1.1"
        className="absolute top-0 right-0 opacity-20"
      >
        <g transform="translate(191.18197466001104 -20.149037667176174)">
          <path
            d="M72.4 -67.2C95.7 -49 117.8 -24.5 121.3 3.4C124.7 31.3 109.4 62.7 86 91.9C62.7 121 31.3 148 5.4 142.7C-20.6 137.3 -41.3 99.6 -59.9 70.4C-78.6 41.3 -95.3 20.6 -101.5 -6.2C-107.7 -33 -103.3 -66 -84.7 -84.2C-66 -102.3 -33 -105.7 -4.2 -101.4C24.5 -97.2 49 -85.4 72.4 -67.2"
            fill="#00438b"
          ></path>
        </g>
      </svg>
      <div className="flex items-center justify-between w-full h-full">
        <div className="size-8 md:size-12">{icon}</div>

        <button
          className="z-10 cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-105"
          onClick={() => setOpenCard((prev) => !prev)}
        >
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
                className="text-xs sm:text-sm md:text-base leading-[1.3] rounded-md bg-blue cursor-pointer"
              >
                Ver documento
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(item)
                .filter(([_, url]) => url)
                .map(([key, url]) => (
                  <Button
                    key={key}
                    as="a"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm md:text-base leading-[1.3] rounded-md bg-blue cursor-pointer"
                  >
                    <Link href={url} target="_blank">
                      {key.replace("_", " ")}{" "}
                    </Link>
                  </Button>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardTransparency;

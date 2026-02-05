"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../ui/Button";

import { getRedes } from "@/utils/api/global.api";

const Footer = ({ dark = false }) => {
  const [redes, setRedes] = useState(null);

  useEffect(() => {
    setRedes(async () => {
      const data = await getRedes();
      return data;
    });
  }, []);

  return (
    <footer
      className={twMerge(
        "max-w-[97vw] w-full mx-auto my-[1rem] p-[1.5em] rounded-3xl relative flex flex-col items-center justify-between",
        dark ? "bg-black text-white" : "bg-white text-black",
      )}
    >
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col sm:flex-row gap-3 w-full items-start md:items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/ICON.png"
              priority
              alt="Logo Municipalidad de Alberti"
              width={32}
              height={32}
              style={{ height: "auto" }}
            />

            <h1 className="font-bold text-[1.2rem] leading-[1] ml-2">
              Municipalidad <br />
              de Alberti
            </h1>
          </Link>
          <Link href={"/contacto"} className="cursor-pointer">
            <Button
              children="Contactanos"
              className={
                "text-base sm:text-lg md:text-[1.5rem] leading-[1.3] px-3 py-2 md:px-5 md:py-3 rounded-md bg-blue cursor-pointer z-0"
              }
            />
          </Link>
        </div>
        <div
          className={`w-full h-[1px] my-[1.5em] ${
            dark ? "bg-white" : "bg-black"
          }`}
        />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 w-full">
          <Link
            href={"https://maps.app.goo.gl/MxQAi8oDLW6cV9oN6"}
            target="_blank"
          >
            <p className="text-[.8rem]">
              Municipalidad de Alberti <br /> L N Alem Y 9 de Julio
            </p>
          </Link>
          <div className="flex items-center md:justify-end gap-2">
            {/* Facebook */}
            <div className="flex items-center text-[1rem]">
              <Link
                href={
                  redes?.facebook ||
                  "https://www.facebook.com/MunicipalidadDeAlberti"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={twMerge(
                  "flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group p-1.5 transition-colors duration-200 hover:border-transparent",
                  dark ? "border-white" : "border-black",
                )}
              >
                <svg
                  className="size-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Facebook</title>
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Instragram */}
            <div className="flex items-center text-[1rem]">
              <Link
                href={
                  redes?.instagram ||
                  "https://www.instagram.com/municipalidaddealberti/"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Instagram"}
                className={twMerge(
                  "flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group p-1.5 transition-colors duration-200 hover:border-transparent",
                  dark ? "border-white" : "border-black",
                )}
              >
                <svg
                  className="size-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <title>Instagram</title>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Youtube */}
            <div className="flex items-center text-[1rem]">
              <Link
                href={
                  redes?.youtube ||
                  "https://www.youtube.com/user/municipalidadalberti"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Youtube"}
                className={twMerge(
                  "flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group p-1.5 transition-colors duration-200 hover:border-transparent",
                  dark ? "border-white" : "border-black",
                )}
              >
                <svg
                  className="size-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Youtube</title>
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Twitter */}
            <div className="flex items-center text-[1rem]">
              <Link
                href={redes?.twitter || "https://x.com/MuniAlberti"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Twitter"}
                className={twMerge(
                  "flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group p-1.5 transition-colors duration-200 hover:border-transparent",
                  dark ? "border-white" : "border-black",
                )}
              >
                <svg
                  className="size-full"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Twitter</title>
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

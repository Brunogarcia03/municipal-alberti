import { socials } from "@/utils/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "../ui/Button";

const Footer = ({ dark = false }) => {
  return (
    <footer
      className={twMerge(
        "max-w-[97vw] w-full mx-auto my-[1rem] p-[1.5em] rounded-3xl relative flex flex-col items-center justify-between",
        dark ? "bg-black text-white" : "bg-white text-black"
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
                "text-base sm:text-lg md:text-[1.5rem] leading-[1.3] px-3 py-2 md:px-5 md:py-3 rounded-md bg-blue cursor-pointer"
              }
            />
          </Link>
        </div>
        <div
          className={`w-full h-[1px] my-[1.5em] ${
            dark ? "bg-white" : "bg-black"
          }`}
        />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 w-full">
          <Link
            href={"https://maps.app.goo.gl/MxQAi8oDLW6cV9oN6"}
            target="_blank"
          >
            <p className="text-[.8rem]">
              Municipalidad de Alberti <br /> L N Alem Y 9 de Julio
            </p>
          </Link>
          <div className="flex items-center md:justify-end gap-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className={twMerge(
                  "flex items-center justify-center size-[3rem] rounded-md border group p-3 transition-colors duration-200 hover:border-transparent",
                  dark ? "bg-black border-white" : "bg-white border-black"
                )}
              >
                <span className="transition-discrete duration-500 group-hover:scale-110">
                  {social.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

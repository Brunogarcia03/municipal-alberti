"use client";

import React, { useEffect, useState } from "react";
import { useLenis } from "lenis/dist/lenis-react";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowScroll } from "@reactuses/core";

import { NavList, categories, socials } from "@/utils/constants/constants";
import Button from "./ui/Button";
import { getRedes } from "@/utils/api/global.api";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [redes, setRedes] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  const lenis = useLenis();

  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    const getDataRedes = async () => {
      const data = await getRedes();

      setRedes(data);
    };

    getDataRedes();
  }, []);

  useGSAP(() => {
    if (isOpen === null) return;

    const tl = gsap.timeline({
      clearProps: "all",
    });

    if (isOpen) {
      tl.add(() => {
        lenis.stop();

        const textIcon = document.querySelector("#text-icon");
        const menuLines = document.querySelectorAll(".menu-line");

        textIcon?.classList.remove("header--light");
        menuLines?.forEach((el) => el.classList.remove("header--light"));
      })
        .to("#menu-wrapper", {
          duration: 0.8,
          height: "auto",
          y: 0,
          ease: "power2.out",
        })
        .fromTo(
          "#menu-item",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "<0.3"
        )
        .fromTo(
          "#categories",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          "#socials",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "<"
        )
        .fromTo(
          "#contact-button",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "<"
        );
    } else {
      tl.to(["#menu-item", "#categories", "#socials", "#contact-button"], {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      })
        .to("#menu-wrapper", {
          height: 0,
          y: -88,
          duration: 0.4,
          ease: "power2.inOut",
        })
        .add(() => {
          lenis.start();

          gsap.utils.toArray(".white-container").forEach((section) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              end: "bottom top",
              toggleClass: {
                targets: ["#text-icon", ".menu-line"],
                className: "header--light",
              },
            });
          });
        });
    }
  }, [isOpen]);

  useGSAP(() => {
    gsap.to("#header-fixed", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.2,
    });

    if (typeof window === "undefined") return;

    const sections = gsap.utils.toArray(".white-container");

    if (sections.length === 0) return;

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        toggleClass: {
          targets: ["#text-icon", ".menu-line"],
          className: "header--light",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    if (scrollY < 88) {
      gsap.to("header", {
        y: 0,
        opacity: 1,
        duration: 0.5,
      });
    } else if (scrollY > lastScrollY + 10) {
      gsap.to("header", {
        y: -100,
        opacity: 0,
        duration: 0.5,
      });
    } else if (scrollY < lastScrollY) {
      gsap.to("header", {
        y: 0,
        opacity: 1,
        duration: 0.5,
      });
    }

    setLastScrollY(scrollY);
  }, [scrollY]);

  return (
    <header
      id="main-header"
      className="fixed flex justify-center w-dvw inset-0 z-[999] min-h-[88px] max-h-[88px] bg-black/10 backdrop-blur-xs sm:backdrop-blur-sm md:backdrop-blur-2xl translate-y-[-100%]"
    >
      <nav
        id="header-fixed"
        className="relative flex items-center justify-between opacity-0 w-full h-full mx-auto py-[1em] px-[1rem] sm:px-[2rem] z-10"
      >
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/ICON.png"
            priority
            alt="Logo Municipalidad de Alberti"
            width={32}
            height={32}
          />

          <h1
            id="text-icon"
            className="text-white font-bold text-[1rem] sm:text-[1.1rem] leading-[1] ml-2 transition-colors duration-300"
          >
            Municipalidad <br />
            de Alberti
          </h1>
        </Link>
        <button
          className="md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex flex-col items-center justify-center size-[48px] cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`absolute h-0.5 w-8 md:w-10 bg-white menu-line transition-all duration-300 group-hover:w-5 md:group-hover:w-8 origin-center ${
              isOpen ? "rotate-45" : "-translate-y-1 "
            }`}
          />
          <div
            className={`absolute h-0.5 w-8 md:w-10 bg-white menu-line transition-all duration-300 group-hover:w-5 md:group-hover:w-8 origin-center ${
              isOpen ? "-rotate-45" : "translate-y-1 "
            }`}
          />
        </button>

        <Link
          href="/contacto"
          className="hidden md:flex items-center justify-end"
          onClick={() => setIsOpen(false)}
        >
          <Button className="px-6 py-3 bg-blue rounded-md text-white text-base sm:text-lg md:text-[1rem] leading-[1.3]">
            Contacto
          </Button>
        </Link>
      </nav>
      <div
        id="menu-wrapper"
        className="absolute top-0 left-0 w-full h-0 overflow-hidden text-white bg-black rounded-b-lg flex flex-col items-start pt-[3em] md:pt-[4em] px-[2em] pb-[1em] translate-y-[-88px]"
      >
        <div className="overscroll-contain flex flex-col md:flex-row items-center justify-between overflow-hidden w-full mt-[4em]">
          {NavList.map((item, index) => (
            <Link
              id="menu-item"
              key={index}
              href={item.href}
              className="hidden md:inline-block w-[24%] max-w-full group"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center overflow-hidden">
                <div className="flex flex-none items-center justify-center w-0 group-hover:w-6 mr-2 translate-0 overflow-hidden h-4 transition-discrete duration-150 font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#00438b"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </div>
                <span className="text-[1.2rem] leading-[1.3] font-bold">
                  {item.name}
                </span>
              </div>
              <div className="relative mt-2 pt-[56.25%] rounded-md overflow-hidden">
                <img
                  src={item.src}
                  alt={item.name}
                  className="absolute inset-0 scale-110 group-hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
            </Link>
          ))}
          {NavList.map((item, index) => (
            <Link
              id="menu-item"
              key={index}
              href={item.href}
              className="inline-block md:hidden group w-full mb-1.5"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center overflow-hidden">
                <div className="flex flex-none items-center justify-center w-0 group-hover:w-10 translate-0 overflow-hidden h-10 transition-discrete duration-150 font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#00438b"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </div>
                <h1 className="flex items-center overflow-hidden text-[calc(1rem+3vw)] leading-[1.3] font-bold">
                  {item.name}
                </h1>
              </div>
            </Link>
          ))}
        </div>
        <div className="h-[1em] md:h-[6em] w-full"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full">
          <div
            id="categories"
            className="flex flex-col items-start w-full sm:w-[50%] md:w-[25%] overflow-hidden mb-4 md:mb-0"
          >
            <p className="text-[1rem] leading-[1.4] font-normal">Categorias</p>
            <address className="mt-1">
              <div className="flex flex-wrap items-center">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-[1rem] pr-1.5"
                  >
                    <Link
                      href={`/prensa#${item.url}`}
                      className="text-white font-light transition-colors duration-200 hover:text-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {index !== socials.length && (
                      <span className="text-blue font-bold">&nbsp;/ </span>
                    )}
                  </div>
                ))}
              </div>
            </address>
          </div>
          <div
            id="socials"
            className="flex flex-col md:items-end justify-end w-full md:w-[25%] overflow-hidden"
          >
            <p className="text-[1rem] leading-[1.4] font-normal">
              Redes Sociales
            </p>
            <address className="mt-1">
              <div className="flex flex-wrap items-center">
                {/* Facebook */}
                <div className="flex items-center text-[1rem] pr-1.5">
                  <Link
                    href={
                      redes?.facebook ||
                      "https://www.facebook.com/MunicipalidadDeAlberti"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-1.5 transition-colors duration-200 hover:border-transparent"
                    onClick={() => setIsOpen(false)}
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
                <div className="flex items-center text-[1rem] pr-1.5">
                  <Link
                    href={
                      redes?.instagram ||
                      "https://www.instagram.com/municipalidaddealberti/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Instagram"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-1.5 transition-colors duration-200 hover:border-transparent"
                    onClick={() => setIsOpen(false)}
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
                <div className="flex items-center text-[1rem] pr-1.5">
                  <Link
                    href={
                      redes?.youtube ||
                      "https://www.youtube.com/user/municipalidadalberti"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Youtube"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-1.5 transition-colors duration-200 hover:border-transparent"
                    onClick={() => setIsOpen(false)}
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
                <div className="flex items-center text-[1rem] pr-1.5">
                  <Link
                    href={redes?.twitter || "https://x.com/MuniAlberti"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Twitter"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-2 transition-colors duration-200 hover:border-transparent"
                    onClick={() => setIsOpen(false)}
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

                {/* Whatsapp */}
                <div className="flex items-center text-[1rem] pr-1.5">
                  <Link
                    href={
                      redes?.whatsapp ||
                      "https://api.whatsapp.com/send/?phone=2346601201&text&type=phone_number&app_absent=0"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Whatsapp"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-1.5 transition-colors duration-200 hover:border-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      className="size-full"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
                      viewBox="0 0 512 512"
                      className="w-8 h-8"
                      fill="#fff"
=======
                      fill="none"
                      viewBox="0 0 24 24"
>>>>>>> 93437e8f96fe62cb90dc0ed43cccbd0d0d6e4f7c
                    >
                      <title>Whatsapp</title>
                      <path
<<<<<<< HEAD
                        d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                        fillRule="evenodd"
=======
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
>>>>>>> 93437e8f96fe62cb90dc0ed43cccbd0d0d6e4f7c
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </address>
          </div>
          <Link
            id="contact-button"
            href="/contacto"
            className="flex md:hidden items-center justify-start mt-4 w-full"
            onClick={() => setIsOpen(false)}
          >
            <Button className="bg-blue text-white border border-blue rounded-md py-2 px-5 w-full">
              Contacto
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import React, { useEffect, useState } from "react";
import { useLenis } from "lenis/dist/lenis-react";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowScroll } from "@reactuses/core";

import { categories, socials } from "@/utils/constants/constants";
import Button from "./ui/Button";
import { getRedes } from "@/utils/api/global.api";

import header_1 from "@/assets/header/header_1.jpeg";
import header_2 from "@/assets/header/header_2.jpeg";
import header_3 from "@/assets/header/header_3.jpeg";
import header_4 from "@/assets/header/header_4.jpeg";

gsap.registerPlugin(ScrollTrigger);

const NavList = [
  {
    name: "Gobierno",
    href: "/gobierno",
    src: header_1.src,
  },
  {
    name: "Ciudad",
    href: "/ciudad",
    src: header_2.src,
  },
  {
    name: "Prensa",
    href: "/prensa",
    src: header_3.src,
  },
  {
    name: "Transparencia",
    href: "/transparencia",
    src: header_4.src,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [redes, setRedes] = useState(null);
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
    const tl = gsap.timeline({
      clearProps: "all",
    });

    if (isOpen) {
      tl.add(() => {
        if (lenis) lenis.stop();
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        const textIcon = document.querySelector("#text-icon");
        const menuLines = document.querySelectorAll(".menu-line");

        textIcon?.classList.remove("header--light");
        menuLines?.forEach((el) => el.classList.remove("header--light"));
      })
        .to("#menu-wrapper", {
          maxHeight: 1000,
          y: 0,
          duration: 1,
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
          "<0.3",
        )
        .fromTo(
          "#categories",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(
          "#socials",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        )
        .fromTo(
          "#contact-button",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "<",
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
          maxHeight: 0,
          y: -88,
          duration: 0.8,
          ease: "power2.inOut",
        })

        .add(() => {
          if (lenis) lenis.start();
          document.documentElement.style.overflow = "";
          document.body.style.overflow = "";

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
      className="fixed flex justify-center w-dvw inset-0 z-[999] min-h-[88px] max-h-[88px] bg-black/10 backdrop-blur-xs sm:backdrop-blur-sm md:backdrop-blur-2xl"
    >
      <nav
        id="header-fixed"
        className="relative flex items-center justify-between w-full h-full mx-auto py-[1em] px-[1rem] sm:px-[2rem] z-10"
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
            style={{ willChange: "auto" }}
          >
            Municipalidad <br />
            de Alberti
          </h1>
        </Link>
        <button
          type="button"
          aria-label={
            isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
          }
          aria-expanded={isOpen}
          aria-controls="menu-wrapper"
          className="md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex flex-col items-center justify-center size-[48px] cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">
            {isOpen ? "Cerrar menú" : "Abrir menú"}
          </span>

          <div
            className={`absolute h-0.5 w-8 md:w-10 bg-white menu-line transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-1"
            }`}
          />
          <div
            className={`absolute h-0.5 w-8 md:w-10 bg-white menu-line transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-1"
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
        className="absolute top-0 left-0 max-h-0 w-full overflow-hidden text-white bg-black rounded-b-lg flex flex-col items-start pt-[3em] md:pt-[4em] px-[2em] pb-[1em] translate-y-[-88px]"
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
                  alt=""
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
            className="flex flex-col items-start w-full sm:w-[50%] lg:w-[25%] overflow-hidden mb-4 md:mb-0"
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
            className="flex flex-col md:items-end justify-end w-full will-change-transform overflow-hidden"
          >
            <p className="text-[1rem] leading-[1.4] font-normal">
              Redes Sociales
            </p>
            <address className="mt-2">
              <div className="flex flex-wrap items-center">
                {/* Facebook */}
                <div className="flex items-center text-[1rem] pr-1.5">
                  <a
                    href={
                      redes?.facebook ||
                      "https://www.facebook.com/MunicipalidadDeAlberti"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Facebook"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-2 transition-colors duration-200 hover:border-transparent"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <title>Facebook</title>
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </a>
                </div>

                {/* Instragram */}
                <div className="flex items-center text-[1rem] pr-1.5">
                  <a
                    href={
                      redes?.instagram ||
                      "https://www.instagram.com/municipalidaddealberti/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Instagram"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-2 transition-colors duration-200 hover:border-transparent"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <title>Instagram</title>
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
                  </a>
                </div>

                {/* Youtube */}
                <div className="flex items-center text-[1rem] pr-1.5">
                  <a
                    href={
                      redes?.youtube ||
                      "https://www.youtube.com/user/municipalidadalberti"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Youtube"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-2 transition-colors duration-200 hover:border-transparent"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <title>YouTube</title>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>

                {/* Twitter */}
                <div className="flex items-center text-[1rem] pr-1.5">
                  <a
                    href={redes?.twitter || "https://x.com/MuniAlberti"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Twitter"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-2 transition-colors duration-200 hover:border-transparent"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <title>X</title>
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                </div>

                {/* Whatsapp */}
                <div className="flex items-center text-[1rem]">
                  <a
                    href={
                      redes?.whatsapp ||
                      "https://api.whatsapp.com/send/?phone=2346601201&text&type=phone_number&app_absent=0"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Whatsapp"}
                    className="flex items-center justify-center size-[2.25rem] rounded-md bg-transparent border group border-white p-2 transition-colors duration-200 hover:border-transparent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-8 h-8"
                      fill="#fff"
                    >
                      <title>Whatsapp</title>
                      <path
                        d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
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

"use client";

import React, { useState } from "react";
import { useLenis } from "lenis/dist/lenis-react";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useWindowScroll } from "@reactuses/core";

import { NavList, categories, socials } from "@/utils/constants/constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const lenis = useLenis();

  const { y: scrollY } = useWindowScroll();

  useGSAP(() => {
    if (isOpen === null) return;

    const tl = gsap.timeline({
      clearProps: "all",
    });

    if (isOpen) {
      tl.add(() => {
        lenis.stop();
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
        });
    }
  }, [isOpen]);

  useGSAP(() => {
    gsap.to("#header-fixed", {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
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
    <header className="fixed flex w-full inset-0 z-[9999] min-h-[88px] max-h-[88px]">
      <div
        id="header-fixed"
        className="flex items-center justify-between bg-black/10 backdrop-blur-2xl translate-y-[-100%] opacity-0 w-full h-full mx-auto py-[1em] px-[2rem] z-10"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/ICON.png"
            priority
            alt="Logo Municipalidad de Alberti"
            width={32}
            height={32}
          />
          <h1
            id="text-icon"
            className="text-white font-bold text-[1.2rem] leading-[1] ml-2"
          >
            Municipalidad <br />
            de Alberti
          </h1>
        </Link>
        <button
          className="relative flex flex-col items-center justify-center size-[48px] cursor-pointer group"
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

        <Link href="/" className="hidden md:flex items-center justify-end">
          <button className="bg-blue text-white border border-blue rounded-md py-2 px-3">
            Contacto
          </button>
        </Link>
      </div>
      <div
        id="menu-wrapper"
        className="absolute top-0 left-0 w-full h-0 overflow-hidden text-white bg-black rounded-b-lg flex flex-col items-start pt-[4em] px-[2em] pb-[1em] translate-y-[-88px]"
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
                <div className="flex flex-none items-center justify-center w-0 group-hover:w-6 mr-2 translate-0 overflow-hidden h-4 transition-discrete duration-300 font-bold">
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
                  className="absolute inset-0 scale-105 group-hover:scale-100 transition-transform duration-300 object-cover"
                />
              </div>
            </Link>
          ))}
          {NavList.map((item, index) => (
            <Link
              id="menu-item"
              key={index}
              href={item.href}
              className="inline-block md:hidden group w-full mb-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center overflow-hidden">
                <div className="flex flex-none items-center justify-center w-0 group-hover:w-10 mr-2 translate-0 overflow-hidden h-10 transition-discrete duration-300 font-bold">
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
                <h1 className="flex items-center overflow-hidden text-[calc(1rem+5vw)] leading-[1.3] font-bold">
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
            className="flex flex-col items-start w-[50%] md:w-[25%] overflow-hidden mb-4 md:mb-0"
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
                      href={`prensa/categorias/${item.toLowerCase()}`}
                      className="text-white font-light transition-colors duration-200 hover:text-blue"
                    >
                      {item}
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
                {socials.map((social, index) => (
                  <div
                    key={index}
                    className="flex items-center text-[1rem] pr-1.5"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="text-white font-light transition-colors duration-200 hover:text-blue"
                    >
                      {social.icon}
                    </Link>
                    {index !== socials.length - 1 && (
                      <span className="text-blue font-bold">&nbsp;/ </span>
                    )}
                  </div>
                ))}
              </div>
            </address>
          </div>
          <Link
            id="contact-button"
            href="/"
            className="flex md:hidden items-center justify-start mt-4 w-full"
          >
            <button className="bg-blue text-white border border-blue rounded-md py-2 px-5 w-full">
              Contacto
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

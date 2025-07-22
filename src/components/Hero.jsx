"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { twMerge } from "tailwind-merge";
import { useLenis } from "lenis/dist/lenis-react";
import Image from "next/image";

import HeroImage1 from "@/assets/images/hero1.webp";
import HeroImage2 from "@/assets/images/hero2.webp";
import HeroImage3 from "@/assets/images/hero3.webp";
import HeroImage4 from "@/assets/images/hero4.webp";

gsap.registerPlugin(ScrollTrigger);

const HeroImageList = [
  {
    image: HeroImage2,
    position: "70% 70%",
  },
  {
    image: HeroImage3,
    position: "60% 50%",
  },
  {
    image: HeroImage1,
    position: "40% 60%",
  },
  {
    image: HeroImage4,
    position: "50% 50%",
  },
];

const Hero = () => {
  const [isOpen, setIsOpen] = useState(null);

  const Lenis = useLenis();

  useEffect(() => {
    if (isOpen === null) return;

    if (isOpen) {
      Lenis.stop();
    } else {
      Lenis.start("");
    }
  }, [isOpen]);

  useGSAP(() => {
    gsap.to("#hero-container", {
      ease: "power2.inOut",
      borderBottomLeftRadius: "3em",
      borderBottomRightRadius: "3em",
      scrollTrigger: {
        trigger: "#hero-container",
        scrub: true,
        start: "center center",
        end: "bottom top",
      },
    });

    gsap.to(".div-image", {
      ease: "power2.inOut",
      top: "10%",
      scrollTrigger: {
        trigger: "#hero-container",
        scrub: true,
        start: "center center",
        end: "bottom top",
      },
    });

    let tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      defaults: {
        duration: 2,
      },
    });

    const heroIds = ["#hero-1", "#hero-2", "#hero-3", "#hero-4"];

    heroIds.forEach((id, index) => {
      tl.fromTo(
        id,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
        },
        index === 0 ? 0 : ">2"
      );
    });

    gsap.to("#hero-text", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: 5,
    });

    if (window.innerWidth < 768) {
      gsap.to("#button-hero", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        delay: 5.2,
      });

      return;
    }

    const container = document.querySelector("#hero-container");

    const handleMouseEnter = (e) => {
      gsap.to("#button-hero", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      gsap.to("#button-hero", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to("#button-hero", {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.2,
        ease: "sine.inOut",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mouseenter", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section
        id="hero-container"
        className="relative w-screen h-dvh transition-all duration-1000 overflow-hidden"
      >
        <div className="div-image relative w-full h-full">
          {HeroImageList.map((item, index) => (
            <Image
              key={index}
              id={`hero-${index + 1}`}
              src={item.image}
              width={1920}
              height={1280}
              className="absolute top-0 left-0 w-full h-dvh object-cover opacity-0"
              style={{ objectPosition: item.position }}
              alt={`${index + 1} Imagen Principal`}
            />
          ))}
          <div className="absolute top-0 left-0 w-full h-dvh bg-black/25 z-10" />
        </div>

        <div
          className="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 z-30"
          onClick={() => setIsOpen(true)}
        >
          <button
            id="button-hero"
            className="bg-blue border hover:cursor-pointer border-blue text-white rounded-md p-2 md:p-2.5 scale-0 opacity-0 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#f3f1ed"
              className="transform transition-transform duration-300 ease-in-out hover:scale-110 text-white"
            >
              <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
            </svg>
          </button>
        </div>

        <div
          id="hero-text"
          className="absolute bottom-0 left-0 opacity-0 translate-[-20px] w-full h-auto overflow-hidden text-white rounded-b-lg flex flex-col items-start py-[2em] px-[2em] lg:py-[4em] lg:px-[4em] z-30"
        >
          <h1 className="text-[1.5em] sm:text-[2.3em] md:text-[2.9em] lg:text-[3.7em] z-40 font-bold italic leading-[1.2] text-white">
            Es nuestro Alberti <br /> Tierra de Trabajo
          </h1>
        </div>
      </section>
      <div
        className={twMerge(
          "fixed bottom-0 left-0 w-full h-dvh flex items-center justify-center z-[9999] bg-black transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={twMerge(
            "absolute top-5 right-5 pointer-events-auto",
            isOpen ? "block" : "hidden"
          )}
        >
          <button
            className="relative bg-blue border border-blue text-white rounded-md p-1 md:p-1.5 hover:bg-transparent hover:border-white transition-colors duration-300 hover:cursor-pointer z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
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
        <video
          src="/media/hero-alberti.mp4"
          className="w-full h-dvh object-contain"
          controls
          loop
          autoPlay
          playsInline
        />
      </div>
    </>
  );
};

export default Hero;

"use client";

import React, { useEffect, useRef, useState } from "react";
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
import HeroImage5 from "@/assets/images/hero5.webp";

import { wordsAnimation } from "@/utils/constants/animations";

gsap.registerPlugin(ScrollTrigger);

const HeroImageList = [
  { image: HeroImage1, position: "70% 70%" },
  { image: HeroImage2, position: "50% 95%" },
  { image: HeroImage3, position: "40% 100%" },
  { image: HeroImage4, position: "50% 50%" },
  { image: HeroImage5, position: "50% 60%" },
];

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef(null);
  const Lenis = useLenis();

  useEffect(() => {
    if (Lenis)
      if (isOpen) Lenis.stop();
      else Lenis.start();
  }, [isOpen]);

  useGSAP(() => {
    gsap.to("#hero-container", {
      ease: "power1.inOut",
      borderBottomLeftRadius: "2.5em",
      borderBottomRightRadius: "2.5em",
      scrollTrigger: {
        trigger: "#hero-container",
        scrub: 0.5,
        start: "center center",
        end: "bottom top",
      },
    });

    gsap.to(".div-image", {
      ease: "power1.inOut",
      top: "8%",
      scrollTrigger: {
        trigger: "#hero-container",
        scrub: 0.5,
        start: "center center",
        end: "bottom top",
      },
    });

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.2,
      defaults: { duration: 1.5, ease: "power1.inOut" },
    });

    const heroIds = ["#hero-1", "#hero-2", "#hero-3", "#hero-4"];
    heroIds.forEach((id, index) => {
      tl.fromTo(
        id,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1 },
        index === 0 ? 0 : ">1.5"
      );
    });

    const button = document.querySelector("#button-hero");
    const container = document.querySelector("#hero-container");

    const showButton = () =>
      gsap.to(button, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: "power1.out",
      });

    const hideButton = () =>
      gsap.to(button, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power1.out",
      });

    const moveButton = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x,
        y,
        duration: 0.15,
        ease: "sine.out",
      });
    };

    if (window.innerWidth >= 768) {
      container.addEventListener("mouseenter", showButton);
      container.addEventListener("mouseleave", hideButton);
      container.addEventListener("mousemove", moveButton);
    } else {
      gsap.to(button, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: "power1.out",
        delay: 0.5,
      });
    }

    return () => {
      container.removeEventListener("mouseenter", showButton);
      container.removeEventListener("mouseleave", hideButton);
      container.removeEventListener("mousemove", moveButton);
    };
  }, []);

  wordsAnimation(titleRef, 300, 0.8);

  return (
    <>
      <section
        id="hero-container"
        className="relative w-screen h-screen md:h-dvh transition-all duration-700 overflow-hidden"
      >
        <div className="div-image relative w-full h-full will-change-transform">
          {HeroImageList.map((item, index) => (
            <Image
              key={index}
              id={`hero-${index + 1}`}
              loading="lazy"
              src={item.image}
              width={1920}
              height={1280}
              className="absolute top-0 left-0 w-full h-screen md:h-dvh object-cover opacity-0"
              style={{
                objectPosition: item.position,
                willChange: "opacity, transform",
              }}
              alt={`Imagen ${index + 1} Principal`}
            />
          ))}
          <div className="absolute top-0 left-0 w-full h-screen md:h-dvh bg-black/25 z-10" />
        </div>

        <div
          className="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 z-30"
          onClick={() => setIsOpen(true)}
        >
          <button
            id="button-hero"
            className="bg-blue border border-blue text-white rounded-md p-2 md:p-2.5 scale-0 opacity-0 z-10 will-change-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#f3f1ed"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <path d="M320-200v-560l440 280-440 280Z" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-auto text-white rounded-b-lg flex flex-col items-start py-[2em] px-[2em] lg:py-[4em] lg:px-[4em] z-30">
          <h1
            ref={titleRef}
            className="text-[1.5em] sm:text-[2.3em] md:text-[2.9em] lg:text-[3.7em] font-bold italic leading-[1.2] pr-2 text-white overflow-hidden"
          >
            Es nuestro Alberti
            <br /> Tierra de Trabajo
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
            className="bg-blue border border-blue text-white rounded-md p-1 md:p-1.5 hover:bg-transparent hover:border-white transition-colors duration-300 hover:cursor-pointer z-[10000]"
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

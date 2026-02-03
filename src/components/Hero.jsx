"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { twMerge } from "tailwind-merge";
import { useLenis } from "lenis/dist/lenis-react";

import Image from "next/image";

import { wordsAnimation } from "@/utils/constants/animations";

const Hero = ({ imagesHero }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const Lenis = useLenis();

  useEffect(() => {
    if (Lenis)
      if (isOpen) Lenis.stop();
      else Lenis.start();
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isOpen) {
      video.currentTime = 0; // opcional: arranca desde el inicio
      video.play().catch(() => {
        // Safari / mobile puede bloquear autoplay
      });
    } else {
      video.pause();
    }
  }, [isOpen]);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.2,
      defaults: { duration: 1.5, ease: "power1.inOut" },
    });

    const heroIds = imagesHero.map((_, i) => `#hero-${i + 1}`);
    tl.set(heroIds[0], { opacity: 1, scale: 1 });

    heroIds.forEach((id, index) => {
      const next = heroIds[(index + 1) % heroIds.length];
      tl.to(id, { opacity: 0, scale: 1.05 }, "+=3.5");
      tl.to(next, { opacity: 1, scale: 1, duration: 1.8 }, "<");
    });

    const container = document.querySelector("#hero-container");
    const button = document.querySelector("#button-hero");

    if (!container || !button) return;

    let bounds = null;

    const updateBounds = () => {
      bounds = container.getBoundingClientRect();
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

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

    /* ⚡ quick setters (no reflow, no GC) */
    const moveX = gsap.quickTo(button, "x", {
      duration: 0.25,
      ease: "sine.out",
    });

    const moveY = gsap.quickTo(button, "y", {
      duration: 0.2,
      ease: "sine.out",
    });

    const moveButton = (e) => {
      if (!bounds) return;
      moveX(e.clientX - bounds.left - bounds.width / 2);
      moveY(e.clientY - bounds.top - bounds.height / 2);
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
      window.removeEventListener("resize", updateBounds);
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
        className="relative w-screen h-svh overflow-hidden"
      >
        <div className="div-image relative w-full h-full will-change-transform">
          {imagesHero.map((item, index) => (
            <Image
              key={index}
              id={`hero-${index + 1}`}
              src={item.imagen.url}
              alt={`Imagen ${index + 1} Principal`}
              fill
              priority={index === 0}
              sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 100vw,
    1400px
  "
              className="absolute top-0 left-0 object-cover opacity-0"
              style={{
                objectPosition: `${item.posicion_x}% ${item.posicion_y}%`,
                willChange: "opacity, transform",
              }}
            />
          ))}
          <div className="absolute top-0 left-0 w-full h-svh bg-black/25 z-10" />
        </div>

        <div
          className="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 z-30"
          onClick={() => setIsOpen(true)}
        >
          <button
            id="button-hero"
            aria-label="Reproducir video institucional"
            className="bg-blue border border-blue text-white rounded-md p-1.5 md:p-2 scale-0 opacity-0 z-10 will-change-transform cursor-pointer"
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

        {/* <div className="absolute bottom-0 left-0 w-full h-auto text-white rounded-b-lg flex flex-col items-start py-[2em] px-[2em] lg:py-[4em] lg:px-[4em] z-30">
          <h1
            ref={titleRef}
            className="text-[1.5em] sm:text-[2.3em] md:text-[2.9em] lg:text-[3.7em] font-bold italic leading-[1.2] pr-2 text-white overflow-hidden"
          >
            Es nuestro Alberti
            <br /> Tierra de Trabajo
          </h1>
        </div> */}
      </section>
      <div
        className={twMerge(
          "fixed bottom-0 left-0 w-full h-dvh flex items-center justify-center z-[9999] bg-black transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className={twMerge(
            "absolute top-5 right-5 pointer-events-auto",
            isOpen ? "block" : "hidden",
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
          ref={videoRef}
          src="/media/hero-alberti.mp4"
          className="w-full h-screen object-cover"
          preload="metadata"
          controls
          playsInline
          aria-hidden="true"
          onEnded={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default Hero;

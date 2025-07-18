"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { twMerge } from "tailwind-merge";

const Button = ({ children = "Get GSAP", className, classnameFlair }) => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();

      const x = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientX - left);

      const y = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientY - top);

      return { x, y };
    };

    const handleEnter = (e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleLeave = (e) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMove = (e) => {
      const { x, y } = getXY(e);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.5,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);
    button.addEventListener("mousemove", handleMove);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
      button.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={twMerge(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-black px-6 py-3 font-semibold text-white hover:text-black transition-colors duration-150",
        className
      )}
    >
      <span
        ref={flairRef}
        className="absolute inset-0 scale-0 pointer-events-none"
      >
        <span
          className={twMerge(
            "absolute left-0 top-0 w-[200%] aspect-square rounded-full bg-white -translate-x-1/2 -translate-y-1/2",
            classnameFlair
          )}
        />
      </span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;

"use client";

import { useLenis } from "lenis/dist/lenis-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Intro = () => {
  const [hidden, setHidden] = useState(false);
  const Lenis = useLenis();

  useGSAP(() => {
    if (!Lenis) return;

    let counterElement = document.getElementById("counter");
    let currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      counterElement.textContent = currentValue;

      let delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();

    gsap.to("#counter", {
      delay: 3.5,
      duration: 0.25,
      opacity: 0,
    });

    gsap.to(".bar", {
      delay: 3.5,
      duration: 1.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
      onComplete: () => {
        Lenis.scrollTo(0, {
          offset: 0,
        });
        setHidden(true);
      },
    });
  }, [Lenis]);

  return (
    <section
      id="intro-container"
      className={twMerge("", hidden ? "hidden" : "block")}
    >
      <h1
        id="counter"
        className="font-bold fixed w-full h-full flex items-end justify-end z-[10000] text-white py-[0.1em] px-[0.2em] text-[20vw]"
      >
        0
      </h1>
      <div className="fixed flex top-0 left-0 w-vw h-[105vh] z-[9999]">
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
        <div className="bar w-[10vw] h-[105vh] bg-blue"></div>
      </div>
    </section>
  );
};

export default Intro;

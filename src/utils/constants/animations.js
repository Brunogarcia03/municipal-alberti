import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

const osmoEase = CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");

function wordsAnimation(ref, yPercent = 200, delay = 0) {
  useGSAP(
    () => {
      let split = new SplitText(ref.current, {
        type: "words",
      });

      gsap.fromTo(
        split.words,
        { yPercent },
        {
          yPercent: 0,
          duration: 0.6,
          delay,
          stagger: 0.06,
          scrollTrigger: ref.current,
          ease: "osmo-ease",
        }
      );
    },
    { scope: ref }
  );
}

function linesAnimation(ref, yPercent = 200, delay = 0) {
  useGSAP(
    () => {
      let split = new SplitText(ref.current, {
        type: "lines",
      });

      gsap.fromTo(
        split.lines,
        { yPercent },
        {
          yPercent: 0,
          duration: 0.6,
          delay,
          stagger: 0.06,
          scrollTrigger: ref.current,
          ease: "osmo-ease",
        }
      );
    },
    { scope: ref }
  );
}

function articleAnimation(selectorOrElement, yPercent = 20, delay = 0.5) {
  const target =
    typeof selectorOrElement === "string"
      ? document.querySelectorAll(`.${selectorOrElement}`)
      : selectorOrElement;

  if (!target) return;

  gsap.fromTo(
    target,
    { filter: "blur(12px)", opacity: 0.5, yPercent },
    {
      filter: "blur(0px)",
      opacity: 1,
      yPercent: 0,
      duration: 0.8,
      stagger: 0.1,
      delay,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
      ease: "power2.out",
    }
  );
}

export { osmoEase, wordsAnimation, linesAnimation, articleAnimation };

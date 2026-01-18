"use client";

import { cloneElement, useEffect, useRef } from "react";

const Words = ({ yPercent = 150, delay = 0, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let ctx;

    (async () => {
      const { wordsAnimation } = await import("@/utils/constants/animations");
      ctx = wordsAnimation(ref, yPercent, delay);
    })();

    return () => ctx?.revert?.();
  }, [yPercent, delay]);

  return cloneElement(children, { ref });
};

export default Words;

"use client";

import { cloneElement, useEffect, useRef } from "react";

const Lines = ({ yPercent = 150, delay = 0, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let ctx;

    (async () => {
      const { linesAnimation } = await import("@/utils/constants/animations");
      ctx = linesAnimation(ref, yPercent, delay);
    })();

    return () => ctx?.revert?.();
  }, [yPercent, delay]);

  return cloneElement(children, { ref });
};

export default Lines;

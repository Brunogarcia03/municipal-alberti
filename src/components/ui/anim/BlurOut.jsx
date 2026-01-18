"use client";

import { cloneElement, useEffect, useRef } from "react";

const BlurOut = ({ yPercent = 20, delay = 0.5, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let ctx;

    (async () => {
      const { articleAnimation } = await import("@/utils/constants/animations");

      ctx = articleAnimation("blur-out", yPercent, delay, ref);
    })();

    return () => ctx?.revert?.();
  }, [yPercent, delay]);

  return cloneElement(children, {
    ref,
    className: `${children.props.className ?? ""} blur-out overflow-hidden`,
  });
};

export default BlurOut;

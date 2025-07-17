"use client";

import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/dist/lenis-react";
import { useRef } from "react";

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;

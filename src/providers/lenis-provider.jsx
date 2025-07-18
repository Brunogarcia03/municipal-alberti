"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef } from "react";

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);

  const Lenis = useLenis();

  useEffect(() => {
    if (!Lenis) return;

    const scrollToTop = () => {
      Lenis.scrollTo(0, {
        offset: 0,
      });
    };
    scrollToTop();
  }, [Lenis]);

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

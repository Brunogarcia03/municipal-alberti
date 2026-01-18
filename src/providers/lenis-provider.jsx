"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef, useState } from "react";

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const lenis = useLenis();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");

    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!lenis || !isDesktop) return;

    lenis.scrollTo(0, { immediate: true });
  }, [lenis, isDesktop]);

  // ⛔️ Mobile / Tablet: NO Lenis
  if (!isDesktop) {
    return <>{children}</>;
  }

  // ✅ Desktop: Lenis activo
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.5,
        duration: 1.5,
        smoothWheel: true,
        smoothTouch: false, // clave
        prevent: (node) => node.id === "scroller-modal",
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;

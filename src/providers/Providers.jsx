"use client";

import dynamic from "next/dynamic";

const LenisScrollProvider = dynamic(
  () => import("@/providers/lenis-provider"),
  { ssr: false },
);

export default function Providers({ children }) {
  return <LenisScrollProvider>{children}</LenisScrollProvider>;
}

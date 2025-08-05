"use client";

import { linesAnimation } from "@/utils/constants/animations";
import { useRef, cloneElement } from "react";

const Lines = ({ yPercent = 150, delay = 0, children }) => {
  const linesRef = useRef(null);

  linesAnimation(linesRef, yPercent, delay);

  return cloneElement(children, { ref: linesRef });
};

export default Lines;

"use client";

import { wordsAnimation } from "@/utils/constants/animations";
import { cloneElement, useRef } from "react";

const Words = ({ yPercent = 150, delay = 0, children }) => {
  const wordsRef = useRef(null);

  wordsAnimation(wordsRef, yPercent, delay);

  return cloneElement(children, { ref: wordsRef });
};

export default Words;

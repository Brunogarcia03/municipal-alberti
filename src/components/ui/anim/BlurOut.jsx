"use client";

import { articleAnimation } from "@/utils/constants/animations";
import { cloneElement, useEffect, useRef } from "react";

const BlurOut = ({ yPercent = 20, delay = 0.5, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    articleAnimation("blur-out", yPercent, delay);
  }, []);

  return cloneElement(children, {
    ref,
    className: `${children.props.className ?? ""} blur-out overflow-hidden`,
  });
};

export default BlurOut;

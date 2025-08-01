"use client";

import React from "react";
import Button from "@/components/ui/Button";

const CategoriesButtons = ({
  categories = [],
  selected,
  setSelected,
  setIndexPag,
}) => {
  return (
    <div className="flex items-center gap-1 md:gap-3 relative overflow-x-scroll pb-1.5 select-none">
      <Button
        className={`text-base sm:text-lg md:text-[1.5rem] leading-[1.3] px-2 py-1 rounded-md ${
          selected === 0 && "bg-white text-black border-black"
        }`}
        onClick={() => {
          setSelected(0);
          setIndexPag(1);
        }}
      >
        Todos
      </Button>
      {categories.map((category, index) => (
        <Button
          key={index}
          className={`text-base sm:text-lg md:text-[1.5rem] leading-[1.3] px-2 py-1 rounded-md ${
            selected === category.id && "bg-white text-black border-black"
          }`}
          onClick={() => {
            setSelected(category.id);
            setIndexPag(1);
          }}
        >
          {category.nombre}
        </Button>
      ))}
    </div>
  );
};

export default CategoriesButtons;

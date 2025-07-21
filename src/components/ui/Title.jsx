import React from "react";

const Title = ({ title1, title2, subTitle }) => {
  return (
    <section className="h-full mx-auto overflow-hidden select-none">
      <div className="h-[15rem]" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[3.3em] md:text-[4.9em] lg:text-[6.25rem] z-40 text-center leading-[1.1] font-bold text-white">
          <span className="pb-[0.1em]">{title1}</span>
          <span className="block my-4 px-4 bg-gray text-blue rounded-2xl mx-[5vw]">
            {title2}
          </span>
        </h1>
        <p className="text-[1.25rem] md:text-[1.75rem] leading-[1.1] tracking-[-1px] font-light text-center max-w-2xl mx-[5vw] mt-4 md:mt-8">
          {subTitle}
        </p>
      </div>
      <div className="h-[7.5rem]"></div>
    </section>
  );
};

export default Title;

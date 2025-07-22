import React from "react";

const Title = ({ title1, title2, subTitle }) => {
  return (
    <section className="pt-[7.5rem] md:pt-[10rem] w-[95vw] md:max-w-[1560px] mx-auto">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1
          className="font-bold leading-[1.15] text-center relative text-2xl md:text-4xl lg:text-5xl"
          style={{
            lineHeight: "1.15",
            fontWeight: 700,
            textWrap: "balance",
          }}
        >
          <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl leading-[] uppercase text-blue">
            {title1}
          </span>
          <span className="text-gray">{title2}</span>
        </h1>
        <p className="leading-[1.1] text-base md:text-lg lg:text-xl max-w-3xl text-center mt-4">
          {subTitle}
        </p>
      </div>
    </section>
  );
};

export default Title;

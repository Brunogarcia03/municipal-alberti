import Contact from "@/components/resources/Contact";
import Footer from "@/components/resources/Footer";
import Title from "@/components/ui/Title";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black/90">
      <Title
        title1={"Tienes algo que"}
        title2={"contarnos"}
        subTitle={
          "Estamos para ayudarte podes visitarnos, comunicarte vía teléfono o con nuestro formulario online"
        }
      />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;

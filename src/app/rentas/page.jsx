import Footer from "@/components/resources/Footer";
import RentasForm from "@/components/resources/RentasForm";
import Lines from "@/components/ui/anim/Lines";
import Words from "@/components/ui/anim/Words";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black/90">
      <section className="pt-[10rem] md:pt-[13rem] w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Words yPercent={110}>
            <h1 className="font-bold leading-[1.15] text-center relative overflow-hidden">
              <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
                Rentas Municipal
              </span>
            </h1>
          </Words>

          <Lines yPercent={300}>
            <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4 overflow-hidden">
              Puede abonar sus impuestos municipales de forma rápida y segura
            </p>
          </Lines>
        </div>
        <div className="h-[7.5rem]"></div>
      </section>
      <RentasForm />
      <Footer />
    </main>
  );
};

export default page;

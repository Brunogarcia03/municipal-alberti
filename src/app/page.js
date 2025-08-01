import Bulletin from "@/components/Bulletin";
import Hero from "@/components/Hero";
import Footer from "@/components/resources/Footer";
import LastNews from "@/components/resources/LastNews";

const page = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full overflow-hidden">
        <Hero />
        <Bulletin />
        <section className="w-[90vw] sm:w-[95vw] md:max-w-[1560px] mx-auto text-black py-16 md:py-24">
          <LastNews />
        </section>

        <Footer dark />
      </main>
    </>
  );
};

export default page;

import Bulletin from "@/components/Bulletin";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full overflow-hidden">
        <Hero />
        <Bulletin />
      </main>
    </>
  );
};

export default page;

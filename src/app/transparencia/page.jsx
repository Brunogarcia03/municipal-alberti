import Footer from "@/components/resources/Footer";
import CardTransparency from "@/components/ui/CardTransparency";

const itemsTrasparency = [
  {
    fecha: "2025",
    presupuesto: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
    stock_deuda: {
      primer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      segundo_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      tercer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      total: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
    },
    gastos_finalidad_funcion: {
      primer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      segundo_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      tercer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      total: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
    },
    ejecucion_presupuestaria: {
      primer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      segundo_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      tercer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      total: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
    },
    situacion_economico_financiera: {
      primer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      segundo_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      tercer_trimestre: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
      total: "http://127.0.0.1:1337/uploads/ddjj_2974a8ab38.pdf",
    },
  },
];

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black/90">
      <section className="pt-[10rem] md:pt-[13rem] w-[95vw] md:max-w-[1560px] mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-bold leading-[1.15] text-center relative">
            <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
              Transparencia
            </span>
          </h1>
          <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4">
            Divulgación completa de toda la información fiscal relevante de
            manera oportuna y sistemática
          </p>
        </div>
        <div className="h-[7.5rem]"></div>
      </section>
      <section className="max-w-[97vw] w-full mx-auto rounded-3xl bg-white text-black">
        <div className="w-full py-16">
          {itemsTrasparency.map((item, index) => (
            <div
              key={index}
              className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8"
            >
              <div className="flex flex-col gap-8 items-start w-full">
                <h2 className="text-[6.25rem] leading-[1] tracking-[-1px] font-bold">
                  Año {item.fecha}
                </h2>
                <CardTransparency
                  title="Stock de deuda"
                  item={item.stock_deuda}
                />
                <CardTransparency
                  title="Gastos por finalidad - función"
                  item={item.gastos_finalidad_funcion}
                />
              </div>
              <div className="flex flex-col gap-8 items-start w-full md:pt-10">
                <CardTransparency title="Presupuesto" item={item.presupuesto} />
                <CardTransparency
                  title="Ejecución presupuestaría"
                  item={item.ejecucion_presupuestaria}
                />
                <CardTransparency
                  title="Situación económico - financiera"
                  item={item.situacion_economico_financiera}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;

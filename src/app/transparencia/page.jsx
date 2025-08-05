import Footer from "@/components/resources/Footer";
import Lines from "@/components/ui/anim/Lines";
import Words from "@/components/ui/anim/Words";
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
  {
    fecha: "2024",
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
          <Words yPercent={110}>
            <h1 className="font-bold leading-[1.15] text-center relative overflow-hidden">
              <span className="md:block w-full text-3xl md:text-5xl lg:text-6xl italic uppercase text-blue">
                Transparencia
              </span>
            </h1>
          </Words>

          <Lines yPercent={300}>
            <p className="leading-[1.1] text-base md:text-base lg:text-lg max-w-2xl text-center mt-4 overflow-hidden">
              Divulgación completa de toda la información fiscal relevante de
              manera oportuna y sistemática
            </p>
          </Lines>
        </div>
        <div className="h-[7.5rem]"></div>
      </section>
      <section className="max-w-[97vw] w-full mx-auto rounded-3xl bg-white text-black overflow-hidden">
        <div className="flex flex-col gap-10 w-full py-16">
          {itemsTrasparency.map((item, index) => (
            <div
              key={index}
              className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8"
            >
              <div className="flex flex-col gap-8 items-start w-full">
                <h2 className="text-[3.25rem] leading-[1] tracking-[-1px] font-bold">
                  Año {item.fecha}
                </h2>
                <CardTransparency
                  title="Stock de deuda"
                  item={item.stock_deuda}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48px"
                      viewBox="0 -960 960 960"
                      width="48px"
                      fill="#212121"
                      className="opacity-80 size-full"
                    >
                      <path d="M180-120q-24 0-42-18t-18-42v-660h60v660h660v60H180Zm75-135v-334h119v334H255Zm198 0v-540h119v540H453Zm194 0v-170h119v170H647Z" />
                    </svg>
                  }
                />
                <CardTransparency
                  title="Gastos por finalidad - función"
                  item={item.gastos_finalidad_funcion}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48px"
                      viewBox="0 -960 960 960"
                      width="48px"
                      fill="#212121"
                      className="opacity-80 size-full"
                    >
                      <path d="M614-160v-83H450v-207H345v83H80v-226h265v83h105v-207h164v-83h266v226H614v-83H510v354h104v-82h266v225H614Zm60-60h146v-105H674v105ZM140-427h145v-106H140v106Zm534-207h146v-106H674v106Zm0 414v-105 105ZM285-427v-106 106Zm389-207v-106 106Z" />
                    </svg>
                  }
                />
              </div>
              <div className="flex flex-col gap-8 items-start w-full md:pt-10">
                <CardTransparency
                  title="Presupuesto"
                  item={item.presupuesto}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48px"
                      viewBox="0 -960 960 960"
                      width="48px"
                      fill="#212121"
                      className="opacity-80 size-full"
                    >
                      <path d="M400.06-300Q508-300 584.5-376.13 661-452.25 661-561q0-107.92-76.5-183.46T400.06-820q-107.94 0-183.5 75.54T141-561q0 108.75 75.56 184.87Q292.12-300 400.06-300ZM371-448v-267h60v267h-60Zm-145 0v-184h60v184h-60Zm290 0v-143h60v143h-60ZM838-80 605-314q-42 35-94.24 54.5Q458.51-240 400-240q-133 0-226-93.5T81-560.7q0-133.71 92.8-226.5Q266.59-880 400.3-880q133.7 0 227.2 93T721-561q0 58.51-19.5 110.76Q682-398 647-356l233 233-42 43Z" />
                    </svg>
                  }
                />
                <CardTransparency
                  title="Ejecución presupuestaría"
                  item={item.ejecucion_presupuestaria}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48px"
                      viewBox="0 -960 960 960"
                      width="48px"
                      fill="#212121"
                      className="opacity-80 size-full"
                    >
                      <path d="m682-138 146-91-146-91v182ZM240-620h480v-60H240v60ZM732.5-41Q655-41 600-96.5T545-228q0-78.43 54.99-133.72Q654.98-417 733-417q77 0 132.5 55.28Q921-306.43 921-228q0 76-55.5 131.5T732.5-41ZM120-81v-699q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v327q-14.17-6.86-29.08-11.43Q796-469 780-472v-308H180v599h310q2.88 18.17 8.94 34.59Q505-130 513-114l-33 33-60-60-60 60-60-60-60 60-60-60-60 60Zm120-199h252.27q3.73-16 8.23-31t12.5-29H240v60Zm0-170h384q22-11 46-17.5t50-8.5v-34H240v60Zm-60 269v-599 599Z" />
                    </svg>
                  }
                />
                <CardTransparency
                  title="Situación económico - financiera"
                  item={item.situacion_economico_financiera}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48px"
                      viewBox="0 -960 960 960"
                      width="48px"
                      fill="#212121"
                      className="opacity-80 size-full"
                    >
                      <path d="M318-420v-295h90v295l-45-45-45 45Zm194 91v-551h90v461l-90 90ZM124-229v-320h90v230l-90 90Zm-4 111 246-246 149 132 262-262h-88v-60h191v190h-60v-88L517-149 368-280 206-118h-86Z" />
                    </svg>
                  }
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

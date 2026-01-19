import Footer from "@/components/resources/Footer";
import Lines from "@/components/ui/anim/Lines";
import Words from "@/components/ui/anim/Words";
import CardTransparency from "@/components/ui/CardTransparency";
import { getAllTransparency } from "@/utils/api/global.api";

const Page = async () => {
  const res = await getAllTransparency();

  const data = res
    .map((item) => ({
      fecha: item.fecha,
      presupuesto: item.presupuesto ? item.presupuesto.url : null,
      stock_deuda: {
        primer_trimestre: item.stock_deuda[0]?.primer_trimestre?.url || null,
        segundo_trimestre: item.stock_deuda[0]?.segundo_trimestre?.url || null,
        tercer_trimestre: item.stock_deuda[0]?.tercer_trimestre?.url || null,
        total: item.stock_deuda[0]?.total?.url || null,
      },
      gastos_finalidad_funcion: {
        primer_trimestre:
          item.gastos_finalidad_funcion[0]?.primer_trimestre?.url || null,
        segundo_trimestre:
          item.gastos_finalidad_funcion[0]?.segundo_trimestre?.url || null,
        tercer_trimestre:
          item.gastos_finalidad_funcion[0]?.tercer_trimestre?.url || null,
        total: item.gastos_finalidad_funcion[0]?.total?.url || null,
      },
      ejecucion_presupuestaria: {
        primer_trimestre:
          item.ejecucion_presupuestaria[0]?.primer_trimestre?.url || null,
        segundo_trimestre:
          item.ejecucion_presupuestaria[0]?.segundo_trimestre?.url || null,
        tercer_trimestre:
          item.ejecucion_presupuestaria[0]?.tercer_trimestre?.url || null,
        total: item.ejecucion_presupuestaria[0]?.total?.url || null,
      },
      situacion_economico_financiera: {
        primer_trimestre:
          item.situacion_economico_financiera[0]?.primer_trimestre?.url || null,
        segundo_trimestre:
          item.situacion_economico_financiera[0]?.segundo_trimestre?.url ||
          null,
        tercer_trimestre:
          item.situacion_economico_financiera[0]?.tercer_trimestre?.url || null,
        total: item.situacion_economico_financiera[0]?.total?.url || null,
      },
    }))
    .sort((a, b) => Number(b.fecha) - Number(a.fecha));

  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-black/90 text-white">
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
        <div className="flex flex-col gap-5 w-full">
          {data.map((item, index) => (
            <div key={index} className="max-w-7xl mx-auto px-4 py-10">
              <h2 className="text-4xl font-bold mb-10">Año {item.fecha}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CardTransparency title="Presupuesto" item={item.presupuesto} />
                <CardTransparency
                  title="Stock de deuda"
                  item={item.stock_deuda}
                />
                <CardTransparency
                  title="Gastos por finalidad y función"
                  item={item.gastos_finalidad_funcion}
                />
                <CardTransparency
                  title="Ejecución presupuestaria"
                  item={item.ejecucion_presupuestaria}
                />

                <CardTransparency
                  title="Situación económico-financiera"
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

export default Page;

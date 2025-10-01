import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

const axiosClient = axios.create({
  baseURL: baseURL,
});

export const getAllNews = async (page = 1) => {
  try {
    const res = await axiosClient.get(
      `/noticias?populate=*&pagination[page]=${page}&pagination[pageSize]=8`
    );

    return {
      data: res.data.data,
      pagination: res.data.meta.pagination,
    };
  } catch (error) {
    console.error("Error al obtener noticias paginadas:", error);
    return { data: [], pagination: { page: 1, pageCount: 1 } };
  }
};

export const getAllNewsByCategory = async (page = 1, categoryId) => {
  try {
    const res = await axiosClient.get(
      `/noticias?populate=*&pagination[page]=${page}&pagination[pageSize]=8&filters[categoria][id][$eq]=${categoryId}`
    );

    return {
      data: res.data.data,
      pagination: res.data.meta.pagination,
    };
  } catch (error) {
    console.error("Error al obtener noticias paginadas:", error);
    return { data: [], pagination: { page: 1, pageCount: 1 } };
  }
};

export const getAllCategories = async () => {
  const res = await axiosClient.get("/categorias");

  return res.data.data;
};

export const getOneNews = async (slug) => {
  const res = await axiosClient.get(
    `/noticias?populate=*&filters[slug][$eq]=${slug}`
  );

  return res.data.data;
};

export const getAllOfficials = async () => {
  const res = await axiosClient.get(
    "/funcionarios?populate=imagen&populate=declaracion_jurada.archivo"
  );

  return { data: res.data.data, meta: res.data.meta };
};

export const getAllDDJJ = async () => {
  const res = await axiosClient.get("/declaraciones-juradas?populate=*");

  return res.data.data;
};

export const getAllOrdinances = async () => {
  const res = await axiosClient.get("/ordenanzas?populate=*");

  return res.data.data;
};

export const getAllDecrees = async () => {
  const res = await axiosClient.get("/decretos?populate=*");

  return res.data.data;
};

export const getAllPublication = async () => {
  const res = await axiosClient.get("/publicacion-de-leys?populate=*");

  return res.data.data;
};

export const getAllHeritage = async () => {
  const res = await axiosClient.get("/patrimonios?populate=*");

  return res.data.data;
};

export const getAllTransparency = async () => {
  const res = await axiosClient.get(
    "https://strapi-production-4f4b.up.railway.app/api/transparencias?populate[0]=presupuesto&populate[1]=stock_deuda.primer_trimestre&populate[2]=stock_deuda.segundo_trimestre&populate[3]=stock_deuda.tercer_trimestre&populate[4]=stock_deuda.total&populate[5]=gastos_finalidad_funcion.primer_trimestre&populate[6]=gastos_finalidad_funcion.segundo_trimestre&populate[7]=gastos_finalidad_funcion.tercer_trimestre&populate[8]=gastos_finalidad_funcion.total&populate[9]=ejecucion_presupuestaria.primer_trimestre&populate[10]=ejecucion_presupuestaria.segundo_trimestre&populate[11]=ejecucion_presupuestaria.tercer_trimestre&populate[12]=ejecucion_presupuestaria.total&populate[13]=situacion_economico_financiera.primer_trimestre&populate[14]=situacion_economico_financiera.segundo_trimestre&populate[15]=situacion_economico_financiera.tercer_trimestre&populate[16]=situacion_economico_financiera.total"
  );

  return res.data.data;
};

import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

const axiosClient = axios.create({
  baseURL,
  timeout: 10000,
});

// ✅ Utilidad para manejar errores de Axios
const handleError = (error, message) => {
  if (axios.isAxiosError(error)) {
    console.error(`${message}:`, {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    });
  } else {
    console.error(`${message}:`, error);
  }
};

// ----------------- Noticias -----------------
export const getAllNews = async (page = 1) => {
  try {
    const res = await axiosClient.get(
      `/noticias?populate=*&sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=8`,
    );

    return {
      data: res.data.data,
      pagination: res.data.meta.pagination,
    };
  } catch (error) {
    handleError(error, "Error al obtener noticias paginadas");
    return { data: [], pagination: { page: 1, pageCount: 1 } };
  }
};

export const getAllNewsByCategory = async (page = 1, categoryId) => {
  if (!categoryId) {
    console.warn("⚠️ No se proporcionó categoryId en getAllNewsByCategory");
    return { data: [], pagination: { page: 1, pageCount: 1 } };
  }

  try {
    const res = await axiosClient.get(
      `/noticias?populate=*&pagination[page]=${page}&pagination[pageSize]=8&filters[categoria][id][$eq]=${categoryId}&sort=createdAt:desc`,
    );

    return {
      data: res.data.data,
      pagination: res.data.meta.pagination,
    };
  } catch (error) {
    handleError(error, "Error al obtener noticias por categoría");
    return { data: [], pagination: { page: 1, pageCount: 1 } };
  }
};

// ----------------- Categorías -----------------
export const getAllCategories = async () => {
  try {
    const res = await axiosClient.get("/categorias");
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener categorías");
    return [];
  }
};

// ----------------- Una noticia -----------------
export const getOneNews = async (slug) => {
  if (!slug) {
    console.warn("⚠️ No se proporcionó slug en getOneNews");
    return [];
  }

  try {
    const res = await axiosClient.get(
      `/noticias?populate=*&filters[slug][$eq]=${slug}`,
    );
    return res.data.data;
  } catch (error) {
    handleError(error, `Error al obtener noticia con slug: ${slug}`);
    return [];
  }
};

// ----------------- Funcionarios -----------------
export const getAllOfficials = async () => {
  try {
    const res = await axiosClient.get(
      "/funcionarios?populate=imagen&populate=declaracion_jurada.archivo",
    );
    return { data: res.data.data, meta: res.data.meta };
  } catch (error) {
    handleError(error, "Error al obtener funcionarios");
    return { data: [], meta: {} };
  }
};

// ----------------- Declaraciones juradas -----------------
export const getAllDDJJ = async () => {
  try {
    const res = await axiosClient.get("/declaraciones-juradas?populate=*");
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener declaraciones juradas");
    return [];
  }
};

// ----------------- Ordenanzas -----------------
export const getAllOrdinances = async () => {
  try {
    const res = await axiosClient.get("/ordenanzas?populate=*");
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener ordenanzas");
    return [];
  }
};

// ----------------- Decretos -----------------
export const getAllDecrees = async () => {
  try {
    const res = await axiosClient.get("/decretos?populate=*");
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener decretos");
    return [];
  }
};

// ----------------- Publicaciones -----------------
export const getAllPublication = async (start = 0) => {
  try {
    const res = await axiosClient.get(
      `/publicacion-de-leys?pagination[start]=${start}&pagination[limit]=${
        start === 0 ? 3 : 2
      }&sort=fecha:desc&populate=*`,
    );
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener publicaciones");
    return [];
  }
};

// ----------------- Patrimonios -----------------
export const getAllHeritage = async () => {
  try {
    const res = await axiosClient.get("/patrimonios?populate=*");
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener patrimonios");
    return [];
  }
};

// ----------------- Transparencia -----------------
export const getAllTransparency = async () => {
  try {
    const res = await axiosClient.get(
      "https://strapi-production-4f4b.up.railway.app/api/transparencias?populate[0]=presupuesto&populate[1]=stock_deuda.primer_trimestre&populate[2]=stock_deuda.segundo_trimestre&populate[3]=stock_deuda.tercer_trimestre&populate[4]=stock_deuda.total&populate[5]=gastos_finalidad_funcion.primer_trimestre&populate[6]=gastos_finalidad_funcion.segundo_trimestre&populate[7]=gastos_finalidad_funcion.tercer_trimestre&populate[8]=gastos_finalidad_funcion.total&populate[9]=ejecucion_presupuestaria.primer_trimestre&populate[10]=ejecucion_presupuestaria.segundo_trimestre&populate[11]=ejecucion_presupuestaria.tercer_trimestre&populate[12]=ejecucion_presupuestaria.total&populate[13]=situacion_economico_financiera.primer_trimestre&populate[14]=situacion_economico_financiera.segundo_trimestre&populate[15]=situacion_economico_financiera.tercer_trimestre&populate[16]=situacion_economico_financiera.total",
    );
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener transparencia");
    return [];
  }
};

// ----------------- Imagenes Hero -----------------
export const getAllHeroImage = async () => {
  try {
    const res = await axiosClient.get("/imagenes-hero?populate=*");
    return res.data.data;
  } catch (error) {
    handleError(error, "Error al obtener imagenes de hero");
    return [];
  }
};

// ----------------- Redes sociales -----------------
export const getRedes = async () => {
  try {
    const res = await axiosClient.get("/red-social");
    return res.data.data ?? null;
  } catch (error) {
    console.error(error, "Error al obtener redes sociales");
    return null;
  }
};

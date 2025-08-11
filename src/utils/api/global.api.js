import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

const axiosClient = axios.create({
  baseURL: baseURL,
});

export const getAllNews = async (page = 1) => {
  try {
    const res = await axiosClient.get(
      `/noticias?populate[imagen]=true&populate[categorias]=true&pagination[page]=${page}&pagination[pageSize]=8`
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
  const res = await axiosClient.get(
    `/noticias?populate=*&pagination[page]=${page}&pagination[pageSize]=8&filters[categorias][id][$eq]=${categoryId}`
  );

  return {
    data: res.data.data,
    pagination: res.data.meta.pagination,
  };
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

  console.log(res.data.data);

  return res.data.data;
};

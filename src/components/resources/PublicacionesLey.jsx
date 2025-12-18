"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import Words from "../ui/anim/Words";
import { formatDate } from "@/utils/tools";
import { renderContent } from "@/utils/tools";
import { getAllPublication } from "@/utils/api/global.api";
import NewsContentRenderer from "@/providers/NewsContentRenderer";

const PublicacionesLey = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPublicaciones = async () => {
    setLoading(true);
    try {
      const data = await getAllPublication(start);

      setPublicaciones((prev) => [...prev, ...data]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicaciones();
  }, [start]);

  return (
    <section className="relative w-[95vw] md:w-[90vw] max-w-full md:max-w-[1560px] mt-[1.5rem] md:mt-[5.5rem] mx-auto overflow-hidden">
      <Words>
        <Link
          href={`/boletin/publicaciones-de-ley`}
          className="flex items-center group"
        >
          <h3 className="text-base sm:text-lg md:text-[1.5rem] font-bold leading-[1.3] pl-2 py-1 overflow-hidden">
            Publicaciones de ley
          </h3>
          <div className="flex flex-none items-center justify-center w-0 group-hover:w-6 ml-1 translate-0 overflow-hidden h-4 transition-all duration-150 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#00438b"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </div>
        </Link>
      </Words>
      <div className="w-full h-[1px] bg-gray" />
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-[1.56em] pb-2 gap-4 w-full px-2 sm:px-4">
        {publicaciones.map((p, index) => (
          <div
            key={index}
            className="relative flex flex-col p-[1.5em] sm:p-[2.5em] items-start gap-4 h-full bg-white rounded-md shadow-sm shadow-blue group w-full"
          >
            <div className="flex items-center justify-between w-full mb-[1.5em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#00438b"
              >
                <path d="M160-120v-66.67h480V-120H160Zm223.33-206L160-549.33 234.67-626 460-402.67 383.33-326Zm254-254L414-805.33 490.67-880 714-656.67 637.33-580Zm196 420L302-691.33 348.67-738 880-206.67 833.33-160Z" />
              </svg>
              <p className="italic text-xs md:text-sm lg:text-base">
                {formatDate(p.fecha)}
              </p>
            </div>
            <h6 className="text-base sm:text-lg md:text-[1.25rem] font-bold mb-[1em] w-full">
              {p.titulo}
            </h6>
            <div className="flex flex-col gap-y-1 w-full md:max-w-[90%]">
              <div className="prose prose-p:prose-lg prose-h2:prose-xl prose-h1:prose-2xl max-w-5xl mx-auto my-5">
                <NewsContentRenderer content={p.contenido} />
              </div>
            </div>
            {p.archivo && (
              <Link
                className="w-full mt-4"
                href={p.archivo.url}
                target="_blank"
              >
                <Button className="inline-flex items-center justify-center w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors duration-300">
                  Ver archivo
                </Button>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Botón para cargar más */}
      <div className="flex justify-center mt-6">
        <Button
          onClick={() => setStart(start + (start === 0 ? 3 : 2))}
          disabled={loading}
          className="px-6 py-2 rounded-md border border-blue bg-blue text-white hover:bg-transparent hover:text-blue transition-colors"
        >
          {loading ? "Cargando..." : "Ver más"}
        </Button>
      </div>
    </section>
  );
};

export default PublicacionesLey;

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { formatDate } from "@/utils/tools";
import NewsContentRenderer from "@/providers/NewsContentRenderer";

export default function DocumentsGridPublications({
  items,
  showYearFilter = true,
  emptyText = "No hay documentos para mostrar",
}) {
  const years = useMemo(() => {
    const uniqueYears = new Set(
      items.map((i) => new Date(i.fecha).getFullYear()),
    );
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, [items]);

  const [selectedYear, setSelectedYear] = useState(null);

  const filteredItems = useMemo(() => {
    if (!selectedYear) return items;
    return items.filter(
      (i) => new Date(i.fecha).getFullYear() === selectedYear,
    );
  }, [items, selectedYear]);

  return (
    <>
      {/* FILTROS */}
      {showYearFilter && years.length > 1 && (
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-4 py-2 rounded-md border font-medium transition
              ${
                selectedYear === null
                  ? "bg-blue text-white border-blue"
                  : "border-blue text-blue hover:bg-blue hover:text-white"
              }`}
          >
            Todos
          </button>

          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-md border font-medium transition
                ${
                  selectedYear === year
                    ? "bg-blue text-white border-blue"
                    : "border-blue text-blue hover:bg-blue hover:text-white"
                }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}

      {/* GRID */}
      {filteredItems.length === 0 ? (
        <p className="text-center italic opacity-70">{emptyText}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center w-full">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
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
                  {formatDate(item.fecha)}
                </p>
              </div>
              <h6 className="text-base sm:text-lg md:text-[1.25rem] font-bold mb-[1em] w-full">
                {item.titulo}
              </h6>
              <div className="flex flex-col gap-y-1 w-full md:max-w-[90%]">
                <div className="prose prose-p:prose-sm md:prose-p:prose-lg prose-h2:prose-xl prose-h1:prose-2xl mb-5">
                  <NewsContentRenderer content={item.contenido} />
                </div>
              </div>
              {(item.archivo?.url || item.url_pdf) && (
                <Link
                  className="w-full mt-4"
                  href={item.archivo?.url || item.url_pdf}
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
      )}
    </>
  );
}

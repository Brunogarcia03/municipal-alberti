"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { formatDate } from "@/utils/tools";

export default function DocumentsGrid({
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center w-full">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col p-[1.5em] items-start gap-4 bg-white rounded-md shadow-sm shadow-blue w-full"
            >
              <p className="italic text-xs md:text-sm">
                {formatDate(item.fecha)}
              </p>

              <h6 className="text-sm sm:text-base md:text-lg font-bold">
                {item.titulo || item.nombre}
              </h6>

              <Link className="w-full mt-5" href={item.url_pdf} target="_blank">
                <Button className="w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors">
                  Ver archivo
                </Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

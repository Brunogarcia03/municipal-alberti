"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { formatDate } from "@/utils/tools";
import { getAllDecrees } from "@/utils/api/global.api";

export default function DocumentsGrid({
  initialItems,
  initialPage,
  pageCount,
  showYearFilter = true,
  emptyText = "No hay documentos para mostrar",
}) {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [search, setSearch] = useState("");

  const hasMore = page < pageCount;

  // 🔽 LOAD MORE
  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const nextPage = page + 1;
    const res = await getAllDecrees(nextPage, 12);
    setItems((prev) => [...prev, ...res.data]);
    setPage(nextPage);
    setLoading(false);
  };

  const years = useMemo(() => {
    const uniqueYears = new Set(
      items.map((i) => new Date(i.fecha).getFullYear()),
    );
    return Array.from(uniqueYears).sort((a, b) => b - a);
  }, [items]);

  const filteredItems = useMemo(() => {
    let result = items;

    if (selectedYear) {
      result = result.filter(
        (i) => new Date(i.fecha).getFullYear() === selectedYear,
      );
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((i) =>
        (i.titulo || i.nombre || "").toLowerCase().includes(q),
      );
    }

    return result;
  }, [items, selectedYear, search]);

  // Ocultar "Cargar más" si hay búsqueda o filtro activo
  const showLoadMore = hasMore && !selectedYear && !search.trim();

  return (
    <>
      {/* BUSCADOR */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar..."
          className="w-full max-w-xl px-4 py-2 border border-blue rounded-md text-sm focus:outline-none focus:ring-2"
        />
      </div>

      {/* FILTROS POR AÑO */}
      {showYearFilter && (
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
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col p-[1.5em] items-start gap-4 h-full bg-white rounded-md shadow-sm shadow-blue w-full"
              >
                <p className="italic text-xs md:text-sm">
                  {formatDate(item.fecha)}
                </p>
                <h6 className="text-sm sm:text-base md:text-lg font-bold">
                  {item.titulo || item.nombre}
                </h6>
                {(item.archivo?.url || item.url_pdf) && (
                  <Link
                    className="w-full mt-auto"
                    href={item.archivo?.url || item.url_pdf}
                    target="_blank"
                  >
                    <Button className="w-full uppercase border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors">
                      Ver archivo
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* LOAD MORE */}
          {showLoadMore && (
            <div className="flex justify-center mt-10">
              <Button
                className="w-full max-w-sm border border-blue rounded-md px-5 py-2 bg-blue hover:text-blue hover:bg-transparent transition-colors"
                onClick={loadMore}
                disabled={loading}
              >
                {loading ? "Cargando..." : "Cargar más"}
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}

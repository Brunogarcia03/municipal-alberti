"use client";

import React, { useEffect, useState } from "react";
import CategoriesButtons from "@/components/ui/CategoriesButtons";
import Article from "@/components/ui/Article";
import Button from "@/components/ui/Button";
import { getAllNews, getAllNewsByCategory } from "@/utils/api/global.api";

const FilterProvider = ({ news = [], categories = [] }) => {
  const [selected, setSelected] = useState(0);
  const [indexPag, setIndexPag] = useState(1);
  const [newsPag, setNewsPag] = useState(news);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");

      console.log(hash);

      if (hash) {
        const categoria = categories.find((c) => c.slug === hash);
        if (categoria) {
          setSelected(categoria.id);
        }
      }
    }
  }, [categories, window.location.hash]);

  useEffect(() => {
    const fetchPaginatedNews = async () => {
      setLoading(true);
      if (selected === 0) {
        const { data, pagination } = await getAllNews(indexPag);
        setNewsPag(data);
        setPageCount(pagination.pageCount);
      } else {
        const { data, pagination } = await getAllNewsByCategory(
          indexPag,
          selected
        );
        setNewsPag(data);
        setPageCount(pagination.pageCount);
      }
      setLoading(false);
    };

    fetchPaginatedNews();
  }, [indexPag, selected]);

  const handlePrevious = () => {
    setIndexPag((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setIndexPag((prev) => Math.min(prev + 1, pageCount));
  };

  return (
    <>
      <CategoriesButtons
        categories={categories}
        selected={selected}
        setSelected={setSelected}
        setIndexPag={setIndexPag}
        loading={loading}
      />
      <div className="mt-[1.56em] w-full h-[1px] bg-gray" />

      {loading ? (
        <p className="text-center py-10 text-gray text-lg">Cargando...</p>
      ) : (
        <div className="pt-[1.5em] px-[1rem] sm:px-[1.75rem] grid grid-cols-1 auto-cols-fr">
          {newsPag.length > 0 ? (
            newsPag.map((n, index) => <Article key={index} news={n} />)
          ) : (
            <p className="text-center py-10 text-gray text-lg">
              No hay noticias en esta categoría.
            </p>
          )}
        </div>
      )}

      <div className="flex items-center justify-center gap-x-2 mt-[1.56em]">
        <Button onClick={handlePrevious} disabled={indexPag <= 1}>
          Anterior
        </Button>
        <span>
          {indexPag} / {pageCount}
        </span>
        <Button onClick={handleNext} disabled={indexPag >= pageCount}>
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default FilterProvider;

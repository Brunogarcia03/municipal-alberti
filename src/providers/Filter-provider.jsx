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
        <div className="pt-[1.5em] px-[1rem] sm:px-[1.75rem] grid grid-cols-1 auto-cols-fr">
          <p className="text-center py-10 text-gray text-lg">Cargando...</p>
        </div>
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
        <Button
          onClick={handlePrevious}
          disabled={indexPag <= 1}
          className="text-base sm:text-lg md:text-[1rem] hover:text-black leading-[1.3] px-2 py-1 rounded-md disabled:opacity-50"
        >
          <div className="flex items-center gap-x-1">
            <span>Anterior</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-white group-hover:fill-black"
            >
              <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
            </svg>
          </div>
        </Button>

        <p className="text-base sm:text-lg md:text-[1.4rem] text-black leading-[1.3] px-2 py-1 font-semibold">
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#212121"
              className="transition-discrete duration-700 animate-spin"
            >
              <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
            </svg>
          ) : (
            <>
              {indexPag} / {pageCount}
            </>
          )}
        </p>

        <Button
          onClick={handleNext}
          disabled={indexPag >= pageCount}
          className="text-base sm:text-lg md:text-[1rem] flex items-center hover:text-black leading-[1.3] px-2 py-1 rounded-md disabled:opacity-50"
        >
          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-white group-hover:fill-black"
            >
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
            <span>Siguiente</span>
          </div>
        </Button>
      </div>
    </>
  );
};

export default FilterProvider;

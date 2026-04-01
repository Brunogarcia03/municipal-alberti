"use client";

import { useEffect, useState } from "react";

export default function PubliModal({ publicidad }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!publicidad) return;

    const now = new Date();
    const desde = new Date(publicidad.Desde);
    const hasta = new Date(publicidad.Hasta);

    // Validar fechas
    const isActive = now >= desde && now <= hasta;

    // Ver si ya fue cerrada
    const dismissed = localStorage.getItem("publicidad-dismissed");

    if (isActive && !dismissed) {
      setOpen(true);
    }
  }, [publicidad]);

  const handleClose = () => {
    localStorage.setItem("publicidad-dismissed", "true");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70">
      <div className="relative bg-blue rounded-md overflow-hidden max-w-md w-full shadow-xl">
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-black cursor-pointer text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#f3f1ed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>

        {/* Imagen */}
        <img
          src={publicidad.imagen.url}
          alt="Publicidad"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

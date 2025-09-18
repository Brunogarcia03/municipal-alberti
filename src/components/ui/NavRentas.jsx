"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/dist/lenis-react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const tasasList = [
  { value: "01", label: "Alum/Bar/Limp/Cvp" },
  { value: "02", label: "Red Vial" },
  { value: "03", label: "Servicios Sanitarios" },
  { value: "05", label: "Seguridad e Higiene" },
  { value: "09", label: "FONDO MPAL.VIVIENDA" },
  { value: "10", label: "Patente de Rodados" },
  { value: "11", label: "Automotores" },
  { value: "12", label: "Carnet de Conductor" },
  { value: "13", label: "Inspección de Antenas" },
  { value: "20", label: "Pavimento Nvo." },
  { value: "50", label: "Ing.Varios Urbano" },
  { value: "51", label: "Pavimento" },
  { value: "52", label: "Moratorias" },
  { value: "53", label: "Limp. terr. veredas" },
  { value: "54", label: "Obra Agua Cte." },
  { value: "55", label: "Red Cloacal" },
  { value: "56", label: "Der. Construcción" },
  { value: "57", label: "Limp. Vereda" },
  { value: "58", label: "Pavimento 2" },
  { value: "59", label: "Plan Redes" },
  { value: "60", label: "Limp. Bald./Veredas" },
  { value: "61", label: "Limp. terreno-1" },
  { value: "62", label: "Limp. terreno-2" },
  { value: "63", label: "Limp. Terreno 3" },
  { value: "99", label: "Plan de Pago" },
];

const NavRentas = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const [tasaSelected, setTasaSelected] = useState(tasasList[0].value);
  const [partida, setPartida] = useState("");
  const [boletas, setBoletas] = useState([]);
  const [error, setError] = useState("");

  async function handleBuscar() {
    try {
      setError("");
      const resp = await axios.get("/api/rentas/boletas", {
        params: { tasa: tasaSelected, partida },
      });

      if (resp.data.ReqRta === "true") {
        setBoletas(resp.data.Boletas);
      } else {
        setError(resp.data.ReqMje || "No se encontraron boletas");
      }
    } catch (e) {
      setError("Error al conectar con el servicio");
    }
  }

  const Lenis = useLenis();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const header = document.getElementById("main-header");

    if (openModal) {
      html.classList.add("lenis-stopped", "-no-scroll");
      body.style.overflow = "hidden";
      Lenis?.stop();
      if (header) header.classList.add("hidden");
    } else {
      html.classList.remove("lenis-stopped", "-no-scroll");
      body.style.overflow = "";
      Lenis?.start();
      if (header) header.classList.remove("hidden");
    }
  }, [openModal, Lenis]);

  return (
    <>
      <div
        onClick={
          item.id === "pago-electronico"
            ? () => setOpenModal(true)
            : async () => alert("Proximamente")
        }
        className="flex flex-col items-center gap-2 font-bold text-gray-700 text-[1rem] md:text-[1.25rem] leading-[1.4] hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <span className="bg-blue rounded-full p-8">{item.icon}</span>
        <span className="text-center max-w-sm">{item.text}</span>
      </div>
      {openModal && (
        <section
          className="fixed top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh] z-[1000] transition-all duration-500 p-[2.5vw] md:p-2"
          onClick={() => setOpenModal(false)}
        >
          <div className="absolute inset-0  h-[100vh] bg-black/50 backdrop-blur-sm z-[999]" />
          <div
            id="scroller-modal"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              "relative flex flex-col gap-5 justify-between w-full md:w-[50%] h-2/3 rounded-md bg-black pl-[4vw] py-[4vw] md:pl-[2vw] pr-[1vw] md:py-[2vw] z-[1001]",
              openModal ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            <div className="w-full block overflow-y-auto overscroll-y-auto pr-5">
              <div className="grid grid-cols-3 items-center justify-between w-full border-b pb-[5vw] md:pb-[2vw] border-white z-10">
                <div className="flex gap-1">
                  <button className="p-2 border-2 border-white rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#f3f1ed"
                    >
                      <path d="M475-140q5 0 11.5-2.5T497-149l337-338q13-13 19.5-29.67Q860-533.33 860-550q0-17-6.5-34T834-614L654-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5Q540-807 527-794l-18 18 81 82q13 14 23 32.5t10 40.5q0 38-29.5 67T526-525q-25 0-41.5-7.5t-30.19-21.34L381-627 200-446q-5 5-7 10.53-2 5.52-2 11.84 0 12.63 8.5 21.13 8.5 8.5 21.17 8.5 6.33 0 11.83-3t9.5-7l138-138 42 42-137 137q-5 5-7 11t-2 12q0 12 9 21t21 9q6 0 11.5-2.5t9.5-6.5l138-138 42 42-137 137q-4 4-6.5 10.33-2.5 6.34-2.5 12.67 0 12 9 21t21 9q6 0 11-2t10-7l138-138 42 42-138 138q-5 5-7 11t-2 11q0 14 8 22t22 8Zm.06 60Q442-80 416-104.5t-31-60.62Q351-170 328-193t-28-57q-34-5-56.5-28.5T216-335q-37-5-61-30t-24-60q0-17 6.72-34.05Q144.45-476.1 157-489l224-224 110 110q8 8 17.33 12.5 9.34 4.5 18.67 4.5 13 0 24.5-11.5t11.5-24.65q0-5.85-3.5-13.35T548-651L405-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5-16.67 6.5-29.61 19.36L126-642q-14 14-19.5 29.5t-6.5 35q-1 19.5 7.5 38T128-506l-43 43q-20-22-32.5-53T40-579q0-30 11.5-57.5T84-685l151-151q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T448-836l18 18 18-18q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T697-836l179 179q22 22 33 50.03 11 28.04 11 57 0 28.97-11 56.47T876-444L539-107q-13 13-29.53 20t-34.41 7ZM377-626Z" />
                    </svg>
                  </button>
                </div>
                <span className="text-center font-bold w-full text-white">
                  Pago Electrónico e Informe
                </span>
                <div className="flex items-center justify-end w-full">
                  <button
                    className="p-2 border-2 border-white group hover:bg-white transition-colors duration-300 rounded-md cursor-pointer"
                    onClick={() => setOpenModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      className="fill-white group-hover:fill-black"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-[1em] leading-[1.5] w-full text-white">
                <h2 className="text-xl font-bold mt-4 mb-2">Ingrese Partida</h2>
                <div className="w-full flex flex-wrap gap-3">
                  <input
                    type="number"
                    name="partida"
                    id="partida"
                    value={partida}
                    onChange={(e) => setPartida(e.target.value)}
                    className="border-2 border-white rounded-md w-full min-h-[40px] text-white mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-gray"
                  />
                </div>
                <h2 className="text-xl font-bold mt-4 mb-2">
                  Seleccionar Tasa
                </h2>
                <div className="w-full ">
                  <select
                    id="tasas-select"
                    value={tasaSelected}
                    onChange={(e) => setTasaSelected(e.target.value)}
                    className="border-2 border-white rounded-md w-full min-h-[40px] text-white mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-gray"
                  >
                    {tasasList.map((tasa) => (
                      <option
                        key={tasa.value}
                        value={tasa.value}
                        className="bg-black text-white"
                      >
                        {tasa.label} - {tasa.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="h-full w-full" />

                <Button
                  onClick={handleBuscar}
                  className="flex items-center gap-2 w-full py-3 md:py-4 px-10 mt-[16px] bg-blue text-white rounded-md text-[1em] md:text-[1.7em] italic border-2 border-white group hover:bg-white transition-colors duration-300 cursor-pointer"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="#f3f1ed"
                    className="fill-white group-hover:fill-black transition-colors duration-300 inline-flex mr-3"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NavRentas;

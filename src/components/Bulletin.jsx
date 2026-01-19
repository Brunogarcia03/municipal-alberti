import GridBento from "./resources/GridBento";
import Link from "next/link";

import NetPagosLogo from "@/assets/svgs/netpagos.svg";
import clickMacroIcon from "@/assets/images/click-macro.png";

import Words from "./ui/anim/Words";
import Lines from "./ui/anim/Lines";
import Image from "next/image";

const boletinItems = [
  {
    id: "ordenanzas",
    title: "Ordenanzas",
    description:
      "Normativas locales sancionadas por el Honorable Concejo Deliberante.",
    href: "/boletin/ordenanzas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#00438b"
      >
        <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z" />
      </svg>
    ),
  },
  {
    id: "decretos",
    title: "Decretos",
    description:
      "Disposiciones ejecutivas del Departamento Ejecutivo Municipal.",
    href: "/boletin/decretos",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#00438b"
      >
        <path d="M80-120v-66.67h366.67v-471.66q-26-9-46-29t-29-46H223.33l123.34 294.66Q346-392 307.33-359.33q-38.66 32.66-94 32.66-55.33 0-94-32.66Q80.67-392 80-438.67l123.33-294.66H120V-800h251.67q12-35 41.66-57.5Q443-880 480-880t66.67 22.5q29.66 22.5 41.66 57.5H840v66.67h-83.33L880-438.67q-.67 46.67-39.33 79.34-38.67 32.66-94 32.66-55.34 0-94-32.66Q614-392 613.33-438.67l123.34-294.66H588.33q-9 26-29 46t-46 29v471.66H880V-120H80Zm591.67-320h150l-75-180.67-75 180.67Zm-533.34 0h150l-75-180.67-75 180.67ZM480-720q19.67 0 33.17-13.83 13.5-13.84 13.5-32.84 0-19.66-13.5-33.16-13.5-13.5-33.17-13.5-19 0-32.83 13.5-13.84 13.5-13.84 33.16 0 19 13.84 32.84Q461-720 480-720Z" />
      </svg>
    ),
  },

  {
    id: "sibom",
    title: "SIBOM",
    description:
      "Sistema de Boletines Oficiales Municipales. Acceso centralizado.",
    href: "https://sibom.slyt.gba.gob.ar/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#00438b"
      >
        <path d="M329.33-120v-66.67h84V-280H146.67q-27 0-46.84-19.83Q80-319.67 80-346.67v-426.66q0-27 19.83-46.84Q119.67-840 146.67-840h666.66q27 0 46.84 19.83Q880-800.33 880-773.33v426.66q0 27-19.83 46.84Q840.33-280 813.33-280H546.67v93.33h84V-120H329.33ZM146.67-346.67h666.66v-426.66H146.67v426.66Zm0 0v-426.66 426.66Z" />
      </svg>
    ),
  },
  {
    id: "publicaciones-de-ley",
    title: "Publicaciones de Ley",
    description: "Leyes provinciales y nacionales que afectan al municipio.",
    href: "/boletin/publicaciones-de-ley",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#00438b"
      >
        <path d="M160-120v-66.67h480V-120H160Zm223.33-206L160-549.33 234.67-626 460-402.67 383.33-326Zm254-254L414-805.33 490.67-880 714-656.67 637.33-580Zm196 420L302-691.33 348.67-738 880-206.67 833.33-160Z" />
      </svg>
    ),
  },
  {
    id: "ddjj-funcionarios",
    title: "DDJJ Funcionarios",
    description:
      "Declaraciones juradas patrimoniales de funcionarios públicos.",
    href: "/boletin/declaraciones-juradas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#00438b"
      >
        <path d="M186.67-813.33V-537.67-540v393.33-666.66 190.66-190.66Zm0 733.33q-27 0-46.84-19.83Q120-119.67 120-146.67v-666.66q0-27 19.83-46.84Q159.67-880 186.67-880H534l226 226v136q-15.67-7.33-32.33-12.17-16.67-4.83-34.34-7.5v-85H500.67v-190.66h-314v666.66H477q18.67 22 41.67 38.84Q541.67-91 569-80H186.67ZM660-193.33q45.33 0 76-30.67t30.67-76q0-45.33-30.67-76t-76-30.67q-45.33 0-76 30.67t-30.67 76q0 45.33 30.67 76t76 30.67Zm204 144L756.56-156.67q-20.89 14-45.39 22t-51.17 8q-72.22 0-122.78-50.58-50.55-50.57-50.55-122.83 0-72.25 50.58-122.75 50.57-50.5 122.83-50.5 72.25 0 122.75 50.55 50.5 50.56 50.5 122.78 0 26.67-8 51.17t-22 45.39L910.67-96 864-49.33Z" />
      </svg>
    ),
  },
  {
    id: "transparencia",
    title: "Transparencia",
    description:
      "La municipalidad de Alberti nuevamente fue reconocida por la Asociación Argentina de Presupuesto y Administración Financiera Pública (ASAP) por su alta transparencia y visibilidad fiscal municipal obteniendo el porcentaje más alto.",
    href: "/transparencia",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40px"
        viewBox="0 -960 960 960"
        width="40px"
        fill="#00438b"
      >
        <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z" />
      </svg>
    ),
  },
];

const Bulletin = () => {
  return (
    <>
      <section
        id="bulletin-container"
        className="relative flex flex-col justify-center min-h-screen w-full pt-16 md:pt-24 white-container"
      >
        <div className="px-8 text-center">
          <Words>
            <h1 className="text-[1.3em] md:text-[1.9em] lg:text-[2.7em] text-blue font-bold italic leading-[1.2] z-0 split-text">
              Boletín Oficial Municipal
            </h1>
          </Words>
          <Lines delay={0.5} yPercent={300}>
            <p
              className="text-base md:text-lg lg:text-xl text-black w-full max-w-none md:max-w-3xl mx-auto mt-4 split-text"
              aria-hidden="true"
            >
              Aquí podés acceder de forma rápida a todas las publicaciones
              oficiales de la Municipalidad de Alberti. Para que siempre estés
              al día con la normativa y la gestión pública.
            </p>
          </Lines>
        </div>
        <GridBento itemsList={boletinItems} />
        <p className="text-center text-base md:text-lg lg:text-xl text-black w-full max-w-full md:max-w-3xl px-2 md:p-2 md:mx-auto md:my-4 opacity-70">
          Este boletín se actualiza periódicamente. Para consultas específicas,
          contactanos a través de nuestra sección de{" "}
          <Link href="/contacto" className="underline text-blue">
            Contacto
          </Link>
          .
        </p>
      </section>
      <section className="relative items-center justify-center w-full pt-12 px-[1vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:max-w-3xl lg:max-w-5xl w-full mx-auto px-5 md:px-0 lg:mx-auto">
          <Link
            target="_blank"
            href={"https://app.weathercloud.net/d9791331696"}
            className="relative bg-white rounded-md md:col-span-1 lg:h-[300px] p-6 flex flex-col justify-between shadow-sm shadow-blue group overflow-hidden"
          >
            <svg
              id="visual"
              viewBox="0 0 200 200"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              version="1.1"
              className="absolute w-full h-full top-0 -right-10 opacity-30"
            >
              <g transform="translate(210.99096237540016 13.18999803912893)">
                <path
                  d="M88.1 -95C102.7 -73.5 95.1 -36.8 93.1 -2C91.1 32.8 94.7 65.5 80.1 82.9C65.5 100.2 32.8 102.1 5.5 96.6C-21.7 91 -43.4 78 -63.5 60.7C-83.7 43.4 -102.4 21.7 -112.1 -9.8C-121.9 -41.2 -122.8 -82.5 -102.7 -104C-82.5 -125.5 -41.2 -127.2 -2.2 -125C36.8 -122.8 73.5 -116.5 88.1 -95"
                  fill="#00438b"
                ></path>
              </g>
            </svg>
            <div className="flex items-center overflow-hidden">
              <div className="flex flex-none items-center justify-center w-0 group-hover:w-10 translate-0 overflow-hidden h-10 transition-discrete duration-300 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#00438b"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-blue z-10">
                Estación meteorológica
              </h1>
            </div>
            <div className="mt-4">
              <div className="fill-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#00438b"
                >
                  <path d="M440-760v-160h80v160h-80Zm266 110-56-56 113-114 56 57-113 113Zm54 210v-80h160v80H760Zm3 299L650-254l56-56 114 112-57 57ZM254-650 141-763l57-57 112 114-56 56Zm-14 450h180q25 0 42.5-17.5T480-260q0-25-17-42.5T421-320h-51l-20-48q-14-33-44-52.5T240-440q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q60 0 109.5 32.5T423-400q58 0 97.5 43T560-254q-2 57-42.5 95.5T420-120H240Zm320-134q-5-20-10-39t-10-39q45-19 72.5-59t27.5-89q0-66-47-113t-113-47q-60 0-105 39t-53 99q-20-5-41-9t-41-9q14-88 82.5-144T480-720q100 0 170 70t70 170q0 77-44 138.5T560-254Zm-79-226Z" />
                </svg>
              </div>
              <p className="text-gray-700 mt-2">
                Estación Meteorológica de Alberti.
              </p>
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://soberania-energetica.vercel.app/"}
            className="relative bg-white rounded-md md:col-span-2 lg:h-[300px] p-6 flex flex-col justify-between shadow-sm shadow-blue group overflow-hidden"
          >
            <svg
              id="visual"
              viewBox="0 0 200 200"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              version="1.1"
              className="absolute w-full h-full top-0 -right-10 opacity-30"
            >
              <g transform="translate(210.99096237540016 13.18999803912893)">
                <path
                  d="M88.1 -95C102.7 -73.5 95.1 -36.8 93.1 -2C91.1 32.8 94.7 65.5 80.1 82.9C65.5 100.2 32.8 102.1 5.5 96.6C-21.7 91 -43.4 78 -63.5 60.7C-83.7 43.4 -102.4 21.7 -112.1 -9.8C-121.9 -41.2 -122.8 -82.5 -102.7 -104C-82.5 -125.5 -41.2 -127.2 -2.2 -125C36.8 -122.8 73.5 -116.5 88.1 -95"
                  fill="#00438b"
                ></path>
              </g>
            </svg>
            <div className="flex items-center overflow-hidden">
              <div className="flex flex-none items-center justify-center w-0 group-hover:w-10 translate-0 overflow-hidden h-10 transition-discrete duration-300 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#00438b"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-blue z-10">
                Soberanía Energética
              </h1>
            </div>
            <div className="mt-4">
              <div className="fill-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#00438b"
                >
                  <path d="M480-200q116.67 0 198-81.67 81.33-81.66 82-198.33v-280H480q-116.67.67-198.33 82Q200-596.67 200-480t81.67 198.33Q363.33-200 480-200Zm-51-92.33 199.33-178Q638-479 634-491q-4-12-17.33-14l-156-15.33L554-648.67q3.67-5 3.5-10.16-.17-5.17-4.17-9.84-4.66-5-11-4.83-6.33.17-11.33 4.83l-198.33 178Q323-482 327-470q4 12 17.33 14l156 15.33L406-312.33q-3.67 5-3.33 10.16.33 5.17 5 9.84 4.66 4.66 10.5 4.66 5.83 0 10.83-4.66Zm51 159q-63.33 0-119.17-20.84Q305-175 259.33-212.33l-69 69q-5.33 5.33-11.16 7.66-5.84 2.34-12.5 2.34-13.67 0-23.5-9.84-9.84-9.83-9.84-23.5 0-6.66 2.34-12.5 2.33-5.83 7.66-11.16l69-69Q175-305 154.17-360.83 133.33-416.67 133.33-480q0-144.67 101-245.67t245.67-101h346.67V-480q0 144.67-101 245.67T480-133.33ZM480-480Z" />
                </svg>
              </div>
              <p className="text-gray-700 mt-2">
                Descubre cómo los proyectos locales contribuyen a la soberanía
                energética y al cuidado del planeta.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="relative flex items-center justify-center w-full py-6 px-5 md:px-[1vw] white-container">
        <div className="relative overflow-hidden bg-white md:max-w-3xl lg:max-w-5xl w-full mx-auto rounded-md p-6 flex flex-col shadow-sm shadow-blue group">
          <Link
            href="/rentas"
            className="flex items-center overflow-hidden cursor-pointer"
          >
            <div className="flex flex-none items-center justify-center w-0 group-hover:w-10 translate-0 overflow-hidden h-10 transition-discrete duration-300 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00438b"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-blue z-10">Rentas</h1>
          </Link>
          <p className="text-black font-bold mb-3">
            Puede abonar sus impuestos municipales de forma rápida y <br />
            segura a través de los siguientes medios:
          </p>
          <ul className="text-gray-700 mb-6 list-disc list-inside text-left">
            <li>Red Link</li>
            <li>Pago Mis Cuentas</li>
            <li>Pago Fácil</li>
            <li>Mercado Pago</li>
            <li>
              Oficina de Tesorería: Débito/Crédito (Visa y Cabal - Todos los
              bancos)
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-5 mt-4">
            <div className="w-full">
              <p className="text-black mb-4">
                Para más información, comuníquese <br />
                con la Dirección de Rentas:
              </p>
              <p className="text-gray-700 font-medium flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#00438b "
                >
                  <path d="m720-560-58-56 64-64H520v-80h206l-62-62 56-58 160 162-160 158Zm78 440q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>{" "}
                <span>02346 470034</span>
              </p>
              <p className="text-gray-700 font-medium flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#00438b "
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
                <a
                  href="mailto:rentas@alberti.gob.ar"
                  className="text-blue underline"
                >
                  <span>rentas@alberti.gob.ar</span>
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <Link
                target="_blank"
                href="https://pagos.macroclickpago.com.ar/SearchDeuda/796282"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-3 group shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] shadow-black bg-[#3D658A] text-white font-semibold py-3 px-0 sm:px-[10vw] rounded-md w-full lg:w-auto transition-discrete duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2 min-w-[150px] max-w-[150px]">
                  <span className="text-nowrap text-sm">Pagar con</span>
                  <Image
                    src={clickMacroIcon.src}
                    alt="Logo Net Pagos"
                    width={76}
                    height={30}
                    sizes="76px"
                  />
                </div>
              </Link>
              <Link
                href="/rentas"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-3 group shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.1)] shadow-black bg-[#3D658A] text-white font-semibold py-3 px-0 md:px-[10vw] rounded-md w-full lg:w-auto transition-discrete duration-300 hover:scale-[1.02]"
              >
                <img
                  src={NetPagosLogo.src}
                  alt="Logo Net Pagos"
                  height={NetPagosLogo.height}
                  width={NetPagosLogo.width}
                  className="min-w-[150px] max-w-[150px] h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bulletin;

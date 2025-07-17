import GridBento from "./grid-bento/GridBento";
import Link from "next/link";

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
    id: "publicaciones-ley",
    title: "Publicaciones de Ley",
    description: "Leyes provinciales y nacionales que afectan al municipio.",
    href: "/boletin/publicaciones-ley",
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
    id: "sibom",
    title: "SIBOM",
    description:
      "Sistema de Boletines Oficiales Municipales. Acceso centralizado.",
    href: "https://sibom.senado-ba.gov.ar",
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
    id: "ddjj-funcionarios",
    title: "DDJJ Funcionarios",
    description:
      "Declaraciones juradas patrimoniales de funcionarios públicos.",
    href: "/boletin/ddjj",
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
];

const Bulletin = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-screen w-full py-24">
      <div className="px-8 text-center text-[#000] font-bold">
        <h3 className="text-[3vw]">Boletín Oficial Municipal</h3>
        <p className="max-w-2xl mx-auto mt-4 text-lg">
          Aquí podés acceder de forma rápida y transparente a todas las
          publicaciones oficiales de la Municipalidad de Alberti. Encontrarás
          ordenanzas, decretos, declaraciones juradas y más, organizados para
          que siempre estés al día con la normativa y la gestión pública.
        </p>
      </div>
      <GridBento itemsList={boletinItems} />
      <p className="text-center w-full text-black text-md mt-6 opacity-70">
        Este boletín se actualiza periódicamente. <br />
        Para consultas específicas, contactanos a través de nuestra sección de{" "}
        <Link href="/contacto" className="underline text-blue">
          Contacto
        </Link>
        .
      </p>
    </section>
  );
};

export default Bulletin;

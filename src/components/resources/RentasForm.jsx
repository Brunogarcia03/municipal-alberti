"use client";

import Button from "../ui/Button";

const navContact = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#f3f1ed"
      >
        <path d="M475-140q5 0 11.5-2.5T497-149l337-338q13-13 19.5-29.67Q860-533.33 860-550q0-17-6.5-34T834-614L654-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5Q540-807 527-794l-18 18 81 82q13 14 23 32.5t10 40.5q0 38-29.5 67T526-525q-25 0-41.5-7.5t-30.19-21.34L381-627 200-446q-5 5-7 10.53-2 5.52-2 11.84 0 12.63 8.5 21.13 8.5 8.5 21.17 8.5 6.33 0 11.83-3t9.5-7l138-138 42 42-137 137q-5 5-7 11t-2 12q0 12 9 21t21 9q6 0 11.5-2.5t9.5-6.5l138-138 42 42-137 137q-4 4-6.5 10.33-2.5 6.34-2.5 12.67 0 12 9 21t21 9q6 0 11-2t10-7l138-138 42 42-138 138q-5 5-7 11t-2 11q0 14 8 22t22 8Zm.06 60Q442-80 416-104.5t-31-60.62Q351-170 328-193t-28-57q-34-5-56.5-28.5T216-335q-37-5-61-30t-24-60q0-17 6.72-34.05Q144.45-476.1 157-489l224-224 110 110q8 8 17.33 12.5 9.34 4.5 18.67 4.5 13 0 24.5-11.5t11.5-24.65q0-5.85-3.5-13.35T548-651L405-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5-16.67 6.5-29.61 19.36L126-642q-14 14-19.5 29.5t-6.5 35q-1 19.5 7.5 38T128-506l-43 43q-20-22-32.5-53T40-579q0-30 11.5-57.5T84-685l151-151q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T448-836l18 18 18-18q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T697-836l179 179q22 22 33 50.03 11 28.04 11 57 0 28.97-11 56.47T876-444L539-107q-13 13-29.53 20t-34.41 7ZM377-626Z" />
      </svg>
    ),
    text: "Pago Electrónico e Informe",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#f3f1ed"
      >
        <path d="m726.67-122.67 150.66-150.66L830.67-320 760-249.33v-176.34h-66.67v176.34L622.67-320 576-273.33l150.67 150.66ZM573.33 0v-66.67H880V0H573.33ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67v-586.66q0-27 19.83-46.84Q199.67-880 226.67-880H524l236 236v151.67h-66.67v-121h-200v-200H226.67v586.66h280V-160h-280Zm0-66.67V-813.33v586.66Z" />
      </svg>
    ),
    text: "Descargue su boleta",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#f3f1ed"
      >
        <path d="M40-200v-560h85v560H40Zm120 0v-560h80v560h-80Zm120 0v-560h40v560h-40Zm120 0v-560h80v560h-80Zm120 0v-560h120v560H520Zm160 0v-560h40v560h-40Zm120 0v-560h120v560H800Z" />
      </svg>
    ),
    text: "Adhesión Boleta Electrónica",
  },
];

const RentasForm = () => {
  return (
    <section className="max-w-[97vw] w-full mx-auto rounded-3xl bg-white text-black">
      <div className="max-w-6xl mx-auto w-full py-[3.5rem] md:py-[7.5rem] white-container">
        <div className="flex flex-wrap gap-5 md:flex-row items-center justify-center md:justify-between px-5">
          {navContact.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 font-bold text-gray-700 text-[1rem] md:text-[1.25rem] leading-[1.4] hover:scale-105 transition-transform duration-300"
            >
              <span className="bg-blue rounded-full p-8">{item.icon}</span>
              <span className="text-center max-w-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto w-full py-[3.5rem] md:py-[7.5rem] white-container">
        <div className="px-[1.5rem] md:px-[3rem] max-w-7xl mx-auto w-full">
          <form className="flex flex-col items-start justify-between">
            <h2 className="font-bold text-[1.3em] md:text-[2.25rem] leading-[1.1] tracking-[-.5px]">
              Adherite a Debito Automático y olvidate de las fechas de pago.
              Nuestro formulario está las 24 horas disponible.
            </h2>
            <div className="w-full h-[1px] bg-black my-[2.5rem] md:my-[5rem]" />
            <div className="flex flex-col md:flex-row items-stretch sm:items-start justify-between w-full">
              <div className="w-full md:w-[30%] mb-[1.5em]">
                <h5 className="text-[18px] md:text-[1.75rem] leading-[1.3]">
                  Nos comunicaremos a la brevedad
                </h5>
              </div>

              <div className="w-full md:w-[45%]">
                <input
                  className="border-[1.5px] border-gray rounded-md w-full min-h-[80px] text-black mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-black"
                  name="email"
                  type="text"
                  required
                  placeholder="Correo Electrónico"
                />
                <input
                  className="border-[1.5px] border-gray rounded-md w-full min-h-[80px] text-black mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-black"
                  name="name"
                  type="text"
                  required
                  placeholder="Nombre y Apellido"
                />
                <input
                  className="border-[1.5px] border-gray rounded-md w-full min-h-[80px] text-black mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-black"
                  name="subject"
                  type="text"
                  required
                  placeholder="Documento de Identidad"
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-black my-[2.5rem] md:my-[5rem]" />
            <div className="flex flex-col md:flex-row items-stretch sm:items-start justify-between w-full">
              <div className="w-full md:w-[30%] mb-[1.5em]">
                <h5 className="sm:text-nowrap text-[18px] md:text-[1.75rem] leading-[1.3]">
                  Contactanos cuando lo necesites
                </h5>
              </div>
              <div className="w-full md:w-[45%]">
                <Button
                  className="flex items-center justify-center w-full py-4 md:py-6 px-10 bg-blue text-white rounded-md text-[1em] md:text-[1.7em] italic"
                  type="summit"
                >
                  Enviar mensaje
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="hidden sm:block absolute top-[-20%] right-[7%] md:top-[-0.5%] md:right-[4%] size-[9em] md:size-[10.75em]">
          <div className="w-full h-full font-bold text-[1em] md:text-[1.3em] leading-[1.4] rounded-full flex justify-center items-center text-center bg-blue/50 text-white">
            Atención
            <br />
            al Vecino
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentasForm;

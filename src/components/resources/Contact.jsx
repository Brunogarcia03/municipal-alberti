"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";

const Contact = () => {
  const [message, setMessage] = useState({
    email: "",
    name: "",
    subject: "",
    content: "",
  });
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    return alert("Adíos");
    // e.preventDefault();

    // const res = await fetch(
    //   `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/send`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(message),
    //   }
    // );
  };

  useEffect(() => {
    setMounted(true);

    const date = new Date();
    const localTime = date.toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      hour: "2-digit",
      minute: "2-digit",
    });

    setTime(localTime);
  }, []);

  const navContact = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#364153"
        >
          <path d="M340-180q-125 0-212.5-87.5T40-480q0-125 87.5-212.5T340-780q125 0 212.5 87.5T640-480q0 125-87.5 212.5T340-180Zm440 20L640-300l57-56 43 43v-487h80v488l44-44 56 56-140 140ZM340-260q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Zm80-80 56-56-96-97v-147h-80v180l120 120Zm-80-140Z" />
        </svg>
      ),
      text: "Tiempo Local",
      data: time || "0",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#364153"
        >
          <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
      ),
      text: "Dirección",
      data: `9 de julio y Alem`,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#364153"
        >
          <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
        </svg>
      ),
      text: "Teléfono",
      data: "(02346) 473001",
    },
  ];

  if (!mounted) return;

  return (
    <section className="max-w-[97vw] w-full mx-auto rounded-3xl bg-white text-black">
      <div className="max-w-7xl mx-auto w-full py-[3.5rem] md:py-[7.5rem] white-container">
        <div className="flex flex-col gap-5 md:flex-row items-start justify-between px-5">
          {navContact.map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 font-bold text-gray-700 text-[1.1rem] sm:text-[1.25rem] md:text-[1.75rem] leading-[1.4]">
                <span>{item.icon}</span>
                <span className="">{item.text}</span>
              </div>

              <span className="font-light text-[1.1rem] sm:text-[1.25rem] md:text-[1.75rem] leading-[1.1] tracking-[-0.5px] uppercase">
                <b>{item.data}</b>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto w-full py-[3.5rem] md:py-[7.5rem] white-container">
        <div className="px-[1.5rem] md:px-[3rem] max-w-7xl mx-auto w-full">
          <form
            className="flex flex-col items-start justify-between"
            onSubmit={handleSubmit}
          >
            <h2 className="font-bold text-[1.3em] md:text-[2.25rem] leading-[1.1] tracking-[-.5px]">
              Nuestro formulario está las 24 horas disponible. Las ideas y
              consultas no tienen horario. Escribinos cuando lo necesites:
              estamos para escuchar y ayudarte.
            </h2>
            <div className="w-full h-[1px] bg-black my-[2.5rem] md:my-[5rem]" />
            <div className="flex flex-col md:flex-row items-stretch sm:items-start justify-between w-full">
              <div className="w-full md:w-[30%] mb-[1.5em]">
                <h5 className="text-[18px] md:text-[1.75rem] leading-[1.3]">
                  ¿En qué podemos ayudarte?
                </h5>
              </div>
              <div className="w-full md:w-[45%]">
                <input
                  className="border-[1.5px] border-gray rounded-md w-full min-h-[80px] text-black mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-black"
                  name="email"
                  type="text"
                  required
                  placeholder="Correo Electrónico"
                  value={message.email}
                  onChange={(e) =>
                    setMessage((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <input
                  className="border-[1.5px] border-gray rounded-md w-full min-h-[80px] text-black mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-black"
                  name="name"
                  type="text"
                  required
                  placeholder="Nombre y Apellido"
                  value={message.name}
                  onChange={(e) =>
                    setMessage((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <input
                  className="border-[1.5px] border-gray rounded-md w-full min-h-[80px] text-black mb-[16px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-black"
                  name="subject"
                  type="text"
                  required
                  placeholder="Asunto"
                  value={message.subject}
                  onChange={(e) =>
                    setMessage((prev) => ({ ...prev, subject: e.target.value }))
                  }
                />
                <textarea
                  className="border-[1.5px] border-gray rounded-md w-full min-h-[300px] md:min-h-[400px] text-black mb-[16px] py-[24px] px-[16px] md:px-[40px] text-base md:text-[20px] bg-transparent relative transition-colors duration-300 hover:border-black"
                  name="content"
                  type="text"
                  required
                  placeholder="Mensaje"
                  value={message.content}
                  onChange={(e) =>
                    setMessage((prev) => ({ ...prev, content: e.target.value }))
                  }
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
        <div className="absolute top-[-20%] right-[7%] md:top-[-0.5%] md:right-[4%] size-[9em] md:size-[10.75em]">
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

export default Contact;

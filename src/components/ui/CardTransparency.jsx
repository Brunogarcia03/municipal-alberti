import Link from "next/link";

const CardTransparency = ({ title, item }) => {
  const isSingleFile = typeof item === "string";

  return (
    <article className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm shadow-blue flex flex-col h-full justify-between gap-6">
      <svg
        id="visual"
        viewBox="0 0 200 200"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        version="1.1"
        className="absolute top-0 right-0 opacity-20 z-0 size-52 sm:size-64"
      >
        {" "}
        <g transform="translate(191.18197466001104 -20.149037667176174)">
          {" "}
          <path
            d="M72.4 -67.2C95.7 -49 117.8 -24.5 121.3 3.4C124.7 31.3 109.4 62.7 86 91.9C62.7 121 31.3 148 5.4 142.7C-20.6 137.3 -41.3 99.6 -59.9 70.4C-78.6 41.3 -95.3 20.6 -101.5 -6.2C-107.7 -33 -103.3 -66 -84.7 -84.2C-66 -102.3 -33 -105.7 -4.2 -101.4C24.5 -97.2 49 -85.4 72.4 -67.2"
            fill="#00438b"
          ></path>{" "}
        </g>{" "}
      </svg>
      <div className="z-20 mb-5">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>

        <div className="h-px bg-black/10 mt-1" />
      </div>

      {isSingleFile ? (
        <Link
          href={item}
          target="_blank"
          className="block rounded-md border border-black/10 px-4 py-2 text-sm hover:bg-blue hover:text-white transition z-10"
        >
          Ver documento
        </Link>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 z-10">
          {Object.entries(item)
            .filter(([_, url]) => url)
            .map(([key, url]) => (
              <li key={key}>
                <Link
                  href={url}
                  target="_blank"
                  className="block rounded-md border border-black/10 px-4 py-2 text-sm hover:bg-blue hover:text-white transition text-center"
                >
                  {key.replace("_", " ")}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </article>
  );
};

export default CardTransparency;

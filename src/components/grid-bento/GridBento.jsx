import Link from "next/link";
import { twMerge } from "tailwind-merge";

const GridBento = ({ itemsList }) => {
  return (
    <div className="flex items-center justify-center w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-4 w-full px-24">
        <Link
          href={itemsList[0].href}
          className="bg-white rounded-md md:col-span-2 md:row-span-3 p-6 flex flex-col justify-between shadow-sm shadow-blue"
        >
          <h3 className="text-2xl font-bold text-blue">{itemsList[0].title}</h3>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[0].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[0].description}</p>
          </div>
        </Link>
        <Link
          href={itemsList[1].href}
          className="bg-white rounded-md md:row-span-3 md:col-start-3 p-6 flex flex-col justify-between shadow-sm shadow-blue"
        >
          <h3 className="text-2xl font-bold text-blue">{itemsList[1].title}</h3>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[1].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[1].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[2].href}
          className="bg-white rounded-md md:row-span-2 md:row-start-4 p-6 flex flex-col justify-between shadow-sm shadow-blue"
        >
          <h3 className="text-2xl font-bold text-blue">{itemsList[2].title}</h3>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[2].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[2].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[3].href}
          className="bg-white rounded-md md:col-span-2 md:row-span-3 row-start-4 p-6 flex flex-col justify-between shadow-sm shadow-blue"
        >
          <h3 className="text-2xl font-bold text-blue">{itemsList[3].title}</h3>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[3].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[3].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[4].href}
          className="bg-white rounded-md md:row-start-6 p-6 flex flex-col justify-between shadow-sm shadow-blue"
        >
          <h3 className="text-2xl font-bold text-blue">{itemsList[4].title}</h3>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[4].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[4].description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GridBento;

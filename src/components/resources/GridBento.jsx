import Link from "next/link";

const GridBento = ({ itemsList }) => {
  return (
    <div className="flex items-center justify-center w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:max-w-5xl w-full mx-auto px-5 md:px-0 lg:mx-auto">
        <Link
          href={itemsList[0].href}
          className="relative bg-white rounded-md md:col-span-2 md:row-span-3 lg:h-[300px] p-6 flex flex-col justify-between shadow-sm shadow-blue group"
        >
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
            <h3 className="text-2xl font-bold text-blue z-10">
              {itemsList[0].title}
            </h3>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[0].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[0].description}</p>
          </div>
        </Link>
        <Link
          href={itemsList[1].href}
          className="relative bg-white rounded-md md:row-span-3 md:col-start-3 p-6 flex flex-col justify-between shadow-sm shadow-blue group"
        >
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
            <h3 className="text-2xl font-bold text-blue z-10">
              {itemsList[1].title}
            </h3>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[1].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[1].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[2].href}
          className="bg-white rounded-md md:row-span-2 md:row-start-4 p-6 flex flex-col justify-between shadow-sm shadow-blue group"
        >
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
            <h3 className="text-2xl font-bold text-blue z-10">
              {itemsList[2].title}
            </h3>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[2].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[2].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[3].href}
          className="relative overflow-hidden bg-white rounded-md md:col-span-2 md:row-span-3 row-start-4 p-6 flex flex-col justify-between shadow-sm shadow-blue group"
        >
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
            <h3 className="text-2xl font-bold text-blue z-10">
              {itemsList[3].title}
            </h3>
          </div>

          <div className="mt-4 z-10">
            <div className="fill-blue">{itemsList[3].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[3].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[4].href}
          className="bg-white rounded-md md:row-start-6 p-6 flex flex-col justify-between shadow-sm shadow-blue group"
        >
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
            <h3 className="text-2xl font-bold text-blue z-10">
              {itemsList[4].title}
            </h3>
          </div>
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

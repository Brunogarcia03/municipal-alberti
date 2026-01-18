import Link from "next/link";

const GridBento = ({ itemsList }) => {
  return (
    <div className="flex items-center justify-center w-full py-12 px-[1vw]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:max-w-3xl lg:max-w-5xl w-full mx-auto px-5 md:px-0 lg:mx-auto">
        <Link
          href={itemsList[0].href}
          className="relative bg-white rounded-md md:col-span-2 md:row-span-3 lg:h-[300px] p-6 flex flex-col justify-between shadow-sm shadow-blue group overflow-hidden"
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
              {itemsList[0].title}
            </h1>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[0].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[0].description}</p>
          </div>
        </Link>
        <Link
          href={itemsList[1].href}
          className="relative bg-white rounded-md md:row-span-3 md:col-start-3 p-6 flex flex-col justify-between shadow-sm shadow-blue group overflow-hidden"
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
            <g transform="translate(191.18197466001104 -20.149037667176174)">
              <path
                d="M72.4 -67.2C95.7 -49 117.8 -24.5 121.3 3.4C124.7 31.3 109.4 62.7 86 91.9C62.7 121 31.3 148 5.4 142.7C-20.6 137.3 -41.3 99.6 -59.9 70.4C-78.6 41.3 -95.3 20.6 -101.5 -6.2C-107.7 -33 -103.3 -66 -84.7 -84.2C-66 -102.3 -33 -105.7 -4.2 -101.4C24.5 -97.2 49 -85.4 72.4 -67.2"
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
              {itemsList[1].title}
            </h1>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[1].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[1].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[2].href}
          className="relative bg-white rounded-md md:row-span-2 md:row-start-4 p-6 flex flex-col justify-between shadow-sm shadow-blue group overflow-hidden"
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
            <g transform="translate(220.5969139165161 18.919800910555928)">
              <path
                d="M91 -104.9C105.5 -76.4 96.5 -38.2 94.9 -1.6C93.2 34.9 98.9 69.8 84.4 89.6C69.8 109.4 34.9 114.2 -1.4 115.6C-37.7 117 -75.4 115.1 -100.6 95.3C-125.8 75.4 -138.4 37.7 -140.1 -1.8C-141.9 -41.2 -132.8 -82.5 -107.7 -111C-82.5 -139.5 -41.2 -155.2 -1.5 -153.7C38.2 -152.2 76.4 -133.4 91 -104.9"
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
              {itemsList[2].title}
            </h1>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[2].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[2].description}</p>
          </div>
        </Link>
        <Link
          href={itemsList[5].href}
          className="relative overflow-hidden bg-white rounded-md md:col-span-2 md:row-span-3 row-start-4 p-6 flex flex-col justify-between shadow-sm shadow-blue group"
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
            <g transform="translate(186.20363257870258 4.171632704895046)">
              <path
                d="M72.8 -67.8C101.8 -43.8 137.9 -21.9 144.6 6.7C151.4 35.4 128.7 70.7 99.7 87.2C70.7 103.7 35.4 101.4 -2.9 104.3C-41.2 107.2 -82.5 115.5 -102.5 99C-122.5 82.5 -121.2 41.2 -110.9 10.3C-100.6 -20.6 -81.3 -41.3 -61.3 -65.3C-41.3 -89.3 -20.6 -116.6 0.6 -117.3C21.9 -117.9 43.8 -91.8 72.8 -67.8"
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
              {itemsList[5].title}
            </h1>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[5].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[5].description}</p>
          </div>
        </Link>

        <Link
          href={itemsList[4].href}
          className="relative overflow-hidden bg-white rounded-md p-6 flex flex-col justify-between shadow-sm shadow-blue group"
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
            <g transform="translate(209.11352436229024 -30.629447657375195)">
              <path
                d="M69.5 -67.5C86.1 -52.8 93.1 -26.4 94.5 1.4C95.9 29.2 91.8 58.5 75.1 87.6C58.5 116.8 29.2 145.9 1.5 144.4C-26.2 142.8 -52.3 110.7 -74.7 81.5C-97 52.3 -115.5 26.2 -112.7 2.8C-110 -20.6 -85.9 -41.3 -63.6 -55.9C-41.3 -70.6 -20.6 -79.3 2.9 -82.2C26.4 -85.1 52.8 -82.1 69.5 -67.5"
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
              {itemsList[4].title}
            </h1>
          </div>
          <div className="mt-4">
            <div className="fill-blue">{itemsList[4].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[4].description}</p>
          </div>
        </Link>
        <Link
          href={itemsList[3].href}
          className="relative overflow-hidden bg-white rounded-md md:col-span-full p-6 flex flex-col justify-between shadow-sm shadow-blue group w-full"
        >
          <svg
            id="visual"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            version="1.1"
            className="block sm:hidden absolute w-full h-full top-0 -right-10 opacity-30"
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
              {itemsList[3].title}
            </h1>
          </div>

          <div className="mt-4 z-10">
            <div className="fill-blue">{itemsList[3].icon}</div>
            <p className="text-gray-700 mt-2">{itemsList[3].description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GridBento;

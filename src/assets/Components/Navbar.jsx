import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="JoeShoes & Co" className="flex">
              <img
                className="w-14 rounded-full"
                src="/trainers.png"
                alt="Logo"
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-yellow-500 font-semibold underline"
                  : "text-white hover:text-yellow-400"
              } text-base transition-all duration-200`}
            >
              Home
            </Link>

            <Link
              to="/Products"
              className={`${
                location.pathname === "/Products"
                  ? "text-yellow-500 font-semibold underline"
                  : "text-white hover:text-yellow-400"
              } text-base transition-all duration-200`}
            >
              Products
            </Link>

            <Link
              to="/Sale"
              className={`${
                location.pathname === "/Sale"
                  ? "text-yellow-500 font-semibold underline"
                  : "text-white hover:text-yellow-400"
              } text-base transition-all duration-200`}
            >
              Sale
            </Link>

            <Link
              to="/Blog"
              className={`${
                location.pathname === "/Blog"
                  ? "text-yellow-500 font-semibold underline"
                  : "text-white hover:text-yellow-400"
              } text-base transition-all duration-200`}
            >
              Blog
            </Link>

            <Link
              to="/Contact"
              className={`${
                location.pathname === "/Contact"
                  ? "text-yellow-500 font-semibold underline"
                  : "text-white hover:text-yellow-400"
              } text-base transition-all duration-200`}
            >
              Contact
            </Link>
          </div>

          <Link
            to="/Products"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
            role="button"
          >
            ShopNow
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

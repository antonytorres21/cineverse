import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiCameraMovie } from "react-icons/bi";

function Header() {
  const [isMoviesMenuOpen, setIsMoviesMenuOpen] = useState(false);
  const [isTvMenuOpen, setIsTvMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const openMoviesMenu = () => {
    setIsMoviesMenuOpen(true);
  };

  const closeMoviesMenu = () => {
    setIsMoviesMenuOpen(false);
  };

  const openTvMenu = () => {
    setIsTvMenuOpen(true);
  };

  const closeTvMenu = () => {
    setIsTvMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-blue-light w-full sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="flex items-center">
              <div className="md:block md:items-end items-center hidden justify-start md:justify-end">
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <div
                    className="group relative"
                    onMouseEnter={() => openMoviesMenu()}
                    onMouseLeave={() => closeMoviesMenu()}
                  >
                    <Link
                      to="/"
                      className="text-white px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center "
                    >
                      Películas <BiCameraMovie />
                    </Link>

                    <div
                      className={`absolute bg-white border border-gray-400 p-2 space-y-2 top-full left-0 rounded-lg grid grid-cols-1 ${
                        isMoviesMenuOpen ? "block" : "hidden"
                      }`}
                      onMouseEnter={() => openMoviesMenu()}
                      onMouseLeave={() => closeMoviesMenu()}
                    >
                      <Link
                        to="/movie/Populares"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        Popular
                      </Link>
                      <Link
                        to="/movie/Billboard"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        Cartelera
                      </Link>
                      <Link
                        to="/movie/UpComing"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        Proximos
                      </Link>
                      <Link
                        to="/movie/Top-Rated"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        Mejor Votadas
                      </Link>
                    </div>
                  </div>
                  <div
                    className="group relative"
                    onMouseEnter={() => openTvMenu()}
                    onMouseLeave={() => closeTvMenu()}
                  >
                    <Link
                      to="/"
                      className="text-white px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center"
                    >
                      Series de TV <PiTelevisionSimpleBold />
                    </Link>

                    <div
                      className={`absolute bg-white border border-gray-400 p-2 space-y-2 top-full left-0 rounded-lg grid grid-cols-1 ${
                        isTvMenuOpen ? "block" : "hidden"
                      }`}
                      onMouseEnter={() => openTvMenu()}
                      onMouseLeave={() => closeTvMenu()}
                    >
                      <Link
                        to="/tv/Populares"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        Populares
                      </Link>
                      <Link
                        to="/tv/On-Air-Today"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        Emitiendo
                      </Link>
                      <Link
                        to="/tv/OnTV"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        En Televión
                      </Link>
                      <Link
                        to="/tv/Top-Rated"
                        className="text-black hover:font-semibold transition-all ease-linear duration-500"
                      >
                        Mejor Valorados
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sobre la web
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center justify-end">
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-end justify-end p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        {isOpen && (
          <div
            className="md:hidden flex justify-center text-center"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;

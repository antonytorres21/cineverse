import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiCameraMovie } from "react-icons/bi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center "
                  >
                    Peliculas <BiCameraMovie />
                  </Link>
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium flex flex-row items-center"
                  >
                    TV <PiTelevisionSimpleBold />
                  </Link>
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Series
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

import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import logo from "../assets/CineVerseLogo.png";

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">Error 404</h1>
      <p className="text-lg text-gray-600">Página no encontrada</p>
      <img src={logo} alt="Error 404" className="mt-8" />
      <Link to="/" className="text-blue-500 mt-4">
        Volver a la página principal
      </Link>
    </div>
  );
}

export default Page404;

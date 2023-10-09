import React from "react";
import ReactSVG from "../assets/react.svg";
import ReactRouterSVG from "../assets/react-router.svg";
import TailwindCSSSVG from "../assets/tailwind-css.svg";
import Database from "../assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-blue-200 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-semibold mb-4 text-center">
          Acerca de CineVerse
        </h1>
        <p className="text-lg text-gray-800 text-center">
          CineVerse es una emocionante aplicación de búsqueda de películas que
          te permite explorar y descubrir información detallada sobre tus
          películas favoritas. ¡Sumérgete en el mundo del cine!
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Tecnologías Utilizadas</h2>
        <ul className="list-disc list-inside text-gray-700 ml-6 mt-2">
          <li>
            <a href="https://es.react.dev/">
              Desarrollada en React.{" "}
              <img
                src={ReactSVG}
                alt="React"
                className="w-auto h-6 inline-block mr-2 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500"
              />
            </a>
          </li>
          <li>
            <a href="https://reactrouter.com/en/main">
              Utiliza React-router-dom para el enrutamiento.{" "}
              <img
                src={ReactRouterSVG}
                alt="React Router"
                className="w-auto h-5 inline-block mr-2 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500"
              />
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/">
              Estilizada con Tailwind CSS{" "}
              <img
                src={TailwindCSSSVG}
                alt="Tailwind CSS"
                className="w-auto h-4 inline-block mr-2 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500"
              />
            </a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">
              API utilizada: TMDB (The Movie Database)
              <img
                src={Database}
                alt="TMDB"
                className="w-auto h-4 inline-block mr-2 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Propósito</h2>
        <p className="text-lg text-gray-800">
          El propósito principal de CineVerse es brindarte acceso rápido y
          sencillo a información completa sobre películas. Ya sea que quieras
          conocer más detalles sobre tu película favorita o descubrir nuevas
          películas para ver, CineVerse te tiene cubierto.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Información Adicional</h2>
        <p className="text-lg text-gray-800">
          CineVerse no solo es una herramienta esencial para los amantes del
          cine, sino que también representa un ejemplo sobresaliente del trabajo
          y las habilidades de desarrollo. ¡Esperamos que disfrutes explorando
          el mundo del cine con nosotros!
        </p>
      </div>

      {/* Aquí puedes agregar el párrafo proporcionado anteriormente */}
      <div className="mt-10 text-center">
        <p className="text-lg text-gray-600">
          El propósito de esta página, además de servir como práctica de
          conocimientos, es proporcionar información sobre diferentes razas
          registradas de perros y gatos a cualquier persona. También sirve como
          un ejemplo del trabajo o las capacidades del desarrollador.
        </p>
      </div>
    </div>
  );
};

/**
 * import ReactRouterSVG from "../assets/react-router.svg"; 
 *  <img
              src={ReactRouterSVG}
              alt="React Router"
              className="w-6 h-6 inline-block mr-2"
            />

 * import TailwindCSSSVG from "../assets/tailwind-css.svg"; 
            <img
              src={TailwindCSSSVG}
              alt="Tailwind CSS"
              className="w-6 h-6 inline-block mr-2"
            />
 * import TmdbSVG from "../assets/TMDB.svg"; 
            <img
              src={TmdbSVG}
              alt="TMDB"
              className="w-6 h-6 inline-block mr-2"
            />
 */
export default AboutPage;

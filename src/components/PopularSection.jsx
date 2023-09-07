import React, { useState, useEffect } from "react";
import { getPopularTV, getPopularMoviesCine } from "../functions/functions";
import PresentationCard from "./PresentationCard";

function PopularSection() {
  const [Movies, setMovies] = useState([]);
  const [option, setOption] = useState("Movie");

  const handleChange = (aux) => {
    setOption(aux);
  };

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        let getMovies;
        switch (option) {
          case "Movie":
            getMovies = await getPopularMoviesCine();
            break;
          case "StreamingS":
            getMovies = await getPopularTV();
            break;
          default:
            console.error("Opción no válida:", option);
            getMovies = await getPopularMoviesCine();
            return;
        }
        setMovies(getMovies);
      } catch (error) {
        console.error(
          "Error obteniendo las películas populares:",
          error.message
        );
      }
    }

    fetchPopularMovies();
  }, [option]);

  return (
    <div>
      <div className="flex row-auto items-center content-center p-3">
        <h2 className="text-xl font-semibold m-2">Lo más polular en </h2>
        <div className="rounded-full border-spacing-2 border-solid border border-black items-center flex justify-center p-1 space-x-2">
          <button
            type="button"
            onClick={() => handleChange("Movie")}
            className={`${
              option === "Movie"
                ? "bg-blue-900 text-green"
                : "hover:bg-blue-800 hover:text-white"
            } rounded-xl transition-all ease-in duration-300 w-20`}
          >
            Peliculas
          </button>
          <button
            onClick={() => handleChange("StreamingS")}
            type="button"
            className={`${
              option === "StreamingS"
                ? "bg-blue-900 text-green"
                : "hover:bg-blue-800 hover:text-white"
            } rounded-xl transition-all ease-in duration-300 w-20`}
          >
            Televisión
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-4 rounded p-4">
          {Movies.map((movie) => (
            <PresentationCard key={movie.id} movie={movie} /> // Utiliza el componente PresentationCard
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularSection;

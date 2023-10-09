import React, { useState, useEffect } from "react";
import {
  getTrendingMoviesWeek,
  getTrendingMoviesToday,
} from "../functions/functions";
import PresentationCard from "./PresentationCard";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [active, setActive] = useState([true]);

  const handleChange = () => {
    setActive(!active);
  };
  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        let popularMovies;
        if (!active) {
          popularMovies = await getTrendingMoviesWeek();
        } else {
          popularMovies = await getTrendingMoviesToday();
        }
        setTrendingMovies(popularMovies);
      } catch (error) {
        console.error(
          "Error obteniendo las películas populares:",
          error.message
        );
      }
    }
    fetchTrendingMovies();
  }, [active]);

  return (
    <div>
      <div className="flex row-auto items-center content-center p-3">
        <h2 className="text-xl font-semibold m-2">Tendencias de</h2>
        <div className="rounded-full border-spacing-2 border-solid border border-black items-center flex justify-center p-1 space-x-2">
          <button
            type="button"
            onClick={handleChange}
            className={`${
              active
                ? "bg-blue-900 text-green"
                : "hover:bg-blue-800 hover:text-white"
            } rounded-xl transition-all ease-in duration-300 w-12`}
          >
            Hoy
          </button>
          <button
            onClick={handleChange}
            type="button"
            className={`${
              active
                ? "hover:bg-blue-800 hover:text-white"
                : "bg-blue-900 text-green"
            } rounded-xl transition-all ease-in duration-300 w-20`}
          >
            Semana
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-4 rounded p-4">
          {trendingMovies.map((movie) => (
            <PresentationCard key={movie.id} movie={movie} type="movie"/> // Utiliza el componente PresentationCard
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;

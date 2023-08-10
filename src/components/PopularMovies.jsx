import React, { useState, useEffect, useCallback } from "react";
import { getPopularMovies5 } from "../functions/functions";

function PopularMovies() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const auxData = await getPopularMovies5();
      setData(auxData);
      console.log(auxData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className="flex w-64 h-52">
      {data.map((movie) => (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-0 object-cover grow transition-all duration-500 ease-in hover:w-28 hover:-translate-y-2"
        />
      ))}
    </section>
  );
}

export default PopularMovies;

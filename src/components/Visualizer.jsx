import React, { useState, useEffect, useCallback } from "react";
import { getPopularMovies5 } from "../functions/functions";

function Visualizer() {
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
    <div>
      <div className="flex flex-row flex-wrap">
        {data.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="w-48 h-36 m-2"
          />
        ))}
      </div>
    </div>
  );
}

export default Visualizer;

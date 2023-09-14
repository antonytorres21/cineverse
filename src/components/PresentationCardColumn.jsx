import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { colorBasedOnValue } from "../functions/functions";

const PresentationCardColumn = ({ movie }) => {
  const progress = (movie.vote_average * 10).toFixed(0);

  return (
    <div
      key={movie.id}
      className="bg-white rounded-lg shadow-md p-3 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500 cursor-pointer"
      style={{ minHeight: "400px" }} // Cambia minHeight para que las tarjetas tengan una altura fija y alineación vertical
      onClick={() => {}}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="mb-2 rounded"
        style={{ maxWidth: "100%", height: "auto" }} // Ajusta el tamaño de la imagen
      />
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p className="text-gray-500">{movie.release_date}</p>
      <p className="mt-2 text-sm text-gray-700">
        Cantidad de votos: {movie.vote_count}
      </p>
      <CircularProgressbar
        background
        backgroundPadding={6}
        className="h-10 absolute flex bottom-0 left-0"
        value={movie.vote_average * 10}
        text={`${progress}%`}
        strokeWidth={6}
        styles={buildStyles({
          backgroundColor: "#021A289E",
          pathColor: colorBasedOnValue(progress),
          textColor: "#FFFFFF",
          trailColor: "#333",
          strokeLinecap: "round",
          textSize: "28px",
          strokeWidth: 4,
        })}
      />
    </div>
  );
};

export default PresentationCardColumn;

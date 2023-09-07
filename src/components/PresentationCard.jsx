
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { colorBasedOnValue } from "../functions/functions";

const PresentationCard = ({ movie }) => {
  const progress = (movie.vote_average * 10).toFixed(0);

  return (
    <div
      key={movie.id}
      className="bg-white rounded-lg shadow-md p-3 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500 cursor-pointer"
      style={{ minWidth: "200px" }}
      onClick={() => {}}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="mb-2 rounded"
      />
      <CircularProgressbar
        background
        backgroundPadding={6}
        className="h-10 absolute flex top-56 left-16"
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
      <h3 className="text-lg font-semibold">{movie.title}</h3>
      <p className="text-gray-500">{movie.release_date}</p>
      <p className="mt-2 text-sm text-gray-700">
        Cantidad de votos: {movie.vote_count}
      </p>
    </div>
  );
};

export default PresentationCard;

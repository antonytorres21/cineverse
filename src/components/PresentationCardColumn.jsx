import React from "react";
import defaulIMG from "../assets/DefaultImage.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colorBasedOnValue } from "../functions/functions";
import "react-circular-progressbar/dist/styles.css";
const PresentationCardColumn = ({ movie }) => {
  const progress = (movie.vote_average * 10).toFixed(0);
  return (
    <div
      key={movie.id}
      className="
      bg-white rounded-lg shadow-md p-3 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500 cursor-pointer"
      onClick={() => {}}
    >
      <div className="flex items-center">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : defaulIMG
          }
          alt={movie.title}
          className="mb-2 rounded h-auto w-auto"
        />
        <CircularProgressbar
          background
          backgroundPadding={6}
          className="h-14 absolute flex top-96 left-28"
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
      <h3 className="text-lg font-semibold">
        {movie.title ? movie.title : movie.name}
      </h3>
      <p className="text-gray-500">{movie.release_date}</p>
    </div>
  );
};

export default PresentationCardColumn;
/**
 * 
 * <CircularProgressbar
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
 */

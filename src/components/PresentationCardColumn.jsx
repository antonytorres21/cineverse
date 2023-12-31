import React from "react";
import defaulIMG from "../assets/DefaultImage.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colorBasedOnValue } from "../functions/functions";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const PresentationCardColumn = ({ movie, type = "" }) => {
  const progress = (movie.vote_average * 10).toFixed(0);
  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    const mediaType = type || (movie.media_type === "movie" ? "movie" : "tv");
    const titleOrName = movie.title || movie.name;
    const path = `/${mediaType}/Details/${titleOrName}`;

    navigate(path, {
      state: { movie, type: mediaType },
    });
  };

  return (
    <div
      key={movie.id}
      className="
      bg-white rounded-lg shadow-md p-3 relative transition-all ease-in-out delay-150 hover:-translate-y-3 hover:scale-105 duration-500 cursor-pointer"
      onClick={() => handleCardClick(movie)}
      style={{ maxWidth: "300px" }}
    >
      <div className="flex items-center justify-center">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : defaulIMG
          }
          alt={movie.title}
          className="mb-2 rounded w-auto h-96"
        />
        <CircularProgressbar
          background
          backgroundPadding={6}
          className="h-14 absolute flex top-80 left-[5.5rem]"
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

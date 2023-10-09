import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  colorBasedOnValue,
  formatDate,
  getDetails,
  getYear,
} from "../functions/functions";
import defaulIMG from "../assets/DefaultImage.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Details() {
  const [production, setProduction] = useState([]);
  const location = useLocation();
  const { movie, type } = location.state;
  const progress = (movie.vote_average * 10).toFixed(0);

  useEffect(() => {
    async function fetchProduction() {
      const data = await getDetails(movie.id, type);
      console.log(data);
      setProduction(data);
    }
    fetchProduction();
  }, [movie, type]);

  return (
    <>
      <div
        className="relative h-[28.7rem] bg-right bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${production.backdrop_path}')`,
        }}
      >
        <div className="bg-opacity-70 absolute inset-0 bg-blue-light w-screen">
          <div className="flex grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-start m-5">
              <img
                src={
                  production.poster_path
                    ? `https://image.tmdb.org/t/p/w300${production.poster_path}`
                    : defaulIMG
                }
                alt={production.title}
                className="flex mb-2 rounded-md w-auto items-center justify-center"
              />
            </div>

            <div className="">
              <div className="text-start">
                <h1 className="text-3xl font-bold text-white">
                  {production.title ? production.title : production.name} (
                  {production.release_date
                    ? getYear(production.release_date)
                    : getYear(production.first_air_date)}
                  )
                </h1>
                <h6 className="text-white">
                  Estrenada el{" "}
                  {production.release_date
                    ? formatDate(production.release_date)
                    : formatDate(production.first_air_date)}{" "}
                  Géneros:{" "}
                  {production.genres &&
                    Array.isArray(production.genres) &&
                    production.genres.map((genre, index, array) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < array.length - 1 ? ", " : "."}
                      </span>
                    ))}
                </h6>
              </div>
              <div className="grid grid-flow-col items-start justify-start ">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  className="flex h-16"
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
                <div className="w-24">
                  <h2 className="break-words text-white font-semibold">
                    Puntuación de los usuarios
                  </h2>
                </div>
              </div>
              <div className="text-white font-semibold">
                {production.tagline}
              </div>
              <div className="max-w-5xl">
                <h2 className="text-white font-semibold">Resumen:</h2>
                <p className="text-white">{production.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <h1 className="capitalize">actores pirnciaples</h1>
      </div>
    </>
  );
}

export default Details;

/**
 * 
 * 
 * 
 * <div
        className="relative h-96 bg-right bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${production.backdrop_path}')`,
        }}
      >
        <div className="bg-opacity-70 absolute inset-0 bg-blue-light w-screen">
          <div className="flex items-center justify-center p-5">
            <div className="w-full max-w-[52rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex justify-center items-center">
                  <img
                    src={
                      production.poster_path
                        ? `https://image.tmdb.org/t/p/w300${production.poster_path}`
                        : defaulIMG
                    }
                    alt={production.title}
                    className="mb-2 rounded-md max-h-[21.5rem] w-auto"
                  />
                </div>
                <div className="grid grid-flow-row items-start gap-y-2">
                  <div className="text-start">
                    <h1 className="text-3xl font-bold text-white">
                      {production.title ? production.title : production.name} (
                      {production.release_date
                        ? getYear(production.release_date)
                        : getYear(production.first_air_date)}
                      )
                    </h1>
                    <h6 className="text-white">
                      Estrenada el{" "}
                      {production.release_date
                        ? formatDate(production.release_date)
                        : formatDate(production.first_air_date)}{" "}
                      Géneros:{" "}
                      {production.genres &&
                        Array.isArray(production.genres) &&
                        production.genres.map((genre, index, array) => (
                          <span key={genre.id}>
                            {genre.name}
                            {index < array.length - 1 ? ", " : "."}
                          </span>
                        ))}
                    </h6>
                  </div>
                  <div className="flex items-center gap-6 ">
                    <CircularProgressbar
                      background
                      className=" h-15"
                      backgroundPadding={6}
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
                    <div className="w-24">
                      <h2 className="break-words text-white font-semibold">
                        Puntuación de los usuarios
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="text-white font-semibold">
                  {production.tagline}
                </div>
                <div className="">
                  <h2 className="text-white font-semibold">Resumen:</h2>
                  <p className="text-white">{production.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 */

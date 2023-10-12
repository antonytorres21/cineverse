import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  colorBasedOnValue,
  formatDate,
  getCredits,
  getDetails,
  getYear,
} from "../functions/functions";
import defaulIMG from "../assets/DefaultImage.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PresentationCardPerson from "../components/PresentationCardPerson";

function Details() {
  const [production, setProduction] = useState([]);
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);
  const [credits, setCredits] = useState([]);
  const location = useLocation();
  const { movie, type } = location.state;
  const progress = (movie.vote_average * 10).toFixed(0);

  useEffect(() => {
    async function fetchProduction() {
      const data = await getDetails(movie.id, type);
      const credict = await getCredits(movie.id, type);
      setCast(credict.cast);
      setCrew(credict.crew);
      const directors = crew.filter((credit) => {
        return credit.department === "Directing" && credit.job === "Director";
      });
      setCredits(directors);
      setProduction(data);
      document.title = data.title + " - Cineverse";
    }
    fetchProduction();
  }, [movie, type, crew]);

  return (
    <>
      <div
        className="relative h-[28.5rem] bg-no-repeat bg-cover"
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
                className="flex mb-2 rounded-md items-center justify-center"
              />
            </div>

            <div className="">
              <div className="text-start m-2">
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
              <div className="grid grid-flow-col items-start justify-start px-5 pt-4">
                <CircularProgressbar
                  background
                  backgroundPadding={6}
                  className="flex h-[4.5rem]"
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
                <div className="w-24 px-2">
                  <h2 className="break-words text-white font-semibold">
                    Puntuación de los usuarios
                  </h2>
                </div>
              </div>
              <div className="text-white font-semibold px-5 pt-4  ">
                {production.tagline}
              </div>
              <div className="max-w-5xl px-5 pt-2">
                <h2 className="text-white font-semibold">Resumen:</h2>
                <p className="text-white mt-1">{production.overview}</p>
              </div>
              <div className="flex flex-row space-x-4 p-1 px-5">
                {credits.map((credit) => {
                  return (
                    <div key={credit.id} className="text-center">
                      <h1 className="text-white">{credit.job}:</h1>
                      <p className="text-white">{credit.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-2">
        <h1 className="capitalize text-2xl font-black ">
          actores princiapales
        </h1>
      </div>
      <div className="flex gap-2 rounded p-4 overflow-x-auto ">
        {cast.slice(0, 15).map((credict) => (
          <PresentationCardPerson key={credict.id} credict={credict} />
        ))}
        {cast.length > 15 && (
          <button
            onClick={() => alert("Ver Todos")}
            className="bg-white rounded-lg shadow-md relative text-black px-4 py-2 hover:bg-blue-300/60 h-[20.7rem]"
            style={{ minWidth: "160px" }}
          >
            Ver Todos
          </button>
        )}
      </div>
    </>
  );
}

export default Details;

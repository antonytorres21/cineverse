import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomPopularMovieBackdropUrl } from "../functions/functions";
import { IoIosSearch } from "react-icons/io";

const SearchSection = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRandomPosterUrl() {
      try {
        const posterUrl = await getRandomPopularMovieBackdropUrl();
        setBackgroundImage(posterUrl);
      } catch (error) {
        console.error(
          "Error obteniendo el URL del póster de una película popular al azar:",
          error.message
        );
      }
    }
    fetchRandomPosterUrl();
  }, []);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleCardClick = (search) => {
    navigate(`/search/${search}`, { state: { searchTerm } });
  };

  return (
    <div
      className="relative h-72 bg-cover bg-center w-screen"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="bg-opacity-70 absolute inset-0 bg-blue-light w-screen">
        <div className="flex flex-col items-center justify-center h-full p-6 z-30 text-white">
          <h1 className="font-semibold">Encuentra tu pelicula favorita</h1>
          <div className="px-6 rounded-md items-center justify-center flex my-4 md:my-0">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCardClick(searchTerm);
                }
              }}
              onChange={handleSearch}
              value={searchTerm}
              type="text"
              placeholder="Buscar películas..."
              className="w-64 px-4 py-2 text-black rounded-l-lg h-8 "
            />
            <button
              onClick={() => handleCardClick(searchTerm)}
              className="bg-gray-300 border-black h-8 w-7 flex items-center justify-center rounded-r-lg"
            >
              <IoIosSearch className="text-black" />
            </button>
          </div>
          <p className="text-lg text-center text-white">
            Bienvenido a Cine Verse, tu destino para descubrir películas y ver
            las últimas tendencias. Explora miles de películas, lee reseñas y
            encuentra nuevas joyas cinematográficas. ¡Disfruta de la magia del
            cine!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

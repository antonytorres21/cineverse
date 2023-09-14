import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { searchFunction } from "../functions/functions";
import PresentationCardColumn from "../components/PresentationCardColumn";

function SearchResponse() {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = useParams();
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const { searchTerm } = location.state;
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    async function fetchResult() {
      try {
        setTerm(searchTerm);
        const aux = await searchFunction(!term ? searchTerm : term);
        // Filtra los elementos que no tienen "known_for"
        const result = aux.filter((item) => !item.known_for);
        setResults(result); // Establece el estado de los resultados filtrados
        console.log(result);
      } catch (error) {
        console.error("Error obteniendo resultados:", error);
      }
    }

    fetchResult(); // Llama a la función fetchResult
  }, [searchTerm]); // Asegúrate de que useEffect se ejecute cuando searchTerm cambie

  const handleCardClick = (search) => {
    navigate(`/search/${search}`, { state: { searchTerm } });
  };

  return (
    <>
      <div className="px-6 rounded-md items-center justify-center flex my-4 md:my-0">
        <input
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="Buscar películas..."
          className="w-64 px-4 py-2 text-black rounded-l-lg h-8 "
        />
        <button
          onClick={() => handleCardClick(term)}
          className="bg-gray-300 border-black h-8 w-7 flex items-center justify-center rounded-r-lg"
        >
          <IoIosSearch className="text-black" />
        </button>

        <div className="overflow-x-auto">
          <div className="flex gap-4 rounded p-4">
            {results.map((movie) => (
              <PresentationCardColumn key={movie.id} movie={movie} /> // Utiliza el componente PresentationCard
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResponse;

import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { searchFunction } from "../functions/functions";
import PresentationCardColumn from "../components/PresentationCardColumn";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";

function SearchResponse() {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = useParams();
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const { searchTerm } = !location.state ? "" : location.state;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handlePageChange = (page) => {
    if (page !== null && page !== undefined) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    async function fetchResult() {
      try {
        if (!searchTerm) {
          setTerm(search);
        } else {
          setTerm(searchTerm);
        }
        //console.log(currentPage);
        const aux = await searchFunction(
          !term ? searchTerm : term,
          currentPage
        );
        const result = aux.results.filter((item) => !item.known_for);
         if (aux.page !== null && aux.page !== undefined) {
           setCurrentPage(aux.page);
         }
        
        setTotalPages(aux.totalPages);
        setResults(result);
      } catch (error) {
        console.error("Error obteniendo resultados:", error);
      }
    }

    fetchResult();
  }, [searchTerm, search, term, currentPage]);

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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {!results.length ? (
          !results.length && term.length ? (
            <div className="flex flex-col items-center justify-center h-screen">
              <p className="text-gray-600 text-lg">
                No results found with the search parameters.
              </p>
            </div>
          ) : (
            <LoadingSpinner />
          )
        ) : (
          results.map((movie) => (
            <PresentationCardColumn key={movie.id} movie={movie} /> // Utiliza el componente PresentationCard
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default SearchResponse;

/**
 *
 */

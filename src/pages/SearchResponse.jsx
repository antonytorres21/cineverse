import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { searchFunction } from "../functions/functions";
import PresentationCardColumn from "../components/PresentationCardColumn";
import LoadingSpinner from "../components/LoadingSpinner";
import Pagination from "../components/Pagination";

function getNoResultsMessage(term) {
  return term.length ? (
    <LoadingSpinner />
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-gray-600 text-lg">
        No results found with the search parameters.
      </p>
    </div>
  );
}

function SearchResponse() {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = useParams();
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState(
    !location.state ? "" : location.state.searchTerm
  );
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
        if (searchTerm !== search && search !== null) {
          setSearchTerm(search);
        }
        const aux = await searchFunction(searchTerm, currentPage);
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
  }, [searchTerm, search, currentPage]);

  const handleCardClick = (search) => {
    navigate(`/search/${search}`, { state: { search } });
  };

  return (
    <>
      <div className="px-6 py-5 rounded-md items-center justify-center flex md:my-0 ">
        <input
          type="text"
          value={term}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCardClick(term);
            }
          }}
          onChange={handleChange}
          placeholder="Buscar películas..."
          className="w-64 px-4 py-2 text-black rounded-l-lg h-8 italic border border-gray-300 align-middle"
        />
        <button
          onClick={() => handleCardClick(term)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCardClick(term);
            }
          }}
          className="bg-gray-300 border-black h-8 w-7 flex items-center justify-center rounded-r-lg"
        >
          <IoIosSearch className="text-black" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {!results.length
          ? getNoResultsMessage(term)
          : results.map((movie) => (
              <PresentationCardColumn
                key={movie.id}
                movie={movie}
                type={movie.media_type}
              />
            ))}
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

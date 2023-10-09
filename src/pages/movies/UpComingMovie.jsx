import React, { useState, useEffect } from "react";
import { getUpComingMovie } from "../../functions/functions";
import Pagination from "../../components/Pagination";
import PresentationCardColumn from "../../components/PresentationCardColumn";
import LoadingSpinner from "../../components/LoadingSpinner";

function UpComing() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dateMax, setDateMax] = useState("");
  const [dateMin, setDateMin] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUpComingMovie(currentPage);
        setDateMax(data.dateMax);
        setDateMin(data.dateMin);
        setResults(data.results);
        setTotalPages(data.totalPages);
        document.title = "Próximamente";
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page !== null && page !== undefined) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center py-2">
          <h1 className="italic font-medium">En Próximanete Cartelera</h1>
        </div>
        <div className="flex items-center justify-between my-3">
          <h2 className="border border-transparent hover:border hover:border-gray-300 rounded-lg py-1 mx-6">
            Fecha Maxima {dateMax}{" "}
          </h2>{" "}
          <h2 className="border border-transparent hover:border hover:border-gray-300 rounded-lg py-1 mx-6">
            Fecha Minima {dateMin}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {!results.length ? (
          <LoadingSpinner />
        ) : (
          results.map((movie) => (
            <PresentationCardColumn key={movie.id} movie={movie} type="movie" />
          ))
        )}
      </div>
      <Pagination
        className="flex items-center justify-center"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default UpComing;

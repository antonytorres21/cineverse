import React, { useState, useEffect, useCallback } from "react";
import { getPopularMovies } from "../../functions/functions";
import PresentationCardColumn from "../../components/PresentationCardColumn";
import Pagination from "../../components/Pagination";

function PopularMovies() {
  const [results, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const auxData = await getPopularMovies(currentPage);
      setData(auxData.results);
      setTotalPages(auxData.totalPages);
      setCurrentPage(auxData.currentPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePageChange = (page) => {
    if (page !== null && page !== undefined) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {results.map((movie) => (
          <PresentationCardColumn key={movie.id} movie={movie} />
        ))}
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

export default PopularMovies;

/** */

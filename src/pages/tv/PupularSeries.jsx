import React, { useEffect, useState } from "react";
import { getPopularSeries } from "../../functions/functions";
import PresentationCardColumn from "../../components/PresentationCardColumn";
import Pagination from "../../components/Pagination";
import LoadingSpinner from "../../components/LoadingSpinner";

function PopularSeries() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPopularSeries(currentPage);
        setResults(data.results);
        setTotalPages(data.totalPages);
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
      <div className="flex items-center justify-center my-4">
        <h1 className="italic font-medium capitalize">
          Las series más pupulares de CineVerse
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
        {!results.length ? (
          <LoadingSpinner />
        ) : (
          results.map((movie) => (
            <PresentationCardColumn key={movie.id} movie={movie} type="tv" />
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

export default PopularSeries;

import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;


  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        className={`px-4 py-2 rounded ${
          isFirstPage
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Anterior
      </button>

      {/* Información de la página */}
      <span className="text-gray-700">
        Página {currentPage} de {totalPages}
      </span>

      {/* Botón "Siguiente" */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className={`px-4 py-2 rounded ${
          isLastPage
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;

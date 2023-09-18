import React from "react";

function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center h-screen hover:cursor-wait">
      <h1 className="text-gray-900 mb-4">Loading...</h1>
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default LoadingSpinner;

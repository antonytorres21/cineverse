import React, { useState } from "react";
import SearchSection from "../components/SearchSection";
import TrendingMovies from "../components/TrendingMovies";
import PopularSection from "../components/PopularSection";

function Home() {
  useState(() => {
    function named() {
      document.title = "CineVerse";
    }
    named();
  }, []);
  return (
    <div>
      <SearchSection />
      <TrendingMovies />
      <PopularSection />
    </div>
  );
}
export default Home;

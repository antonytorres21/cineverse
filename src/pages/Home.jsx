import React from "react";
import SearchSection from "../components/SearchSection";
import TrendingMovies from "../components/TrendingMovies";
import PopularSection from "../components/PopularSection";

function Home() {
  return (
    <div>
      <SearchSection />
      <TrendingMovies />
      <PopularSection />
    </div>
  );
}
export default Home;

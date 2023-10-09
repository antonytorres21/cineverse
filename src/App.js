import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SearchResponse from "./pages/SearchResponse";
import Movies from "./pages/movies/Movies";
import Details from "./pages/Details";
import PopularMovies from "./pages/movies/PopularMovies";
import Billboard from "./pages/movies/BillboardMovie";
import UpComing from "./pages/movies/UpComingMovie";
import TopRated from "./pages/movies/TopRatedMovie";
import TV from "./pages/tv/Tv";
import PopularSeries from "./pages/tv/PupularSeries";
import OnAirToday from "./pages/tv/OnAirTodaySeries";
import OnTV from "./pages/tv/OnTV";
import TopRatedSeries from "./pages/tv/TopRatedSerie";
import AboutPage from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutThis" element={<AboutPage />} />
          <Route path="/search/:search" element={<SearchResponse />} />
          <Route path="movie">
            <Route index element={<Movies />} />
            <Route path="Details/:name" element={<Details />} />
            <Route path="Populares" element={<PopularMovies />} />
            <Route path="Billboard" element={<Billboard />} />
            <Route path="UpComing" element={<UpComing />} />
            <Route path="Top-Rated" element={<TopRated />} />
          </Route>
          <Route path="TV">
            <Route index element={<TV />} />
            <Route path="Details/:name" element={<Details />} />
            <Route path="Populares" element={<PopularSeries />} />
            <Route path="On-Air-Today" element={<OnAirToday />} />
            <Route path="OnTV" element={<OnTV />} />
            <Route path="Top-Rated" element={<TopRatedSeries />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

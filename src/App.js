import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SearchResponse from "./pages/SearchResponse";
import Movies from "./pages/Movies";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search/:search" element={<SearchResponse />} />
          <Route path="movie">
            <Route index element={<Movies />} />
            <Route path="Details:name" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

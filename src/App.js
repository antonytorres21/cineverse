import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import SearchResponse from "./pages/SearchResponse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search/:search" element={<SearchResponse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

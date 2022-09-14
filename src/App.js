import logo from "./logo.svg";
import "./App.css";
import MoviePage from "./Pages/MoviePage/MoviePage";
import SeriesPage from "./Pages/SeriesPage/SeriesPage";
import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
function App() {
  return (
    <div className="App">
      <nav>
        <h1>Welcome to the best movie page!</h1>
      </nav>

      <Link to="movies">
        {" "}
        <button>Click me to go to movies</button>{" "}
      </Link>

      <Stack className="pagination" spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>

      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
    </div>
  );
}

export default App;

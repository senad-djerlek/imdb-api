import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import { Pagination } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import MoviePage from "./pages/MoviePage";
import TvShows from "./components/TvShows";
import MoviesInfo from "./components/MoviesInfo";
const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="page-content" style={{ height: "86vh" }}>
          <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route
              path="/tv-shows"
              element={<MoviePage category={"tv-shows"} />}
            />
            <Route path="/:id" element={<MoviesInfo></MoviesInfo>} />
            <Route path="/tv-shows/:id" element={<MoviesInfo></MoviesInfo>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;

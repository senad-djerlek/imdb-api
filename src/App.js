import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import MoviePage from "./pages/MoviePage";

import MoviesInfo from "./components/MoviesInfo";
const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="page-content" style={{ height: "100%" }}>
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

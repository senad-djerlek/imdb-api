import React, { useState } from "react";
import "../Styles/NavBarStyle.css";
import Movies from "./Movies";
import TvShows from "./TvShows";
import { Routes, Route, NavLink } from "react-router-dom";
import movies from "./movies.json";
import MoviesInfo from "./MoviesInfo";

const NavBar = () => {
  return (
    <>
      <nav className="navBarColor">
        <div className="nav-options">
          <h1>MoviesPage</h1>
          <NavLink to="/">
            <span id="MoviesLight">Movies</span>
          </NavLink>
          <NavLink to="/TvShows">
            <span id="MoviesLight">Tv Shows</span>
          </NavLink>
        </div>
        <div className="input-group"></div>
      </nav>
      <Routes>
        <Route path="/" element={<Movies></Movies>} />
        <Route path="/TvShows" element={<TvShows></TvShows>} />
        <Route path="/:id" element={<MoviesInfo></MoviesInfo>} />
      </Routes>
    </>
  );
};

export default NavBar;

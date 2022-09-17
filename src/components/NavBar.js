import React, { useState } from "react";
import "../Styles/NavBarStyle.css";
import Movies from "./Movies";
import TvShows from "./TvShows";
import { Routes, Route, NavLink } from "react-router-dom";
import movies from "./movies.json";

const NavBar = () => {
 
  return (
    <>
      <nav className="navBarColor">
        <div className="nav-options">
          <h1>Best Movies</h1>
          <NavLink to="/">
            <span id="MoviesLight">Movies</span>
          </NavLink>
          <NavLink to="/TvShows">
            <span id="MoviesLight">Tv Shows</span>
          </NavLink>
        </div>
        <div className="input-group">
          
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Movies></Movies>} />
        <Route path="/TvShows" element={<TvShows></TvShows>} />
      </Routes>
    </>
  );
};

export default NavBar;

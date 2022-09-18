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
          <NavLink to="/">
            <h1>MoviesPage</h1>
          </NavLink>
          <NavLink to="/tv-shows">
            <span id="MoviesLight">Tv Shows</span>
          </NavLink>
        </div>
        {/* <div className="input-group"></div> */}
      </nav>
    </>
  );
};

export default NavBar;

import React from "react";
import "../Styles/NavBarStyle.css";
import { NavLink } from "react-router-dom";
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

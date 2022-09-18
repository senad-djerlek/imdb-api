import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import { Pagination } from "@mui/material";
const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <footer className="footer">
          <h2>Senad's Movie Website Ⓒ</h2>
        </footer>
      </div>
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import "../Styles/MoviesStyle.css";
import tvshows from "./tvshows.json";
import Pagination from "@mui/material/Pagination";

const TvShows = () => {
  const [getTvShows, setGetTvShows] = useState([]);
  const [search, setSearch] = useState("");
  const showsGet = () => {
    setGetTvShows(tvshows.results);
    console.log(getTvShows);
  };
  useEffect(() => {
    showsGet();
  }, []);
  const numPages = Math.ceil(getTvShows.length / 12);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const moviesPerPage = 9;
  const numberOfMoviesVistited = (page - 1) * moviesPerPage;
  return (
    <>
      <input
        className="input-movies"
        type="text"
        placeholder="Search your Tv-series"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {getTvShows
        .filter((el) => {
          if (search == "") {
            return el;
          } else if (el.title.toLowerCase().includes(search.toLowerCase())) {
            return el;
          }
        })
        .map((tvs) => (
          <div className="mapped" key={tvs.id}>
            <img src={tvs.image}></img>
            <div className="title-movies">{tvs.title}</div>
          </div>
        ))
        .slice(numberOfMoviesVistited, numberOfMoviesVistited + moviesPerPage)}
      <div>
        <Pagination
          className="pagination"
          count={numPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default TvShows;

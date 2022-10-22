import React, { useState, useEffect } from "react";
import "../Styles/MoviesStyle.css";
import tvshows from "./tvshows.json";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

const TvShows = () => {
  const [getTvShows, setGetTvShows] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const showsGet = () => {
    setGetTvShows(tvshows.results);
    console.log(getTvShows);
  };
  useEffect(() => {
    showsGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          if (search === "") {
            return el;
          } else if (el.title.toLowerCase().includes(search.toLowerCase())) {
            return el;
          } else {
            return;
          }
        })
        .map((tvs) => (
          <div
            className="mapped"
            key={tvs.id}
            onClick={() => {
              navigate(`${tvs.id}`, {
                state: {
                  id: tvs.id,
                  description: tvs.description,
                  image: tvs.image,
                  title: tvs.title,
                },
              });
            }}
          >
            <img src={tvs.image} alt="tv-show"></img>
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

import React, { useState, useEffect } from "react";
import "../Styles/MoviesStyle.css";
import tvshows from "./tvshows.json";

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
        ))}
    </>
  );
};

export default TvShows;

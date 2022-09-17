import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../Styles/MoviesStyle.css";
import movies from "./movies.json";
import Pagination from "@mui/material/Pagination";

const Movies = () => {
  const [getMovies, setGetMovies] = useState([]);
  const [search, setSearch] = useState("");
  const moviesGet = () => {
    setGetMovies(movies.results);
    console.log(getMovies);
  };

  // useEffect(() => {
  //   axios
  //     .get("https://imdb-api.com/en/API/Top250Movies/k_4vie09yd")
  //     .then((res) => {
  //       setGetMovies(res.data.items.splice(20, 30));
  //       console.log(res.data.items.splice(20, 30));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    moviesGet();
  }, []);
  return (
    <>
      <input
        className="input-movies"
        type="text"
        placeholder="Search whatever you want"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {getMovies
        .filter((el) => {
          if (search == "") {
            return el;
          } else if (el.title.toLowerCase().includes(search.toLowerCase())) {
            return el;
          }
        })
        .map((movie) => (
          <div className="mapped" key={movie.id}>
            <img src={movie.image}></img>
            <div className="title-movies">{movie.title}</div>
          </div>
        ))}
    </>
  );
};

export default Movies;

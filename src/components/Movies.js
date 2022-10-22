import React, { useEffect, useState } from "react";

import "../Styles/MoviesStyle.css";
import movies from "./movies.json";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const [getMovies, setGetMovies] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const moviesGet = () => {
    setGetMovies(movies.results);
    console.log(getMovies);
  };
  const numPages = Math.ceil(getMovies.length / 10);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const moviesPerPage = 9;
  const numberOfMoviesVistited = (page - 1) * moviesPerPage;

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <>
      <input
        className="input-movies"
        type="text"
        placeholder="Search your movie"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {getMovies
        .filter((el) => {
          if (search === "") {
            return el;
          } else if (el.title.toLowerCase().includes(search.toLowerCase())) {
            return el;
          } else {
            return;
          }
        })
        .slice(numberOfMoviesVistited, numberOfMoviesVistited + moviesPerPage)
        .map((movie) => (
          <div
            className="mapped"
            key={movie.id}
            onClick={() => {
              navigate(`${movie.id}`, {
                state: {
                  id: movie.id,
                  description: movie.description,
                  image: movie.image,
                  title: movie.title,
                },
              });
            }}
          >
            <img src={movie.image} alt="movie-banner"></img>
            <div className="title-movies">
              {movie.title} <br></br> {movie.description}
            </div>
          </div>
        ))}
      <div className="pagination-movement">
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

export default Movies;

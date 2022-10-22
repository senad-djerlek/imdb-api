import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import movies from "../components/movies.json";
import "../Styles/MoviePage.css";

const MoviePage = ({ category }) => {
  const [moviesArr, setMoviesArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [movieFilter, setMovieFilter] = useState("");
  const moviesPerPage = 9;

  const handleChange = (_, value) => {
    setCurrentPage(value);
  };

  const getMovies = async (filter) => {
    // TODO refactor to work with axios
    // if category exists use it to filter it
    // axsios.fget(imdb.mocie/&search=filter)
    setMoviesArr(movies.results);
  };

  const handleSearchInput = (e) => {
    // TODO filter movies by search
    // e.preventDefault();
    setMovieFilter(e.target.value);
    getMovies().then(() => {
      setMoviesArr(
        movies.results.filter((m) => {
          if (m.title.toLowerCase().includes(e.target.value.toLowerCase())) {
            return m;
          } 
        })
      );
    });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="movie-page">
      <div className="movie-filter">
        <input
          type="text"
          name="movie-name"
          id=""
          value={movieFilter}
          onChange={handleSearchInput}
        />
      </div>
      <div className="movie-container">
        {moviesArr
          .slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage)
          .map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
      <div className="pagination-movement">
        <Pagination
          className="pagination"
          count={moviesPerPage}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default MoviePage;

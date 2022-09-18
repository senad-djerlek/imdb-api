import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`${movie.id}`);
      }}
    >
      <img src={movie.image} alt="" />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;

// {
//     "id": "tt0411008",
//     "resultType": "Title",
//     "image": "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6800_AL_.jpg",
//     "title": "Lost",
//     "description": "(2004–2010)"
//   }

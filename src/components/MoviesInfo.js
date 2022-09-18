import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "../Styles/MovieInfoPage.css";
const MoviesInfo = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const movies = state.id;
  const title = state.title;
  const description = state.description;
  const image = state.image;
  return (
    <div className="movie-info-page">
      <div className="img">
        <img src={image}></img>
      </div>
      <div className="title-description">
        {title}
        <br></br> {description}
      </div>
    </div>
  );
};

export default MoviesInfo;

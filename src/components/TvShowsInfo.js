import React from "react";

const TvShowsInfo = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const tvshows = state.id;
  const title = state.title;
  const description = state.description;
  const image = state.image;
  return (
    <div>
      <div className="movie-info-page">
        <div className="img">
          <img src={image}></img>
        </div>
        <div className="title-description">
          {title}
          <br></br> {description}
        </div>
      </div>
    </div>
  );
};

export default TvShowsInfo;

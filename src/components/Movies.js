import axios from "axios";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const [getMovies, setGetMovies] = useState([]);
  const Images =
    "https://imdb-api.com/Images/384x528/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6791_AL_.jpg";
  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_7pst9tsv")
      .then((res) => {
        setGetMovies(res.data.items.splice(20, 30));
        console.log(res.data.items.splice(20, 30));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {getMovies.map((movie) => {
        <>
          <div></div>
        </>;
      })}
    </>
  );
};

export default Movies;

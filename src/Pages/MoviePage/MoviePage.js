import react, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import React from "react";

const MoviePage = () => {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://imdb-api.com/en/API/Top250Movies/k_4vie09yd")
  //     .then((res) => {
  //       setMovies(res.data.items.splice(20, 30));
  //       console.log(res.data.items.splice(20, 30));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      {" "}
      <h1>Hi </h1>
    </div>
  );
};

export default MoviePage;

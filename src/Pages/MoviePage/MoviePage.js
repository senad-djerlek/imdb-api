import react, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import React from "react";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_4vie09yd")
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="contianer">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={movies}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      ;
    </div>
  );
};

export default MoviePage;

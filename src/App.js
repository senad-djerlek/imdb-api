import logo from "./logo.svg";
import "./App.css";
import MoviePage from "./Pages/MoviePage/MoviePage";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Link to="movies">
        {" "}
        <button>Click me to go to movies</button>{" "}
      </Link>
      <Routes>
        <Route path="/" element={<h1>Hello1</h1>} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;

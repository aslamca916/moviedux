import react from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState();

  const handleSearchChange = (e)=>{
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/movies.json"); // Assuming 'data.json' is in your public folder
      const jsonData = await response.json();
      setMovies(jsonData);
    };

    fetchData();
  }, []);

  console.log("movies", movies);

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="movies-grid">
        {movies.map((movie) => (
          // <div key={movie.id}>
          //     <h1>{movie.title}</h1>
          // </div>
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

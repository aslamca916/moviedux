import react from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("hi", searchTerm);
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter((movie) =>
    matchesSearchTerm(movie, searchTerm)
  );

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
        {filteredMovies.map((movie) => (
          // <div key={movie.id}>
          //     <h1>{movie.title}</h1>
          // </div>
          
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            // isWatchlisted={watchlist.includes(movie.id)}
            isWatchlisted={(watchlist || []).includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}

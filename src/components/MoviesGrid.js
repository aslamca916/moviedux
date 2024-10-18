import react from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    console.log("Genre", selectedGenre);
    console.log("Genre", e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("hi", searchTerm);
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesSearchTerm(movie, searchTerm) && matchesGenre(movie, selectedGenre)
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
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
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

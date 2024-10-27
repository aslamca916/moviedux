import react from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedRating, setSelectedRating] = useState("All")

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    console.log("Genre", selectedGenre);
    console.log("Genre", e.target.value);
  };

  const handleRatingChange = (e) =>{
    setSelectedRating(e.target.value)
  }

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return movie.rating >= 8;

      case "Average":
        return movie.rating >= 5 && movie.rating < 8;

      case "Bad":
        return movie.rating < 5;

      default:
        return false;
    }
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
      matchesSearchTerm(movie, searchTerm) && matchesGenre(movie, selectedGenre) && matchesRating(movie,selectedRating)
  );
  console.log("Filtered movies",filteredMovies)

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
        <div className="filter-slot">
          <label>Ratings</label>
          <select
            className="filter-dropdown"
            value={selectedRating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Average</option>
            <option>Bad</option>
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

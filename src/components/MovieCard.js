import React from "react";


export default function MovieCard({movie, toggleWatchlist,isWatchlisted}) {
  
    
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
      />
      <div className="movie-card-info"></div>
    <div className="movie-card">
      <h3 className="movie-card-title">{movie.title}</h3>
    </div>
    <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
            
          ></input>

          <span className="slider">
            <span className="slider-label">
             
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
    </div>
  );
}

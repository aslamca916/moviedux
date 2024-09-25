import React from "react";

export default function MovieCard({movie}) {
    
    
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
    </div>
  );
}

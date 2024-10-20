import React from "react";


export default function MovieCard({movie, toggleWatchlist,isWatchlisted}) {

const movierating = (movie)=>{
  if(movie.rating < 5) {
    return "bad"
  }
  else if(movie.rating >=5 && movie.rating<8){
    return "average"
  }
  else if(movie.rating>=8){
    return "good"
  }
}
  
    
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
      />
      <div className="movie-card-info"></div>
    <div className="movie-card">
      <h3 className="movie-card-title">{movie.title}</h3>
    <span className={movierating(movie)}>{movie.rating}</span>
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

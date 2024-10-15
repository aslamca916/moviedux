import React from "react";
import MovieCard from "./MovieCard";

export default function Watchlist({movies, watchlist,toggleWatchlist}){
    console.log("watchlist inside watchlist component",Watchlist);
    
    return(
        <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
    )
}
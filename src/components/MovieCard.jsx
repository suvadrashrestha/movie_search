import React from "react";
function MovieCard({ movie, isFavorited, toggleFavorite }) {
  return (
    <div className="movie-card">
    <div className="image">
      {console.log(movie.Poster)}
      {/* show another pic if we get n/a */}
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://fl-1.cdn.flockler.com/embed/no-image.svg'} alt={movie.Title} />
      </div>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => toggleFavorite(movie)}>
        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}
export default MovieCard
import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, toggleFavorite, error, loading }) {
  return (
    <div className="movie-list">
      <h2>Search Results</h2>
       {/*  if loading then show loading else if there is error then show error else if there is movies then show movies  */}
      {loading ? (
        <div className="center">
          <p className="loader"></p>
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : movies.length > 0 ? (
        <div className="grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorited={favorites.some((fav) => fav.imdbID === movie.imdbID)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>Search for movies above to see results.</p>
      )}
    </div>
  );
}

export default MovieList;

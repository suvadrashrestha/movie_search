import MovieCard from './MovieCard';

function FavoritesList({ favorites, toggleFavorite }) {
  return (
    <div className="favorites-list">
      <h2>Favorites</h2>
      <div className="grid">
        {favorites.map(movie => (
          <MovieCard 
            key={movie.imdbID} 
            movie={movie} 
            isFavorited={true}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}
export default FavoritesList
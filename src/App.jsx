import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";
import FavoritesList from "./components/FavouritesList";

// Your OMDb API key
const API_KEY = "b0326e75";

function App() {
  // State for the search input
  const [query, setQuery] = useState("");

  // State for the list of movies returned from API
  const [movies, setMovies] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  //  show loading while fetching data
  const [loading, setLoading] = useState(false);

  //  error messages
  const [error, setError] = useState(null);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to search movies using the OMDb API
  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        // If movies are found
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch data");
    }

    setLoading(false);
  };

  const toggleFavorite = (movie) => {
    // Check if movie is already in favorites
    const isFavorited = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isFavorited) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="app">
      <h1>Movie Search & Favorites</h1>

      <SearchBar query={query} setQuery={setQuery} onSearch={searchMovies} />

      <MovieList
        loading={loading}
        error={error}
        movies={movies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;

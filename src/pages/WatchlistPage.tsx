import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import MovieList from "../components/MovieList";
import MovieModal from "../components/MovieModal";
import type { Movie } from "../types";

function WatchlistPage() {
  const { favorites } = useAppContext();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <main className="main-container">
      <h1>My Watchlist</h1>

      {favorites.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <MovieList
          movies={favorites}
          onMovieClick={setSelectedMovie}
        />
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
}

export default WatchlistPage;
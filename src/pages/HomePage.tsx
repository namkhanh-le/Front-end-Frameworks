import MovieList from '../components/MovieList'
import useMovies from '../hooks/useMovies'
import MovieModal from "../components/MovieModal"
import { useState } from 'react';
import { Movie } from "../types";

type HomePageProps = {
  searchQuery: string
}

function HomePage({ searchQuery }: HomePageProps) {

  const trimmedQuery = searchQuery.trim();

  const moviesUrl = trimmedQuery
    ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(trimmedQuery)}&language=en-US&page=1&include_adult=false`
    : `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

  const { movies, loading, error } = useMovies(moviesUrl);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const surpriseMe = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 500) + 1;

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${randomPage}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();

      if (result.results?.length) {
        const randomMovie =
          result.results[Math.floor(Math.random() * result.results.length)];

        setSelectedMovie(randomMovie);
      }
    } catch (error) {
      console.error("Surprise Me failed:", error);
    }
  };

  return (
    <main className="main-container">

      <button
        type="button"
        className="btn-primary"
        onClick={surpriseMe}
      >
        Surprise Me
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>Something went wrong.</p>}

      {!loading && !error && (
        <MovieList
          movies={movies}
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

export default HomePage;
import MovieList from '../components/MovieList'
import useMovies from '../hooks/useMovies'
import MovieModal from "../components/MovieModal"
import { useState } from 'react';
import { Movie } from "../types";

import { MediaTypeToggle } from '../components/MediaTypeToggle'

function HomePage() {
  const [mediaType, setMediaType] = useState<"movie" | "tv">("movie"); // tv shows
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const searchEndpoint = mediaType === "tv" ? "tv" : "movie";

  const moviesUrl = `https://api.themoviedb.org/3/${searchEndpoint}/popular?language=en-US&page=1`;

  const { movies, loading, error } = useMovies(moviesUrl);

  const displayMovies = mediaType === "tv"
    ? movies.map((item) => {
      const show = item as Movie & {
        name?: string;
        first_air_date?: string;
      };

      return {
        ...item,
        title: show.name ?? "Untitled",
        release_date: show.first_air_date ?? "",
      };
    })
    : movies;

  const surpriseMe = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 500) + 1;

      const response = await fetch( // talk about this
        `https://api.themoviedb.org/3/${mediaType}/popular?language=en-US&page=${randomPage}`,
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

        setSelectedMovie( // talk aboutn this
          mediaType === "tv"
            ? {
              ...randomMovie,
              title: randomMovie.name,
              release_date: randomMovie.first_air_date,
            }
            : randomMovie
        );
      }
    } catch (error) {
      console.error("Surprise Me failed:", error);
    }
  };

  return (
    <main className="main-container">

      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
        
        <MediaTypeToggle mediaType={mediaType} setMediaType={setMediaType} />

        <button
          type="button" // surprise me button
          className="btn-icon-label"
          onClick={surpriseMe}
          
        >
          Surprise Me
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p>Something went wrong.</p>}

      {!loading && !error && (
        <MovieList
          movies={displayMovies}
          onMovieClick={setSelectedMovie} // if not loading and no error, display
        />
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)} // display modal if selectedMovie is not null, and close modal when onClose is called
        />
      )}

    </main>
  );
}

export default HomePage;
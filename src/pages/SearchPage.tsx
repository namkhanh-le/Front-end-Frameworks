import { useState } from "react";

import MovieList from "../components/MovieList";
import useMovies from "../hooks/useMovies";
import MovieModal from "../components/MovieModal";
import { Movie } from "../types";

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState(""); // handle search query state

    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null); // handle selected movie state

    const trimmedQuery = searchQuery.trim(); // remove unnecessary space

    const moviesUrl = trimmedQuery
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(trimmedQuery)}&language=en-US&page=1&include_adult=false`
        : ""; // if trimmedQuery exists, search at endpoint. if not, set moviesUrl to an empty string.

    const { movies, loading, error } = useMovies(moviesUrl);

    return (
        <main className="search-page">
            <h1>Search Page</h1>

            <div className="header-search">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search movies, characters, keywords, plot details..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {trimmedQuery && loading && <p>Loading...</p>}

            {trimmedQuery && error && <p>Something went wrong.</p>}

            {trimmedQuery && !loading && !error && (
                <MovieList
                    movies={movies}
                    onMovieClick={(movie) => setSelectedMovie(movie)}
                /> // if trimmedQuery exists, and not loading and not error, display MovieList component with the search
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

export default SearchPage; 
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'
import useMovies from '../hooks/useMovies'

function HomePage() {
  const [query, setQuery] = useState("");

  const { movies, loading, error } = useMovies(
    //`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&include_adult=false`);
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`);

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="main-container">
      <h1 role="heading">Movie App</h1>

      <SearchBar query={query} onChange={setQuery} />

      {loading && <p>Loading...</p>}

      {error && <p>Something went wrong.</p>}

      {!loading && !error && (
        <MovieList movies={filterMovies} />
      )}
    </main>
  );
}

export default HomePage;
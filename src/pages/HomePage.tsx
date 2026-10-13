import MovieList from '../components/MovieList'
import useMovies from '../hooks/useMovies'
import MovieModal from "../components/MovieModal"
import {useEffect, useState} from 'react';
import {Movie} from "../types"; 

type HomePageProps = {
  searchQuery: string
}

function HomePage({ searchQuery }: HomePageProps) {

  const { movies, loading, error } = useMovies(
    //`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&include_adult=false`);
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`);

  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <main className="main-container">

      {loading && <p>Loading...</p>}

      {error && <p>Something went wrong.</p>}

      {!loading && !error && (
        <MovieList 
          movies={filterMovies}
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
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import { SAMPLE_MOVIES } from './data/sampleMovies'
import { useState } from 'react'

function App() {

  const [movies] = useState(SAMPLE_MOVIES);
  const [query, setQuery] = useState("");

  const filterMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    return matchesQuery;
  });

  return (
    <div className="app-layout">
      <main className="main-container">
        <h1 role="heading">Movie App</h1>
        <SearchBar query={query} onChange={setQuery}/>
        <MovieList movies={filterMovies} />
      </main>
    </div> 
  )
}

export default App
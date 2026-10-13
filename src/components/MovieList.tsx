import {Movie} from "../types"; 
import MovieCard from "./MovieCard";


//const MovieList = ({movies}: {movies: Movie[]}) => {
   const MovieList = ({
        movies,
        onMovieClick
    }: {
        movies: Movie[];
        onMovieClick: (movie: Movie) => void;
    }) => { 


    if (movies.length === 0) {
        return <p>No movies found.</p>;     
    }
    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={onMovieClick}
                    />
            ))} 
        </div>  
    )
}

export default MovieList;
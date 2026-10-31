import type { Movie } from "../types.ts"
import { getPosterUrl } from "../data/sampleMovies"
import { getGenreNames } from "../data/genres"

import { useAppContext } from "../context/AppContext";

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (movie: Movie) => void;
}

export default function MovieCard({ movie, onMovieClick }: MovieCardProps) {
  const year = movie.release_date?.slice(0, 4) ?? "";
  const rating = movie.vote_average?.toFixed(1) ?? "N/A";
  const { toggleFavorite, isFavorite } = useAppContext();
  const isFavourite = isFavorite(movie.id);

  return (
    <article className="movie-card" tabIndex={0} aria-label="title here ...">
      <div className="poster-wrapper">
        <img src={getPosterUrl(movie.poster_path ?? "")}
          alt={movie.title}
          className="poster-img"
          loading="lazy"
        />
        <div className="poster-overlay">
          <div className="card-top-badges">
            <span className="rating-badge">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              {rating}
            </span>
            <button
              className={isFavourite ? "favorite-btn is-favorite" : "favorite-btn"}
              title={isFavourite ? "Remove from favourites" : "Add to favourites"}
              aria-label={isFavorite(movie.id) ? "Remove from Favourites" : "Add to Favourites"}
              aria-pressed={isFavourite}
              onClick={() => toggleFavorite(movie)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="quick-view-hint"
            onClick={() => onMovieClick(movie)}
          >
            View Details
          </button>
        </div>
      </div>
      <div className="movie-card-info">
        <h2 className="movie-card-title">{movie.title}</h2>
        <div className="movie-card-meta">
          <span>{year}</span>
          <span>{movie.vote_count ?? 0}</span>
        </div>
        <div className="movie-genres-tags">
          {movie.genre_ids?.map((id) => (
            <span key={id} className="genre-tag">
              {getGenreNames([id])[0] ?? "Unknown"}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

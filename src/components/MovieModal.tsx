import { Movie } from "../types";
import { getGenreNames } from "../data/genres";

type MovieModalProps = {
  movie: Movie;
  onClose: () => void;
};

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  const genres = getGenreNames(movie.genre_ids ?? []);

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="modal-dialog"
        role="dialog"
        aria-labelledby="modal-movie-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div
          className="modal-backdrop-hero"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
          }}
        />

        <div className="modal-body">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="modal-poster"
            alt={movie.title}
          />

          <div className="modal-content-details">
            <h2 className="modal-title" id="modal-movie-title">
              {movie.title}
            </h2>

            <div className="modal-meta-row">
              <span className="rating-badge">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {movie.vote_average?.toFixed(1)} / 10
              </span>

              <span className="modal-meta-item">
                {movie.vote_count ?? 0} Ratings
              </span>

              <span className="modal-meta-item">
                {movie.release_date || "Unknown release date"}
              </span>

              <span className="modal-meta-item">
                Popularity: {movie.popularity?.toFixed(0) ?? "N/A"}
              </span>
            </div>

            <div className="movie-genres-tags">
              {genres.map((genre) => (
                <span key={genre} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>

            <div className="modal-overview">
              <h4 className="modal-overview-heading">Overview</h4>
              <p>{movie.overview}</p>
            </div>

            <div className="modal-footer-actions">
              <button className="btn-primary">
                <span>Add to Watchlist</span>
              </button>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                  movie.title + " trailer"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                >Watch Trailer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
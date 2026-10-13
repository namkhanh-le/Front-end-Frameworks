
const getFavoriteMovies = (): string[] => {
    const favorites = localStorage.getItem('favoriteMovies');
    return favorites ? JSON.parse(favorites) : [];
    }
const toggleFavorite = (movieId: string): void => {
    const favorites = getFavoriteMovies();
}
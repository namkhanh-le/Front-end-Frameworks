export interface Movie {
    title: string;
    id: number;
    original_title?: string; //? is for optional
    overview?: string;
    poster_path?: string;
    genre_ids?: number[];
    release_date?: string;
    vote_average?: number;
    vote_count?: number;
    popularity?: number;
    adult?: boolean;
    original_language?: string;
    video?: boolean;
}
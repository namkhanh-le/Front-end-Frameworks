import {useEffect, useState} from 'react';
import {Movie} from '../types';

export default function useMovies(url: string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => { // after rendering, use getMovies right away.

        async function getMovies() {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                    },
                
                });

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                setMovies(result.results);
                } catch (error) {
                    console.error(error);
                    setError(true);
                } finally {
                    setLoading(false);
                }
            }

            getMovies();
        }, [url]);

    return { movies, loading, error };

}
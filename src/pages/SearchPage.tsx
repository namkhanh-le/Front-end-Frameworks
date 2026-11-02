import { useState } from "react";

import MovieList from "../components/MovieList";
import useMovies from "../hooks/useMovies";
import MovieModal from "../components/MovieModal";
import { Movie } from "../types";

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main>
            <h1>Search Page</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <p>Search Query: {searchQuery}</p>
        </main>
    );
}

export default SearchPage; 
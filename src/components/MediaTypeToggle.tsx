interface MediaTypeToggleProps {
    mediaType: "movie" | "tv";
    setMediaType: (type: "movie" | "tv") => void;}

export function MediaTypeToggle({ mediaType, setMediaType }: MediaTypeToggleProps) {
    return (
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <button
            type="button" // movie button
            className={`btn-icon-label ${mediaType === "movie" ? "active" : ""}`}
            onClick={() => setMediaType("movie")}
            aria-pressed={mediaType === "movie"}
            >
            Movies
            </button>

            <button
            type="button" // tv button
            className={`btn-icon-label ${mediaType === "tv" ? "active" : ""}`}
            onClick={() => setMediaType("tv")}
            aria-pressed={mediaType === "tv"}
            >
            TV Shows
            </button>
        </div>
    )
}
import { NavLink } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="main-container">
      <h1>About Cinegrid</h1>

      <p>A movie discovery app built with React and the TMDB API.</p>
      <p>Features: </p>
      <ul>
        <li>Search for movies, TV shows, and celebrities</li>
        <li>View detailed information about each title</li>
        <li>Discover popular and trending content</li>
        <li>Add movies to a watchlist</li>
      </ul>
    </main>
  )
}

export default AboutPage
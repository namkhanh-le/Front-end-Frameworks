import { NavLink } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="main-container">
      <h1>About Cinegrid</h1>

      <p>A movie discovery app built with React and the TMDB API.</p>

      <NavLink to="/">
        Back to movies
      </NavLink>

      <NavLink to="/watchlist">
        Watchlist
      </NavLink>
    </main>
  )
}

export default AboutPage
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="main-container">
      <h1>About Cinegrid</h1>

      <p>A movie discovery app built with React and the TMDB API.</p>

      <Link to="/">Back to movies</Link>
    </main>
  )
}

export default AboutPage
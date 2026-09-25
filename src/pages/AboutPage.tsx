import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="main-container">
      <h1>About</h1>

      <p>This is the Movie App.</p>

      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default AboutPage
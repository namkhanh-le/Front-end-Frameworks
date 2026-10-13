import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import {useState} from 'react'
import useMovies from './hooks/useMovies'

import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <div className="app-layout">

        <header className="site-header">
          <div className ="header-inner">
            <div className="header-left">
              <div className="logo"></div>
              <span className="logo-text">Movie App</span>
            </div>
            <nav className="header-nav">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About</NavLink>
            </nav>
          </div>

          <div className="header-search">
            <SearchBar query={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="header-actions">
            <button className="btn-icon-label">Watchlist 0</button>
            <button className="btn-icon-label">Icon Here</button>
          </div>
          
        </header>

        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
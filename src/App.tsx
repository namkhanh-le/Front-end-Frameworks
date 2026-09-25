import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import {useState} from 'react'
import useMovies from './hooks/useMovies'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
    <div className="app-layout">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
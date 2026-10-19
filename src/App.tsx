import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import HeaderComponent from './components/HeaderComp'
import { AppProvider } from './context/AppContext'
import {useState} from 'react'

import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppProvider>
      <BrowserRouter>
        <div className="app-layout">
          <HeaderComponent
            searchQuery={searchQuery}
            onChange={setSearchQuery}
          />
          <Routes>
            <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  </AppProvider>
  );
}

export default App
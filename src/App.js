import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/movies.json"); // Assuming 'movies.json' is in your public folder
      const jsonData = await response.json();
      setMovies(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      
      <Header />
      <Router>
      <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={
                <MoviesGrid
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }/>
            <Route path='/watchlist' element={
                <Watchlist
                  watchlist={watchlist}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }/>
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

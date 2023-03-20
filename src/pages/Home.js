import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from '../services/getMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await fetchTrending();
      setMovies(data.results);
    }
    fetchMovies();
  }, []);

  const location = useLocation();

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

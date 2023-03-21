import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../services/getMovies';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

import { TrendingTitle, MoviesList, MovieItem, LinkItem } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrending();
        setMovies(data.results);
      } catch (error) {
        return toast.error('Something wrong, try again please');
      }
    }
    fetchMovies();
  }, []);

  const location = useLocation();

  return (
    <div>
      <TrendingTitle>Trending today</TrendingTitle>
      <MoviesList>
        {movies.map(movie => {
          return (
            <MovieItem key={movie.id}>
              <LinkItem to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </LinkItem>
            </MovieItem>
          );
        })}
      </MoviesList>
      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};

export default Home;

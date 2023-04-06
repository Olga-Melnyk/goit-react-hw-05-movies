import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../services/getMovies';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

import { TrendingTitle, MoviesList, MovieTitle, LinkItem } from './Home.styled';

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
          let poster;
          if (movie.poster_path) {
            poster = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
          } else {
            poster = `https://www.wallpaper-box.com/smartphone/wp-content/uploads/2015/01/Abstract-Connected-Lines-3D-Render-iPhone-6-Plus-HD-Wallpaper.jpg`;
          }
          return (
            <LinkItem
              key={movie.id}
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              <img src={poster} width="400" alt={movie.title} />
              <MovieTitle>{movie.title}</MovieTitle>
            </LinkItem>
          );
        })}
      </MoviesList>
      <Toaster toastOptions={{ duration: 2500 }} />
    </div>
  );
};

export default Home;

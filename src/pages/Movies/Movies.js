import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../../services/getMovies';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

import {
  MoviesForm,
  MoviesInput,
  MoviesButton,
  MoviesList,
  MovieTitle,
  LinkItem,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchByQuery() {
      try {
        const data = await fetchMovieByQuery(query);
        if (data.results.length < 1) {
          setMovies([]);
          return toast.error("We can't find it, try again");
        }
        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    }
    fetchByQuery();
  }, [query]);

  const handleSubmit = e => {
    if (!inputValue) {
      toast.error("We can't find it, try again");
      setMovies([]);
    }
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams(
      inputValue !== '' ? { query: form.elements.query.value } : {}
    );
    setInputValue('');
    form.reset();
  };

  const onChangeInput = value => {
    setInputValue(value);
  };

  if (!movies) {
    return null;
  }

  return (
    <div>
      {error && <div>Something wrong</div>}
      <MoviesForm onSubmit={handleSubmit}>
        <MoviesInput
          type="text"
          name="query"
          value={inputValue}
          onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <MoviesButton type="submit">Search</MoviesButton>
      </MoviesForm>
      {movies && (
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
                to={`${movie.id}`}
                state={{ from: location }}
              >
                <img src={poster} width="400" alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
              </LinkItem>
            );
          })}
        </MoviesList>
      )}
      <Toaster toastOptions={{ duration: 2500 }} />
    </div>
  );
};

export default Movies;

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
  MovieItem,
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
            return (
              <MovieItem key={movie.id}>
                <LinkItem to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </LinkItem>
              </MovieItem>
            );
          })}
        </MoviesList>
      )}
      <Toaster toastOptions={{ duration: 2500 }} />
    </div>
  );
};

export default Movies;

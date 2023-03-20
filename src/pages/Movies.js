import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { getMovies } from '../fakeAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
    setMovies(['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5']);
  };

  const visibleMovies = movies.filter(movie => movie.includes(query));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;

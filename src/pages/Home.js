import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
  ]);

  //   const { movieId } = useParams();

  const location = useLocation();

  //   const [searchParams, setSearchParams] = useSearchParams();

  //   const movieId = searchParams.get('movieId') ?? '';

  // useEffect(() => {}, [])

  //   const updateQueryString = e => {
  //     if (e.target.value === '') {
  //       return setSearchParams({});
  //     }
  //     setSearchParams({ movieId: e.target.value });
  //   };

  //   const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <div>
      <h1>Trending today</h1>
      {/* <input type="text" value={movieId} onChange={updateQueryString} /> */}
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`movies/${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;

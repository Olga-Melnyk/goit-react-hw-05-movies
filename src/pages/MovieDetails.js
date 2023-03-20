import { useRef, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { fetchMovieDetails } from '../services/getMovies';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      const data = await fetchMovieDetails(movieId);
      console.log(data);
      console.log(data.title);
      console.log(data.genres);
      setMovie(data);
    }
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <h1>
        {movie.title}({new Date(movie.release_date).getFullYear()})
      </h1>
      <img
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
      <p>
        Overview <span>{movie.overview}</span>
      </p>
      {/* <p>
        Gengres <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
      </p> */}
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

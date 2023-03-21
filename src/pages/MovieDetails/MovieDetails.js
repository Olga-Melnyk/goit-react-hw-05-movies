import { useRef, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { fetchMovieDetails } from '../../services/getMovies';
import { Loader } from '../../components/Loader/Loader';
import { MovieCard } from '../../components/MovieCard/MovieCard';

import {
  LinkBox,
  LinkBack,
  MovieDetailsAdditional,
  MovieDetailsAdditionalTitle,
  LinkItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  const emptyMovie = Object.keys(movie).length;

  return (
    <>
      {error && <div>Something wrong</div>}

      {emptyMovie && (
        <>
          <LinkBox>
            <LinkBack to={backLinkLocationRef.current}>Go back</LinkBack>
          </LinkBox>

          <MovieCard movie={movie} />
          <MovieDetailsAdditional>
            <MovieDetailsAdditionalTitle>
              Additional information
            </MovieDetailsAdditionalTitle>
            <LinkItem to="cast">Cast</LinkItem>
            <LinkItem to="reviews">Reviews</LinkItem>
          </MovieDetailsAdditional>
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

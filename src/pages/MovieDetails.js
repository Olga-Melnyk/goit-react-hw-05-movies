import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // useEffect(() => {}, [])

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Go back</Link>
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

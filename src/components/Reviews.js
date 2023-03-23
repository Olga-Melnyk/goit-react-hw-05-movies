import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../services/getMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState({});
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
        setResults(data.results);
      } catch (error) {
        setError(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  const reviewsResults = results.length;

  return (
    <>
      {error && <div>Something wrong</div>}
      {results.length < 1 && (
        <div>We don't have any reviews for this movie</div>
      )}
      {reviewsResults && (
        <ul>
          {reviews.results.map(item => {
            return (
              <li key={item.id}>
                <h3>Author: {item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;

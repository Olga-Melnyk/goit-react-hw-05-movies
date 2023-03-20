import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '51114562faac57108ae3113fba230ec4';

export async function fetchTrending() {
  const movies = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return movies.data;
}

export async function fetchMovieDetails(movieId) {
  const movie = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return movie.data;
}

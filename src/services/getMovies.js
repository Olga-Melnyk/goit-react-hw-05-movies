import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '51114562faac57108ae3113fba230ec4';

export async function fetchTrending() {
  const respons = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return respons.data;
}

export async function fetchMovieDetails(movieId) {
  const respons = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return respons.data;
}

export async function fetchMovieCast(movieId) {
  const respons = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return respons.data;
}

export async function fetchMovieReviews(movieId) {
  const respons = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return respons.data;
}

export async function fetchMovieByQuery(query) {
  const movie = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return movie.data;
}

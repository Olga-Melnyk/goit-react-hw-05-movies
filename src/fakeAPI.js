const movies = [
  { id: 'h-1', name: 'movie-1' },
  { id: 'h-2', name: 'movie-2' },
  { id: 'h-3', name: 'movie-3' },
  { id: 's-1', name: 'movie-4' },
  { id: 's-2', name: 'movie-5' },
];

export const getMovies = () => {
  return movies;
};

export const getMoviesById = movieId => {
  return movies.find(movie => movie.id === movieId);
};

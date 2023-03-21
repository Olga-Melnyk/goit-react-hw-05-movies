import PropTypes from 'prop-types';

import {
  MovieDetailsCard,
  MovieDetailsImg,
  MovieDetailsAbout,
  MovieDetailsTitle,
  MovieDetailsScore,
  MovieDetailsOverview,
  MovieDetailsOverviewText,
  MovieDetailsGenres,
  MovieDetailsGenresText,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  return (
    <MovieDetailsCard>
      <MovieDetailsImg
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        width="400"
        alt={movie.title}
      />
      <MovieDetailsAbout>
        <MovieDetailsTitle>
          {movie.title}({new Date(movie.release_date).getFullYear()})
        </MovieDetailsTitle>

        <MovieDetailsScore>
          User Score: {Math.round(movie.vote_average * 10)}%
        </MovieDetailsScore>
        <MovieDetailsOverview>Overview</MovieDetailsOverview>
        <MovieDetailsOverviewText>{movie.overview}</MovieDetailsOverviewText>
        <MovieDetailsGenres>Gengres</MovieDetailsGenres>
        <MovieDetailsGenresText>
          {movie.genres.map(genre => genre.name).join(', ')}
        </MovieDetailsGenresText>
      </MovieDetailsAbout>
    </MovieDetailsCard>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../services/getMovies';

import { CastList, CastCard, ActorsName, ActorsCharacter } from './Cast.styled';

const Cast = () => {
  const [castCollection, setCastCollection] = useState({});
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCastCollection(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchCast();
  }, [movieId]);

  const emptycastCollection = Object.keys(castCollection).length;
  let poster;

  return (
    <>
      {error && <div>Something wrong</div>}
      <CastList>
        {emptycastCollection &&
          castCollection.cast.map(item => {
            if (item.profile_path) {
              poster = `https://image.tmdb.org/t/p/w200/${item.profile_path}`;
            } else {
              poster = `https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg`;
            }
            return (
              <CastCard key={item.id}>
                <img src={poster} width="200" height="300" alt={item.name} />
                <ActorsName>{item.name}</ActorsName>
                <ActorsCharacter>{item.character}</ActorsCharacter>
              </CastCard>
            );
          })}
      </CastList>
    </>
  );
};

export default Cast;

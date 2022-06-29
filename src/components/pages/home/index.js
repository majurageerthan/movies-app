import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import HomeTemplate from '../../templates/home';

const data = {
  adult: false,
  backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
  genre_ids: [
    18,
    80,
  ],
  id: 278,
  original_language: 'en',
  original_title: 'The Shawshank Redemption',
  overview: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  popularity: 80.722,
  poster_path: 'https://image.tmdb.org/t/p/original/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
  release_date: '1994-09-23',
  title: 'The Shawshank Redemption',
  video: false,
  vote_average: 8.7,
  vote_count: 21665,
};

const Title = () => (
  <HomeTemplate
    title={data.original_title}
    movies={data}
  />
);

Title.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.string),
};

export default Title;

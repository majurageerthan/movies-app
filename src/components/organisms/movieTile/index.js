import React from 'react';
import { View, Image } from 'react-native';
import { IMAGE_URL } from '../../../shared/constants';
import MovieInfoText from '../../molecules/movieInfoText';
import styles from './styles';

const MovieTile = ({ movie, index }) => (
  <View style={styles.container}>
    <View style={styles.containerInnerFirst}>
      <Image source={{ uri: `${IMAGE_URL}${movie.poster_path}` }} style={styles.imgStyle} />
    </View>

    <View style={styles.containerInnerSecond}>
      <MovieInfoText
        movie={movie}
        index={index}
      />
    </View>
  </View>
);

export default MovieTile;

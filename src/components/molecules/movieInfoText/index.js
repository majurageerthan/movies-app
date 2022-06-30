import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const MovieInfoText = ({ movie, index }) => (

  <View style={styles.topContainer}>

    <Text style={styles.titleText}>
      {`#${index + 1} ${movie?.original_title}`}
    </Text>
    <Text style={styles.subTitleText}>
      {`(${movie?.title})`}
    </Text>

    <View style={styles.textContainer}>
      <Text style={styles.overviewText}>{movie?.release_date}</Text>
      <Text style={styles.languageText}>
        {` (${movie?.original_language}) . `}
      </Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>
          {movie?.adult ? 'R' : 'All'}
        </Text>
      </View>
    </View>

    <Text style={styles.overviewText} numberOfLines={4}>{movie?.overview}</Text>

  </View>
);

export default MovieInfoText;

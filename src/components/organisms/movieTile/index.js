import React from 'react';
import {
  Text, View, Image,
} from 'react-native';
import styles from './styles';

const MovieTile = ({ movie, index }) => (

  <View style={{
    flexDirection: 'row',
    flex: 1,
    padding: 15,
    maxHeight: 250,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
  }}
  >
    <View style={{ flex: 2, backgroundColor: 'white' }}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }} style={{ height: '90%' }} />
    </View>

    <View style={{ flex: 3, backgroundColor: 'white', paddingHorizontal: 15 }}>
      <View style={{
        flexDirection: 'column',
        flex: 1,
      }}
      >
        <Text style={styles.titleText}>
          {`#${index + 1} ${movie?.original_title}`}
        </Text>
        <Text style={styles.subTitleText}>
          {`(${movie?.title})`}

        </Text>

        <View style={{
          flexDirection: 'row',
          flex: 1,
          maxHeight: 20,
          marginTop: 5,
          marginBottom: 7,
        }}
        >
          <Text>{movie?.release_date}</Text>

          <Text style={{ paddingRight: 1 }}>
            {` (${movie?.original_language}) . `}
          </Text>

          <View style={{
            borderColor: '#D3D3D3',
            borderWidth: 1,
            justifyContent: 'center',
            padding: 1,
          }}
          >
            <Text style={{ fontSize: 12 }}>
              {movie?.adult ? 'R' : 'All'}
            </Text>
          </View>
        </View>

        <Text numberOfLines={4}>{movie?.overview}</Text>
      </View>
    </View>

  </View>

);

export default MovieTile;

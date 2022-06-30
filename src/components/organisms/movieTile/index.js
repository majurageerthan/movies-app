import React from 'react';
import {
  Text, View, Image,
} from 'react-native';
import styles from './styles';

const MovieTile = ({ item }) => (

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
      <Image source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }} style={{ height: '90%' }} />
    </View>

    <View style={{ flex: 3, backgroundColor: 'white', paddingHorizontal: 15 }}>
      <View style={{
        flexDirection: 'column',
        flex: 1,
      }}
      >
        <Text style={styles.titleText}>
          {item?.original_title}
        </Text>
        <Text>{item?.title}</Text>

        <View style={{
          flexDirection: 'row',
          flex: 1,
          maxHeight: 20,
        }}
        >
          <Text style={{ paddingRight: 10 }}>
            {item?.original_language}
          </Text>
          <Text>{item?.release_date}</Text>
        </View>

        <Text numberOfLines={4}>{item?.overview}</Text>
      </View>
    </View>

  </View>

);

export default MovieTile;

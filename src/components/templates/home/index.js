import React from 'react';
import {
  Text, View, TextInput, Image,
} from 'react-native';
import styles from './styles';

import MovieTile from '../../organisms/movieTile';

const HomeTemplate = ({ title, movies }) => (

  // <View style={styles.wrapper}>
  //   <View>
  //     <View style={{ flexDirection: 'row', flex: 1 }}>

  //       <View style={{ flex: 1 }}>
  //         <Image source={{ uri: movies.poster_path }} style={{ height: '10%' }} />
  //       </View>

  //       <View style={{ flex: 2 }}>
  //         <Text>Heyfdffsfsssssssssssssssssssssss</Text>
  //       </View>

  //     </View>
  // </View>
  // </View>

  <View style={{
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    maxHeight: '35%',
    marginHorizontal: 20,
    marginVertical: 20,
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
      <Image source={{ uri: movies.poster_path }} style={{ height: '90%' }} />
    </View>

    <View style={{ flex: 3, backgroundColor: 'white', paddingHorizontal: 10 }}>
      <View style={{
        flexDirection: 'column',
        flex: 1,
      }}
      >
        <Text style={styles.titleText}>
          {movies?.original_title}
        </Text>
        <Text>{movies?.title}</Text>

        <View style={{
          flexDirection: 'row',
          flex: 1,
          maxHeight: 20,
        }}
        >
          <Text style={{ paddingRight: 10 }}>
            {movies?.original_language}
          </Text>
          <Text>{movies?.release_date}</Text>
        </View>

        <Text numberOfLines={4}>{movies?.overview}</Text>
      </View>
    </View>

  </View>

);

export default HomeTemplate;

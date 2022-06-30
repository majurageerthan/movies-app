import React from 'react';
import {
  Text, View, TextInput, Image,
  SafeAreaView, FlatList, StyleSheet, StatusBar,
} from 'react-native';
import styles from './styles';
import MovieTile from '../../organisms/movieTile';

const HomeTemplate = ({ title, movies }) => (

  <SafeAreaView style={styles.container}>
    <FlatList
      data={movies}
      renderItem={MovieTile}
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={{ height: 20 }} />}
    />
  </SafeAreaView>

);

export default HomeTemplate;

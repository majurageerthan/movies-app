import React from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import MovieTile from '../../organisms/movieTile';

const HomeTemplate = ({
  movies, increasePageNo, onPullToRefresh, isPullToRefreshing,
}) => (

  <SafeAreaView style={styles.container}>
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={styles.listFooterComponent} />}
      onEndReached={increasePageNo}
      onRefresh={() => onPullToRefresh()}
      refreshing={isPullToRefreshing}
      renderItem={({ item, index }) => (
        <MovieTile
          movie={item}
          index={index}
        />
      )}
    />
  </SafeAreaView>

);

export default HomeTemplate;

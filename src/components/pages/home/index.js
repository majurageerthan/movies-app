import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import styles from './styles';
import HomeTemplate from '../../templates/home';
import { getMoviesList } from '../../../services/api/moviesApi';

const HomePage = () => {
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isPullToRefreshing, setIsPullToRefreshing] = useState(false);
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line no-promise-executor-return
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onPullToRefresh = async () => {
    setIsPullToRefreshing(true);
    setMovies([]);
    setPageNo(1);
    const moviesList = await getMoviesList(1);
    await delay(500);
    setMovies(moviesList?.results || []);
    setIsPullToRefreshing(false);
  };

  const updateMovieList = async () => {
    setLoading(true);
    const moviesList = await getMoviesList(pageNo);
    const oldMovies = movies || [];
    const newMovies = moviesList?.results || [];
    const allMovies = [...oldMovies, ...newMovies];
    setMovies(allMovies);
    console.log(`movies: ${pageNo}`, allMovies);
    setLoading(false);
  };

  useEffect(() => {
    console.log(`pageNo: ${pageNo}`);
    if (!isPullToRefreshing) updateMovieList();
  }, [pageNo]);

  const increasePageNo = () => {
    setPageNo(pageNo + 1);
  };

  const netInfo = useNetInfo();

  return (
    <View style={styles.container}>
      {!netInfo.isConnected && (
      <View style={styles.noInternetContainer}>
        <Text style={styles.noIntText}>
          No Internet Connection
        </Text>
      </View>
      )}

      <HomeTemplate
        movies={movies}
        increasePageNo={increasePageNo}
        onPullToRefresh={onPullToRefresh}
        isPullToRefreshing={isPullToRefreshing}
      />
      {loading && (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" />
      </View>
      )}
    </View>
  );
};

export default HomePage;

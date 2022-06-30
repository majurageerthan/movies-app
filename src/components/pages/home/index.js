import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';
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
    <View style={{ flex: 1 }}>
      {!netInfo.isConnected && (
      <View style={{ backgroundColor: 'red' }}>
        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 0,
          width: 200,
          width: '100%',
        }}
        >
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
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF88',
      }}
      >
        <ActivityIndicator size="large" />
      </View>
      )}
    </View>
  );
};

HomePage.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.string),
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import HomeTemplate from '../../templates/home';
import { getMoviesList } from '../../../services/api/moviesApi';
import { addToMovies, clearMovies, initMovies } from '../../../redux/movieSlice';
import { savetMoviesToLocalStorage, getMoviesFromLocalStorage } from '../../../shared/storageHelper';

const HomePage = () => {
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isPullToRefreshing, setIsPullToRefreshing] = useState(false);
  // const [movies, setMovies] = useState([]);
  const movies = useSelector((state) => state.movies.value);
  const dispatch = useDispatch();
  const netInfo = useNetInfo();

  // eslint-disable-next-line no-promise-executor-return
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onPullToRefresh = async () => {
    // if (netInfo.isConnected) {
    setIsPullToRefreshing(true);
    // setMovies([]);
    dispatch(clearMovies());
    setPageNo(1);
    const moviesList = await getMoviesList(1);
    await delay(500);
    // setMovies(moviesList?.results || []);

    dispatch(initMovies(moviesList?.results || []));
    setIsPullToRefreshing(false);
    // }
  };

  const updateMovieList = async () => {
    // if (netInfo.isConnected) {
    setLoading(true);
    const moviesList = await getMoviesList(pageNo);
    if (pageNo === 1) {
      savetMoviesToLocalStorage(movies);
    }

    // const oldMovies = movies || [];

    if (moviesList?.results?.length) {
      const newMovies = moviesList?.results;
      // const allMovies = [...oldMovies, ...newMovies];
      dispatch(addToMovies(newMovies));
      console.log(`movies: ${pageNo}`, newMovies);
    }

    setLoading(false);
    // }
  };

  useEffect(() => {
    console.log(`pageNo: ${pageNo}`);
    if (!isPullToRefreshing) updateMovieList();
  }, [pageNo]);

  const increasePageNo = () => {
    setPageNo(pageNo + 1);
  };

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

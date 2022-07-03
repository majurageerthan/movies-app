import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import HomeTemplate from '../../templates/home';
import { getMoviesList } from '../../../services/api/moviesApi';
import { addToMovies, clearMovies, initMovies } from '../../../redux/movieSlice';
import { savetMoviesToLocalStorage, getMoviesFromLocalStorage } from '../../../shared/storageHelper';
import { showNoInternetToast } from '../../../shared/helpers';

const HomePage = () => {
  const [pageNo, setPageNo] = useState(1);
  const [localSavedMovies, setLocalSavedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isPullToRefreshing, setIsPullToRefreshing] = useState(false);
  const movies = useSelector((state) => state.movies.value);
  const dispatch = useDispatch();
  const netInfo = useNetInfo();

  // eslint-disable-next-line no-promise-executor-return
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onPullToRefresh = async () => {
    const { isConnected, isInternetReachable } = await NetInfo.fetch();
    console.log('NetState: ', { isConnected, isInternetReachable });

    if (!isConnected && !isInternetReachable) {
      console.log('Internet not connected, existing pull to refresh');
      showNoInternetToast();
      return;
    }

    setIsPullToRefreshing(true);
    dispatch(clearMovies());
    setPageNo(1);
    const moviesList = await getMoviesList(1);
    await delay(500);
    dispatch(initMovies(moviesList?.results || []));
    setIsPullToRefreshing(false);
  };

  const updateMovieList = async () => {
    const { isConnected, isInternetReachable } = await NetInfo.fetch();
    console.log('NetState: ', { isConnected, isInternetReachable });

    if (!movies?.length) {
      const localMovies = await getMoviesFromLocalStorage();
      setLocalSavedMovies(localMovies);
    }

    if (!isConnected && !isInternetReachable) {
      console.log('Internet not connected, existing pull to refresh');
      showNoInternetToast();
      return;
    }

    setLoading(true);
    const moviesList = await getMoviesList(pageNo);
    if (pageNo === 1) {
      savetMoviesToLocalStorage(moviesList?.results);
    }

    if (moviesList?.results?.length) {
      const newMovies = moviesList?.results;
      dispatch(addToMovies(newMovies));
      console.log(`movies: ${pageNo}`, newMovies);
    }

    setLoading(false);
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
        movies={(!movies?.length && !isPullToRefreshing) ? localSavedMovies : movies}
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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { MOVIES_LOCAL_STORED } from './constants';

const storeDataToAsyncStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log('storeDataToAsyncStorage', { key, value });
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('ERROR:storeData', e);
  }
};

const getObjectFromAsyncStorage = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log('getObjectFromAsyncStorage', key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('ERROR:getObjectFromAsyncStorage', e);
    return [];
  }
};

export const savetMoviesToLocalStorage = async (movies) => storeDataToAsyncStorage(MOVIES_LOCAL_STORED, movies);
export const getMoviesFromLocalStorage = async () => getObjectFromAsyncStorage(MOVIES_LOCAL_STORED);

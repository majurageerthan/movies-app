import axios from 'axios';
import { API_MOVIES_URL } from '../../shared/constants';
import { API_KEY } from '../../shared/env';

export const getMoviesList = async (pageNo = 1) => {
  const config = {
    method: 'get',
    url: API_MOVIES_URL,
    params: {
      api_key: API_KEY,
      page: pageNo,
    },
    headers: { },
  };

  try {
    console.log('config', config);
    const response = await axios(config);
    const { data } = response;
    console.log(JSON.stringify(data));
    return data || [];
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    }
    return [];
  }
};

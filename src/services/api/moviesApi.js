import axios from 'axios';

export const getMoviesList = async (pageNo = 1) => {
  const config = {
    method: 'get',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: {
      api_key: '9618b5cf6ae9661f92fff553c697bed4',
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
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    return [];
  }
};

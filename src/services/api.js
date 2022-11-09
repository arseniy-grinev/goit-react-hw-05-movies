import axios from 'axios';

const API_KEY = 'a8bcba5391671092ce877782368f60fd';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTopMovies = async () => {
  const response = await axios.get(
    `trending/movie/week?api_key=${API_KEY}`
  );
  return response.data.results.map(({ id, poster_path, original_title }) => {
    return { id, poster_path, original_title };
  });
};

export const getMovieById = async (id) => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieCastById = async (id) => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieRevievsById = async (id) => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getMoviesByQuery = async (query) => {
  const response = await axios.get(
    
    `/search/movie/?api_key=${API_KEY}&query=${query}&page=1&language=en-US&include_adult=false`
  );
  return response.data.results.map(({ id, poster_path, original_title }) => {
    return { id, poster_path, original_title };
  });
};


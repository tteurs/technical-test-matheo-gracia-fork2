import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

const STATS_ENDPOINTS = {
  HIGHEST_RATED_MOVIES: '/stats/highest_rated_movies',
  YEAR_WITH_MOST_MOVIES: '/stats/year_with_most_movies',
  MOVING_AVERAGE_RATINGS: '/stats/moving_average_ratings',
  TOTAL_MOVIES_BY_GENRE: '/stats/total_movies_by_genre',
  AVERAGE_RATING_BY_YEAR: '/stats/average_rating_by_year',
};

const getMovies = () => api.get('/movies');
const getMovie = (id) => api.get(`/movies/${id}`);
const getStats = (endpoint) => api.get(endpoint);

export {
  getMovies,
  getMovie,
  getStats,
  STATS_ENDPOINTS,
};

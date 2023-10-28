import React, { useEffect, useState } from 'react';
import { getMovies, getStats, STATS_ENDPOINTS } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col , Table , CardBody, CardText, CardTitle, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [highestRatedMovies, setHighestRatedMovies] = useState(null);
  const [yearWithMostMovies, setYearWithMostMovies] = useState(null);
  const [movingAverageRatings, setMovingAverageRatings] = useState(null);
  const [totalMoviesByGenre, setTotalMoviesByGenre] = useState(null);
  const [averageRatingByYear, setAverageRatingByYear] = useState(null);

  useEffect(() => {
    getMovies()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies', error);
      });

    // Fetch statistics for highest-rated movies using the constant
    getStats(STATS_ENDPOINTS.HIGHEST_RATED_MOVIES)
      .then((response) => {
        setHighestRatedMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching highest-rated movies statistics', error);
      });

    // Fetch statistics for the year with the most movies
    getStats(STATS_ENDPOINTS.YEAR_WITH_MOST_MOVIES)
      .then((response) => {
        setYearWithMostMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching year with most movies statistics', error);
      });

    // Fetch statistics for moving average ratings
    getStats(STATS_ENDPOINTS.MOVING_AVERAGE_RATINGS)
      .then((response) => {
        setMovingAverageRatings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching moving average ratings statistics', error);
      });

    // Fetch statistics for total movies by genre
    getStats(STATS_ENDPOINTS.TOTAL_MOVIES_BY_GENRE)
      .then((response) => {
        setTotalMoviesByGenre(response.data);
      })
      .catch((error) => {
        console.error('Error fetching total movies by genre statistics', error);
      });

    // Fetch statistics for average rating by year
    getStats(STATS_ENDPOINTS.AVERAGE_RATING_BY_YEAR)
      .then((response) => {
        setAverageRatingByYear(response.data);
      })
      .catch((error) => {
        console.error('Error fetching average rating by year statistics', error);
      });
  }, []);

  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Container fluid>
      <Row>
      <h1>Movies and statistics</h1>
        <Button variant="primary" as={Link} to="/add-movie">Add a New Movie</Button>

        {highestRatedMovies && (
          <div>
            <h2>Highest rated movies by Genre and Parental Rating</h2>
            <ul>
              {highestRatedMovies.map((item, index) => (
                <li key={index}>
                  {item.genre} - {item.parental_rating}: {item.max_rating}
                </li>
              ))}
            </ul>
          </div>
        )}

      {yearWithMostMovies && yearWithMostMovies.length > 0 ? (
        <div>
          <h2>Year with Most Movies</h2>
          <p>{yearWithMostMovies[0].release_year}</p>
        </div>
      ) : (
        <div>
          <h2>Year with Most Movies</h2>
          <p>No data available</p>
        </div>
      )}


        {movingAverageRatings && (
          <div>
            <h2>Moving Average Ratings</h2>
            <ul>
              {movingAverageRatings.map((item, index) => (
                <li key={index}>
                  {new Date(item.month).toLocaleDateString('en-US', { month: '2-digit' })}: {item.moving_average}
                </li>
              ))}
            </ul>
          </div>
        )}

        {totalMoviesByGenre && (
          <div>
            <h2>Total Movies by Genre</h2>
            <ul>
              {totalMoviesByGenre.map((item, index) => (
                <li key={index}>
                  {item.genre}: {item.movie_count}
                </li>
              ))}
            </ul>
          </div>
        )}

        {averageRatingByYear && (
          <div>
            <h2>Average Rating by Year</h2>
            <ul>
              {averageRatingByYear.map((item, index) => (
                <li key={index}>
                  {parseInt(item.release_year, 10)}: {parseFloat(item.moving_average).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h2>Movies</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                {movie.title} - {movie.rating}
              </li>
            ))}
          </ul>
        </div>
      </Row>
    </Container>
  );
};

export default MovieList;

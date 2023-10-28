import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMovie, deleteMovie, rateMovie } from '../services/api';
import { Button, Card, CardBody, CardText, CardTitle, ListGroup, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userRating, setUserRating] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteMovie(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting the movie', error);
    }
  };

  const handleRatingSubmit = async (rating) => {
    try {
      await rateMovie(id, rating);
      setUserRating(rating);
    } catch (error) {
      console.error('Error submitting movie rating', error);
    }
  }

  useEffect(() => {
    getMovie(id)
      .then((response) => {
        console.log('Fetched movie data:', response.data);
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Card>
          <CardBody>
            <CardTitle>{movie.title}</CardTitle>
            <CardText>
              <ListGroup>
                <ListGroup.Item>Release Date: {movie.release_date}</ListGroup.Item>
                <ListGroup.Item>Genre: {movie.genre}</ListGroup.Item>
                <ListGroup.Item>Runtime: {movie.runtime}</ListGroup.Item>
                <ListGroup.Item>Parental Rating: {movie.parental_rating}</ListGroup.Item>
                <ListGroup.Item>Plot: {movie.plot}</ListGroup.Item>
                <ListGroup.Item>Rating: {movie.rating}</ListGroup.Item>

              <ListGroup.Item>{userRating === null ? (
                <div>
                  <p>Your Rating:</p>
                  <div>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <span
                      key={rating}
                      onClick={() => handleRatingSubmit(rating)}
                    >
                      ★
                    </span>
                  ))}
                  </div>
                </div>
              ) : (
                <p>Your Rating: {userRating} ★</p>
              )}</ListGroup.Item>
              </ListGroup>
              <br />
              <Button variant="secondary" as={Link} to="/">Back</Button>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </CardText>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default MovieDetails;

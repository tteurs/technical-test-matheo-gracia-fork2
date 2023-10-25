import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteMovie(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting the movie', error);
    }
  };

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
    <div>
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.release_date}</p>
      <p>Genre: {movie.genre}</p>
      <p>Runtime: {movie.runtime}</p>
      <p>Parental Rating: {movie.parental_rating}</p>
      <p>Plot: {movie.plot}</p>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MovieDetails;

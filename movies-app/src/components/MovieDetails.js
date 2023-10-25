import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id)
      .then((response) => {
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
    </div>
  );
};

export default MovieDetails;

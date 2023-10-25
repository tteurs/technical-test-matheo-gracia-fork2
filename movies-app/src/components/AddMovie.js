import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../services/api';

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    release_date: '',
    genre: '',
    runtime: '',
    parental_rating: '',
    plot: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(formData)
      .then((response) => {
        console.log('Movie added:', response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Release Date</label>
          <input type="date" name="release_date" value={formData.release_date} onChange={handleChange} required />
        </div>
        <div>
          <label>Genre</label>
          <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />
        </div>
        <div>
          <label>Runtime</label>
          <input type="text" name="runtime" value={formData.runtime} onChange={handleChange} />
        </div>
        <div>
          <label>Parental Rating</label>
          <input type="text" name="parental_rating" value={formData.parental_rating} onChange={handleChange} required />
        </div>
        <div>
          <label>Plot</label>
          <textarea name="plot" value={formData.plot} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;

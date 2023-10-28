import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addMovie } from '../services/api';
import { Button, Card, CardTitle, Form, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Container>
      <Row>
        <Card>
          <CardTitle>Add a New Movie</CardTitle>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date" name="release_date" value={formData.release_date} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Genre</Form.Label>
              <Form.Control type="text" name="genre" value={formData.genre} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Runtime</Form.Label>
              <Form.Control type="text" name="runtime" value={formData.runtime} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Parental Rating</Form.Label>
              <Form.Control type="text" name="parental_rating" value={formData.parental_rating} onChange={handleChange} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plot</Form.Label>
              <Form.Control as="textarea" name="plot" value={formData.plot} onChange={handleChange} required />
            </Form.Group>
            <br />
            <Form.Group>
              <Button variant="success" type="submit">Add Movie</Button>
            </Form.Group>
          </Form>
        </Card>
      </Row>
    </Container>
  );
};

export default AddMovie;

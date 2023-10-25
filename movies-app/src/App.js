import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/add-movie" element={<AddMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

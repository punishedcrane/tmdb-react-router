// src/App.js
import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Popular Movies</h1>
      <MovieList />
    </div>
  );
}

export default App;
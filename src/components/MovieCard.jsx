import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{movie.title}</h3>
          <p className="card-text">{movie.overview.substring(0, 100)}...</p>
          <p className="card-text">
            <small className="text-muted">Rating: {movie.vote_average}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
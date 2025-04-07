import React from 'react';
import "./App.css";

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <div className='movie-info'>
            <p>Genre: {movie.genre}</p>
            <p>Description: {movie.description}</p>
            <p>Rating: {movie.rating}</p>
            </div>
            
        </div>
    );
}; 

export default MovieCard;
// This component is used to display the details of a single movie in a card format.
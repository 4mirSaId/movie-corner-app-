import React from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};


export default MovieList;
// This component is used to display a list of movies using the MovieCard component.
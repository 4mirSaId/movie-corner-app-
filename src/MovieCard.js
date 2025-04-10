import {Link} from 'react-router-dom';
import "./App.css";

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`} className='movie-card-link'>
        <div className='movie-card'>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
            <div className='movie-info'>
            <p>Genre: {movie.genre}</p>
            <p>Description: {movie.description}</p>
            <p>Rating: {movie.rating}</p>
            </div>
            
        </div>
        </Link>
    );
}; 

export default MovieCard;
// This component is used to display the details of a single movie in a card format.
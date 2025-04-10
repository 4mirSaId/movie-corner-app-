import { useParams, Link } from 'react-router-dom';
import "./App.css";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div style={{ margin: "20px 0" }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title={movie.title}
          frameBorder="0"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">
        <button>← Back to Home</button>
      </Link>
    </div>
  );
};

export default MovieDetails;

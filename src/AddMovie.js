import React from "react";

const AddMovie = ({ onAddMovie }) => {

    const [title, setTitle] = React.useState("");
    const [genre, setGenre] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [rating, setRating] = React.useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie({ title, genre, description, rating });
        setTitle("");
        setGenre("");
        setDescription("");
        setRating(0);
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: "20px 0", display: "flex", gap: "10px", flexDirection: "column" }}>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                required
            />
            <button type="submit">Add Movie</button>
        </form>
    );
}; 

export default AddMovie;
// This component is used to add a new movie to the list. It takes a callback function as a prop to handle the addition of the new movie.
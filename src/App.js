import React, {useState} from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import "./App.css";

const App = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Inception',
            image: 'https://resizing.flixster.com/2HAZD3mRXq8DSdsOvBiGf5Kn8HI=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v10_ae.jpg',
            genre: 'Sci-Fi',
            description: 'Dream within a dream',
            rating: 8.8,
        },
        {
            id: 2,
            title: 'The Dark Knight',
            image: 'https://resizing.flixster.com/dJM7TJzf7qEp9NA2Kni0Cug9myc=/206x305/v2/https://resizing.flixster.com/Wg25mLoPWxjcxXzNyaSF4VGgGE4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiNjZiNWFkLWVhNzEtNDRhMC1iNGIwLTFmY2FkNzllNTJlMi5qcGc=',
            genre: 'Action',
            description: 'Batman vs Joker',
            rating: 9.0,
        },
        {
            id: 3,
            title: 'Interstellar',
            image: 'https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
            genre: 'Sci-Fi',
            description: 'Space exploration',
            rating: 8.6,
        },
        {
            id: 4,
            title: 'The Matrix',
            image: "https://resizing.flixster.com/kO9s-jGsOi3YXyHkzVlmO9Z5lzI=/206x305/v2/https://resizing.flixster.com/hTz9Ap43sCkvDiFvCkjmb1IWkUg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2EwMGEwNmQxLTE1MGYtNGQwYS04ZDhlLWQ0MzYwOTQ5M2JlMC5qcGc=",
            genre: 'Sci-Fi',
            description: 'Reality vs simulation',
            rating: 8.7,
        },
        {
            id: 5,
            title: 'Fight Club',
            image: "https://resizing.flixster.com/C9FzmCCRIYz2I-F3T2wZgJqDDzc=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23069_p_v13_au.jpg",
            genre: 'Drama',
            description: 'An underground fight club',
            rating: 8.8,
        },
        {
            id: 6,
            title: 'Pulp Fiction',
            image: 'https://resizing.flixster.com/pLEJGnAJ6581w2D1JwLr_7srp4U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15684_p_v8_ai.jpg',
            genre: 'Crime',
            description: 'Interconnected stories of crime',
            rating: 8.9,
        },
        {
            id: 7,
            title: 'Forrest Gump',
            image: 'https://resizing.flixster.com/zZCVxTj9dWokzMMyqzV63YcNDHk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/3509/3509_aa.jpg',
            genre: 'Drama',
            description: 'Life is like a box of chocolates',
            rating: 8.8,
        },
        {
            id: 8,
            title: 'The Shawshank Redemption',
            image: 'https://resizing.flixster.com/hgcQ8juhhUYQofbQ6wsXfhicb3Y=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_p_v13_ap.jpg',
            genre: 'Drama',
            description: 'Hope and friendship in prison',
            rating: 9.3,
        },
        {
            id: 9,
            title: 'The Godfather',
            image: "https://resizing.flixster.com/aLKvx7GjWgFMOfboq5KNOX1kCCg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6326_p_v13_be.jpg",
            genre: 'Crime',
            description: 'The story of a mafia family',
            rating: 9.2,
        },
        {
            id: 10,
            title: 'The Lord of the Rings: The Return of the King',
            image: 'https://resizing.flixster.com/Vd2FP2g6PXrmzvavxhbw_x5bvl0=/206x305/v2/https://resizing.flixster.com/dgQlkMOdYHaHzqo50dRRr8oPuv8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZkYzRlODUzLWUwMmItNDI5Ny1iYTZjLTU4NzQ4NmU5ODIwZi5qcGc=',
            genre: 'Fantasy',
            description: 'The final battle for Middle-earth',
            rating: 8.9,
        },
    ]);

    const [filterTitle, setFilterTitle] = useState('');
    const [filterRating, setFilterRating] = useState('0');
    const [showAddMovies, setShowAddMovies] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const handleAddMovie = (newMovie) => {
        setMovies([...movies, {...newMovie, id: movies.length + 1}]);
    };

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRating
    )

    return (
        <div className="App">
            
            <h1>Movie Corn</h1>
            <h3>Find your favorite movies</h3>
            <button onClick={ () => setShowFilter(!showFilter) }>
                {showFilter ? "Hide Filter" : "Show Filter"}
            </button>
            { showFilter && (
                <Filter 
                filterTitle={filterTitle} 
                setFilterTitle={setFilterTitle} 
                filterRating={filterRating} 
                setFilterRating={setFilterRating} 
            />
            )}
            <button onClick={() => setShowAddMovies(!showAddMovies)}>
                {showAddMovies ? "Hide Add Movie" : "Show Add Movie"}
            </button>
            { showAddMovies && (
                
                    <AddMovie onAddMovie={handleAddMovie} />
                
                )}
                <MovieList movies={filteredMovies} />
            
        </div>
    );
};

export default App;
import React from "react";
import { useState } from "react";
import './App.css';
import SeachIcon from './search.svg'
import MovieCard from "./MovieCard";
const API_URL = 'https://www.omdbapi.com?apikey=4a3b711b';




const App = () => {

    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();
        setMovies(data.Search);
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for a movie.."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyPress={(event) => { if (event.key === 'Enter') { searchMovies(searchTerm) }}}
                />
                <img
                    src={SeachIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">

                        {movies.map((movie) => (<MovieCard movie={movie} />))}


                    </div>
                ) : (
                    <div className="empty">
                        <h2> No movies found</h2>
                    </div>

                )
            }



        </div>
    );
}
export default App;
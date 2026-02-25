import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import '../styles/home.css';

const OMDBKEY = import.meta.env.VITE_OMDBKEY;

function getFavourites() {
    try {
        const parsed = JSON.parse(localStorage.getItem('favourites') || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export default function Favourites(){
    const [movies, setMovies] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function loadFavourites() {
            const ids = getFavourites();

            if (!ids.length) {
                setMovies([]);
                setloading(false);
                return;
            }

            const favouriteMovies = await Promise.all(
                ids.map(async (movieId) => {
                    const res = await fetch(`http://www.omdbapi.com/?apikey=${OMDBKEY}&i=${movieId}`);
                    return res.json();
                })
            );

            setMovies(favouriteMovies.filter((movie) => movie?.Response !== 'False'));
            setloading(false);
        }

        loadFavourites();
    }, []);

    if(loading){
        return(
            <div style={{width:'70%',height:'20%'}}>
                <h4>Loading...</h4>
            </div>
        )
    }

    return(
        <div>
            <h4>{movies.length ? 'Your favourites' : 'No favourites yet'}</h4>
            <div id="trending-container">
            {movies.map((movie)=>{
                return(
                <div key={movie.imdbID}>
                    <Link key={movie.imdbID} to={`/details/${movie.imdbID}`}>
                        <img src={movie.Poster || poster} className='poster' alt='Movie Poster'/>
                        <p>{movie.Title}</p>
                    </Link>
                </div>
                )
            })}
            </div>
        </div>
    )
}



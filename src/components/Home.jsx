import poster from 'C:\\Users\\brolyne\\Desktop\\programs\\img.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import '../styles/home.css';

const TMDBAPI = import.meta.env.VITE_TMDBAPI || import.meta.env.TMDBAPI;

export default function Home(){
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        async function loadPopularMovies() {
            if (!TMDBAPI) {
                console.error('TMDB API key is missing. Set TMDBAPI/VITE_TMDBAPI in .env');
                return;
            }

            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDBAPI}&language=en-US&page=1`);
                const data = await res.json();
                setPopularMovies((data.results || []).slice(0, 10));
            } catch (error) {
                console.error('Failed to load popular movies:', error);
            }
        }

        loadPopularMovies();
    }, []);

    function search(e){
        if(e.key === 'Enter'){
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    }

    return(
        <>
            <div id="home-body">
                <h2>MovieStore</h2>
                <div id='input-container'>
                    <input type="text" placeholder="Search" onInput={(e)=>setQuery(e.target.value)} onKeyDown={(e)=>search(e)}/>
                </div>
                <button className='favourites-button' onClick={() => navigate('/favourites')}>Favourites</button>
                <h4>Popular Now</h4>
                <div id="trending-container">
                    {popularMovies.map((movie) => (
                        <Link key={movie.id} to={`/search?query=${encodeURIComponent(movie.title)}`}>
                            <img
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : poster}
                                className='poster'
                                alt={`${movie.title} Poster`}
                            />
                            <p>{movie.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

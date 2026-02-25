import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";

const OMDBKEY = import.meta.env.VITE_OMDBKEY;

export default function SerachResults(){

    //get res query
    const [urlParams] = useSearchParams();
    const [query, setQuery] = useState(urlParams.get('query') || '');
    const [movies, setMovies] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        async function search() {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDBKEY}&s=${query}`);
            const data = await res.json();
            setMovies(data.Search);
            setloading(false);
            setMessage(`Search results for '${query}'`);
            if(data.Response=="False"){
                setMessage(`Error: ${data.Error || 'No results found'}`);
            }
        }
        search();
    },[query])

    if(loading){
        return(
            <div style={{width:'70%',height:'20%'}}>
                <h4>Loading...</h4>
            </div>
        )
    }


    return(
        <div>
            <div id='input-container'>
                    <input type="text" placeholder="Search" 
                    //onInput={(e)=>settitle(e.target.value)} 
                    onKeyDown={(e)=>e.key === 'Enter' && setQuery(e.target.value)}/>
            </div>
            <h4>{message}</h4>
            <div id="trending-container">
            {movies &&
                movies.map((movie)=>{
                    return(
                    <div key={movie.imdbID}>
                        <Link key={movie.imdbID} to={`/details/${movie.imdbID}`}>
                            <img src={movie.Poster||poster} className='poster' alt='Movie Poster'/>
                            <p>{movie.Title}</p>
                        </Link>
                    </div>
                    )
                })
            }
            </div>
            {/*
                <div id="trending-container">
                    <Link to={`/details/${1}`}>
                        <img src={poster} className='poster' alt='Movie Poster'/>
                        <p>The Avengers</p>
                    </Link>
                    <div>
                        <img src={poster} className='poster' alt='Movie Poster'/>
                        <p>The Avengers</p>
                    </div>
                    <div>
                        <img src={poster} className='poster' alt='Movie Poster'/>
                        <p>The Avengers</p>
                    </div>
                </div>
                */}
        </div>
    )
}

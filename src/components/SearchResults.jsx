import { Link, useSearchParams } from "react-router-dom"
import poster from 'C:\\Users\\brolyne\\Desktop\\programs\\img.png';
import { useEffect, useState } from "react";

export default function SerachResults(){

    //get res query
    const [urlParams] = useSearchParams();
    const query = urlParams.get('query');
    const [movies, setMovies] = useState(null);
    //console.log(query);
    useEffect(()=>{
        async function search() {
            const res = await fetch(`http://www.omdbapi.com/?apikey=9afcf374&s=${query}`);
            const data = await res.json();
            console.log("data: ",data);
            setMovies(data.Search);
        }
        search();
    },[query])

    return(
        <div>
            <h4>Result for '{query}'</h4>
            <div id="trending-container">
            {movies &&
                movies.map((movie)=>{
                    return(
                    <div>
                        <Link key={movie.imdbID} to={`/details/${movie.imdbID}`}>
                            <img src={movie.Poster} className='poster' alt='Movie Poster'/>
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
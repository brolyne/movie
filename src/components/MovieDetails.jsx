import '../styles/moviedetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import avengers from "C:\\Users\\brolyne\\Desktop\\programs\\avengers.jpg";

export default function MovieDetails(){
    const [movie, setMovie] = useState(null);
    const [loading, setloading] = useState(true)

    const {id} = useParams();
    useEffect(()=>{
            async function search() {
                const res = await fetch(`http://www.omdbapi.com/?apikey=9afcf374&i=${id}`);
                const data = await res.json();
                console.log("data: ",data);
                setMovie(data);
                setloading(false);
            }
            search();
        },[])

        if(loading){
            return(
                <div style={{width:'70%',height:'20%'}}>
                    <h4>Loading...</h4>
                </div>
            )
        }
    return(
        <div id="container">
            <h2>{movie?.Title}</h2>
            <div id='sub-container'>
                <div id='image-container'>
                    <img src={movie?.Poster} alt="Poster"/>
                </div>
                <div id="details-container">
                    <h5>{movie?.Genre}</h5>
                    <h5>Released: {movie?.Released}</h5>
                    <h5>IMDB rating: {movie?.imdbRating}</h5>
                    <h5>{movie?.Rated}</h5>
                    <p id='cast-title'>Cast</p>
                    <p>{movie?.Actors}</p>
                    <div id="mini-container">
                        <p>{movie?.Runtime} </p>
                        <p>{movie?.type}</p>
                    </div>
                    <p>{movie?.Plot}</p>

                </div>
                
            </div>
            <div>
                    
            </div>
        </div>
    )
}
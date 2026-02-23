import '../styles/moviedetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OMDBKEY = import.meta.env.VITE_OMDBKEY || '9afcf374';

function getFavourites() {
    try {
        const parsed = JSON.parse(localStorage.getItem('favourites') || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export default function MovieDetails(){
    const [movie, setMovie] = useState(null);
    const [loading, setloading] = useState(true)
    const [isFavourite, setIsFavourite] = useState(false);

    const {id} = useParams();
    useEffect(()=>{
            async function search() {
                const res = await fetch(`http://www.omdbapi.com/?apikey=${OMDBKEY}&i=${id}`);
                const data = await res.json();
                console.log("data: ",data);
                setMovie(data);
                setIsFavourite(getFavourites().includes(id));
                setloading(false);
            }

            search();
        },[id])

        function addToFavourites() {
            const favourites = getFavourites();
            if (!favourites.includes(id)) {
                localStorage.setItem('favourites', JSON.stringify([...favourites, id]));
            }
            setIsFavourite(true);
        }

        function removeFromFavourites() {
            const favourites = getFavourites();
            localStorage.setItem(
                'favourites',
                JSON.stringify(favourites.filter((movieId) => movieId !== id))
            );
            setIsFavourite(false);
        }

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
                    <h5>Runtime: {movie?.Runtime} </h5>
                    <p id='cast-title'>Cast</p>
                    <p>{movie?.Actors}</p>
                    <div id="mini-container">
        
                        <p>{movie?.type}</p>
                    </div>
                    <p>{movie?.Plot}</p>
                    {isFavourite ? (
                        <button onClick={removeFromFavourites}>Remove from favourites</button>
                    ) : (
                        <button onClick={addToFavourites}>Add to favourites</button>
                    )}
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}

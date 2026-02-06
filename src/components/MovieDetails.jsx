//import '../styles/moviedetails.css';

import avengers from "C:\\Users\\brolyne\\Desktop\\programs\\avengers.jpg";

export default function MovieDetails(){
    return(
        <div id="details-container">
            <h2>The Avengers</h2>
            <div id='sub-container'>
                <div id='image-container'>
                    <img src={avengers} alt="Poster"/>
                </div>
                <div id="details-container">
                    <h5>Adventure, Action, Comedy</h5>
                    <h5>Released: 2016</h5>
                    <h5>IMDB rating: 8.1</h5>
                    <h5>PG 13</h5>
                    <p>Cast</p>
                    <p>Robert Downey jr, MArk Ruffalo, Scarlet Johanson, Chris Hemsworth, Jeremy Rener, Chris Evans, Samuel Jackson</p>
                    <div id="mini-container">
                        <p>2 hrs 36 mins </p>
                        <p>Movie</p>
                    </div>

                </div>
                <div>
                    <p>Earth's mightiest heroes come together in new york to face an extra terestial enemy, Loki Lauffeyson </p>
                </div>
            </div>
        </div>
    )
}
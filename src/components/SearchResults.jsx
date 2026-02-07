import { Link } from "react-router-dom"
import poster from 'C:\\Users\\brolyne\\Desktop\\programs\\img.png';

export default function SerachResults(){

    //get res query
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    console.log(query);

    return(
        <div>
            <h4>Result for '{query}'</h4>
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
        </div>
    )
}
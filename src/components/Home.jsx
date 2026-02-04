
import poster from 'C:\\Users\\brolyne\\Desktop\\programs\\img.png';

import '../styles/home.css';

export default function Home(){

    
    return(
        <>
            <div id="home-body">
                <h2>MovieStore</h2>
                <div id='input-container'>
                    <input type="text" placeholder="Search"/>
                </div>
                <h4>Popular Now</h4>
                <div id="trending-container">
                    <div>
                        <img src={poster} className='poster' alt='Movie Poster'/>
                        <p>The Avengers</p>
                    </div>
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
        </>
    )
}
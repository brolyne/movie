
import poster from 'C:\\Users\\brolyne\\Desktop\\programs\\img.png';
import { Link ,useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../styles/home.css';

export default function Home(){
    const navigate = useNavigate();
    const [query, setQuery] = useState('');


    function search(e){
        //console the key pressed
        
        if(e.key=='Enter'){
           // console.log(e.target.value)
            navigate(`/search?query=${query}`)
        }
    }

    
    return(
        <>
            <div id="home-body">
                <h2>MovieStore</h2>
                <div id='input-container'>
                    <input type="text" placeholder="Search" onInput={(e)=>setQuery(e.target.value)} onKeyDown={(e)=>search(e)}/>
                </div>
                <h4>Popular Now</h4>
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
        </>
    )
}
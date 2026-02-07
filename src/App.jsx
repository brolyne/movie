import { useState } from 'react'

import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SerachResults from './components/SearchResults';

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const id = 1;
  const query = "The Avengers";

  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path= {`/details/:id`} element={<MovieDetails/>}/>
          <Route path={`/search`} element={<SerachResults/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path= {`/details/${id}`} element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

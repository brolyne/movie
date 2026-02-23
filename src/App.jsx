import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import SerachResults from './components/SearchResults';
import Favourites from './components/Favourites';

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path={`/details/:id`} element={<MovieDetails/>}/>
          <Route path={`/search`} element={<SerachResults/>}/>
          <Route path={`/favourites`} element={<Favourites/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

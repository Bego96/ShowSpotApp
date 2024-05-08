import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Movies from './pages/movies';
import { useState } from 'react';
import TVShows from './pages/tvShows';
import CardPage from './components/cardPage';


function App(): JSX.Element {

  const [showNav, setShowNav] = useState(true);

  
  return (
    <div className="App">
      <h1 id="title">Movies and TV Shows Land</h1>
      <div id="mainContainer">
        <BrowserRouter>
        { showNav && <Navbar/>
        }
          <Routes>
            <Route path='/' element={<TVShows setShowNav={setShowNav}/>}/>
            <Route path='/Movies' element={<Movies setShowNav={setShowNav}/>}/>
            <Route path='/:type/:id' element={<CardPage setShowNav={setShowNav}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

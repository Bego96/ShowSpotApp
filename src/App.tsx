import './App.css';
import axios, { AxiosResponse } from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Movies from './pages/movies';
import Search from './components/search';
import { useEffect, useState } from 'react';
import TVShows from './pages/tvShows';
import CardPage from './components/cardPage';


function App(): JSX.Element {

  return (
    <div className="App">
      <h1 id="title">Movies and TV Shows Land</h1>
      <div id="mainContainer">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Movies />}/>
            <Route path='/TVShows' element={<TVShows />}/>
            <Route path='/:type/:id' element={<CardPage />}/>
            <Route path='/:type/:id' element={<CardPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

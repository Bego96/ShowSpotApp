
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Movies from './pages/movies';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <h1 id="title">Movies and TV Shows Land</h1>
      <Navbar/>
      <Search/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

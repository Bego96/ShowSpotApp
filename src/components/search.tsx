import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { useMoviesStore } from "../store/moviesStore";
import { useTVShowsStore } from "../store/tvShowsStore";
import { useLocation } from "react-router-dom";
export default function Search() {
  const location = useLocation();
  console.log(location)

  
  const { setMovies, movies } = useMoviesStore();
  const { setTVShows, tvShows } = useTVShowsStore();
  
  const apikey = process.env.REACT_APP_API_KEY;
  const [value, setValue ] = useState<string>('');

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value;
    setValue(result)
    if (result.length > 3) {
      fetchQueriedTVShowData(value);
      fetchQueriedMoviesData(value);
    } else if (result.length === 0) {
      fetchTVShows();
      fetchMovies();
      console.log("HELLOOO")
      console.log(movies)
    }

    console.log(value.length)
  };

  const fetchTVShows = async () => {
    try {
        const apikey = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}`;

        const response = await axios.get(url);
        const result = response.data.results;
        setTVShows(result);
    } catch (error) {
        console.error('Error fetching TV shows:', error);
    }
};


  const fetchMovies= async () => {
    try {
        const apikey = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`;
        
        const response = await axios.get(url);
        const result = response.data.results;
        setMovies(result);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};



  const fetchQueriedTVShowData = async (value: string) => {
    try {
      const url = `https://api.themoviedb.org/3/search/tv?query=${value}&api_key=${apikey}`;
      const response = await axios.get(url);
      const result = response.data.results;
      setTVShows(result);
    } catch (error) {
      console.error('Error fetching TV shows:', error);
    }
  };
 
  const fetchQueriedMoviesData = async (value: string) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${apikey}`;
      const response = await axios.get(url);
      const result = response.data.results;
      setMovies(result);
    } catch (error) {
      console.error('Error fetching Movies:', error);
    }
  };

  return (
    <div id="searchContainer">
        <input value={value} onChange={onChangeEvent} type="text" id="searchBar" placeholder='Search...'/>
        <IoSearchOutline id="searchIcon" color="white" size={22}/>
    </div>
  );
}

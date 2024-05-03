import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

export interface Video {
    "name": string,
    "type": string
  }

export default function CardPage() {

  const { id, type } = useParams();
    /*
    const [video, setVideo] = useState<Video[]>()
    useEffect(()=> {
  
      const apikey = process.env.REACT_APP_API_KEY
  
      const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apikey}`;
  
      axios.get(url)
             .then((response) => {
              const result = response.data.results;
              setVideo(result);
             })
    },[])*/
  return (
    <div className='cardPageContainer'>
      <Link to={type === 'movie' ? '/' : type === 'tv' ? '/TVShows' : ''}><IoIosArrowRoundBack color='white' size={60}/></Link>
      <p>CARD PAGE {id} TYPE {type}</p></div>
  )
}

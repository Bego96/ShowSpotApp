import React, { useState, useEffect } from 'react'
import axios from 'axios';

interface MovieDetails {
    "overview": string
}
export default function MovieDetails({id, type}:any) {

    const [details, setDetails] = useState<MovieDetails>()


    useEffect(() => {
        const apikey = process.env.REACT_APP_API_KEY;
    
        const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apikey}`;
    
        axios.get(url)
               .then((response) => {
                const result = response.data;
                setDetails(result)
                
               })
    },[])

  return (
    <div className='movieDetails'>
        <p>{details?.overview}</p>
    </div>
  )
}

import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import YouTube, { YouTubeProps } from 'react-youtube';
import MovieDetails from './movieDetails';

export interface Video {
    "key": string,
    "name": string,
    "type": string
  }
  export default function CardPage() {

    const { id, type } = useParams();
      
      const [video, setVideo] = useState<Video | null>(null); 
    
      useEffect(()=> {
    
        const apikey = process.env.REACT_APP_API_KEY;
    
        const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apikey}`;
    
        axios.get(url)
               .then((response) => {
                const result = response.data.results;
                console.log(result)
                const trailer = result.find((trailer:any) => trailer.name === 'Trailer' || 'First');
                if (trailer) {
                  setVideo(trailer); 
                }
               })
      },[id, type]); 
  
      const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts: YouTubeProps['opts'] = {
        height: '780',
        width: '1280',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      return (
        <div className='cardPageContainer'>
          <Link to={type === 'movie' ? '/' : type === 'tv' ? '/TVShows' : ''}><IoIosArrowRoundBack color='white' size={60}/></Link>
          {video && <YouTube videoId={video.key} opts={opts} onReady={onPlayerReady} />}
          <MovieDetails id={id} type={type}/>
        </div>
      )
  }
  
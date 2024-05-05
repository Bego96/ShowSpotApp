import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import YouTube, { YouTubeProps } from 'react-youtube';
import MovieDetails from './movieDetails';

export interface Video {
  key: string;
  name: string;
  type: string;
}

export interface Image {
  poster_path: string;
}

export default function CardPage() {
  const { id, type } = useParams();
  const [video, setVideo] = useState<Video | null>(null);
  const [image, setImage] = useState<Image | null>(null);

  useEffect(() => {
    const apikey = process.env.REACT_APP_API_KEY;

    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apikey}`
        );
        const result = response.data.results;
        const mainTrailer = result.find((trailer: any) => trailer.name.includes('Main Trailer'));
        const teaserTrailer = result.find((trailer: any) => trailer.name.includes('Teaser Trailer'));
        const officalTrailer = result.find((trailer: any) => trailer.name.includes('Official Trailer'));

        setVideo(mainTrailer || teaserTrailer || officalTrailer || null);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${apikey}`
        );
        const result = response.data;
        const posterPath = result.poster_path;
        setImage(posterPath);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchVideo();
    fetchImage();
  }, [id, type]);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    width:
      window.screen.width > 1300
        ? '1280'
        : window.screen.width > 790
        ? '768'
        : window.screen.width > 550
        ? '520'
        : '350',
    height:
      window.screen.height > 1300
        ? '1124'
        : window.screen.width > 790
        ? '660'
        : window.screen.width > 550
        ? '320'
        : '350',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="cardPageContainer">
      <Link to={type === 'movie' ? '/Movies' : type === 'tv' ? '/' : ''}>
        <IoIosArrowRoundBack color="white" size={60} />
      </Link>

      {video ? (
        <YouTube videoId={video.key} opts={opts} />
      ) : (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="Movie Poster" />
        </div>
      )}

      <MovieDetails id={id} type={type} />
    </div>
  );
}

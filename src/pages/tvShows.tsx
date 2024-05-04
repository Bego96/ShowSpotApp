import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card';

export interface TVShow {
    id: number,
    original_title: string,
    original_name:string,
    poster_path: string,
    first_air_date: string,
    overview: string
}

const type = 'tv'

export default function TVShows(): JSX.Element {
    const [data, setData] = useState<TVShow[]>();

    useEffect(() => {
        
        const apikey = process.env.REACT_APP_API_KEY
        const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apikey}`

        axios.get(url)
           .then((response) => {
            const result = response.data.results;
            setData(result);
           })
    }, []);

    
    return (
        <div>
            <div className='container'>
                {data && data ? (
                    data.map(movie => (
                        <Card key={movie.id} id={movie.id} type={type} img={movie.poster_path} title={movie.original_title || movie.original_name} release_date={movie.first_air_date}/>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    )
}

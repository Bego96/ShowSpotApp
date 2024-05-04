import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card';

export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    overview:string,
}

const type = 'movie'

export default function Movies(): JSX.Element {
    const [data, setData] = useState<Movie[]>();

    useEffect(() => {
        const apikey = process.env.REACT_APP_API_KEY
        const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apikey}`

        axios.get(url)
           .then((response) => {
            const result = response.data.results;
            console.log("RESULT " + response)
            setData(result);
           })
    }, []);
    
    return (
        <div>
            <div className='container'>
                {data && data ? (
                    data.map(movie => (
                        <Card key={movie.id} id={movie.id} type={type} img={movie.poster_path} title={movie.title} release_date={movie.release_date}/>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    )
}

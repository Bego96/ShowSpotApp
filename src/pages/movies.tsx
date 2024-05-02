import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Card from '../components/card';

export interface Movies {
    id: number,
    title: string,
    poster_path: string,
    release_date: string
}

export default function Movies(): JSX.Element {
    const [data, setData] = useState<Movies[]>();

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6fb51c4ac0c357764161858cc37260bd')
           .then((response) => {
            const result = response.data.results;
            setData(result);
           })
    }, []);


    return (
        <div>
            <h1>Movies</h1>
            <div className='container'>
                {data && data ? (
                    data.map(movie => (
                        <Card key={movie.id} img={movie.poster_path} title={movie.title} release_date={movie.release_date}/>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    )
}

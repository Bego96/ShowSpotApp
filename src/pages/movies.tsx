import { useEffect } from 'react';
import axios from 'axios';
import Card from '../components/card';
import { useMoviesStore } from '../store/moviesStore';
import Search from '../components/search';

const type = 'movie';

export default function Movies(): JSX.Element {
    const { movies, setMovies } = useMoviesStore((state) => ({
        movies: state.movies,
        type: state.type,
        setMovies: state.setMovies
    }));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apikey = process.env.REACT_APP_API_KEY;
                const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apikey}`;
                
                const response = await axios.get(url);
                const result = response.data.results;
                setMovies(result);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    console.log(movies);

    return (
        <div>
            <Search/>
            <div className='container'>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <Card key={movie.id} id={movie.id} type={type} img={movie.poster_path} title={movie.title} release_date={movie.release_date}/>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    );
}

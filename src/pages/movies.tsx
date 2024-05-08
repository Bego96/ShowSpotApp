import { useEffect} from 'react';
import Card from '../components/card';
import { useMoviesStore } from '../store/moviesStore';
import Search from '../components/search';
import { useSearchStore } from '../store/searchStore';
import { useLayoutEffect } from 'react';

const type = 'movie';

export default function Movies({setShowNav}: any): JSX.Element {

    useLayoutEffect(() => {
        setShowNav(true);
      }, [])

    const { searchPattern} = useSearchStore();
    const { movies, setMovies, fetchMovies, queryMovies } = useMoviesStore((state) => ({
        movies: state.movies,
        type: state.type,
        setMovies: state.setMovies,
        fetchMovies: state.fetchMovies,
        queryMovies: state.queryMovies
    }));
    

    useEffect(() => {

        if (searchPattern) {
            queryMovies(searchPattern)
        } else {
            fetchMovies();
        }

    }, []);

    console.log(movies);

    return (
        <div>
            <Search />
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

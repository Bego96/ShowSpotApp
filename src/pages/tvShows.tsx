import { useEffect } from 'react';
import axios from 'axios';
import Card from '../components/card';
import { useTVShowsStore } from '../store/tvShowsStore';
import Search from '../components/search';

const type = 'tv';

export default function TVShows(): JSX.Element {
    const { tvShows, setTVShows } = useTVShowsStore(
        (state) => ({
            tvShows: state.tvShows,
            type: state.type,
            setTVShows: state.setTVShows
        })
    );
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apikey = process.env.REACT_APP_API_KEY;
                const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apikey}`;

                const response = await axios.get(url);
                const result = response.data.results;
                setTVShows(result);
            } catch (error) {
                console.error('Error fetching TV shows:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
             <Search/>
            <div className='container'>
                {tvShows && tvShows.length > 0 ? (
                    tvShows.map(tvShow => (
                        <Card key={tvShow.id} id={tvShow.id} type={type} img={tvShow.poster_path} title={tvShow.original_title || tvShow.original_name} release_date={tvShow.first_air_date}/>
                    ))
                ) : (
                    <p>No TV shows found</p>
                )}
            </div>
        </div>
    );
}

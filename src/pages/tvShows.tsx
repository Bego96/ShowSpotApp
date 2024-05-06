import { useEffect } from 'react';
import Card from '../components/card';
import { useTVShowsStore } from '../store/tvShowsStore';
import Search from '../components/search';
import { useSearchStore } from '../store/searchStore';

const type = 'tv';

export default function TVShows(): JSX.Element {
    const { searchPattern} = useSearchStore();
    const { tvShows, setTVShows, queryTVShows, fetchTVShows } = useTVShowsStore(
        (state) => ({
            tvShows: state.tvShows,
            type: state.type,
            setTVShows: state.setTVShows,
            queryTVShows: state.queryTVShows,
            fetchTVShows: state.fetchTVShows
        })
    );
    
    useEffect(() => {

        if (searchPattern) {
            queryTVShows(searchPattern);
        } else {
            fetchTVShows();
        }
    
        
    }, []);

    return (
        <div>
            <Search />
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

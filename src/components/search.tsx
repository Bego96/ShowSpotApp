
import { IoSearchOutline } from "react-icons/io5";
import { useMoviesStore } from "../store/moviesStore";
import { useTVShowsStore } from "../store/tvShowsStore";
import { useLocation } from "react-router-dom";
import { useSearchStore } from "../store/searchStore";
export default function Search() {
  const locationParams = useLocation();
  const location = locationParams.pathname;
  const { setSearchPattern, searchPattern } = useSearchStore();
  const { queryTVShows, fetchTVShows} = useTVShowsStore();
  const { queryMovies, fetchMovies} = useMoviesStore();

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value;
    setSearchPattern(result);
    if (result.length > 3) {

      if (location === '/') {
        queryTVShows(result)
      } else if (location === '/Movies') {
        queryMovies(result);
      }
    } else if (result.length < 3) {
      if (location === '/') {
        fetchTVShows();
      } else if (location === '/Movies') {
        fetchMovies();
      }
    }
  };


  return (
    <div id="searchContainer">
        <input value={searchPattern} onChange={onChangeEvent} type="text" id="searchBar" placeholder='Search...'/>
        <IoSearchOutline id="searchIcon" color="white" size={22}/>
    </div>
  );
}

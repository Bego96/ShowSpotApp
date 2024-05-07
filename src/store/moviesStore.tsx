import { create } from "zustand";
import axios from "axios";
import { Movie } from "../interfaces/interfaces";

const apikey = process.env.REACT_APP_API_KEY;

interface MoviesState {
    movies: Movie[];
    type: string;
}

interface MoviesActions {
    setMovies: (movies: Movie[]) => void;
    fetchMovies: () => Promise<void>;
    queryMovies: (value: string) => Promise<void>;
}

export interface MoviesStore extends MoviesState, MoviesActions {}

export const useMoviesStore = create<MoviesStore>((set) => ({
    movies: [],
    type: "movie",
    setMovies: (newMovies) => set({ movies: newMovies }),
    fetchMovies: async () => {
        try {
            const type = "movie"; // or "tv" or whatever type you want
            const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apikey}`;
            const response = await axios.get(url);
            const result = response.data.results;
            const top10 = result.splice(0, 10);
            set({ movies: top10 });
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    },
    queryMovies: async (value: string) => {
        try {
            const url = `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${apikey}`;
            const response = await axios.get(url);
            const result = response.data.results;
            const top10 = result.splice(0, 10);
            set({ movies: top10 });
        } catch (error) {
            console.error("Error fetching Movies:", error);
        }
    }
}));

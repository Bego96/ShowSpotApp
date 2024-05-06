import { create } from "zustand";
import { Movie } from "../interfaces/interfaces";


interface MoviesState {
    movies: Movie[];
    type: string;
}

interface MoviesActions {
    setMovies: (movies: Movie[]) => void;
}

export interface MoviesStore extends MoviesState, MoviesActions {}

export const useMoviesStore = create<MoviesStore>((set) => ({
    movies: [],
    type: "movie",
    setMovies: (newMovies) => set({ movies: newMovies })
}));
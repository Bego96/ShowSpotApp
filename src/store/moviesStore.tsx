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
    setMovies: (newMovies) => set((state: MoviesState) => {
        const filteredMovies = newMovies.filter(newMovie => !state.movies.some(existingMovie => existingMovie.id === newMovie.id));
        return { movies: [...state.movies, ...filteredMovies] };
    })
}));

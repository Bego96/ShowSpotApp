import { create } from "zustand";
import { TVShow } from "../interfaces/interfaces";


interface TVShowsState {
    tvShows: TVShow[];
    type: string;
}

interface TVShowsActions {
    setTVShows: (movies: TVShow[]) => void;
}

export interface TVShowsStore extends TVShowsState, TVShowsActions {}

export const useTVShowsStore = create<TVShowsStore>((set) => ({
    tvShows: [],
    type: "tv",
    setTVShows: (newTVShows) => set((state: TVShowsState) => {
        const filteredTVShows = newTVShows.filter(newTVShow => !state.tvShows.some(existingTVShow => existingTVShow.id === newTVShow.id));
        return { tvShows: [...state.tvShows, ...filteredTVShows] };
    })
}));

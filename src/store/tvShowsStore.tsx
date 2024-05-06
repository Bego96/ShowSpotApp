import { create } from "zustand";
import { TVShow } from "../interfaces/interfaces";
import axios from "axios";
const apikey = process.env.REACT_APP_API_KEY;

interface TVShowsState {
    tvShows: TVShow[];
    type: string;
}

interface TVShowsActions {
    setTVShows: (tvShows: TVShow[]) => void;
    fetchTVShows: () => Promise<void>;
    queryTVShows: (value: string) => Promise<void>;
}

export interface TVShowsStore extends TVShowsState, TVShowsActions {}

export const useTVShowsStore = create<TVShowsStore>((set) => ({
    tvShows: [],
    type: "tv",
    setTVShows: (newTVShows) => set({ tvShows: newTVShows }),
    fetchTVShows: async () => {
        try {
            const type = "tv";
            const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apikey}`;
            const response = await axios.get(url);
            const result = response.data.results;
            set({ tvShows: result });
        } catch (error) {
            console.error("Error fetching TV shows:", error);
        }
    },
    queryTVShows: async (value: string) => {
        try {
            const url = `https://api.themoviedb.org/3/search/tv?query=${value}&api_key=${apikey}`;
            const response = await axios.get(url);
            const result = response.data.results;
            set({ tvShows: result });
        } catch (error) {
            console.error("Error fetching TV shows:", error);
        }
    }
}));

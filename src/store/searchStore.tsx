import { create } from "zustand";


interface SearchStore {
    searchPattern: string,
    setSearchPattern: (newPattern: string) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
    searchPattern: '',
    setSearchPattern: (newPattern) => set({ searchPattern: newPattern })
}));